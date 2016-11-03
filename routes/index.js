console.log('top of routes/index.js')

var express = require('express');
var router = express.Router();
var ctrlCustomers = require('../controllers/customers');
var ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.customerList);

/* API */
router.get('/api/customers', ctrlCustomers.findAll);
router.get('/api/customers/:id', ctrlCustomers.findById);
router.put('/api/customers/', ctrlCustomers.add);
router.post('/api/customers/:id', ctrlCustomers.update);
router.delete('/api/customers/:id', ctrlCustomers.deleteById);

module.exports = router;
