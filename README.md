# rollup-plugin-html-literals
A Rollup plugin to minify html template literals

![Actions](https://github.com/jleeson/rollup-plugin-html-literals/workflows/build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jleeson/rollup-plugin-html-literals/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/patreon-donate-green.svg)](https://www.patreon.com/outwalkstudios)

---

## Usage

```js
import template from "rollup-plugin-html-literals";

export default {
    input: "index.js",
    output: { file: "dist/index.js", format: "esm" },
    plugins: [ template() ]
};
```

This will minify any template literal that is tagged with `html`.

NOTICE: This plugin should be used before transpiling.

---

## Options

### include

Type: `array` or `string`
Default: `[]`

A single file, or array of files to include when minifying.

### exclude

Type: `array` or `string`
Default: `[]`

A single file, or array of files to exclude when minifying.

### failOnError,

Type: `boolean`
Default: `false`

If true, will throw an error if any errors were found.

### options

Type: `Object`
Default: `null`

Specify options for [minify-html-literals](https://www.npmjs.com/package/minify-html-literals)

### minifyHTMLLiterals

Type: `function`
Default: `null`

Override the minification function.

---

## Why

Projects such as `lit-html` make use of template literals, and in order to decrease bundle size,
you need to minify the html markup you write in those template literals. The current solution for rollup, appears to be
`rollup-plugin-minify-html-literals` but this plugin does not support Rollup 2, and instead is built to support Rollup v0.
This plugin acts to solve the compatiblity issue, support newer versions of Rollup and maintain active support.

---

## Reporting Issues

If you are having trouble getting something to work with this plugin or run into any problems, you can create a new [Issue](https://github.com/jleeson/rollup-plugin-html-literals/issues).

If this plugin does not fit your needs or is missing a feature you would like to see, let us know! We would greatly appreciate your feedback on it.

---

## License

rollup-plugin-html-literals is licensed under the terms of the [**MIT**](https://github.com/jleeson/rollup-plugin-html-literals/blob/master/LICENSE) license.

