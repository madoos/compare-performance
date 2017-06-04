'use strict'

const prettyMs = require('pretty-ms')

class Timer {

  constructor () {
    this._start = 0
    this._end = 0
  }


  start () {
    this._start = new Date().getTime()
    return this._start
  }

  end () {
    return this._getTime()
  }

  _getTime () {
    this._end = new Date().getTime()
    return this._end - this._start
  }

  endPretty () {
    return prettyMs(this._getTime())
  }
}

module.exports = Timer
