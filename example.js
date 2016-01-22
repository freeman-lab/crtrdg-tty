var Game = require('gameloop')
var TTY = require('./index')

var game = new Game()

var tty = new TTY()

var logall = true

tty.on('keyDown', function (key) {
  console.log('key down: ')
  console.log(key)
})

tty.on('keyUp', function (key) {
  console.log('key up: ')
  console.log(key)
})

game.on('start', function () {
  tty.start()
})

game.start()

console.log('waiting for key presses...')
