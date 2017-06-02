'use strict'

const getTimer = require('./src/factories/timer')


function comparePerformance (...testSuite) {
  console.log(getTimer())
}

comparePerformance(
  {name: 'while', source: () => {}},
  {name: 'for', source: () => {}},
  {name: 'forEach', source: () => {}}
)

module.exports = comparePerformance
