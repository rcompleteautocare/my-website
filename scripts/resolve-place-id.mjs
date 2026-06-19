// Usage: PLACES_API_KEY=xxx npm run resolve-place-id
//   or:  PLACES_API_KEY=xxx node scripts/resolve-place-id.mjs
// Override the search: PLACE_QUERY="..." npm run resolve-place-id
//
// One-time lookup of our Google Place ID (resource name for Places API New).
// Reads PLACES_API_KEY from the shell env, falling back to .env.local.
// Confirm the printed address matches, then paste the id into lib/place.js
// as PLACE_ID (replacing the placeholder).
import { readFileSync } from 'node:fs';

const DEFAULT_QUERY = 'R Complete Auto Care 1305 E Summit St Crown Point IN 46307';
const EXPECTED_ADDRESS_PARTS = ['1305 E Summit St', 'Crown Point'];

function readEnvLocal(name) {
  try {
    const text = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
    for (const line of text.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && m[1] === name) return m[2].replace(/^["']|["']$/g, '').trim();
    }
  } catch {
    // no .env.local — that's fine
  }
  return undefined;
}

async function main() {
  const apiKey = process.env.PLACES_API_KEY || readEnvLocal('PLACES_API_KEY');
  if (!apiKey) {
    console.error('Error: PLACES_API_KEY is not set (shell env or .env.local).');
    console.error('Create a Places API (New) key in Google Cloud, then re-run.');
    process.exit(1);
  }

  const textQuery = process.env.PLACE_QUERY || DEFAULT_QUERY;

  let res;
  try {
    res = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ textQuery }),
    });
  } catch (e) {
    console.error('Request failed:', e.message);
    process.exit(1);
  }

  if (!res.ok) {
    console.error(`Places API error ${res.status}:`, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  const place = data?.places?.[0];
  if (!place?.id) {
    console.error('No place found for query:', textQuery);
    console.error('Raw response:', JSON.stringify(data, null, 2));
    process.exit(1);
  }

  const name = place.displayName?.text || place.displayName || '(no name)';
  const address = place.formattedAddress || '(no address)';
  const addressOk = EXPECTED_ADDRESS_PARTS.every((part) => address.includes(part));

  console.log('');
  console.log('  Name:     ', name);
  console.log('  Address:  ', address, addressOk ? '✓ matches' : '⚠ DOES NOT MATCH expected address');
  console.log('  Place ID: ', place.id);
  console.log('');

  if (!addressOk) {
    console.error('Address mismatch — do NOT paste this ID until the address is confirmed.');
    process.exit(1);
  }

  console.log(`Next: set PLACE_ID = '${place.id}' in lib/place.js (remove the placeholder).`);
}

main();
