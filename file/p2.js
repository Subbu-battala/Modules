const fs = require('fs')

// sync read
const data = fs.readFileSync('./myfile.txt')

console.log('sync read =', data)
console.log('string =', data.toString())