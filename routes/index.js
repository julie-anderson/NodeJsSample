var express = require('express');
var router = express.Router();
var ctrlCustomers = require('../controllers/customers');
var ctrlIndex = require('../controllers/index');

/* GET home page. */

router.get('/', ctrlIndex.customerList);
router.get('/customers', ctrlCustomers.findAll);
router.get('/customers/:id', ctrlCustomers.findById);

module.exports = router;
