'use strict'

const Table = require('cli-table')
const getTimer = require('./src/factories/timer')
const getCpuMeter = require('./src/factories//cpuMeter')

const startUsage = process.cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage), '*****************************');


function comparePerformance (...testSuites) {
  const table = new Table({
    head: ['Name', 'Time', 'CPU %(Experimetal)', 'RAM %(Experimetal)']
  })

  const result = testSuites.map(function (test) {
    const timer = getTimer()
    const cpuMeter = getCpuMeter()

    cpuMeter.start()
    timer.start()
    test.source()
    cpuMeter.endPretty()
    console.log(cpuMeter)

    return [test.name, timer.endPretty(), cpuMeter.endPretty()]
  })
  table.push(...result)
  console.log(table.toString(), result)
}

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

comparePerformance(
  {name: 'while', source: whileTest},
  {name: 'for', source: forTest},
  {name: 'forEach', source: () => {}}
)

module.exports = comparePerformance
