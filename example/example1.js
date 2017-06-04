'use strict'

const comparePerformance = require('../')

function whileTest () {
  let i = 200000000
  let c = 0
  while (i--) c++
  return c
}

function forTest () {
  let i = 20000000
  let c = 0
  for (let j = 0; j <= i; j++) c++
  return c
}

comparePerformance([
  {name: 'while', source: whileTest},
  {name: 'for', source: forTest},
  {name: 'forEach', source: () => {}}
], {loop: 2, args: []})
