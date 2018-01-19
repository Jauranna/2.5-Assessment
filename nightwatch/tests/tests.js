const selectors = require('../support/selectors')
const data = require('../support/test_data')
const functions = require('../support/test_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    'Odds and Evens': browser => {
        functions.enterValue(selectors.inputFields.oae, data.firstSet.input.oae, browser)
        browser
        .click(selectors.buttons.oaeSplit)
        .pause(100)
        browser.expect.element(selectors.results.evens).text.to.equal(data.firstSet.output.oaeEvens)
        browser.expect.element(selectors.results.odds).text.to.equal(data.firstSet.output.oaeOdds)
    },

    'Filter Objects': browser => {
        functions.enterValue(selectors.inputFields.fltObj, data.firstSet.input.fltObj, browser)
        browser
        .click(selectors.buttons.objFlt)
        .pause(100)
        browser.expect.element(selectors.results.fltObj).text.to.equal(data.firstSet.output.fltTitle)
    },

    'Filter String': browser => {
        functions.enterValue(selectors.inputFields.fltStr, data.firstSet.input.fltStr, browser)
        browser
        .click(selectors.buttons.strFlt)
        .pause(100)
        browser.expect.element(selectors.results.fltStr).text.to.equal(data.firstSet.output.fltEs) 
    },

    'Palindrome': browser => {
        functions.enterValue(selectors.inputFields.pop, data.firstSet.input.pop, browser)
        browser
        .click(selectors.buttons.popChk)
        .pause(100)
        browser.expect.element(selectors.results.pop).text.to.contain('true') 
    },

    'Sum': browser => {
        functions.enterValue(selectors.inputFields.sum1, data.firstSet.input.sum1, browser)
        functions.enterValue(selectors.inputFields.sum2, data.firstSet.input.sum2, browser)
        browser
        .click(selectors.buttons.sumAdd)
        .pause(100)
        browser.expect.element(selectors.results.sum).text.to.equal(data.firstSet.output.sum) 
    }

}