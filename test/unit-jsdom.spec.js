const {describe, it, beforeEach} = require('mocha')
const {expect} = require('chai')
const jsdom = require('jsdom')
const jQuery = require('jquery-slim')

describe('Counter (jsdom)', function() {
  let Counter
  let React
  let reactDOM

  beforeEach(function() {
    global.document = jsdom.jsdom('<div id="mount-point">Hello, World<div>')
    global.window = document.defaultView
    global.navigator = window.navigator

    React = require('react')
    reactDOM = require('react-dom')
    Counter = require('../src/Counter')
  })

  it('should include an <a> with a - sign', function() {
    reactDOM.render(<Counter/>, document.getElementById('mount-point'))

    const $ = jQuery(window)
    expect($('a')).to.have.length(2)
    expect($('a:eq(0)').text()).to.equal('-')

    //$('.inc').trigger('click')
    const evt = document.createEvent('Events')
    evt.initEvent('click', true, true)
    $('.inc')[0].dispatchEvent(evt)

    expect($('.counter-value').text()).to.equal('1')
  })
})
