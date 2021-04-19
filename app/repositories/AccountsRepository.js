const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.create = (account) => {
    return DB('accounts').insert(account)
}

AccountRepository.listAccountsByCustomer = (customerId) => {
    return DB('accounts').where({customerid : customerId}).select('*')
}

AccountRepository.delete = (Id) => {
    return DB('accounts').where({id : Id}).del()
}