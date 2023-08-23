const zlib = require('zlib')
const fs = require('fs')

let gZip = zlib.createUnzip()

let r = fs.createReadStream('test.gz')
let w = fs.createWriteStream('newfile.txt')

r.pipe(gZip).pipe(w)

console.log(`new file created`)