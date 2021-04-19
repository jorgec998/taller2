const express = require('express');
const CustomerController = require('../controllers/CustomerController');
const AccountController = require('../controllers/AccountController');

const router = express.Router();

router.delete('/customers/:id', CustomerController.delete);
router.put('/customers/:id', CustomerController.edit);
router.get('/customers/:id/acccounts', AccountController.listAccountsByCustomer);
router.post('/acccounts', AccountController.createAccount);

module.exports = router;