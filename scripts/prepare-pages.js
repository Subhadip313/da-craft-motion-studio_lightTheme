const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, '.output', 'public');
const htmlEntry = path.join(outDir, 'index.html');

if (!fs.existsSync(outDir)) {
  console.error('Missing .output/public. Run the build first.');
  process.exit(1);
}

if (!fs.existsSync(htmlEntry)) {
  const fallback = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0; url=./index.html" />
    <title>Redirecting...</title>
  </head>
  <body>
    <p>Redirecting...</p>
  </body>
</html>`;

  fs.writeFileSync(htmlEntry, fallback);
  console.log('Created fallback index.html in .output/public');
}

const files = [
  '.nojekyll',
  '404.html',
  '_redirects',
];

for (const file of files) {
  const target = path.join(outDir, file);
  if (!fs.existsSync(target)) {
    if (file === '.nojekyll') {
      fs.writeFileSync(target, '');
    } else if (file === '404.html') {
      fs.writeFileSync(target, `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="0; url=./index.html" />
    <title>Redirecting...</title>
  </head>
  <body>
    <p>Redirecting...</p>
  </body>
</html>`);
    } else {
      fs.writeFileSync(target, '/*    /index.html   200\n');
    }
  }
}
