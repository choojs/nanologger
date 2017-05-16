module.exports = Nanologger

function Nanologger (name) {
  if (!(this instanceof Nanologger)) return new Nanologger(name)

  this._name = name || ''

  this.colors = {
    foreground: '#d3c0c8',
    background: '#2d2d2d',
    black: '#2d2d2d',
    red: '#f2777a',
    green: '#99cc99',
    yellow: '#ffcc66',
    blue: '#6699cc',
    magenta: '#cc99cc',
    cyan: '#66cccc',
    white: '#d3d0c8',
    brightBlack: '#747369'
  }

  this.emojis = {
    debug: '🐛',
    info: '✨',
    warn: '⚠️',
    error: '🚨',
    fatal: '💀'
  }

  this.levels = {
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
  }

  try {
    this.logLevel = window.localStorage.getItem('logLevel') || 'info'
  } catch (e) {
    this.logLevel = 'info'
  }

  this._logLevel = this.levels[this.logLevel]
}

Nanologger.prototype.debug = function () {
  var args = [ 'debug' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.info = function () {
  var args = [ 'info' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.warn = function () {
  var args = [ 'warn' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.error = function () {
  var args = [ 'error' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype.fatal = function () {
  var args = [ 'fatal' ]
  for (var i = 0, len = arguments.length; i < len; i++) args.push(arguments[i])
  this._print.apply(this, args)
}

Nanologger.prototype._print = function (level) {
  if (this.levels[level] < this._logLevel) return

  var colors = this.colors
  var time = this._getTimeStamp()
  var emoji = this.emojis[level]
  var name = this._name || 'unknown'
  var c = this._c

  var msgColor = (level === 'error' || level.fatal)
    ? colors.red
    : level === 'warn'
      ? colors.yellow
      : colors.green

  var msg = '%c' + time + ' ' + emoji + ' %c' + name
  var args = [msg, c(colors.brightBlack), c(colors.magenta)]

  for (var i = 1, len = arguments.length; i < len; i++) {
    var arg = arguments[i]
    if (i === 1 && typeof arg === 'string') {
      args[0] = msg + ' %c' + arg
      args.push(c(msgColor))
    } else {
      args.push(arg)
    }
  }

  console.log.apply(console, args)
}

Nanologger.prototype._c = function (color) {
  return 'color: ' + color + ';'
}

Nanologger.prototype._getTimeStamp = function () {
  var date = new Date()
  var hours = this._pad(date.getHours().toString())
  var minutes = this._pad(date.getMinutes().toString())
  var seconds = this._pad(date.getSeconds().toString())
  return hours + ':' + minutes + ':' + seconds
}

Nanologger.prototype._pad = function (str) {
  return (str.length !== 2) ? '0' + str : str
}
