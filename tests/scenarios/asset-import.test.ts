import esbuild, { type BuildOptions } from 'esbuild';
import { assertFileContent, buildAbsolutePath, createEsbuildConfig } from '../common/util';

function createConfig(): BuildOptions {
  return createEsbuildConfig({
    platform: 'node',
    format: 'esm',
    outExtension: {
      '.js': '.mjs'
    },
    entryPoints: [buildAbsolutePath('../fixtures/build-in/asset.ts')]
  });
}

describe('Importing assets', () => {
  test('GIVEN an asset import THEN leaves path alone', async () => {
    const config = createConfig();

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/asset.mjs');
  });
});
