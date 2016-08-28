[![Build Status](https://travis-ci.org/sindresorhus/cat-pad.svg?branch=master)](https://travis-ci.org/sindresorhus/cat-pad)


## Install

```
$ npm install --save cat-pad
```


## Usage

```js
const catPad = require('cat-pad');

catPad('Woof', 5);
//=> '🐈🐈🐈🐈🐈Woof'
```


## API

### catPad(input, count)

#### input

Type: `string`

String to pad.

#### count

Type: `number`<br>
Default: `0`

Amount of cats.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
