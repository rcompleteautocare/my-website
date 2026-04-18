// Usage: node scripts/seo-audit.mjs
// Override target: BASE_URL=http://localhost:3000 node scripts/seo-audit.mjs
import * as cheerio from 'cheerio';

const BASE_URL = (process.env.BASE_URL || 'https://www.rcompleteautocare.com').replace(/\/$/, '');
const CANONICAL_HOST = 'https://www.rcompleteautocare.com';

const PATHS = [
  '/', '/about', '/contact',
  '/services/diagnostics', '/services/check-engine-light', '/services/electrical-diagnostics',
  '/services/no-start-diagnostics', '/services/engine-repair', '/services/transmission-repair',
  '/services/brake-repair', '/services/suspension-steering', '/services/oil-change-maintenance',
  '/services/ac-heating-repair', '/services/extended-warranty-repair',
  '/auto-repair-crown-point-in', '/auto-repair-st-john-in', '/auto-repair-schererville-in',
  '/auto-repair-merrillville-in', '/auto-repair-cedar-lake-in',
  '/car-overheating-crown-point-in', '/car-wont-start-crown-point-in',
  '/check-engine-light-flashing-crown-point', '/extended-warranty-auto-repair-crown-point-in',
  '/mechanic-near-me-crown-point',
];

const UNIQUE_COPY_PATHS = PATHS.filter(p =>
  p.startsWith('/auto-repair-') || /^\/(car-|check-engine-|mechanic-|extended-warranty-auto)/.test(p)
);

async function fetchPage(path) {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'seo-audit-bot/1.0' } });
    return { ok: res.ok, status: res.status, url: res.url, html: await res.text() };
  } catch (e) { return { ok: false, status: 0, url, html: '', error: e.message }; }
}

function analyze(html) {
  const $ = cheerio.load(html);
  const title = ($('head title').first().text() || '').trim();
  const description = ($('meta[name="description"]').attr('content') || '').trim();
  const robots = ($('meta[name="robots"]').attr('content') || '').trim();
  const canonical = ($('link[rel="canonical"]').attr('href') || '').trim();
  const h1Count = $('h1').length;
  $('script, style, noscript, nav, header, footer, svg').remove();
  const bodyText = $('body').text().replace(/\s+/g, ' ').trim().toLowerCase();
  return { title, description, robots, canonical, h1Count, bodyText };
}

function shingles(text, n = 5) {
  const words = text.split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i <= words.length - n; i++) set.add(words.slice(i, i + n).join(' '));
  return set;
}
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

function scorePage(a) {
  const issues = []; let score = 100;
  if (!a.title) { issues.push('Missing <title>'); score -= 25; }
  else if (a.title.length < 15) { issues.push(`Title short (${a.title.length} chars)`); score -= 10; }
  else if (a.title.length > 65) { issues.push(`Title long (${a.title.length} chars)`); score -= 5; }
  if (!a.description) { issues.push('Missing meta description'); score -= 25; }
  else if (a.description.length < 60) { issues.push(`Description short (${a.description.length} chars)`); score -= 10; }
  else if (a.description.length > 165) { issues.push(`Description long (${a.description.length} chars)`); score -= 5; }
  if (a.robots && /noindex/i.test(a.robots)) { issues.push(`robots contains noindex: "${a.robots}"`); score -= 40; }
  if (!a.canonical) { issues.push('Missing canonical'); score -= 15; }
  else if (!a.canonical.startsWith(CANONICAL_HOST)) { issues.push(`Canonical not on www: ${a.canonical}`); score -= 15; }
  if (a.h1Count === 0) { issues.push('No <h1>'); score -= 10; }
  else if (a.h1Count > 1) { issues.push(`${a.h1Count} <h1> tags (should be 1)`); score -= 5; }
  return { score: Math.max(0, score), issues };
}

(async () => {
  console.log(`\n🔎 Auditing ${PATHS.length} pages on ${BASE_URL}\n`);
  const results = [];
  for (const path of PATHS) {
    process.stdout.write(`  ${path.padEnd(52)} `);
    const r = await fetchPage(path);
    if (!r.ok) { console.log(`❌ ${r.status || 'ERR'} ${r.error || ''}`); results.push({ path, ok: false, status: r.status }); continue; }
    const a = analyze(r.html);
    const s = scorePage(a);
    results.push({ path, ok: true, status: r.status, ...a, ...s });
    console.log(`${r.status}  ${s.score}/100`);
  }

  const titleMap = new Map(), descMap = new Map();
  for (const r of results) {
    if (r.title) titleMap.set(r.title, [...(titleMap.get(r.title) || []), r.path]);
    if (r.description) descMap.set(r.description, [...(descMap.get(r.description) || []), r.path]);
  }
  const dupTitles = [...titleMap.entries()].filter(([, v]) => v.length > 1);
  const dupDescs = [...descMap.entries()].filter(([, v]) => v.length > 1);

  const cmp = results.filter(r => UNIQUE_COPY_PATHS.includes(r.path) && r.bodyText);
  const shMap = new Map(cmp.map(r => [r.path, shingles(r.bodyText)]));
  const pairs = [];
  for (let i = 0; i < cmp.length; i++)
    for (let j = i + 1; j < cmp.length; j++) {
      const sim = jaccard(shMap.get(cmp[i].path), shMap.get(cmp[j].path));
      if (sim > 0.4) pairs.push({ a: cmp[i].path, b: cmp[j].path, sim });
    }
  pairs.sort((x, y) => y.sim - x.sim);

  console.log('\n════════════════ PER-PAGE SCORECARD ════════════════');
  for (const r of results) {
    if (!r.ok) { console.log(`\n${r.path}  [FETCH FAILED: ${r.status}]`); continue; }
    console.log(`\n${r.path}  [${r.score}/100]`);
    console.log(`  title:       ${r.title || '(missing)'} (${r.title?.length || 0})`);
    console.log(`  description: ${(r.description || '(missing)').slice(0, 110)}${r.description?.length > 110 ? '…' : ''} (${r.description?.length || 0})`);
    console.log(`  robots:      ${r.robots || '(none)'}`);
    console.log(`  canonical:   ${r.canonical || '(missing)'}`);
    console.log(`  h1 count:    ${r.h1Count}`);
    r.issues?.forEach(i => console.log(`  ⚠ ${i}`));
  }

  console.log('\n════════════════ UNIQUENESS ════════════════');
  if (!dupTitles.length) console.log('✅ All titles unique'); else dupTitles.forEach(([t, ps]) => console.log(`❌ Duplicate title "${t}" on: ${ps.join(', ')}`));
  if (!dupDescs.length) console.log('✅ All descriptions unique'); else dupDescs.forEach(([d, ps]) => console.log(`❌ Duplicate description on: ${ps.join(', ')}`));

  console.log('\n════════════════ BODY-COPY SIMILARITY (location + problem pages) ════════════════');
  if (!pairs.length) console.log('✅ No page pair over 40% similarity');
  else pairs.forEach(p => console.log(`${(p.sim * 100).toFixed(0)}%  ${p.a}  ↔  ${p.b}`));

  const scored = results.filter(r => r.ok);
  const avg = scored.reduce((s, r) => s + r.score, 0) / (scored.length || 1);
  const failed = results.filter(r => !r.ok).length;
  console.log(`\n════════════════ SUMMARY ════════════════`);
  console.log(`Avg score:       ${avg.toFixed(1)}/100`);
  console.log(`Pages audited:   ${scored.length}/${results.length}`);
  console.log(`Failed to fetch: ${failed}`);
  process.exit(failed > 0 || avg < 90 ? 1 : 0);
})();
