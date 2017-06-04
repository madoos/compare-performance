'use strict'

const comparePerformance = require('../')

function fibonacci (n) {
  let a = 0
  let b = 1
  let f = 1

  for (let i = 2; i <= n; i++) {
    f = a + b
    a = b
    b = f
  }
  return f
};

function fibonacciRecursive (num) {
  return (num <= 1) ? 1 : fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
}

const options = {
  iterations: 10000,
  args: [20]
}

comparePerformance([
  {name: 'fibonacci Recursive', source: fibonacciRecursive},
  {name: 'fibonacci', source: fibonacci}
], options)

