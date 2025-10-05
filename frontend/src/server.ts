import 'zone.js/node';
import express from 'express';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import bootstrap from './main.server.js';
import { renderApplication } from '@angular/platform-server';

// Resolve __dirname in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(__dirname, 'browser');

// Serve static files from browser build output
app.use(express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', async (req, res, next) => {
  try {
    // Load index.html contents as string
    const document = readFileSync(join(DIST_FOLDER, 'index.html'), 'utf8');

    const html = await renderApplication(bootstrap, {
      document,
      url: req.originalUrl
    });

    res.status(200).send(html);
  } catch (err) {
    console.error('SSR render error:', err);
    next(err);
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`✅ Angular Universal server running on http://localhost:${PORT}`);
});
