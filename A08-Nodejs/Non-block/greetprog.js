var fs = require("fs");

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
})

read.question("What is your name?\n", (name) => {
    console.log(`\n${greetings[Math.floor(Math.random() * greetings.length)]} ${name}`);
    read.close();
})