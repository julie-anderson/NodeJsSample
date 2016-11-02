/**
 * Created by bdalgaard on 11/2/2016.
 */

var renderHomepage = function(req, res, responseBody){
    res.render('index', {
        title: 'Customers',
        customers: [{"FirstName" : "John", "LastName" : "Doe", "Phone" : "312-123-4567" }, { "FirstName" : "Bart", "LastName" : "Simpson", "Phone" : "708-234-5678"}]
    });
};

/* GET 'home' page */
module.exports.customerList = function(req, res){
    var data = [{"FirstName" : "John", "LastName" : "Doe", "Phone" : "312-123-4567" }, { "FirstName" : "Bart", "LastName" : "Simpson", "Phone" : "708-234-5678"}];
    console.log(data)
    renderHomepage(req, res, data);
};