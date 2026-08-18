// Usage: node scripts/check-path-lengths.mjs
// Fails if any tracked path is long enough to risk the Windows MAX_PATH limit.
// Windows caps a full path at 260 chars, and the clone directory (e.g.
// C:\Users\Owner\my-website\) spends ~25 of those before the repo path starts,
// so a checkout dies well before a repo-relative path reaches 260.
import { execFileSync } from 'node:child_process';

const MAX_PATH_LENGTH = 100;

const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
  .split('\0')
  .filter(Boolean);

const tooLong = files
  .filter((f) => f.length > MAX_PATH_LENGTH)
  .sort((a, b) => b.length - a.length);

if (tooLong.length > 0) {
  console.error(`✗ ${tooLong.length} tracked path(s) over ${MAX_PATH_LENGTH} chars:\n`);
  for (const f of tooLong) console.error(`  ${String(f.length).padStart(3)}  ${f}`);
  console.error('\nRename these to short kebab-case slugs, keeping the extension.');
  console.error('Update every reference, and add a 308 redirect in next.config.ts');
  console.error('if the old path is live in production.');
  process.exit(1);
}

console.log(`✅ All ${files.length} tracked paths are within ${MAX_PATH_LENGTH} chars`);
