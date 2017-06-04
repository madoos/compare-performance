'use strict'

const filesize = require('filesize')

class CPUMeter {

  constructor () {
    this._start
    this._end
  }

  start () {
    this._start = process.cpuUsage()
    return this._start
  }

  end () {
    return this._cpuUsage()
  }

  _cpuUsage () {
    this._end = process.cpuUsage(this._start)
    return this._end.system
  }

  endPretty () {
    const bits = this.bytesToBits(this._cpuUsage())
    return filesize(Math.abs(bits), {bits: true})
  }

  bytesToBits (bytes) {
    return bytes * 8
  }

}

module.exports = CPUMeter
