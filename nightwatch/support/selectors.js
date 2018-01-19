module.exports = {
    inputFields: {
        oae: 'input[name="evenOddInput"]',
        fltObj: 'input[name="objectFilterInput"]',
        fltStr: 'input[id="nameFilterInput"]',
        pop: 'input[name="palindromeInput"]',
        sum1: 'input[name="sumInput1"]',
        sum2: 'input[name="sumInput2"]'
    },

    buttons: {
        oaeSplit: 'button[name="evenOddButton"]',
        objFlt: 'button[name="objectFilterButton"]',
        strFlt: 'button[id="nameFilterButton"]',
        popChk: 'button[name="palindromeButton"]',
        sumAdd: 'button[name="sumButton"]',
    },

    results: {
        evens: 'span[name="evenResults"]',
        odds: 'span[name="oddResults"]',
        fltObj: 'span[name="objectFilterResults"]',
        fltStr: 'span[name="nameFilterResults"]',
        pop: 'span[name="palindromeResults"]',
        sum: 'span[name="sumResults"]'
    }
}