(function(){
    
    'use strict';

    setGlobals();
    setReactGlobals();

    function setGlobals() {
        const jsdom = require('jsdom');
        const {describe, it} = require('mocha');
        const jQuery = require('jquery-slim');
        const { expect } = require('chai');

        global.document = jsdom.jsdom('<div id="root"></div>');
        global.window = document.defaultView;
        global.navigator = window.navigator;
        global.dispatchEvent = window.dispatchEvent;
        global.$ = jQuery(window);
        global.describe = describe;
        global.it = it;
        global.expect = expect;
    }
    
    function setReactGlobals() {
        global.reactDOM =  require('react-dom');
        global.React = require('react');
    }

}());