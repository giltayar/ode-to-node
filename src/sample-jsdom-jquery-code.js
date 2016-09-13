const jsdom = require('jsdom')
const jQuery = require('jquery-slim')

const document = jsdom.jsdom('<div id="mount-point">Hello, World<div>')
const window = document.defaultView

const $ = jQuery(window)

const text = $('#mount-point').text()

console.log(text)