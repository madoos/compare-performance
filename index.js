'use strict'

const core = require('./src/core')
const values = require('./src/util').values

const showReport = core.showReport
const getPerformance = core.getPerformance

function comparePerformance (testSuite, {loop, args}) {
  const performance = testSuite.map((test) => getPerformance(test.name, test.source, loop, args))

  showReport(
    ['Suite', 'Iterations', 'Execution Time', 'Memory Usage'],
    performance.map(values(['name', 'iterations', 'time', 'memory']))
  )
}

module.exports = comparePerformance
