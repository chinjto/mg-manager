import { defineConfig } from "cypress";
import fs from 'fs';
import path from 'path';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        clearScreenshots() {
          const dir = path.join(__dirname, 'cypress', 'screenshots');
          if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true, force: true });
          }
          return null;
        },
      });
    },
    baseUrl: 'http://localhost:4200'
  },
});
