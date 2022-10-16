import esbuild, { type BuildOptions } from 'esbuild';
import type { PluginOptions } from '../../dist';
import { assertFileContent, buildAbsolutePath, createEsbuildConfig } from '../common/util';

function createConfig(pluginOptions?: PluginOptions): BuildOptions {
  return createEsbuildConfig(
    {
      format: 'esm',
      outExtension: {
        '.js': '.mjs'
      },
      entryPoints: [buildAbsolutePath('../fixtures/build-in/typescript.mts')]
    },
    pluginOptions
  );
}

describe('TS based ESM', () => {
  test('GIVEN no plugin options THEN adds mjs as file extension', async () => {
    const config = createConfig();

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/typescript.mjs');
  });

  test('GIVEN esmExtension = "js" THEN uses js as file extension', async () => {
    const config = createConfig({
      esmExtension: 'js'
    });

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/typescript.mjs');
  });
});
