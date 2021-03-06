# crtrdg-tty

> keyboard module for games that works in the terminal

Useful for testing and debugging core game logic outside the browser, e.g. because you have separate modules for game logic and rendering and you want to test gameplay alone in the terminal. Works well alongside `crtrdg.js` games, but can be used just as well independently. Captures key presses from `stdin` using [`keypress`](https://github.com/TooTallNate/keypress) and separates key down and key up events using [`lodash.debounce`](https://github.com/lodash/lodash).

## install

    npm install --save crtrdg-tty

## example

initialize and log key down events

```javascript
var TTY = require('crtrdg-tty')

var tty = TTY()

tty.on('keyDown', function (key) {
	console.log(key)
})
```

to see a simple interactive demo call

	npm start

inside this module, and press or hold keys to see events.

## API

### `create`

create the tty object

```javascript
var TTY = require('crtrdg-tty')

var tty = TTY()
```

### `tty.on('keyDown')`

key down events

provides a key code for the key pressed from [`vkey`](https://github.com/chrisdickinson/vkey/)

### `tty.on('keyUp')`

key up events

provides a key code for the key let up from [`vkey`](https://github.com/chrisdickinson/vkey/)

### `tty.keysDown`

object with currently pressed keys set to true, e.g.

```javascript
tty.on('keyDown', function () {
  console.log(tty.keysDown)
})

>> {<up>: true}
```
