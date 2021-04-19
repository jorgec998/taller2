const AccountService = require('./app/services/AccountService')

async function probar() {
    const result = await AccountService.create({
        id:'75865',
        customerid:'1234',
    })
    console.log(result)
}

probar().then(console.log('OK'))