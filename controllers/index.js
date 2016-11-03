/**
 * Created by bdalgaard on 11/2/2016.
 */
var request = require('request');

var renderHomepage = function(req, res, responseBody){
    res.render('index', {
        title: 'Customers',
        customers: responseBody
    });
};

/* GET 'home' page */
module.exports.customerList = function(req, res){
    //Call API
    var options = {
        url: 'http://localhost:3000/customers',
        method: 'GET',
        json: {}
    }

    request(options, function(err, response, body){
        if (err){
            console.log(err);
            res.render('error', {
                message: 'Error',
                error: err
            });
        } else if (response.statusCode === 200){
            renderHomepage(req, res, body);
        } else {
            console.log(response.statusCode);
        }
    });





};