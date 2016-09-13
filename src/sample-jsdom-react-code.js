const jsdom = require('jsdom')
const jQuery = require('jquery-slim')

global.document = jsdom.jsdom('<div id="mount-point">Hello, World<div>')
global.window = document.defaultView
global.navigator = window.navigator

const React = require('react')
const reactDOM = require('react-dom')
const Counter = require('./Counter')

reactDOM.render(<Counter/>, document.getElementById('mount-point'))

const $ = jQuery(window)
const text = $('.counter-value').text()

console.log(text)