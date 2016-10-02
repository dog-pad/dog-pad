[![Build Status](https://travis-ci.org/dog-pad/dog-pad.svg?branch=master)](https://travis-ci.org/dog-pad/dog-pad)


## Install

```
$ npm install --save dog-pad
```


## Usage

```js
const dogPad = require('dog-pad');

dogPad('Woof', 6);
//=> '🐕🐕Woof'
```


## API

### dogPad(input, length)

Pads `input` with dogs on the left side if it's shorter than `length`. Padding dogs are truncated if they exceed `length`.

#### input

Type: `string`

String to pad.

#### length

Type: `number`<br>
Default: `0`

Padding length.


## Credit

Based on [cat-pad](https://github.com/sindresorhus/cat-pad/)


## License

MIT © [Dog Pad](https://github.com/dog-pad)
