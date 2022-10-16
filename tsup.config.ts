import { defineConfig } from 'tsup';
import { esbuildPluginFilePathExtensions } from './src';
import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'es2021',
  tsconfig: 'src/tsconfig.json',
  keepNames: true,
  treeshake: true,
  esbuildPlugins: [esbuildPluginFilePathExtensions(), esbuildPluginVersionInjector()]
});
