import esbuild, { type BuildOptions } from 'esbuild';
import { assertFileContent, buildAbsolutePath, createEsbuildConfig } from '../common/util';

function createConfig(): BuildOptions {
  return createEsbuildConfig({
    platform: 'node',
    format: 'esm',
    outExtension: {
      '.js': '.mjs'
    },
    entryPoints: [buildAbsolutePath('../fixtures/build-in/directory-import.mjs')]
  });
}

describe('Importing directories', () => {
  test('GIVEN a directory import THEN appends "index" to path', async () => {
    const config = createConfig();

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/directory-import.mjs');
  });
});
