# Changelog

All notable changes to this project will be documented in this file.

# [2.1.0](https://github.com/favware/esbuild-plugin-file-path-extensions/compare/v2.0.0...v2.1.0) - (2024-05-12)

## 🚀 Features

- Handle Directory Imports, Node Builtins (#104) ([103d1b6](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/103d1b61328159c84f99433f201910360f6f9c95))

# [2.0.0](https://github.com/favware/esbuild-plugin-file-path-extensions/compare/v2.0.0...v2.0.0) - (2023-12-03)

## 🏠 Refactor

- Make package itself a module and correct paths ([a146182](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/a146182f9c0901dfdf1855f7e70b282dcc28e4e5))

## 🐛 Bug Fixes

- Filter on whether esbuild is processing import-statement kinds ([f2fe6d1](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/f2fe6d1d6e43be95ad92ff5cf0a849ae25fc123b))
- Add jsx,cjsx,mjsx,tsx,ctsx,mtsx to known extensions that should not be replaced ([d2dc93f](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/d2dc93f1db8aeed2db15e6784274ec07c9a3026e))
- Set correct export mapping in package.json ([6195a4c](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/6195a4cc00da986520cec2dfbd8e5d21f65d30a5))
- Properly default cjs to .cjs as extension ([1aa389a](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/1aa389aebe5009b1c62ce7847d67991d78cb418a))
  - 💥 **BREAKING CHANGE:** Though previously already intended for cjs to get `.cjs`
as file extension, that was never actually properly applied. Because the
CommonJS extension will from this version forward actually properly be
`.cjs` I am releasing this a breaking change in case anyone
expected it to be `.js`. If you want to upgrade and retain `.js` pass
`{ cjsExtension: 'js' }` as options to this plugin.

## 🧪 Testing

- Update snapshots ([ad069d4](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/ad069d4b5b3b78b5141b0d2c62a5c64d8929f5b9))
- Update test snapshots ([1115918](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/1115918c764a5cd0cd7275b4ec9f9f276da6e44f))

# [1.0.0](https://github.com/favware/esbuild-plugin-file-path-extensions/tree/v1.0.0) - (2022-10-16)

## 📝 Documentation

- Add @favna as a contributor ([ba2489d](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/ba2489deafd105bd7eba95248e88144fda068382))
- **readme:** Fix toc links ([a7e157a](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/a7e157ac5dcf18a3a4b8e3b88b63d5d1ff7446e8))

## 🚀 Features

- Add new package code ([3a4eb20](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/3a4eb2047daec08567bb528c2a1debaa32afb81c))

## 🧪 Testing

- Add test code ([f0a984e](https://github.com/favware/esbuild-plugin-file-path-extensions/commit/f0a984e068256070f10422d965a535c87345a3da))

