const vm = require('vm')

let user = {
    name: "Raju",
    email: "raju@gmail.com",
    mobile: 6309309253,
    age: 22
}

console.log('before =', user)

// virtual object
vm.createContext(user)
vm.runInContext(`name="apasham kirikiri";'punju@gmail.com';age+=5; `, user)

console.log('after =', user)