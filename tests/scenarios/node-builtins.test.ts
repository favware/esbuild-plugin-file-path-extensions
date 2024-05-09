import esbuild, { type BuildOptions } from 'esbuild';
import { assertFileContent, buildAbsolutePath, createEsbuildConfig } from '../common/util';

function createConfig(platform: 'node' | 'browser'): BuildOptions {
  return createEsbuildConfig({
    platform,
    format: 'esm',
    entryPoints: [buildAbsolutePath('../fixtures/build-in/node.mts')]
  });
}

describe('Node builtins', () => {
  test('GIVEN platform = "browser" THEN adds extensions to builtins', async () => {
    const config = createConfig('browser');

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/node.mjs');
  });

  test('GIVEN platform = "node" THEN does not add extensions to builtins', async () => {
    const config = createConfig('node');

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/node.mjs');
  });
});
