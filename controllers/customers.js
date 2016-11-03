/**
 * Created by bdalgaard on 10/19/2016.
 */
var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    ObjectID = require('mongodb').ObjectID;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('test', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'test' database");
        db.collection('customers', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'customers' collection doesn't exist.");
            }
        });
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving customer: ' + id);

    db.collection('customers', function(err, collection) {
        collection.findOne({'_id': new ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    console.log('Retrieving all customers');
    db.collection('customers', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.status(200);
            res.send(items);
        });
    });
};

exports.add = function(req, res) {
    console.log('Adding customer');
    console.log(req.body);

    db.collection('customers', function(err, collection) {
        collection.insert(req.body, {w:1}, function(err, doc) {
            console.log(doc);
            res.status(200);
            res.send({'inserted': doc});
        });
    });

};

exports.update = function(req, res) {
    var id = req.params.id
    console.log('Updating customer with id ' + id);
    db.collection('customers', function(err, collection) {
        collection.update({'_id': new ObjectID(id)}, req.body, {w:1}, function(err, doc) {
            console.log(doc);
            res.status(200);
            res.send({'updated': doc});
        });
    });

};

exports.deleteById = function(req, res) {
    var id = req.params.id
    console.log('Deleting customer with id ' + id);

    db.collection('customers', function(err, collection) {
        console.log('deleting');
        collection.remove({'_id': new ObjectID(id)}, function(err, results) {
            if (err){
                console.log("failed");
                throw err;
            }
            console.log('deleted');
            res.status(200);
            res.send({'message': 'item deleted id ' + req.params.id});
        });
    });
};


