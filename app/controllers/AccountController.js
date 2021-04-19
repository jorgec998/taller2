const AccountController = module.exports
const AccountService = require('../services/AccountService');

AccountController.listAccountsByCustomer = (req, res, next) => {
    const params = req.params;

    try {
        const response = await AccountService.listAccountsByCustomer(params.id)

        res.send(response)

    } catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async (req, res, next) => {
    const body = req.body;

    try {
        await AccountService.create(body)
        res.send({message: 'account created'})

    } catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}