'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const target = path.join(root, 'runtime');
const url = process.env.NEWSTATE_CORE_URL || 'https://github.com/Komnsensei/NewState.git';

// Pin the default source so a packaged checkout can be reproduced. Update this
// SHA deliberately when the standalone NewState source of truth advances.
const DEFAULT_CORE_SHA = 'e9e4f9798e5f899bb23e420e25814a9ff3e74e11';
const ref = process.env.NEWSTATE_CORE_REF || DEFAULT_CORE_SHA;

function runGit(args, cwd, capture = false) {
  const options = { cwd, stdio: capture ? 'pipe' : 'inherit' };
  if (capture) options.encoding = 'utf8';
  const output = execFileSync('git', args, options);
  return capture ? String(output).trim() : '';
}

function normalizeRemote(value) {
  return value.trim().replace(/\.git$/i, '').replace(/\/+$/, '').toLowerCase();
}

function fail(message) {
  console.error('NewState sync refused: ' + message);
  process.exitCode = 1;
}

function main() {
  if (!/^https:\/\//i.test(url)) {
    return fail('NEWSTATE_CORE_URL must use HTTPS.');
  }
  if (!/^(?:[0-9a-f]{40}|[A-Za-z0-9._/-]+)$/i.test(ref) || ref.startsWith('-')) {
    return fail('NEWSTATE_CORE_REF must be a full 40-character SHA or a simple Git ref.');
  }

  if (!fs.existsSync(target)) {
    console.log('Cloning NewState into runtime/ without checking out a moving branch...');
    execFileSync('git', ['clone', '--no-checkout', '--filter=blob:none', url, target], { stdio: 'inherit' });
  } else if (!fs.existsSync(path.join(target, '.git'))) {
    return fail('runtime/ already exists but is not a Git checkout. Move it aside manually; nothing was overwritten.');
  }

  const actualRemote = runGit(['remote', 'get-url', 'origin'], target, true);
  if (normalizeRemote(actualRemote) !== normalizeRemote(url)) {
    return fail('runtime/ origin does not match NEWSTATE_CORE_URL. Review the checkout before changing its remote.');
  }

  const dirty = runGit(['status', '--porcelain'], target, true);
  if (dirty) {
    return fail('runtime/ has local changes. Commit or preserve them before synchronizing; nothing was checked out.');
  }

  console.log('Fetching requested NewState ref: ' + ref);
  runGit(['fetch', '--depth', '1', 'origin', ref], target);

  const fetched = runGit(['rev-parse', 'FETCH_HEAD'], target, true);
  if (/^[0-9a-f]{40}$/i.test(ref) && fetched.toLowerCase() !== ref.toLowerCase()) {
    return fail('fetched commit ' + fetched + ' does not match pinned SHA ' + ref);
  }

  runGit(['checkout', '--detach', 'FETCH_HEAD'], target);
  const resolved = runGit(['rev-parse', 'HEAD'], target, true);
  console.log('NewState runtime pinned at ' + resolved);
  console.log('Next: cd runtime && npm ci && npm test');
}

try {
  main();
} catch (error) {
  console.error('NewState sync failed: ' + (error && error.message ? error.message : String(error)));
  process.exitCode = 1;
}
