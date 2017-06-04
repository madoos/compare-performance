'use strict'

const R = require('ramda')
const _hasKeys = require('has-keys')
const _flipCurry = R.pipe(R.flip, R.curry)
const notHasKeys = R.complement(_flipCurry(_hasKeys)) // notHasKeys(keys, obj) -> Boolean
const isArray = require('madoos-type').isArray

module.exports = {
  testSuiteDataStructure
}

function testSuiteDataStructure (testSuite) {
  const expectedProps = ['name', 'source']
  if (!isArray(testSuite)) throw new Error('TYPE_ERROR the argument should to be an Array')
  else if (testSuite.some(notHasKeys(expectedProps))) throw new Error(`OBJECT_PROPS the objects should contains props: ${expectedProps}`)
  return testSuite
}

