const crypto = require('crypto')

const hash = crypto.createHash('sha256') //sha => secure hash algo

let input = "welocome node crypto modules";

let data = hash.update(input).digest('hex')

console.log('data sha(256) =', data)