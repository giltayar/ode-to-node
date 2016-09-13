const jsdom = require('jsdom')

global.window = jsdom.jsdom('<div id="mount-point">Hello, World<div>').defaultView
global.document = window.document

const $ = require('jquery-slim')

const text = $('#mount-point').text()

console.log(text)