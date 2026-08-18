#!/usr/bin/env python3
"""
check-sitemap-coverage.py — sitemap coverage checker for the R Complete Auto Care site.

Why this exists
---------------
`app/sitemap.ts` is **hand-maintained** (see AGENTS.md). Every time a new route
folder is added under `app/`, someone has to remember to add it to the sitemap.
This script closes that gap: it walks `app/` for real, static, indexable routes
and verifies each one is present in `app/sitemap.ts` — expanding the pages that
the sitemap generates from `lib/` arrays (Honda / make / model pages) so those
don't show up as false positives.

It reports two things:
  1. MISSING  — a route folder exists on disk but is not in the sitemap.
                (This is the common mistake and the reason this script exists.)
  2. STALE    — a *literal* sitemap URL that has no matching folder on disk.
                (Catches typos and deleted pages. Best-effort: only checked
                against literal `${baseUrl}/...` entries, never lib-generated
                or dynamic ones.)

It is intentionally dependency-free (Python 3 standard library only) — no venv,
no pip install. Run it with plain `python`.

Usage
-----
    python scripts/check-sitemap-coverage.py            # human-readable report
    python scripts/check-sitemap-coverage.py --json     # machine-readable
    python scripts/check-sitemap-coverage.py --strict   # also fail on STALE
    python scripts/check-sitemap-coverage.py --quiet     # only print problems

Exit codes
----------
    0  everything covered (STALE entries only warn, unless --strict)
    1  one or more MISSING routes (or STALE with --strict)
    2  could not locate the repo / sitemap (setup problem)

Wire it into package.json if you like, e.g.:
    "check:sitemap": "python scripts/check-sitemap-coverage.py"
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuration — edit these to match intentional decisions.
# ---------------------------------------------------------------------------

# Top-level route folders that are deliberately kept OUT of the sitemap
# (admin, auth, form-utility, and no-index confirmation pages). These are
# reported separately as "excluded (configured)" instead of as failures.
# Add or remove entries here as the site evolves.
EXCLUDED_ROUTES = {
    "api",              # route handlers, not indexable pages
    "command-center",   # authenticated admin dashboard
    "login",            # auth page
    "thank-you",        # post-submit confirmation (no-index)
    "vehicle-information",  # interactive form utility page
}

# Folder-name prefixes that never correspond to a public URL segment and are
# skipped entirely when walking app/ (Next.js App Router conventions).
#   "["  dynamic segment: [slug], [...catchall]  -> generated from lib data
#   "("  route group:     (marketing)            -> not part of the URL
#   "_"  private folder:  _components            -> not routable
#   "@"  parallel route:  @modal                 -> not a standalone URL
SKIP_SEGMENT_PREFIXES = ("[", "(", "_", "@")

# Non-route folders that can appear inside app/ but hold shared code, not pages.
SKIP_FOLDER_NAMES = {"components"}

# Files that mark a folder as a real, rendered page (route handlers like
# route.ts are intentionally NOT counted — they aren't sitemap pages).
PAGE_FILES = ("page.tsx", "page.jsx", "page.ts", "page.js")


# ---------------------------------------------------------------------------
# Repo discovery
# ---------------------------------------------------------------------------

def find_repo_root(start: Path) -> Path | None:
    """Walk upward from `start` looking for a folder that contains app/sitemap.ts."""
    for candidate in [start, *start.parents]:
        if (candidate / "app" / "sitemap.ts").is_file():
            return candidate
    return None


# ---------------------------------------------------------------------------
# Disk side: enumerate real static route folders
# ---------------------------------------------------------------------------

def discover_disk_routes(app_dir: Path) -> list[str]:
    """Return sorted URL paths (e.g. '/services/brake-repair') for every folder
    under app/ that contains a page file and isn't skipped/dynamic."""
    routes: set[str] = set()

    # The homepage: app/page.tsx -> "/"
    if any((app_dir / f).is_file() for f in PAGE_FILES):
        routes.add("/")

    for dirpath, dirnames, filenames in os.walk(app_dir):
        rel = Path(dirpath).relative_to(app_dir)
        segments = rel.parts

        # Prune this whole branch if any segment is skippable. Editing dirnames
        # in place stops os.walk from descending into pruned children too.
        if _segment_is_skippable(rel.name) if segments else False:
            dirnames[:] = []
            continue

        # Also prune skippable children so we never descend into them.
        dirnames[:] = [d for d in dirnames if not _segment_is_skippable(d)]

        if not segments:
            continue  # app/ root handled above

        if any(seg for seg in segments if _segment_is_skippable(seg)):
            continue

        if any(f in filenames for f in PAGE_FILES):
            routes.add("/" + "/".join(segments))

    return sorted(routes)


def _segment_is_skippable(name: str) -> bool:
    if not name:
        return False
    if name in SKIP_FOLDER_NAMES:
        return True
    return name.startswith(SKIP_SEGMENT_PREFIXES)


def top_level_of(url_path: str) -> str:
    """'/services/brake-repair' -> 'services'; '/' -> '' ."""
    stripped = url_path.strip("/")
    return stripped.split("/", 1)[0] if stripped else ""


