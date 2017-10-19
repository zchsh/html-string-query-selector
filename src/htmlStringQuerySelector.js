const jsdom = require('jsdom')
const { JSDOM } = jsdom

function htmlStringQuerySelector(string, selector) {
  //  Find the start of the element tag that we're looking for
  var dom = new JSDOM(string)
  var element = dom.window.document.querySelector(selector)
  if (element) {
    return element.innerHTML.trim()
  } else {
    return false
  }
}

module.exports = htmlStringQuerySelector
