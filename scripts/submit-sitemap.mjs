import { createServer } from 'node:http';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { google } from 'googleapis';

const DEFAULT_TOKEN_PATH = './.searchconsole-token.json';
const SCOPES = ['https://www.googleapis.com/auth/webmasters'];

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const [keyPart, valuePart] = arg.slice(2).split('=');
      const key = keyPart;

      if (valuePart !== undefined) {
        parsed[key] = valuePart;
        continue;
      }

      const next = args[i + 1];
      if (next && !next.startsWith('--')) {
        parsed[key] = next;
        i += 1;
      } else {
        parsed[key] = 'true';
      }
    }
  }

  return parsed;
}

function readEnvLocal(name) {
  try {
    const text = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
    for (const line of text.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && m[1] === name) return m[2].replace(/^['"]|['"]$/g, '').trim();
    }
  } catch {
    // no .env.local, or file unreadable
  }
  return undefined;
}

function resolveConfig() {
  const args = parseArgs();
  const siteUrl = args.siteUrl || process.env.SITE_URL || readEnvLocal('SITE_URL');
  const sitemapPath = args.sitemapPath || process.env.SITEMAP_PATH || readEnvLocal('SITEMAP_PATH');
  const clientSecretPath = args.clientSecretPath || process.env.CLIENT_SECRET_PATH || readEnvLocal('CLIENT_SECRET_PATH');
  const clientSecretJson = args.clientSecretJson || process.env.GOOGLE_CLIENT_SECRET_JSON || readEnvLocal('GOOGLE_CLIENT_SECRET_JSON');
  const tokenPath = args.tokenPath || process.env.OAUTH2_TOKEN_PATH || readEnvLocal('OAUTH2_TOKEN_PATH') || DEFAULT_TOKEN_PATH;

  return { siteUrl, sitemapPath, clientSecretPath, clientSecretJson, tokenPath };
}

function loadJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    throw new Error(`Unable to read or parse JSON from ${path}: ${error.message}`);
  }
}

function loadClientSecret({ clientSecretPath, clientSecretJson }) {
  if (clientSecretJson) {
    try {
      return JSON.parse(clientSecretJson);
    } catch (error) {
      throw new Error(`GOOGLE_CLIENT_SECRET_JSON is not valid JSON: ${error.message}`);
    }
  }

  if (clientSecretPath) {
    return loadJson(clientSecretPath);
  }

  throw new Error('No OAuth client secret provided. Set --clientSecretPath, CLIENT_SECRET_PATH, or GOOGLE_CLIENT_SECRET_JSON.');
}

function getClientSecretPayload(secretJson) {
  const payload = secretJson.installed || secretJson.web;
  if (!payload) {
    throw new Error('OAuth client secret JSON must contain an installed or web object.');
  }
  const clientId = payload.client_id;
  const clientSecret = payload.client_secret;
  const redirectUris = payload.redirect_uris;

  if (!clientId || !clientSecret || !Array.isArray(redirectUris) || redirectUris.length === 0) {
    throw new Error('OAuth client secret JSON is missing client_id, client_secret, or redirect_uris.');
  }

  return { clientId, clientSecret, redirectUris };
}

function normalizeUrl(value, fallback) {
  if (!value) return fallback;
  if (value.startsWith('sc-domain:')) {
    return value.replace(/\/+$/, '');
  }
  return value.endsWith('/') ? value : `${value}/`;
}

function resolveSiteUrl(rawSiteUrl) {
  const defaultSite = 'sc-domain:rcompleteautocare.com';
  if (!rawSiteUrl || !rawSiteUrl.trim()) return defaultSite;

  const trimmed = rawSiteUrl.trim();
  if (trimmed.toLowerCase().startsWith('sc-domain:')) {
    return trimmed.replace(/\/+$/, '');
  }

  const lower = trimmed.toLowerCase();
  if (lower === 'rcompleteautocare.com') {
    return defaultSite;
  }

  if (/^https?:\/\/www\.rcompleteautocare\.com\/?$/.test(lower) ||
      /^https?:\/\/rcompleteautocare\.com\/?$/.test(lower)) {
    return normalizeUrl(trimmed, 'https://www.rcompleteautocare.com/');
  }

  return normalizeUrl(trimmed, trimmed);
}

