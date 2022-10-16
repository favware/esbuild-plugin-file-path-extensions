<div align="center">

# esbuild-plugin-file-path-extensions

**An esbuild plugin to automatically insert file extensions in your built
JavaScript files based on the specified target**

[![GitHub](https://img.shields.io/github/license/favware/esbuild-plugin-file-path-extensions)](https://github.com/favware/esbuild-plugin-file-path-extensions/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/esbuild-plugin-file-path-extensions?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/esbuild-plugin-file-path-extensions)

</div>

**Table of Contents**

- [esbuild-plugin-file-path-extensions](#esbuild-plugin-file-path-extensions)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
    - [With `esbuild`](#with-esbuild)
    - [With `tsup`](#with-tsup)
  - [Options](#options)
  - [Buy us some doughnuts](#buy-us-some-doughnuts)
  - [Contributors ✨](#contributors-)

## Description

In order to properly and fully support packaging your code for both CJS and ESM
when using esbuild you will want to ensure that all your imports and exports are
using their respective file extensions (i.e. `.js` for CJS and `.mjs` for ESM)
to ensure that NodeJS can always load the appropriate files when they are within
the same folder. However, managing this manually is an absolute nightmare and
annoyance to do in the source code. This plugin alleviates that issue by
automatically appending the file path extensions when building the code.

## Installation

You can use the following command to install this package, or replace
`npm install -D` with your package manager of choice.

```sh
npm install -D esbuild-plugin-file-path-extensions
```

## Usage

> **Warning** When using this plugin you **_HAVE_** to set the `bundle` option
> to true for file paths to be resolved correctly. Do note however then when
> doing this your code will NOT bundle all into 1 file. An example of where this
> plugin is used and what the output will be after it is used can be found at
> [sapphiredev/framework][framework]

> **Note** If you import a file and append a file one of the file extensions
> `js`, `cjs`, `mjs`, `ts`, `cts`, or `mts` then this plugin will skip that
> import and use the originally provided extension. This is to ensure that no
> double file extensions are added.

### With [`esbuild`][esbuild]

Add the plugin to your esbuild options, i.e.:

```js
const esbuild = require('esbuild');
const { resolve } = require('path');
const {
  esbuildPluginFilePathExtensions
} = require('esbuild-plugin-file-path-extensions');

await esbuild.build({
  format: 'cjs',
  entryPoints: [resolve(__dirname, './src/index.ts')],
  outdir: resolve(__dirname, './dist'),
  bundle: true,
  plugins: [esbuildPluginFilePathExtensions()]
});
```

### With [`tsup`][tsup]

Add the plugin to your `tsup.config.ts`, i.e.:

```js
import { defineConfig } from 'tsup';
import { resolve } from 'path';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';

await defineConfig({
  format: ['cjs', 'esm'],
  entry: ['src/**/*.ts'],
  outDir: './dist',
  bundle: true,
  esbuildPlugins: [esbuildPluginFilePathExtensions()]
});
```

[esbuild]: https://esbuild.github.io/
[tsup]: https://tsup.egoist.dev

## Options

The plugin accepts the following options:

- `esm`: Boolean, whether the current build is for ESM or not. Defaults to
  `build.initialOptions?.define?.TSUP_FORMAT === '"esm"'` in order to account
  for the cross-target capabilities of `tsup`.

- `cjsExtension`: The extension to apply for CJS code. Defaults to `js`. Make
  sure to **NOT** start with a leading `.`.

- `esmExtension`: The extension to apply for ESM code. Defaults to `mjs`. Make
  sure to **NOT** start with a leading `.`.

- `filter`: This is an advanced use-case option with which you can filter which
  files esbuild should apply this plugin on

- `namespace`: This is an advanced use-case option through which the
  [esbuild namespace](https://esbuild.github.io/plugins/#namespaces) can be
  configured

## Buy us some doughnuts

Favware projects are and always will be open source, even if we don't get
donations. That being said, we know there are amazing people who may still want
to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Ko-fi, Paypal, Patreon, GitHub Sponsorships, and
various cryptocurrencies. You can use the buttons below to donate through your
method of choice.

|   Donate With   |                      Address                      |
| :-------------: | :-----------------------------------------------: |
|      Ko-fi      |  [Click Here](https://donate.favware.tech/kofi)   |
|     Patreon     | [Click Here](https://donate.favware.tech/patreon) |
|     PayPal      | [Click Here](https://donate.favware.tech/paypal)  |
| GitHub Sponsors |  [Click Here](https://github.com/sponsors/Favna)  |
|     Bitcoin     |       `1E643TNif2MTh75rugepmXuq35Tck4TnE5`        |
|    Ethereum     |   `0xF653F666903cd8739030D2721bF01095896F5D6E`    |
|    LiteCoin     |       `LZHvBkaJqKJRa8N7Dyu41Jd1PDBAofCik6`        |

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/favware/esbuild-plugin-file-path-extensions/commits?author=favna" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

[framework]: https://github.com/sapphiredev/framework
