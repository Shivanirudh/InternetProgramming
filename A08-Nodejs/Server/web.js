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

const read = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`\n${greetings[Math.floor(Math.random() * greetings.length)]}`);
http.createServer(function (req, res) {
    
    var query = url.parse(req.name, true);
    if(query.name){
        var greet = greetings[Math.floor(Math.random() * greetings.length)];
        console.log(greet);
        res.write(`\n${greet} ${query.name}`);
    }
    else{
        res.write('Hello World!'); 
    }
    res.end(); 
}).listen(8080); 
read.close();
