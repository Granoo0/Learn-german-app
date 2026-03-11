import { build } from 'vite';
import fs from 'fs';

async function run() {
  try {
    await build();
  } catch (e) {
    const errObj = {
      message: e.message,
      stack: e.stack,
      frame: e.frame,
      id: e.id,
      plugin: e.plugin
    };
    fs.writeFileSync('error_dump.json', JSON.stringify(errObj, null, 2));
  }
}
run();
