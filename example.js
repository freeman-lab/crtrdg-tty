var Game = require('gameloop')
var TTY = require('./index')

var game = new Game()

var tty = new TTY(game)

var logall = false

tty.on('keyDown', function (key) {
  console.log('key down: ')
  console.log(key)
})

tty.on('keyUp', function (key) {
  console.log('key up: ')
  console.log(key)
})

game.on('update', function (dt) {
  if (logall) console.log(tty.keysDown)
})

game.start()

console.log('waiting for key presses...')
