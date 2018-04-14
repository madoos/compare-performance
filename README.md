[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

# madoos-compare-performance

_Gets information about execution speed of code._

## Getting Started

To install:

    npm i --save madoos-compare-performance

In your project:

```javascript
const comparePerformance = require("madoos-compare-performance")

function whileTest() {
  let i = 1000000 //million
  let c = 0
  while (i--) c++
  return c
}

function forTest() {
  let i = 1000000 //million
  let c = 0
  for (let j = 0; j <= i; j++) c++
  return c
}

comparePerformance([
  { name: "while (million iterations)", source: whileTest },
  { name: "for (million iterations)", source: forTest }
])

/*
=> Show report in console and return description
[
  {
    name: 'while (million iterations)',
    iterations: 1,
    time: 2,
    memory: 2352,
    source: [Function: whileTest],
    args: [],
    humanTime: '2ms',
    humanMemory: '2.35 kB'
  },
  {
    name: 'for (million iterations)',
    iterations: 1,
    time: 5,
    memory: 1000,
    source: [Function: forTest],
    args: [],
    humanTime: '5ms',
    humanMemory: '1 kB'
  }
]
*/
```

In console:

![example 1](https://raw.githubusercontent.com/madoos/compare-performance/develop/resources/example1.png)

Example whit automatic iteration

```javascript
const comparePerformance = require("madoos-compare-performance")

function fibonacci(n) {
  let a = 0
  let b = 1
  let f = 1

  for (let i = 2; i <= n; i++) {
    f = a + b
    a = b
    b = f
  }
  return f
}

function fibonacciRecursive(num) {
  return num <= 1
    ? 1
    : fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
}

const options = {
  iterations: 10000,
  args: [20]
}

comparePerformance(
  [
    { name: "fibonacci Recursive", source: fibonacciRecursive },
    { name: "fibonacci", source: fibonacci }
  ],
  options
)

/*
=> Show report in console and return description

[
  {
    name: 'fibonacci Recursive',
    iterations: 10000,
    time: 6696,
    memory: 1342976,
    source: [Function],
    args: [ 20 ],
    humanTime: '6.7s',
    humanMemory: '1.34 MB'
  },
  { name: 'fibonacci',
    iterations: 10000,
    time: 109,
    memory: 338552,
    source: [Function],
    args: [ 20 ],
    humanTime: '109ms',
    humanMemory: '339 kB'
  }
]
*/
```

In console:

![example 1](https://raw.githubusercontent.com/madoos/compare-performance/develop/resources/example2.png)

## Function interface

`comparePerformance([testDefinition<Object>, ...], options<Object(Optional)>)`

## Test Definition

| key    | type     | description                                               |
| ------ | -------- | --------------------------------------------------------- |
| name   | String   | Function to execute                                       |
| source | Function | Arguments to be passed each time the function is executed |

## Options

| key        | type   | description                                               |
| ---------- | ------ | --------------------------------------------------------- |
| iterations | Number | Number of iterations applied to the function              |
| args       | Array  | Arguments to be passed each time the function is executed |

## npm scripts

* `tes`
* `cover`
* `lint`
* `serve:coverage`
* `serve:linter`
* `demon:cover`
* `demon:lint`
* `demon:serve:coverage`

[npm-image]: https://badge.fury.io/js/madoos-compare-performance.svg
[npm-url]: https://npmjs.org/package/madoos-compare-performance
[travis-image]: https://travis-ci.org/madoos/compare-performance.svg?branch=develop
[travis-url]: https://travis-ci.org/compare-performance
[daviddm-image]: https://david-dm.org/madoos/compare-performance.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/madoos/compare-performance
[coveralls-image]: https://coveralls.io/repos/madoos/compare-performance/badge.svg
[coveralls-url]: https://coveralls.io/r/madoos/compare-performance
