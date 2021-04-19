const AccountService = module.exports
const AccountRepository = require('../repositories/AccountsRepository')
const CustomerRepository = require('../repositories/CustomerRepository')


AccountService.listAccountsByCustomer = async (customerId) => {

    const customerFound = await CustomerRepository.findById(customerId)

    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    return AccountRepository.listAccountsByCustomer(customerId)
}

AccountService.create = async (account) => {
    const customerFound = await CustomerRepository.findById(account.customerid)

    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    const accountsByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    if(accountsByCustomer.length >= 3) {
        throw new Error('No more than 3 accounts...')
    }

    account.openedat = new Date();
    account.amount = 0;
    await AccountRepository.create(account)
}