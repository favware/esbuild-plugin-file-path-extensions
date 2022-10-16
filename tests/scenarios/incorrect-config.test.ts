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

describe('Incorrect Config', () => {
  test('GIVEN incorrect filter THEN warns and uses all filter', async () => {
    const warnMock = vi.fn().mockImplementation((text) => text);
    const originalWarn = console.warn;

    console.warn = warnMock;

    const config = createConfig({
      // @ts-ignore testing incorrect config
      filter: 42
    });

    await esbuild.build(config);

    await assertFileContent('../fixtures/build-out/typescript.mjs');
    expect(warnMock).toHaveBeenCalledOnce();

    console.warn = originalWarn;
  });
});
