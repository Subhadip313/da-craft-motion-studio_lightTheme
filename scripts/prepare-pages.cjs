const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, '.output', 'public');
const assetsDir = path.join(outDir, 'assets');

if (!fs.existsSync(outDir)) {
  console.error('Missing .output/public. Run the build first.');
  process.exit(1);
}

function getEntry(entries, matcher) {
  const matches = entries.filter((file) => matcher(file));
  return matches.sort()[0] || '';
}

let jsEntry = '';
let cssEntry = '';

if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir).filter((file) => !file.startsWith('.'));
  jsEntry = getEntry(assetFiles, (file) => file.endsWith('.js') && file.startsWith('index-'));
  cssEntry = getEntry(assetFiles, (file) => file.endsWith('.css') && file.startsWith('styles-'));
}

const pageShell = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Da Craft Motion" />
    <title>Da Craft Motion</title>
    ${cssEntry ? `<link rel="stylesheet" href="./assets/${cssEntry}" />` : ''}
    <script type="module" crossorigin src="./assets/${jsEntry || 'index.js'}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), pageShell);

const redirectHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0; url=./" />
    <title>Redirecting...</title>
  </head>
  <body>
    <p>Redirecting...</p>
  </body>
</html>`;

fs.writeFileSync(path.join(outDir, '404.html'), redirectHtml);
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
fs.writeFileSync(path.join(outDir, '_redirects'), '/*    /index.html   200\n');

console.log(`Prepared Pages artifact with js=${jsEntry || 'index.js'} css=${cssEntry || 'n/a'}`);
