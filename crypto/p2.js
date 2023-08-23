let crypto = require('crypto')

let hash = crypto.createHmac('sha256', 'test123')

let input = "Welcome to the node crypto module";

// let res = hash.update(input).digest('base64') /* baseurl, hex, base63url, binary */
//let res1 = hash.update(input).digest('base64url')
let res1 = hash.update(input).digest("binary")

console.log('output =', res1)