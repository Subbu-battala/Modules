// read file
const fs = require('fs')

fs.readFile('./myfile.txt', function (err,data) {
    if(err) console.log(err)

    console.log('async read =', data)
    console.log('string =0', data.toString())
})