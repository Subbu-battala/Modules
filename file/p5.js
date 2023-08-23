const fs = require('fs')

// async append
const data = "\n\n Asynchronous append data to a file, creating the file if it does exist"

fs.appendFile('./test1.txt', data, function (err) {
    if(err) throw err;
    console.log('append successfully')
})