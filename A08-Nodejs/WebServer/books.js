var fs = require("fs");
var http = require("http");
var url = require("url");

var contents = "";

fs.readFile("display.html", function(err, info){
    if(err){
        console.log("ERROR:File not found!");
        return 1;
    }
    contents = info.toString();
});
console.log("Completed reading file.");

http.createServer(function (req, res) {
    
    var query = url.parse(req.url, true).pathname;
    if(query==="/books"){
        res.write(`${contents}`);
    }
    else{
        res.write('Hello World!'); 
    }
    res.end(); 
}).listen(8080); 
