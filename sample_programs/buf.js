var buffer = new Buffer.alloc(26)
for (var i = 0 ; i < 26 ; i++) {
    buffer[i] = i + 97;
  }
console.log("buffer 1:", buffer.toString());  
/*console.log(buffer.toString('ascii'));       
console.log(buffer.toString('ascii',0,10));   
console.log(buffer.toString('utf8',0,5));    
console.log(buffer.toString(undefined,0,10));
*/
var buffer2 = new Buffer.alloc(buffer.length);
buffer.copy(buffer2); 
console.log("buffer 2:", buffer2.toString());

var json = buffer.toJSON(buffer);
console.log("json output of buffer1:", json);

console.log(buffer.slice(0,5).toString(), "out of", buffer.length, "allocations");