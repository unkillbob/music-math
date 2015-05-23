'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Frequency;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _util = require('./util');

var util = _interopRequireWildcard(_util);

function Frequency(frequency) {
  var noteNumber = util.frequencyToNoteNumber(frequency);

  var note = undefined,
      octave = undefined,
      offset = undefined;

  return Object.defineProperties({}, {
    frequency: {
      get: function () {
        return frequency;
      },
      configurable: true,
      enumerable: true
    },
    noteNumber: {
      get: function () {
        return noteNumber;
      },
      configurable: true,
      enumerable: true
    },
    note: {
      get: function () {
        if (typeof note === 'undefined') {
          note = util.noteNumberToNote(noteNumber);
        }

        return note;
      },
      configurable: true,
      enumerable: true
    },
    octave: {
      get: function () {
        if (typeof octave === 'undefined') {
          octave = util.noteNumberToOctave(noteNumber);
        }

        return octave;
      },
      configurable: true,
      enumerable: true
    },
    offset: {
      get: function () {
        if (typeof offset === 'undefined') {
          offset = util.centsOffsetFromFrequency(frequency, noteNumber);
        }

        return offset;
      },
      configurable: true,
      enumerable: true
    }
  });
}

module.exports = exports['default'];