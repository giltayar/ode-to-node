const {describe, it} = require('mocha')
const {expect} = require('chai')
const React = require('react')
const Counter = require('../src/Counter')
const ReactTestUtils = require('react-addons-test-utils')

describe('Counter (ReactTestUtils)', function() {
  it('should include an <a> with a - sign', function() {
    const counterElement = ReactTestUtils.createRenderer().render(<Counter />)

    expect(counterElement.props.children[0].type).to.equal('a')
    expect(counterElement.props.children[0].props.children).to.equal('-')
  })
})