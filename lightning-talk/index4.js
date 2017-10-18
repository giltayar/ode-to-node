const {describe, it} = require('mocha')
const jsdom = require('jsdom')
const assert = require('assert')

describe('react app', function() {
  it('should increment the counter', function() {
    global.window = jsdom.jsdom('<div id="mount-point"><div>').defaultView
    global.document = window.document
    global.navigator = window.navigator

    const reactApp = require('./ReactApp.js')
    const ReactTestUtils = require('react-dom/test-utils')

    const $ = require('jquery-slim')

    reactApp($('#mount-point')[0])

    ReactTestUtils.Simulate.click($('#mount-point .inc')[0])

    const text = $('#mount-point .counter-value').text()

    assert.equal(text, '1')
  })
})
