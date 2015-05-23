'use strict'

const NOTES = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B']
const NUMBER_OF_NOTES = NOTES.length

// Frequencies calculated in reference to the note A4 which is frequency 440Hz
const A4_FREQUENCY = 440
// A4 is the 58th note in the scale (i.e. 57 notes after C0)
const A4_NOTE_OFFSET = 57

const CENTS_PER_OCTAVE = 1200

export function frequencyToNoteNumber (frequency) {
  const noteNumber = NUMBER_OF_NOTES * (Math.log(frequency / A4_FREQUENCY) / Math.log(2))
  return Math.round(noteNumber) + A4_NOTE_OFFSET
}

export function noteNumberToNote (noteNumber) {
  return NOTES[noteNumber % NUMBER_OF_NOTES]
}

export function noteNumberToFrequency (noteNumber) {
  return A4_FREQUENCY * Math.pow(2, (noteNumber - A4_NOTE_OFFSET) / NUMBER_OF_NOTES)
}

export function noteNumberToOctave (noteNumber) {
  return Math.floor(noteNumber / NUMBER_OF_NOTES)
}

export function centsOffsetFromFrequency (frequency, noteNumber) {
  const expectedFrequency = noteNumberToFrequency(noteNumber),
    fractionOffset = Math.log(frequency / expectedFrequency) / Math.log(2)

  return Math.floor(CENTS_PER_OCTAVE * fractionOffset)
}
