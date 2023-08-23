const fs = require('fs')

const data = "All file systems oprations have synchronous , callback , and promise-based forms, and are accessible using both Common JS syntac and ES6 modules(ESM)"

// async file write
fs.writeFile('./test1.txt', data, function (err) {
    if(err) throw err;
    console.log('async file write completed')
})
