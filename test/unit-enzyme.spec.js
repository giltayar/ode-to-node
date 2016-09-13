const {describe, it} = require('mocha')
const {expect} = require('chai')
const {shallow} = require('enzyme')
const React = require('react')
const Counter = require('../src/Counter')

describe('Counter', function() {
  it('should include an <a> with a - sign', function() {
    const counterElement = shallow(<Counter />)

    expect(counterElement.find('a')).to.have.length(2)
    expect(counterElement.find('a.dec').text()).to.equal('-')
  })
})