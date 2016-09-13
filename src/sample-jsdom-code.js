const jsdom = require('jsdom')

const document = jsdom.jsdom('<div id="mount-point">Hello, World<div>')

const text = document.getElementById('mount-point').textContent

console.log(text)