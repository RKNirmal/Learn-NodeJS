var fs = require("fs")
fs.open("new.txt", "r+", function (err,data){
    if (err) throw err;
    console.log("new.txt file opened");
    console.log(fs.readFileSync(data).toString());
});

fs.readFile("new.txt", function (err,data){
    if (err) throw err;
    console.log("async read:\n", data.toString());
    console.log(fs.statSync("new.txt"));
})
fs.appendFile("new.txt", '\nwrite this asynchronously to the file', (err) => {
    if (err) throw err;
    console.log('\nThe "data to append" was appended to file!');
  });
fs.appendFileSync("new.txt", "\nwrite this synchronously to the file");