# ---------------------------------------------------------------------------
# Sitemap side: parse literal entries + expand lib-generated pages
# ---------------------------------------------------------------------------

BASEURL_LITERAL = re.compile(r"`\$\{baseUrl\}(/[^`$]*)?`")
BARE_BASEURL = re.compile(r"\burl:\s*baseUrl\b")
IMPORT_RE = re.compile(
    r'import\s*\{([^}]*)\}\s*from\s*["\']@/lib/([\w./-]+)["\']'
)
SPREAD_MAP_RE = re.compile(r"\.\.\.(\w+)\.map\(")
OBJECT_KEYS_MAP_RE = re.compile(r"Object\.keys\((\w+)\)\.map\(")
SLUG_FIELD_RE = re.compile(r'slug:\s*["\']([^"\']+)["\']')


def parse_sitemap(sitemap_text: str, lib_dir: Path):
    """Return (covered_paths, literal_paths).

    covered_paths  — every URL path the sitemap emits (literals + lib-expanded).
    literal_paths  — only the hand-written literal entries (used for the STALE
                     reverse check, which must not flag generated pages).
    """
    literal_paths: set[str] = set()

    # Bare `url: baseUrl` -> homepage.
    if BARE_BASEURL.search(sitemap_text):
        literal_paths.add("/")

    for m in BASEURL_LITERAL.finditer(sitemap_text):
        suffix = m.group(1)
        if suffix is None or suffix == "/":
            literal_paths.add("/")
        else:
            literal_paths.add(suffix.rstrip("/") or "/")

    covered_paths: set[str] = set(literal_paths)

    # Map imported names -> resolved lib file, so we can expand generated pages.
    name_to_libfile: dict[str, Path] = {}
    for imp in IMPORT_RE.finditer(sitemap_text):
        names = [n.strip() for n in imp.group(1).split(",") if n.strip()]
        module = imp.group(2)
        resolved = _resolve_lib_file(lib_dir, module)
        if resolved:
            for name in names:
                name_to_libfile[name] = resolved

    # Expand `...NAME.map(...)` spreads (Honda / make / model pages).
    for m in SPREAD_MAP_RE.finditer(sitemap_text):
        name = m.group(1)
        libfile = name_to_libfile.get(name)
        if not libfile:
            continue
        prefix = _emitted_prefix(sitemap_text, m.end())
        for slug in _extract_slugs(libfile):
            covered_paths.add(_join(prefix, slug))

    # Expand `Object.keys(NAME).map(...)` (repair guides / warranty providers).
    for m in OBJECT_KEYS_MAP_RE.finditer(sitemap_text):
        name = m.group(1)
        libfile = name_to_libfile.get(name)
        if not libfile:
            continue
        prefix = _emitted_prefix(sitemap_text, m.end())
        for key in _extract_object_keys(libfile, name):
            covered_paths.add(_join(prefix, key))

    return covered_paths, literal_paths


def _resolve_lib_file(lib_dir: Path, module: str) -> Path | None:
    for ext in (".ts", ".tsx", ".js", ".jsx"):
        candidate = lib_dir / f"{module}{ext}"
        if candidate.is_file():
            return candidate
    # Support "@/lib/foo/index"
    for ext in (".ts", ".tsx", ".js", ".jsx"):
        candidate = lib_dir / module / f"index{ext}"
        if candidate.is_file():
            return candidate
    return None


def _emitted_prefix(text: str, from_pos: int) -> str:
    """Given the position right after a `.map(`, find the template URL it emits
    and return the static path segment between baseUrl and the interpolation.

    `${baseUrl}/${page.slug}`            -> "/"
    `${baseUrl}/repair-guides/${slug}`   -> "/repair-guides/"
    """
    window = text[from_pos:from_pos + 400]
    tmpl = re.search(r"`\$\{baseUrl\}(/[^`$]*)?\$\{", window)
    if not tmpl:
        return "/"
    return tmpl.group(1) or "/"


def _join(prefix: str, slug: str) -> str:
    path = prefix.rstrip("/") + "/" + slug.strip("/")
    return re.sub(r"/{2,}", "/", "/" + path.strip("/"))


def _extract_slugs(libfile: Path) -> list[str]:
    text = libfile.read_text(encoding="utf-8", errors="replace")
    return SLUG_FIELD_RE.findall(text)


def _extract_object_keys(libfile: Path, const_name: str) -> list[str]:
    """Best-effort extraction of top-level keys of an exported record object,
    e.g. `export const repairGuides = { "brake-noise": {...}, ... }`."""
    text = libfile.read_text(encoding="utf-8", errors="replace")
    start = re.search(
        rf"export\s+const\s+{re.escape(const_name)}\s*[:=][^{{]*\{{", text
    )
    if not start:
        return []
    # Find the matching closing brace for the object literal.
    i = text.index("{", start.start())
    depth = 0
    end = len(text)
    for j in range(i, len(text)):
        c = text[j]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                end = j
                break
    body = text[i + 1:end]
    keys: list[str] = []
    # Only depth-1 keys: track nesting so nested object keys aren't captured.
    depth = 0
    for line in body.splitlines():
        # Count braces before scanning for a key on this line.
        if depth == 0:
            km = re.match(r'\s*["\']?([A-Za-z0-9_-]+)["\']?\s*:', line)
            if km:
                keys.append(km.group(1))
        depth += line.count("{") - line.count("}")
    return keys


