'use strict'
const {describe, it, before} = require('mocha')
const {expect} = require('chai')
const jsdom = require('jsdom')

describe('Counter App', function() {
  before(function() {
    global.document = jsdom.jsdom('<div id="root"><div>')
    global.window = document.defaultView
    global.navigator = window.navigator

    require('../src/dom-counter')
  })

  it('inc button should work', async () => {
    const incButton = document.getElementById('inc')

    incButton.click()

    const valueElement = document.getElementById('counter-value')

    expect(valueElement.textContent).to.equal('1')
  })
})
