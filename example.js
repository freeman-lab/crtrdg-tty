var TTY = require('./index')

var tty = new TTY()

tty.on('keyDown', function (key) {
  console.log('key down: ')
  console.log(key)
})

tty.on('keyUp', function (key) {
  console.log('key up: ')
  console.log(key)
})

console.log('waiting for key presses...')
