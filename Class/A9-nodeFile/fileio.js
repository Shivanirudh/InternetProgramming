var buf = new Buffer.alloc(1024);
var fs = require('fs');

fs.open("file.txt", "r+", function(err, fd){
    //Open file
    if(err){
        console.log(err);
        console.log("Error opening file");
    }

    //Read file
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
            console.log("Error reading file");
        }
        console.log("-----------------------------------------------------------------------------");
        console.log("Contents of file before truncate:");
        console.log(buf.slice(0, bytes).toString());

        //Truncate file
        fs.truncate("file.txt", 50, function(err, bytes){
            if (err){
                console.log(err);
                console.log("Error truncating file");
            }
            console.log("-----------------------------------------------------------------------------");
            console.log("Contents of file after truncate:");
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err) {
                    console.log(err);
                    console.log("Error reading file");
                }
                  
                //Print only read bytes to avoid junk.
                if(bytes > 0) {
                    console.log(buf.slice(0, bytes).toString());
                }
   
                //Close file.
                fs.close(fd, function(err) {
                    if (err) {
                        console.log(err);
                        console.log("Error closing file");
                    }
                });
            });
        });

    });
});