var express = require('express');
var router = express.Router();
var ctrlCustomers = require('../controllers/customers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customers', ctrlCustomers.findAll);
router.get('/customers/:id', ctrlCustomers.findById);

module.exports = router;
