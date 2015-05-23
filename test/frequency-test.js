/*eslint-env mocha */
'use strict'

import { expect } from 'chai'
import { Frequency } from '../'

describe('Frequency', function () {

  it('should be a function', function () {
    expect(Frequency).to.be.a('function')
  })

  it('should wrap the given frequency providing additional information', function () {
    const freq = 440 // A4

    expect(Frequency(freq)).to.deep.equal({
      frequency: freq,
      noteNumber: 57,
      note: 'A',
      octave: 4,
      offset: 0
    })
  })
})
