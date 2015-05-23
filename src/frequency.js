'use strict'

import * as util from './util'

export default function Frequency (frequency) {
  const noteNumber = util.frequencyToNoteNumber(frequency)

  let note,
    octave,
    offset

  return {
    get frequency () {
      return frequency
    },

    get noteNumber () {
      return noteNumber
    },

    get note () {
      if (typeof note === 'undefined') {
        note = util.noteNumberToNote(noteNumber)
      }

      return note
    },

    get octave () {
      if (typeof octave === 'undefined') {
        octave = util.noteNumberToOctave(noteNumber)
      }

      return octave
    },

    get offset () {
      if (typeof offset === 'undefined') {
        offset = util.centsOffsetFromFrequency(frequency, noteNumber)
      }

      return offset
    }
  }
}
