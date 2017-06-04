'use strict'

const core = require('./src/core')
const values = require('./src/util').values

const showPerformance = core.showPerformance
const getPerformance = core.getPerformance

function comparePerformance (testSuite, {loop, args}) {
  const performance = testSuite.map((test) => getPerformance(test.name, test.source, loop, args))
  console.log(performance)

  showPerformance(
    ['Suite', 'Iterations', 'Execution Time', 'Memory Usage'],
    performance.map(values(['name', 'iterations', 'time', 'memory']))
  )
}

module.exports = comparePerformance
