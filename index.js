'use strict'


const core = require('./src/core')
const values = require('./src/util').values
const exceptionHandler = require('./src/exceptionHandler')
const handleInputErrors = require('madoos-functional-implementations').transformArgs

const showReport = core.showReport
const getPerformance = core.getPerformance
const dataStructure = exceptionHandler.testSuiteDataStructure


function comparePerformance (testSuite, opt = {}) {
  const iterations = opt.iterations
  const args = opt.args
  const performance = testSuite.map((test) => getPerformance(test.name, test.source, args, iterations))

  showReport(
    ['Suite', 'Iterations', 'Execution Time', 'Memory Usage (Experimental)'],
    performance.map(values(['name', 'iterations', 'time', 'memory']))
  )
  return performance
}

module.exports = handleInputErrors(comparePerformance, dataStructure)
