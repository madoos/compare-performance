'use strict'

const comparePerformance = require('../')

function whileTest () {
  let i = 1000000
  let c = 0
  while (i--) c++
  return c
}

function forTest () {
  let i = 1000000
  let c = 0
  for (let j = 0; j <= i; j++) c++
  return c
}

comparePerformance([
  {name: 'while (million iteration)', source: whileTest},
  {name: 'for (million iteration)', source: forTest}
])
