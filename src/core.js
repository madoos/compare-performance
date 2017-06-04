'use strict'

const Table = require('cli-table')
const prettyBytes = require('pretty-bytes')
const prettyMs = require('pretty-ms')
const Timer = require('./Timer')
const MemoryMeter = require('./MemoryMeter')
const util = require('./util')
const instance = util.instance
const makeLoop = util.makeLoop

module.exports = {
  measureWith,
  getPerformance,
  showReport
}

/**
 *
 *
 * @param {Object} subject
 * @param {String} startCommand
 * @param {Function} code
 * @param {String} endCommand
 * @returns {MixValue}
 */
function measureWith (subject, startCommand, code, endCommand) {
  subject[startCommand]()
  code()
  return subject[endCommand]()
}

/**
 *
 *
 * @param {String} name
 * @param {Function} codeSource
 * @param {Array} args
 * @param {Number} iterations
 * @returns {Object}
 */
function getPerformance (name, codeSource, args = [], iterations = 1) {
  const source = iterations > 1 ? makeLoop(codeSource, iterations, args) : codeSource
  const time = measureWith(instance(Timer), 'start', source, 'end')
  const memory = measureWith(instance(MemoryMeter), 'start', source, 'end')
  const humanTime = prettyMs(time)
  const humanMemory = prettyBytes(memory)
  return { name, iterations, time, memory, source, args, humanTime, humanMemory }
}

/**
 *
 *
 * @param {Array<String>} head
 * @param {Array<Array>} rows
 */
function showReport (head, rows) {
  const table = new Table({head})
  table.push(...rows)
  console.log(table.toString())
}

