import { rm } from 'node:fs/promises';

const distDir = new URL('../tests/build-out/', import.meta.url);

const options = { force: true, recursive: true };

await Promise.all([rm(distDir, options)]);
