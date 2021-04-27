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
    
    var query = url.parse(req.url, true).query;
    if(query.name){
        var greet = greetings[Math.floor(Math.random() * greetings.length)];
        res.write(`\n${greet} ${query.name}`);
    }
    else{
        res.write('Hello World!'); 
    }
    res.end(); 
}).listen(8080); 
