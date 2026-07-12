import { repairGuides } from '../lib/repair-guides';
import { warrantyProviders } from '../lib/warranty-providers';

const baseUrl = 'https://www.rcompleteautocare.com';

const core = [
  baseUrl,
  `${baseUrl}/about`,
  `${baseUrl}/contact`,
  `${baseUrl}/book`,
  `${baseUrl}/inspection-checklist`,
  `${baseUrl}/services/diagnostics`,
  `${baseUrl}/services/check-engine-light`,
  `${baseUrl}/services/electrical-diagnostics`,
  `${baseUrl}/services/no-start-diagnostics`,
  `${baseUrl}/services/engine-repair`,
  `${baseUrl}/services/transmission-repair`,
  `${baseUrl}/services/brake-repair`,
  `${baseUrl}/services/suspension-steering`,
  `${baseUrl}/services/oil-change-maintenance`,
  `${baseUrl}/services/ac-heating-repair`,
  `${baseUrl}/services/extended-warranty-repair`,
  `${baseUrl}/auto-repair-crown-point-in`,
  `${baseUrl}/auto-repair-st-john-in`,
  `${baseUrl}/auto-repair-schererville-in`,
  `${baseUrl}/auto-repair-merrillville-in`,
  `${baseUrl}/auto-repair-cedar-lake-in`,
  `${baseUrl}/car-overheating-crown-point-in`,
  `${baseUrl}/car-wont-start-crown-point-in`,
  `${baseUrl}/check-engine-light-flashing-crown-point`,
  `${baseUrl}/transmission-slipping-crown-point-in`,
  `${baseUrl}/extended-warranty-auto-repair-crown-point-in`,
  `${baseUrl}/mechanic-near-me-crown-point`,
];

const resources = [
  `${baseUrl}/repair-guides`,
  ...Object.keys(repairGuides).map((slug) => `${baseUrl}/repair-guides/${slug}`),
  `${baseUrl}/warranty-resources`,
  ...Object.keys(warrantyProviders).map((slug) => `${baseUrl}/warranty-resources/${slug}`),
];

const all = [...core, ...resources];

function validate(urls: string[]) {
  const seen = new Map<string, number>();
  const bad: string[] = [];
  for (const u of urls) {
    seen.set(u, (seen.get(u) || 0) + 1);
    if (!u.startsWith(baseUrl)) bad.push(u);
    if (u.includes(' ')) bad.push(u);
  }
  const dup = [...seen.entries()].filter(([, c]) => c > 1);
  return { dup, bad };
}

const { dup, bad } = validate(all);

console.log(`Total URLs: ${all.length}`);
if (dup.length) {
  console.log('\nDuplicate URLs:');
  for (const [u, c] of dup) console.log(`  ${u}  (${c} times)`);
} else console.log('\nNo duplicate URLs found.');

if (bad.length) {
  console.log('\nMalformed or unexpected URLs:');
  for (const b of bad) console.log(`  ${b}`);
} else console.log('\nNo malformed URLs found.');

console.log('\nSample of sitemap URLs:');
for (const u of all.slice(0, 200)) console.log(`  ${u}`);

process.exit(0);
