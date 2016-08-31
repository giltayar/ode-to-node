const jsdom = require('jsdom')

global.window = jsdom.jsdom('<div id="mount-point">Hello, World<div>').defaultView
global.document = window.document

const text = document.getElementById('mount-point').textContent

console.log(text)