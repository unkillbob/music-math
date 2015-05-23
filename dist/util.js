'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.frequencyToNoteNumber = frequencyToNoteNumber;
exports.noteNumberToNote = noteNumberToNote;
exports.noteNumberToFrequency = noteNumberToFrequency;
exports.noteNumberToOctave = noteNumberToOctave;
exports.centsOffsetFromFrequency = centsOffsetFromFrequency;
var NOTES = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
var NUMBER_OF_NOTES = NOTES.length;

// Frequencies calculated in reference to the note A4 which is frequency 440Hz
var A4_FREQUENCY = 440;
// A4 is the 58th note in the scale (i.e. 57 notes after C0)
var A4_NOTE_OFFSET = 57;

var CENTS_PER_OCTAVE = 1200;

function frequencyToNoteNumber(frequency) {
  var noteNumber = NUMBER_OF_NOTES * (Math.log(frequency / A4_FREQUENCY) / Math.log(2));
  return Math.round(noteNumber) + A4_NOTE_OFFSET;
}

function noteNumberToNote(noteNumber) {
  return NOTES[noteNumber % NUMBER_OF_NOTES];
}

function noteNumberToFrequency(noteNumber) {
  return A4_FREQUENCY * Math.pow(2, (noteNumber - A4_NOTE_OFFSET) / NUMBER_OF_NOTES);
}

function noteNumberToOctave(noteNumber) {
  return Math.floor(noteNumber / NUMBER_OF_NOTES);
}

function centsOffsetFromFrequency(frequency, noteNumber) {
  var expectedFrequency = noteNumberToFrequency(noteNumber),
      fractionOffset = Math.log(frequency / expectedFrequency) / Math.log(2);

  return Math.floor(CENTS_PER_OCTAVE * fractionOffset);
}