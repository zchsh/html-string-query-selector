const fs = require('fs')
const htmlStringQuerySelector = require('./htmlStringQuerySelector')

//  Grab test content and expected result (trim newlines at end of file, too)
var source = fs.readFileSync('./src/test/test_source.html', 'utf8').trim()

test('Gets simple Hello World example.', () => {
  expect(htmlStringQuerySelector(source, '.hello-world-test')).toBe(
    'Hello World'
  )
})

test('Tries to get non-existent element.', () => {
  expect(htmlStringQuerySelector(source, '.this-doesnt-exist')).toBe(false)
})

var testContent_expected = fs
  .readFileSync('./src/test/test_expected_job-ad-content.html', 'utf8')
  .trim()
test('Gets .job-ad-content.', () => {
  expect(htmlStringQuerySelector(source, '.job-ad-content')).toBe(
    testContent_expected
  )
})

var testHeading_expected = fs
  .readFileSync('./src/test/test_expected_job-ad-heading.html', 'utf8')
  .trim()
test('Gets .job-ad-heading.', () => {
  expect(htmlStringQuerySelector(source, '.job-ad-heading')).toBe(
    testHeading_expected
  )
})
