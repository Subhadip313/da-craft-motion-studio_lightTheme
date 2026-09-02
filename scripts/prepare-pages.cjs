const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'dist', 'client');
const assetsDir = path.join(outDir, 'assets');

if (!fs.existsSync(outDir)) {
  console.error('Missing dist/client. Run the build first.');
  process.exit(1);
}

const shellFile = path.join(outDir, '_shell.html');

function ensureFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

if (fs.existsSync(shellFile)) {
  const shellHtml = fs.readFileSync(shellFile, 'utf8');
  ensureFile(path.join(outDir, 'index.html'), shellHtml);
} else {
  const assetFiles = fs.existsSync(assetsDir)
    ? fs.readdirSync(assetsDir).filter((file) => !file.startsWith('.'))
    : [];

  const jsEntry = assetFiles.find((file) => file.endsWith('.js') && file.startsWith('index-')) || 'index.js';
  const cssEntry = assetFiles.find((file) => file.endsWith('.css') && file.startsWith('styles-')) || '';

  const pageShell = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Da Craft Motion" />
    <title>Da Craft Motion</title>
    ${cssEntry ? `<link rel="stylesheet" href="./assets/${cssEntry}" />` : ''}
    <script type="module" crossorigin src="./assets/${jsEntry}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

  ensureFile(path.join(outDir, 'index.html'), pageShell);
}

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

ensureFile(path.join(outDir, '404.html'), redirectHtml);
ensureFile(path.join(outDir, '.nojekyll'), '');
ensureFile(path.join(outDir, '_redirects'), '/*    /index.html   200\n');

console.log(`Prepared GitHub Pages artifact in ${outDir}`);
