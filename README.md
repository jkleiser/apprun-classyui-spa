# AppRun and Classy-UI

> This sample repository demonstrates how to build a SPA using [AppRun](https://apprun.js.org) and [Classy-UI](https://classy-ui.io), as well as Webpack, Babel and TypeScript.

> It is based on the [webpack-typescript-babel](https://github.com/a-tarasyuk/webpack-typescript-babel) repo.

## Start webpack-dev-server

```shell
npm start
```

## Building the repo

If you want Classy-UI to shorten all CSS classnames, group media queries and themes, to create a highly optimized bundle, make sure that you have `NODE_ENV=production`. Then you do

```shell
npm run build
```

## Building only types

```shell
npm run build:types
```

## Type-Checking the repo

```shell
npm run type-check
```

### And to run in --watch mode:

```shell
npm run type-check:watch
```

## To refresh/update classy-ui@beta:
```shell
npm install classy-ui@beta
```

## A live version may be tested at [surge.sh](http://apprun-classyui-spa.surge.sh/).
