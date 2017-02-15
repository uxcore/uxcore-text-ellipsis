## uxcore-text-ellipsis

React text ellipsis

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-text-ellipsis.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-text-ellipsis
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-text-ellipsis.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-text-ellipsis
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-text-ellipsis.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-text-ellipsis?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-text-ellipsis.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-text-ellipsis
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-text-ellipsis.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-text-ellipsis#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-text-ellipsis.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-text-ellipsis.svg
[sauce-url]: https://saucelabs.com/u/uxcore-text-ellipsis


### Development

```sh
git clone https://github.com/uxcore/uxcore-text-ellipsis
cd uxcore-text-ellipsis
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-text-ellipsis
cd uxcore-text-ellipsis
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/text-ellipsis

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 可选值 | 备注 |
| lineLimit | number | false | 1 | 限制文字只显示几行。 |
| text | string | true | '' | 要处理的文字。 |
| className | string | false | '' | 自定义的 className |
| showTooltip | boolean | false | false | 是否显示 tooltip 信息 |
| overlayClassName | string | false | '' | 如果显示 tooltip 信息则可设置 tooltip 样式，否则不生效 |

