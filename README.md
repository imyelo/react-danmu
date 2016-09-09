# react-danmu
---

React Danmu Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-danmu.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-danmu
[travis-image]: https://img.shields.io/travis/react-component/danmu.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/danmu
[coveralls-image]: https://img.shields.io/coveralls/react-component/danmu.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/danmu?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/danmu.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/danmu
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/react-danmu.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-danmu


## Screenshots

<img src="" width="288"/>


## Development

```
npm install
npm start
```

## Example

http://localhost:3020/examples/


online example: http://imyelo.github.io/react-danmu/


## install


[![react-danmu](https://nodei.co/npm/react-danmu.png)](https://npmjs.org/package/react-danmu)


## Usage

```js
var Danmu = require('react-danmu');
var React = require('react');
var messages = [{
  content: '666666'
}]
React.render(<Danmu messages={ messages } />, container);
```

## API

### props of <Danmu />

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>width</td>
          <td>Number</td>
          <td>640</td>
          <td>width of screen (px)</td>
        </tr>
        <tr>
          <td>height</td>
          <td>Number</td>
          <td>480</td>
          <td>height of screen (px)</td>
        </tr>
        <tr>
          <td>messages</td>
          <td>Array(Object)</td>
          <td></td>
          <td>messages list</td>
        </tr>
    </tbody>
</table>


### props of <Message />

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>content</td>
          <td>String</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>speed</td>
          <td>Number</td>
          <td>1</td>
          <td></td>
        </tr>
        <tr>
          <td>y</td>
          <td>Number</td>
          <td>0</td>
          <td>offset y</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td>1</td>
          <td></td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>'#fff'</td>
          <td>hex</td>
        </tr>
    </tbody>
</table>

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

react-danmu is released under the MIT license.
