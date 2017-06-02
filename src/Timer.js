'use strict'

class Timer {

  constructor () {
    this._start
    this._end
    this._time
  }

  start () {
    this._start = new Date().getTime()
    return this._start
  }

  end () {
    this._end = new Date().getTime()
    return this._getTime()
  }

  _getTime () {
    return this._end - this._start
  }
}

module.exports = Timer
