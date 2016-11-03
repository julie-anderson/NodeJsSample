console.log('top of routes/index.js')

var express = require('express');
var router = express.Router();
var ctrlCustomers = require('../controllers/customers');
var ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.customerList);
router.get('/api/customers', ctrlCustomers.findAll);
router.get('/api/customers/:id', ctrlCustomers.findById);
router.delete('/api/customers/:id', ctrlCustomers.deleteById);

module.exports = router;
