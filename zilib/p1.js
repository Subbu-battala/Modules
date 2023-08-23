const zlib = require('zlib')
const fs = require('fs')

let gZip = zlib.createGzip()

let r = fs.createReadStream('myfile.txt')
let w = fs.createWriteStream('test.gz')

r.pipe(gZip).pipe(w)

console.log(`zip file created`)