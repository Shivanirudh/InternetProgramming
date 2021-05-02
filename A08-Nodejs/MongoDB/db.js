var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', age: 23, id: 1, gender:'male', address: 'Highway 71', marital_status:'single'},
    { name: 'Peter', age: 25, id: 2, gender:'male', address: 'Lowstreet 4', marital_status:'married'},
    { name: 'Amy', age: 22, id: 3, gender:'female', address: 'Apple st 652', marital_status:'single'},
    { name: 'Hannah', age: 29, id: 4, gender:'female', address: 'Mountain 21', marital_status:'married'},
    { name: 'Michael', age: 27, id: 5, gender:'male', address: 'Valley 345', marital_status:'single'},
    { name: 'Sandy', age: 26, id: 10, gender:'male', address: 'Ocean blvd 2', marital_status:'married'},
    { name: 'Betty', age: 24, id: 9, gender:'female', address: 'Green Grass 1', marital_status:'single'},
    { name: 'Richard', age: 23, id: 8, gender:'male', address: 'Sky st 331', marital_status:'single'},
    { name: 'Susan', age: 30, id: 7, gender:'female', address: 'One way 98', marital_status:'single'},
    { name: 'Vicky', age: 32, id: 6, gender:'male',  address: 'Yellow Garden 2', marital_status:'single'},
  ];

  //Add
  dbo.collection("patient_details").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

  var del_query = { address: 'Mountain 21' };
  dbo.collection("patient_details").deleteOne(del_query, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });

  var upd_query = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("patient_details").updateOne(upd_query, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });

  var search_query = { gender: /^male/ };
  dbo.collection("patient_details").find(search_query).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
    });
  
});