const jsdom = require('jsdom')
global.window = jsdom.jsdom('<div id="mount-point"><div>').defaultView
global.document = window.document
global.navigator = window.navigator

const reactApp = require('./ReactApp.js')
const ReactTestUtils = require('react-addons-test-utils');

const $ = require('jquery-slim')

reactApp($('#mount-point')[0])

ReactTestUtils.Simulate.click($('#mount-point .inc')[0])

const text = $('#mount-point .counter-value').text()

console.log(text)