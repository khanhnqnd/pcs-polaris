
# pcs-polaris

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]


This repo is the wrapper of the polaris library

It is simple React admin template following [**Polaris UI components**](https://polaris.shopify.com/components/)

## Create project in the first time
```bash
npm init -y
```

or

```bash
yarn init -y
```

## Add pcs library:

```bash
npm install pcs-polaris --save-dev
```

or

```bash
yarn add -D pcs-polaris
```

## Generate project source code:

Generate React repository

```bash
npx pcs-polaris create
```

or

```bash
yarn pcs-polaris create
```

## Run project:

### Option 1: Run project in Docker
```bash
docker compose up -d
```

### Option 2: Run project in local machine

1. Install packages
```bash
npm install
```

or

```bash
yarn install
```

2. Start development


```bash
npm run start
```

or

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
