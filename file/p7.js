const fs = require('fs')


// async
fs.unlink('./test1.txt', (err) => {
    if(err) console.log(err)
    console.log('file removed successfully')
})