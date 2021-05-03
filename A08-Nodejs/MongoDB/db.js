var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, async function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var myobj = [
    { name: 'John', age: 23, id: 1, gender:'male', address: 'Highway 71', marital_status:'single'},
    { name: 'Peter', age: 25, id: 2, gender:'male', address: 'Lowstreet 4', marital_status:'married'},
    { name: 'Amy', age: 22, id: 3, gender:'female', address: 'Apple st 652', marital_status:'single'},
    { name: 'Hannah', age: 29, id: 4, gender:'female', address: 'Mountain 21', marital_status:'married'},
  ];
  //Add
  console.log("ADD");
  await dbo.collection("patient_details").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
  });
  await dbo.collection("patient_details").find({}).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
  });
  
  //Delete
  console.log("DELETE");
  var del_query = { address: 'Mountain 21' };
  await dbo.collection("patient_details").deleteOne(del_query, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
  await dbo.collection("patient_details").find({}).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
  });

  //Update
  console.log("UPDATE");
  var upd_query = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  await dbo.collection("patient_details").updateOne(upd_query, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });
  await dbo.collection("patient_details").find({}).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
  });

  //Search
  console.log("SEARCH");
  var search_query = { gender: /^male/ };
  await dbo.collection("patient_details").find(search_query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  db.close();
});