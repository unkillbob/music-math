# music-math
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![js-standard-style][standard-style-image]][standard-style-url]

[travis-image]: https://img.shields.io/travis/unkillbob/music-math.svg?style=flat
[travis-url]: https://travis-ci.org/unkillbob/music-math
[npm-image]: https://img.shields.io/npm/v/music-math.svg?style=flat
[npm-url]: https://npmjs.org/package/music-math
[standard-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-style-url]: https://github.com/feross/standard

> A utility library for calculating musical information e.g. a note from a frequency

![math](http://media1.giphy.com/media/i58xhIseqtRpC/giphy.gif)

## Install

```
$ npm install --save music-math
```

## Usage

```js
var Frequency = require('music-math').Frequency;

var freqDetails = Frequency(440)

console.log(JSON.stringify(freqDetails))
//=> {"frequency":440,"noteNumber":57,"note":"A","octave":4,"offset":0}
```

## API

### Frequency(frequency)

#### frequency

- *Required*
- Type: `number`

The frequency to perform calculations on (in Hz).

Returns an object with the following properties (lazily calculated first time you request them):

##### frequency

- Type: `number`

The frequency of the note (in Hz)

##### noteNumber

- Type: `number`

The number of the [closest matching] note in the scale

##### note

- Type: `string`

The [closest matching] note in the scale

##### octave

- Type: `number`

The octave the frequency resides in

##### offset

- Type: `number`

The measure of how off pitch the frequency is from the closest matching note (in cents)

## Contributing

### Help Wanted!

This utility was pulled out of a little fun side project I was working on - I am by no means versed in musical theory. I would be immensely grateful of any help especially in the form of:

- corrections to my terminology
- corrections to the math
- additional test cases (especially failing ones that reveal flaws in my math!)

All pull requests / issues / feedback welcome :) Thanks!

### Build

```js
npm run build
```

### Test

```js
npm test
```

### Watch

To watch for changes, build them and run the tests:

```js
npm run watch
```

## License

MIT © [James Bunt](http://github.com/unkillbob)
