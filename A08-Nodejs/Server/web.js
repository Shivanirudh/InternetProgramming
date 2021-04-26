var fs = require("fs");
var http = require("http");
var url = require("url");

var greetings = []

fs.readFile("greetings.txt", function(err, info){
    if(err){
        console.log("ERROR:File not found!");
        return 1;
    }
    greetings = info.toString().split("\n");
});
console.log("Completed reading file.");

http.createServer(function (req, res) {
    //console.log(req.name);
    
    // var query = url.parse(req.name, true).query;
    // console.log(query)
    // if(query.name){
    //     var greet = greetings[Math.floor(Math.random() * greetings.length)];
    //     console.log(greet);
    //     res.write(`\n${greet} ${query.name}`);
    // }
    // else{
    //     res.write('Hello World!'); 
    // }
    // res.end(); 
    res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  console.log(txt);
  res.write(txt);
  res.end();
}).listen(8080); 
