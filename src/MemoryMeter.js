'use strict'

const prettyBytes = require('pretty-bytes')

class MemoryMeter {

  constructor () {
    this._start = 0
    this._end = 0
  }

  start () {
    this._start = this._memoryUsed()
    return this._start
  }

  end () {
    return this._calculateMemoryUsed()
  }

  _calculateMemoryUsed () {
    this._end = this._memoryUsed()
    return this._end - this._start
  }

  endPretty () {
    return prettyBytes(this._calculateMemoryUsed())
  }

  _memoryUsed () {
    return process.memoryUsage().heapUsed
  }

}

module.exports = MemoryMeter
