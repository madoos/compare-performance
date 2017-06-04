'use strict'

function makeSync (asyncFn, context) {
  return function (...args) {
    let syncData
    asyncFn.call(context || this, ...args, (data) => { syncData = data })
    while(syncData === undefined)require('deasync').sleep(100)
    return syncData
  }
}

module.exports = {
  makeSync
}
