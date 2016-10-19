/**
 * Created by bdalgaard on 10/19/2016.
 */

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('customers', server);


exports.findAll = function(req, res) {
    res.send([{name:'customer1'}, {name:'customer2'}, {name:'customer3'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};
