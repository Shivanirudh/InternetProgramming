var events = require('events');
var eventEmitter = new events.EventEmitter();

var helper = function listenFunction(){
    console.log("Please help me");
}

eventEmitter.on("help", helper);

eventEmitter.emit("help");