import esbuild, { type BuildOptions } from 'esbuild';
import type { PluginOptions } from '../../dist';
import { assertFileContent, buildAbsolutePath, createEsbuildConfig } from '../common/util';

function createConfig(pluginOptions?: PluginOptions): BuildOptions {
  return createEsbuildConfig(
    {
      format: 'cjs',
      outExtension: {
        '.js': '.cjs'
      },
      entryPoints: [buildAbsolutePath('../fixtures/build-in/javascript.cjs')]
    },
    pluginOptions
  );
}

describe('JS based CJS', () => {
  test('GIVEN no plugin options THEN adds js as file extension', async () => {
    const config = createConfig();

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/javascript.cjs');
  });

  test('GIVEN cjsExtension = "cjs" THEN uses cjs as file extension', async () => {
    const config = createConfig({
      cjsExtension: 'cjs'
    });

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/javascript.cjs');
  });
});
