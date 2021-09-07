var fs = require("fs");

fs.readFile('new.txt', function(err, data) {
    if (err) throw err;
    else {
        console.log(data.toString());
    }
});
console.log("This is printed before reading the text. Since the the read file is async function")
