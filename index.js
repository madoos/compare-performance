'use strict'


function comparePerformance (...testSuite) {
  return
}

comparePerformance(
  {name: 'while', source: () => {}},
  {name: 'for', source: () => {}},
  {name: 'forEach', source: () => {}}
)

module.exports = comparePerformance
