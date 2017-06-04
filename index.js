'use strict'

const core = require('./src/core')
const values = require('./src/util').values
const exceptionHandler = require('./src/exceptionHandler')
const handleInputExceptions = require('madoos-functional-implementations').transformArgs

const showReport = core.showReport
const getPerformance = core.getPerformance
const dataStructure = exceptionHandler.testSuiteDataStructure

/**
 *
 *
 * @param {Array<Object>} testSuite
 * @param {<Object>} opt
 * @returns {Array<Object>}
 */
function comparePerformance (testSuite, opt = {}) {
  const performance = testSuite.map((test) => getPerformance(test.name, test.source, opt.args, opt.iterations))

  showReport(
    ['Suite', 'Iterations', 'Execution Time', 'Memory Usage (Experimental)'],
    performance.map(values(['name', 'iterations', 'humanTime', 'humanMemory']))
  )

  return performance
}

module.exports = handleInputExceptions(comparePerformance, dataStructure)


