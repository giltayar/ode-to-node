'use strict'
const path = require('path')
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const webdriver = require('selenium-webdriver')
require('chromedriver')
const {By} = webdriver

describe('Counter App', function() {
  let driver
  before(() => (driver = new webdriver.Builder().forBrowser('chrome').build()))
  after(async () => await driver.quit())

  it('inc button should work', async () => {
    await driver.get('file://' + path.resolve(__dirname, '../src/dom-counter.html'))

    const incButton = await driver.findElement(By.id('inc'))

    await incButton.click()

    const valueElement = await driver.findElement(By.id('counter-value'))

    expect(await valueElement.getText()).to.equal('1')
  })
})
