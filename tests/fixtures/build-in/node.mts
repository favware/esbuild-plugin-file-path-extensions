import assert from 'assert';
import fs from 'node:fs';
import fsp from 'node:fs/promises';

assert(true);
fs.readdirSync('.');
void fsp.readdir('.');
