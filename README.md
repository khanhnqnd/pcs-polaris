
# pcs-polaris

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]


This repo is the wrapper of the polaris library

It is simple React admin template.

[**Components**](https://polaris.shopify.com/components/)

## Installation:

```bash
npm install pcs-polaris --save-dev
```

or

```bash
yarn add -D pcs-polaris
```

## Usage :

Generate React repository
```bash
yarn pcs-polaris create
```

Add `scripts` to your packages.json:

```js
"start": "vite --config=vite.config.ts",
"build": "vite build --config=vite.config.ts",
"lint": "eslint \"{**/*,*}.{js,ts,jsx,tsx}\"",
"test": "jest --config jestconfig.json"

```

Run project
```bash
yarn start
```

[npm-url]: https://www.npmjs.com/package/pcs-polaris
[npm-image]: https://img.shields.io/npm/v/pcs-polaris
[github-license]: https://img.shields.io/github/license/khanhnqnd/pcs-polaris
[github-license-url]: https://github.com/khanhnqnd/pcs-polaris/blob/main/LICENSE
[github-build]: https://github.com/khanhnqnd/pcs-polaris/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/khanhnqnd/pcs-polaris/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/pcs-polaris
