var fs = require("fs");

const data = fs.readFileSync("new.txt")
console.log(data.toString());

console.log("This is printed after reading the text. Since the the read file is sync function. This is the best example to understand the blocking function")
