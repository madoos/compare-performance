'use strict'

const Table = require('cli-table')
const getTimer = require('./src/factories/timer')

function comparePerformance (...testSuites) {


  const table = new Table({
    head: ['Name', 'Time ms', 'CPU %', 'RAM %']
  })

  console.log(table.toString())


  console.log(testSuites)

  //table.push(...values)

}

function whileTest () {
  let i = 10000000000000
  let c = 0
  while (i--) c++
  return c
}

function forTest () {
  let i = 10000000000000
  let c = 0
  for (let j = 0; j <= i; j++) c++
  return c
}

comparePerformance(
  {name: 'while', source: whileTest},
  {name: 'for', source: forTest},
  {name: 'forEach', source: () => {}}
)

module.exports = comparePerformance
