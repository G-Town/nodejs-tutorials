// How NodeJS differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not front end)
// 2) The console is the terminal window
console.log('Hello World')
// 3) global object instead of window object
console.log(global)
// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6

const os = require('os')
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

const math = require('./math')

console.log(math.add(2, 3))