async function openBrowser(url) {
  const opener = process.platform === 'darwin'
    ? 'open'
    : process.platform === 'win32'
      ? 'start'
      : 'xdg-open';

  return new Promise((resolve, reject) => {
    execFile(opener, [url], (error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

async function getAccessToken({ clientId, clientSecret, tokenPath }) {
  if (existsSync(tokenPath)) {
    try {
      const token = JSON.parse(readFileSync(tokenPath, 'utf8'));
      const client = new google.auth.OAuth2(clientId, clientSecret);
      client.setCredentials(token);
      return client;
    } catch (error) {
      console.warn(`Warning: failed to read token cache at ${tokenPath}: ${error.message}`);
    }
  }

  const server = createServer();
  await new Promise((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => resolve());
    server.on('error', reject);
  });

  const address = server.address();
  if (!address || typeof address !== 'object' || !address.port) {
    server.close();
    throw new Error('Failed to allocate a local port for OAuth callback.');
  }

  const redirectUri = `http://127.0.0.1:${address.port}/callback`;
  const authClient = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  const authUrl = authClient.generateAuthUrl({
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: SCOPES,
  });

  const authCode = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      server.close();
      reject(new Error('Timed out waiting for OAuth2 authorization response.'));
    }, 120000);

    server.on('request', (req, res) => {
      if (!req.url) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid request');
        return;
      }

      const url = new URL(req.url, `http://127.0.0.1:${address.port}`);
      if (url.pathname !== '/callback') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
        return;
      }

      const code = url.searchParams.get('code');
      const error = url.searchParams.get('error');

      if (code) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Authentication successful</h1><p>You may close this window.</p>');
        clearTimeout(timeout);
        server.close();
        resolve(code);
        return;
      }

      if (error) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end('<h1>Authentication failed</h1><p>Please close this window and retry.</p>');
        clearTimeout(timeout);
        server.close();
        reject(new Error(`OAuth2 error: ${error}`));
        return;
      }

      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Missing code parameter.');
    });

    (async () => {
      try {
        await openBrowser(authUrl);
      } catch {
        console.log('Open your browser and visit the authorization URL displayed by this script.');
        console.log(authUrl);
      }
    })();
  });

  const { tokens } = await authClient.getToken(authCode);
  authClient.setCredentials(tokens);
  writeFileSync(tokenPath, JSON.stringify(tokens, null, 2), { mode: 0o600 });
  console.log(`Saved OAuth2 token to ${tokenPath}.`);
  return authClient;
}

async function main() {
  const config = resolveConfig();
  const siteUrlRaw = (config.siteUrl || 'sc-domain:rcompleteautocare.com').trim();
  const sitemapPath = (config.sitemapPath || '/sitemap.xml').trim();

  const clientSecret = loadClientSecret(config);
  const { clientId, clientSecret: clientSecretValue } = getClientSecretPayload(clientSecret);
  const tokenPath = config.tokenPath;

  const authClient = await getAccessToken({ clientId, clientSecret: clientSecretValue, tokenPath });

  const normalizedSiteUrl = resolveSiteUrl(siteUrlRaw);
  const normalizedSitemapPath = sitemapPath.startsWith('/') ? sitemapPath : `/${sitemapPath}`;
  const sitemapUrl = sitemapPath.startsWith('http://') || sitemapPath.startsWith('https://')
    ? sitemapPath
    : `https://www.rcompleteautocare.com${normalizedSitemapPath}`;

  console.log(`Submitting sitemap ${sitemapUrl} for Search Console property ${normalizedSiteUrl}`);

  const webmasters = google.webmasters({ version: 'v3', auth: authClient });

  try {
    const response = await webmasters.sitemaps.submit({
      siteUrl: normalizedSiteUrl,
      feedpath: sitemapUrl,
    });

    console.log('Success: sitemap submitted.');
    console.log('Response status:', response.status);
    if (response.data) {
      console.log('Response data:', JSON.stringify(response.data, null, 2));
    }
  } catch (error) {
    console.error('Sitemap submission failed.');
    if (error?.response?.data) {
      console.error('API response:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message || error);
    }
    process.exit(1);
  }
}

main();
