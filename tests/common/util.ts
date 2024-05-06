import { Result } from '@sapphire/result';
import type { BuildOptions } from 'esbuild';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { esbuildPluginFilePathExtensions, type PluginOptions } from '../../dist/index.js';

export function createEsbuildConfig(buildOptions: BuildOptions, pluginOptions?: PluginOptions): BuildOptions {
  return {
    platform: 'node',
    ...buildOptions,
    outdir: buildAbsolutePath('../fixtures/build-out'),
    bundle: true,
    plugins: [esbuildPluginFilePathExtensions(pluginOptions)]
  };
}

export async function assertFileContent(filePath: string) {
  const result = await Result.fromAsync(readFile(buildAbsolutePath(filePath), { encoding: `utf-8` }));

  expect(result.isOk()).toBe(true);

  const fileContent = result.unwrap();

  expect(fileContent).toMatchSnapshot();
}

export function buildAbsolutePath(filePath: string) {
  return resolve(__dirname, filePath);
}
