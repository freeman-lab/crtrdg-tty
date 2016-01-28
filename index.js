var debounce = require('lodash.debounce')
var inherits = require('inherits')
var EventEmitter = require('eventemitter2').EventEmitter2
var keypress = require('keypress')
var keycode = require('keycode')
var vkey = require('vkey')

module.exports = TTY
inherits(TTY, EventEmitter)

function TTY () {
  if (!(this instanceof TTY)) return new TTY()
  var self = this
  this.keysDown = {}
  this.started = false
  self.start()
}

TTY.prototype.start = function () {
  var self = this
  if (self.started) return
  keypress(process.stdin)
  process.stdin.setRawMode(true)
  self.started = true
  self.delays = {}

  function delay (key) {
    return function () {
      setTimeout(function () {
        self.keysDown[key] = false
        self.emit('keyUp', key)
        delete self.delays[key]
      }, 100)
    }
  }

  process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name === 'c') {
      process.exit()
    }
    if (!key) {
      key = ch
    } else {
      key = key.name
    }
    key = vkey[keycode(key)]
    self.keysDown[key] = true

    if (!self.delays[key]) {
      self.delays[key] = debounce(delay(key), 300)
      self.emit('keyDown', key)
    }

    self.delays[key]()
  })
}
