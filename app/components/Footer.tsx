import Link from "next/link";

// Brand logos aren't part of lucide-react (it ships no social/brand marks),
// so we use inline SVGs (viewBox 0 0 24 24, fill currentColor) for each profile.
const SOCIALS: { label: string; href: string; path: string }[] = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@r.complete.auto.c",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCYw967Mku6eZQBC-7jaVSYA",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  },
  {
    label: "X",
    href: "https://x.com/rcompleteac",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rcompleteautocare",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03Zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162ZM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/RCompleteAutoCare",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#aaa", fontSize: "13px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", fontSize: "16px", marginBottom: "12px" }}>R Complete Auto Care</div>
          <div style={{ lineHeight: 1.8 }}>
            1305 E Summit St<br />
            Crown Point, IN 46307<br />
            <a href="tel:2192622711" style={{ color: "#e63946" }}>(219) 262-2711</a><br />
            <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#aaa" }}>Owner@rcompleteautocare.com</a>
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
            {SOCIALS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: "#aaa", display: "inline-flex" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>Services</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              ["Check Engine Light", "/services/check-engine-light"],
              ["Engine Repair", "/services/engine-repair"],
              ["Transmission Repair", "/services/transmission-repair"],
              ["Brake Repair", "/services/brake-repair"],
              ["Oil Change", "/services/oil-change-maintenance"],
              ["Extended Warranty", "/services/extended-warranty-repair"],
            ].map(([name, href]) => (
              <Link key={href} href={href} style={{ color: "#aaa", textDecoration: "none" }}>{name}</Link>
            ))}
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>Serving</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              ["Crown Point, IN", "/auto-repair-crown-point-in"],
              ["St. John, IN", "/auto-repair-st-john-in"],
              ["Schererville, IN", "/auto-repair-schererville-in"],
              ["Merrillville, IN", "/auto-repair-merrillville-in"],
              ["Cedar Lake, IN", "/auto-repair-cedar-lake-in"],
            ].map(([name, href]) => (
              <Link key={href} href={href} style={{ color: "#aaa", textDecoration: "none" }}>{name}</Link>
            ))}
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>Hours</div>
          <div style={{ lineHeight: 1.8 }}>
            Mon–Fri: 8:00 AM – 6:00 PM<br />
            Saturday: 8:00 AM – 2:00 PM<br />
            Sunday: Closed
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #222", textAlign: "center", padding: "16px 24px" }}>
        © {new Date().getFullYear()} R Complete Auto Care · Crown Point, IN · All rights reserved.
      </div>
    </footer>
  );
}