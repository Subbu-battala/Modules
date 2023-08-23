const util = require('util')

//template
let myTemplate = `Hi %s, welcome to %s and duration is %d months`;

let u1 = util.format(myTemplate, "Raju","javascript", 1.5);

let myBikes = `Hi %s, welcome to %s institure u have to pay %d thousand`

let u2 = util.format(myBikes,"subbu", "Be-practical", 30000)

console.log(`u1 =`, u1)
console.log(`u2 =`, u2)