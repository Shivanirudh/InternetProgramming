var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/historic";

MongoClient.connect(url,function (err, db ){
  if (err) throw err;
  console.log("Database created");
  var dbo = db.db("historic");

  dbo.createCollection("historic_place", function (err, res){
    if (err) throw err;
    console.log("Collection created");
    var myobj1 = [{"_id":1, name: "Tanjore", popular_event: "Big temple"},{"_id":2, name: "Mahabalipuram", popular_event: "War"},{"_id":3, name: "Delhi", popular_event: "Capital"},{"_id":4, name: "Madurai", popular_event: "Pandian dynasty"}];

        dbo.collection("historic_place").insertMany(myobj1 , function (err, res){
          if(err) throw err;
          console.log("Number of documents inserted: "+ res.insertedCount);
          var mysort = { name: 1};
          dbo.collection("historic_place").find({}).sort(mysort).toArray(function (err, res){
            if(err) throw err;
            console.log(res);
            var fs=require("fs");
            fs.writeFile('historic.txt',JSON.stringify(res),function(err){
              if(err) throw err;
              console.log("data written sucessfully");
              fs.readFile('historic.txt',function(err,data){
                  if(err) throw err;
                  console.log("data read from file:");
                  console.log(data.toString());
                  db.close();
              });
            });
          });
        });
      });
});