# ---------------------------------------------------------------------------
# Reporting
# ---------------------------------------------------------------------------

class C:
    """ANSI colors, disabled when not a TTY or NO_COLOR is set."""
    enabled = sys.stdout.isatty() and os.environ.get("NO_COLOR") is None

    @classmethod
    def _w(cls, code: str, s: str) -> str:
        return f"\033[{code}m{s}\033[0m" if cls.enabled else s

    @classmethod
    def red(cls, s):    return cls._w("31", s)
    @classmethod
    def green(cls, s):  return cls._w("32", s)
    @classmethod
    def yellow(cls, s): return cls._w("33", s)
    @classmethod
    def cyan(cls, s):   return cls._w("36", s)
    @classmethod
    def dim(cls, s):    return cls._w("2", s)
    @classmethod
    def bold(cls, s):   return cls._w("1", s)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Verify every app/ route is present in app/sitemap.ts."
    )
    parser.add_argument("--json", action="store_true", help="emit JSON instead of text")
    parser.add_argument("--strict", action="store_true", help="also fail (exit 1) on STALE entries")
    parser.add_argument("--quiet", action="store_true", help="only print problems, not the OK lines")
    parser.add_argument("--root", type=Path, default=None, help="repo root (default: auto-detect)")
    args = parser.parse_args()

    # On Windows, enable ANSI escape processing in the console.
    if os.name == "nt":
        os.system("")

    start = args.root.resolve() if args.root else Path(__file__).resolve().parent
    repo = find_repo_root(start)
    if repo is None:
        print(C.red("error: could not find app/sitemap.ts (is this the repo?)"), file=sys.stderr)
        return 2

    app_dir = repo / "app"
    lib_dir = repo / "lib"
    sitemap_file = app_dir / "sitemap.ts"

    disk_routes = discover_disk_routes(app_dir)
    covered, literal = parse_sitemap(
        sitemap_file.read_text(encoding="utf-8", errors="replace"), lib_dir
    )

    # MISSING: on disk, not covered, not deliberately excluded.
    missing = [
        r for r in disk_routes
        if r not in covered and top_level_of(r) not in EXCLUDED_ROUTES
    ]
    excluded_present = [
        r for r in disk_routes if top_level_of(r) in EXCLUDED_ROUTES
    ]

    # STALE: a literal sitemap entry with no folder on disk. Skip "/" and any
    # entry whose folder is dynamic (handled via lib data, not a static folder).
    disk_set = set(disk_routes)
    disk_top = {top_level_of(r) for r in disk_routes}
    stale = sorted(
        p for p in literal
        if p != "/" and p not in disk_set and top_level_of(p) not in disk_top
    )

    if args.json:
        print(json.dumps({
            "repo": str(repo),
            "diskRouteCount": len(disk_routes),
            "coveredCount": len(covered),
            "missing": missing,
            "stale": stale,
            "excluded": sorted(excluded_present),
        }, indent=2))
    else:
        _print_text_report(disk_routes, covered, missing, stale,
                           excluded_present, args.quiet)

    if missing:
        return 1
    if stale and args.strict:
        return 1
    return 0


def _print_text_report(disk_routes, covered, missing, stale, excluded, quiet):
    print(C.bold("Sitemap coverage check"))
    print(C.dim(f"  {len(disk_routes)} route folders on disk · "
                f"{len(covered)} URLs covered by sitemap.ts"))
    print()

    if missing:
        print(C.red(C.bold(f"✗ {len(missing)} route(s) MISSING from app/sitemap.ts:")))
        for r in missing:
            print(C.red(f"    {r}"))
        print(C.dim("    → add each to the `core`/`resources` array in app/sitemap.ts "
                    "with a lastModified date."))
        print()
    elif not quiet:
        print(C.green("✓ Every indexable route folder is in the sitemap."))
        print()

    if stale:
        print(C.yellow(C.bold(f"! {len(stale)} literal sitemap URL(s) with no folder on disk:")))
        for p in stale:
            print(C.yellow(f"    {p}"))
        print(C.dim("    → typo, moved, or deleted page? Verify these entries "
                    "(or a redirect covers them)."))
        print()

    if excluded and not quiet:
        print(C.cyan(f"· {len(excluded)} route(s) excluded by config (not treated as errors):"))
        for r in excluded:
            print(C.dim(f"    {r}"))
        print(C.dim("    → edit EXCLUDED_ROUTES at the top of this script to change."))
        print()

    if not missing and not stale and not quiet:
        print(C.green(C.bold("All good. 🎉")))


if __name__ == "__main__":
    sys.exit(main())
