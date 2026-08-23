'use strict';
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const target = path.join(root, 'runtime');
const url = process.env.NEWSTATE_CORE_URL || 'https://github.com/Komnsensei/NewState.git';
if (!fs.existsSync(target)) {
  console.log('Cloning', url, '\u2192 runtime/');
  execSync('git clone --depth 1 "' + url + '" "' + target + '"', { stdio: 'inherit', shell: true });
} else {
  console.log('Updating runtime/');
  execSync('git pull origin main', { cwd: target, stdio: 'inherit', shell: true });
}
console.log('Full stack under ./runtime \u2014 cd runtime && npm install && npm test');
