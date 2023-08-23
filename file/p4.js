const fs = require('fs')

const data = "All file systems oprations have synchronous , callback , and promise-based forms, and are accessible using both Common JS syntac and ES6 modules(ESM)"

// sync file write
fs.writeFileSync('./test2.txt', data)

console.log('sync file write completed')
