const fs = require('fs')

// sync append
const data = "\n\n Asynchronous append data to a file, creating the file if it does exist"

fs.appendFileSync('./test2.txt', data)

console.log('append successfully')