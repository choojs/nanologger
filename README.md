# nanologger [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Cute browser logger.

## Usage
```js
var nanologger = require('nanologger')
var log = nanologger('my-cool-logger')

log.debug('it works!')
log.info('hey')
log.warn('oh')
log.error('oh no!')
log.fatal('send help')
```

## API
### `log = logger([name])`
Create a new `nanologger` instance. Name defaults to `'unknown'`.

### `level = log.logLevel`
Read the current logLevel. The log level can be set through
`localStorage.setItem('logLevel', '<level>')`. It's read once at boot time.

### `log.debug(message)`
Emit a message at loglevel 🐛

### `log.info(message)`
Emit a message at loglevel ✨

### `log.warn(message)`
Emit a message at loglevel ⚠️

### `log.error(message)`
Emit a message at loglevel 🚨

### `log.fatal(message)`
Emit a message at loglevel 💀

## See Also
- [lrlna/pino-colada](https://github.com/lrlna/pino-colada)
- [pinojs/pino](https://github.com/pinojs/pino)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanologger.svg?style=flat-square
[3]: https://npmjs.org/package/nanologger
[4]: https://img.shields.io/travis/yoshuawuyts/nanologger/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/nanologger
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/nanologger/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/nanologger
[8]: http://img.shields.io/npm/dm/nanologger.svg?style=flat-square
[9]: https://npmjs.org/package/nanologger
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
