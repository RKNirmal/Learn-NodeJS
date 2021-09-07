**NodeJs**

**What is Node Js?**

Node.js is a platform for easily creating fast and scalable network applications that is built on Chrome's JavaScript runtime. Node.js employs an event-driven, non-blocking I/O model that is lightweight and efficient, making it ideal for data-intensive real-time applications that run across distributed devices.

The github wiki link below contains an exhaustive list of projects, applications, and companies that use Node.js. eBay, General Electric, GoDaddy, Microsoft, PayPal, Uber, Wikipins, Yahoo!, and Yammer are among the companies on this list.

**Features of Node Js**

- **Asynchronous and Event Driven:**  All APIs in the Node.js library is asynchronous, which means they are not blocking. It essentially means that a Node.js-based server will never have to wait for an API to return data. After calling an API, the server moves on to the next one, and a Node.js notification mechanism assists the server in receiving a response from the previous API call.
- **Very Fast:** Node.js library is very fast in code execution because it is built on Google Chrome's V8 JavaScript Engine.
- **Single Threaded but Highly Scalable:** Node.js employs a single-threaded model that employs event looping. In contrast to traditional servers, which create limited threads to handle requests, the event mechanism allows the server to respond in a non-blocking manner and makes the server highly scalable. Node.js employs a single threaded programme, and the same programme can handle a much greater number of requests than traditional servers such as Apache HTTP Server.
- **No buffering:** Data is never buffered in Node.js applications. These programmes simply output data in chunks.

The following are some of the areas where Node.js has proven to be an excellent technology partner.

- Applications that are I/O bound
- Applications for Data Streaming
- Extensive Data Applications that run in real time (DIRT)
- Applications based on JSON APIs
- Applications on a Single Page

The three most important components of a Node.js application are as follows: −

- Import required modules: To load Node.js modules, we use the require directive.
- Live Demonstration: Create a server that will listen for client requests in the same way that Apache HTTP Server does.
- Read the request and return the response: The server that was created earlier will read the HTTP request made by the client, which can be a browser or a console, and return the response.

Example:
```
process.stdin.on("data", (data) => {
const name = data.toString().trim().toUpperCase();
if (name !== "") {
process.stdout.write(`Hello ${name}!`);
} else {
process.stderr.write("Input was empty.");
}
});
}
```
Input:
```
Nirmal
```
Output:
```
Hello NIRMAL!
```

**Node.js - REPL Terminal**

REPL is an abbreviation for Read Eval Print Loop, and it refers to a computer environment similar to a Windows console or a Unix/Linux shell in which a command is entered and the system responds with an output in an interactive mode. A REPL environment is included with Node.js or Node. It carries out the following functions: −

- **Read:** reads the user's input, parses it into a JavaScript data structure, and saves it in memory.
- **Eval:** takes the data structure and evaluates it.
- **Print:** The result is printed when you press the Print button.
- **Loops:** Loops the preceding command until the user presses ctrl-c twice.

Node's REPL feature is extremely useful for experimenting with Node.js code and debugging JavaScript code.

**Commands for REPL:**

1) The current command is terminated by pressing ctrl + c.
1) The Node REPL is terminated by pressing ctrl + c twice.
1) The Node REPL is terminated by pressing ctrl + d.
1) Using the Up/Down keys: you can view the command history and modify previous commands.
1) tab Keys: list of current commands.
1) .help: list of all commands.
1) .break: multiline expression exit.
1) .clear: multiline expression exit
1) .save filename: This command saves the current Node REPL session to a file. 
1) . load filename: In the current Node REPL session, load file content

**Stopping REPL:**

you must use ctrl-c twice or ctrl-d once to exit the Node.js REPL.

**Node.js NPM**

Node Package Manager (NPM) has two main features: 

1. Online repositories for node.js packages/modules that can be searched on search.nodejs.org
1. A command-line utility for installing Node.js packages, managing their versions, and managing their dependencies.

**Installing Modules using NPM:**
```
$ npm install <Module Name>
```
**Uninstalling Modules using NPM:**
```
$ npm uninstall <Module Name>
```
**Update Modules using NPM:**
```
$ npm update <Module Name>
```
**Global vs Local Installation:**

NPM installs any dependency in the local mode by default. Local mode refers to the installation of the package in the node modules directory, which is located in the same folder as the Node application. Locally installed packages can be accessed using the require() method. For example, when we installed the express module, it created a node modules directory in the current directory where the express module was installed.

Packages and dependencies that have been installed globally are saved in the system directory. Such dependencies can be used in any node.js CLI function but cannot be imported directly using require() in a Node application. Let us now try installing the express module via global installation.

**Using package.json:**

Package.json is found in the root directory of any Node application/module and is used to define the properties of a package. Let's look at the package.json file for the express package, which is located in node modules/express/.

**Attributes:**

1. json name:the package's name 
1. version:the package's version 
1. homepage: package’s homepage
1. description: description of the package 
1. contributors: name of the contributors to the package
1. author: author of the package 
1. dependencies: dependencies list. NPM will install all of the dependencies listed here in the package's node module folder automatically.
1. repository: repository type and URL of the package
1. main: package entry point
1. Keywords: keywords

**Concept of Node.js Callbacks**

What exactly is a callback?

A function's asynchronous equivalent is a callback. When a task is completed, a callback function is invoked. Callbacks are extensively used by Node. Node's APIs are all written in such a way that callbacks are supported.

For example, a function to read a file may begin reading the file and immediately return control to the execution environment so that the next instruction can be executed. When the file I/O is finished, it will call the callback function, passing it the file's content as a parameter. As a result, there is no blocking or waiting for File I/O. Because of this, Node.js is highly scalable, as it can handle a large number of requests without waiting for any function to return results.

**Blocking Code Example:**


1. **Create a text file named input.txt with the following content** 


Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!


2. **Create a js file named main.js with the following code** 

```
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
```

3. **Now run the main.js to see the result** 
```
$ node main.js
```

4. **Verify the Output.**
```
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended
```

**Non-Blocking Code Example**


1. **Create a text file named input.txt with the following content.**
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
2. **Update main.js to have the following code** 
```
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
if (err) return console.error(err);
console.log(data.toString());
});
console.log("Program Ended");
```
3. **Now run the main.js to see the result** 
```
$ node main.js
```
4. **Verify the Output.**
```
Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```
These two examples demonstrate the distinction between blocking and non-blocking calls.

1. The first example shows that the programme blocks until it reads the file and then proceeds to end the programme.
1. The second example shows that the programme does not wait for the file to be read and instead prints "Program Ended" while continuing to read the file without blocking.

As a result, a blocking programme executes in a very sequential manner. It is easier to implement the logic in programming, but non-blocking programmes do not execute in sequence.

If a programme must use data to be processed, it should do so within the same block to ensure sequential execution.

**Node.js - Event Loop**

Although Node.js is a single-threaded application, it can support concurrency through the use of event and callbacks. Because Node.js APIs are asynchronous and single-threaded, they rely on async function calls to maintain concurrency. The observer pattern is used by Node. Node thread maintains an event loop, and whenever a task is completed, it fires the corresponding event, signalling the event-listener function to execute.

**Event-Driven Programming**

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast. Compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur. In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

Many objects in a Node, such as a network, emit events. When a peer connects to the server, a fs event is generated. When a file is opened, readStream generates an event. The instances of events are all objects that emit events.EventEmitter.

**Example:**
```
//Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
console.log('connection succesful.');
// Fire the data\_received event
eventEmitter.emit('data\_received');
}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data\_received event with the anonymous function
eventEmitter.on('data\_received', function() {
console.log('data received succesfully.');
});
// Fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended.");
```
**Output:**
```
connection successful.
data received successfully.
Program Ended.
```
**Node.js Buffers**

Although pure JavaScript is Unicode friendly, it is not for binary data. It is necessary to handle octet streams when dealing with TCP streams or the file system. Node provides the Buffer class, which provides instances for storing raw data in a manner similar to an array of integers, but corresponds to a raw memory allocation outside the V8 heap.

The buffer class is a global class that can be used in an application without the need to import the buffer module.

**Making Buffers**

Node Buffer can be built in a number of different ways.

**Method 1:** To create an uninitiated Buffer of 10 octets, use ```var buf = new 
Buffer(10);```

**Method 2:** To create a Buffer from a given array, use ```var buf = new Buffer([10, 20, 30, 40, 50]);```

**Method 3:** To create a Buffer from a given string and optionally encoding type, use ```var buf = new Buffer("Simply Easy Learning", "utf-8);```

Although "utf8" is the default encoding, you can also use ```"ascii", "utf8", "utf16le", "ucs2", "base64", or "hex".```

**Return value:**

The number of octets written is returned by this method. If there is insufficient space in the buffer to fit the entire string, it will write a portion of it.

**Syntax for Reading from Buffers**

The syntax for reading data from a Node Buffer is as follows:
```buf.toString ([encoding][, start][, end])```

**Return value:**

This method decodes and returns a string from buffer data encoded with the character set encoding specified.

**Buffer to JSON Syntax Conversion**

```buf.toJSON```, which converts a Node Buffer into a JSON object ()

**Return value:**

This method returns the Buffer instance as a JSON representation.

**Syntax for Concatenating Buffers**

```Buffer.concat(list[, totalLength])``` is the syntax for concatenating Node buffers to a single Node Buffer.

**Compare Buffers:**

The method to compare two Node buffers is as follows:
```buf.compare(otherBuffer);```

**Syntax for Copying Buffers**

The following is the syntax for the method buf.copy, which is used to copy a node
```buffer (targetBuffer[, targetStart][, sourceStart][, sourceEnd])```

**Syntax of a Slice Buffer**

The method to get a sub-buffer of a node buffer is as follows: 
```buf.slice ([start][, end])```

**Syntax for Buffer Length**

The method to get the size of a node buffer in bytes is as follows: buf.length;

Example:
```
var buffer = new Buffer.alloc(26)
for (var i = 0 ; i < 26 ; i++) {
buffer[i] = i + 97;
}
console.log("buffer 1:", buffer.toString());  
console.log(buffer.toString('ascii'));       
console.log(buffer.toString('ascii',0,10));   
console.log(buffer.toString('utf8',0,5));    
console.log(buffer.toString(undefined,0,10));
var buffer2 = new Buffer.alloc(buffer.length);
buffer.copy(buffer2); 
console.log("buffer 2:", buffer2.toString());
var json = buffer.toJSON(buffer);
console.log("json output of buffer1:", json);
console.log(buffer.slice(0,5).toString(), "out of", buffer.length, "allocations");
```

**Streams in Node.js**

**What exactly are Streams?**

Streams are objects that allow you to continuously read data from a source and write data to a destination. There are four types of streams in Node.js. 

1. **Readable** - Stream which is used for read operation.
1. **Writable** - Stream which is used for write operation.
1. **Duplex** - Stream which can be used for both read and write operation.
1. **Transform** - A type of duplex stream where the output is computed based on input

Stream is an EventEmitter instance that throws multiple events at different times. Some of the most commonly used events, for example, are

1. **data** − This event is fired when there is data is available to read.
1. **end** − This event is fired when there is no more data to read.
1. **error** − This event is fired when there is any error receiving or writing data.
1. **finish** − This event is fired when all the data has been flushed to underlying system

**Reading from a Stream:**

Make a text file called input.txt with the following contents:

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Create a js file called main.js and paste the following code into it.
```
var fs = require("fs");
var data = '';
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');
// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
data += chunk;
});
readerStream.on('end',function() {
console.log(data);
});
readerStream.on('error', function(err) {
console.log(err.stack);
});
console.log("Program Ended");
```
**Output:**
```
Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```
**Writing to a Stream:**

Create a js file called main.js and paste the following code into it.
```
var fs = require("fs");
var data = 'Simply Easy Learning';
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error
writerStream.on('finish', function() {
console.log("Write completed.");
});
writerStream.on('error', function(err) {
console.log(err.stack);
});
console.log("Program Ended");
```
**Output:**
```
Program Ended
Write completed.
```
Now, open the output.txt file that was created in your current directory; it should contain the following information.
```
Simply Easy Learning
```
**Piping the Streams:**

Piping is a mechanism that allows us to use the output of one stream as the input of another. It is typically used to retrieve data from one stream and pass the output of that stream to another. There are no restrictions on piping operations. Now we'll look at a piping example that reads from one file and writes it to another.

Create a js file called main.js and paste the following code into it.
```
var fs = require("fs");
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);
console.log("Program Ended");
```
**Output:**
```
Program Ended
```
open the output.txt file that was created in your current directory; it should contain the following:
```
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```
**Chaining the Streams:**

Chaining is a mechanism for connecting the output of one stream to the output of another, resulting in a chain of multiple stream operations. It is typically associated with piping operations. Now we'll use piping and chaining to compress and then decompress a file.

Create a js file called main.js and paste the following code into it. 
```
var fs = require("fs");
var zlib = require('zlib');
// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));
console.log("File Compressed.");
```
**Output:**
```
File Compressed
```
You'll notice that input.txt has been compressed, and a file called input.txt.gz has been created in the current directory. Now, try decompressing the same file with the following code:
```
var fs = require("fs");
var zlib = require('zlib');
// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));
console.log("File Decompressed.");
```
**Output:**
```
File Decompressed
```
**Node.js- File system**

Node implements File I/O using simple wrappers around standard POSIX functions. 

**Syntax:**  ```var fs = require("fs")```

**Synchronous vs Asynchronous:**

Every method in the fs module has both synchronous and asynchronous implementations. Asynchronous methods use the last parameter as the callback function for the completion function and the first parameter of the callback function as error. It is preferable to use an asynchronous method over a synchronous method because the former never blocks a programme during execution, whereas the latter does.

**Example**

Create a text file named **input.txt** with the following content

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Let us create a js file named **main.js** with the following code
```
var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
if (err) {
return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});
// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
```
Now run the main.js to see the result 
```
$ node main.js
```

**Verify the Output.**
```
Synchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended
Asynchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```
**Open a File**

**Syntax**
```fs.open(path, flags[, mode], callback)```

**Parameters**

**path** - This is the string having file name including path.
**flags** - Flags indicate the behavior of the file to be opened. All possible values have
been mentioned below.
**mode** - It sets the file mode (permission and sticky bits), but only if the file was
created. It defaults to 0666, readable and writeable.
**callback** - This is the callback function which gets two arguments (err, fd).

**Flags**

Flags for read/write operations are

|1|**r**<br>Open file for reading. An exception occurs if the file does not exist.|
| :- | :- |
|2|**r+**<br>Open file for reading and writing. An exception occurs if the file does not exist.|
|3|**rs**<br>Open file for reading in synchronous mode.|
|4|**rs+**<br>Open file for reading and writing, asking the OS to open it synchronously. See notes<br>for 'rs' about using this with caution.|
|5|**w**<br>Open file for writing. The file is created (if it does not exist) or truncated (if it exists).|
|6|**wx**<br>Like 'w' but fails if the path exists.|
|7|**w+**<br>Open file for reading and writing. The file is created (if it does not exist) or truncated<br>(if it exists).|
|8|**wx+**<br>Like 'w+' but fails if path exists.|
|9|**a**<br>Open file for appending. The file is created if it does not exist.|
|10 |**ax**<br>Like 'a' but fails if the path exists.|
|11|**a+**<br>Open file for reading and appending. The file is created if it does not exist.|
|12|**ax+**<br>Like 'a+' but fails if the the path exists.|
**Example**
Let us create a js file named **main.js** having the following code to open a file input.txt for reading and writing.
```
var fs = require("fs");
// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
if (err) {
return console.error(err);
}
console.log("File opened successfully!");
});
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the Output.
```
Going to open file!
File opened successfully!
```
**Get File Information**

**Syntax**
```fs.stat(path, callback)```

**Parameters**:
**path** - This is the string containing the file name including the path.

**callback** - This is the callback function which gets two arguments (err, stats) where
**stats** is an object of fs.Stats type.


|**Sr.No.** |**Method & Description**|
| :- | :- |
|1|**stats.isFile()**<br>Returns true if file type of a simple file.|
|2|**stats.isDirectory()**<br>Returns true if file type of a directory.|
|3|**stats.isBlockDevice()**<br>Returns true if file type of a block device.|
|4|**stats.isCharacterDevice()**<br>Returns true if file type of a character device.|
|5|**stats.isSymbolicLink()**<br>Returns true if file type of a symbolic link.|
|6|**stats.isFIFO()**<br>Returns true if file type of a FIFO.|
|7|**stats.isSocket()**<br>Returns true if file type of asocket.|

**Example**
Let us create a js file named **main.js** with the following code.
```
var fs = require("fs");
console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
if (err) {
return console.error(err);
}
console.log(stats);
console.log("Got file info successfully!");
// Check file type
console.log("isFile ? " + stats.isFile());
console.log("isDirectory ? " + stats.isDirectory());
});
```
Now run the main.js to see the result
```
$ node main.js
```
Verify the Output.
```
Going to get file info!
{
dev: 1792,
mode: 33188,
nlink: 1,
uid: 48,
gid: 48,
rdev: 0,
blksize: 4096,
ino: 4318127,
size: 97,
blocks: 8,
atime: Sun Mar 22 2015 13:40:00 GMT-0500 (CDT),
mtime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT),
ctime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT)
}
Got file info successfully!
isFile ? true
isDirectory ? false
```
**Writing a File**
**Syntax**
```fs.writeFile(filename, data[, options], callback)```

This method will over-write the file if the file already exists. If you want to write into an existing
file then you should use another method available.

**Parameters
path** - This is the string having the file name including path.
**data** - This is the String or Buffer to be written into the file.
**options** - The third parameter is an object which will hold {encoding, mode, flag}. By
default. encoding is utf8, mode is octal value 0666. and flag is 'w'
**callback** - This is the callback function which gets a single parameter err that returns
an error in case of any writing error.

**Example**
```
Let us create a js file named **main.js** having the following code 
var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
if (err) {
return console.error(err);
}
console.log("Data written successfully!");
console.log("Let's read newly written data");
fs.readFile('input.txt', function (err, data) {
if (err) {
return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});
});
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the Output.
```
Going to write into existing file
Data written successfully!
Let's read newly written data
Asynchronous read: Simply Easy Learning!
```
**Reading a File**
**Syntax**
```fs.read(fd, buffer, offset, length, position, callback)```

This method will use file descriptor to read the file. If you want to read the file directly using the file name, then you should use another method available.

**Parameters**

**fd** - This is the file descriptor returned by fs.open().
**buffer** - This is the buffer that the data will be written to.
**offset** - This is the offset in the buffer to start writing at.
**length** - This is an integer specifying the number of bytes to read.
**position** - This is an integer specifying where to begin reading from in the file. If
position is null, data will be read from the current file position.
**callback** - This is the callback function which gets the three arguments, (err,
bytesRead, buffer).

**Example**
```
Let us create a js file named **main.js** with the following code 
var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
if (err) {
return console.error(err);
}
console.log("File opened successfully!");
console.log("Going to read the file");
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
if (err){
console.log(err);
}
console.log(bytes + " bytes read");
// Print only read bytes to avoid junk.
if(bytes > 0){
console.log(buf.slice(0, bytes).toString());
}
});
});
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the Output
```
Going to open an existing file
File opened successfully!
Going to read the file
97 bytes read
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```

**Closing a File**
**Syntax**
```fs.close(fd, callback)```

**Parameters**
**fd** - This is the file descriptor returned by file fs.open() method.
**callback** - This is the callback function No arguments other than a possible exception
are given to the completion callback.

**Example**
Let us create a js file named **main.js** having the following code 
```
var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
if (err) {
return console.error(err);
}
console.log("File opened successfully!");
console.log("Going to read the file");
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
if (err) {
console.log(err);
}
// Print only read bytes to avoid junk.
if(bytes > 0) {
console.log(buf.slice(0, bytes).toString());
}
// Close the opened file.
fs.close(fd, function(err) {
if (err) {
console.log(err);
}
console.log("File closed successfully.");
});
});
});
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the Output
```
Going to open an existing file
File opened successfully!
Going to read the file
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
File closed successfully.
```

**Truncate a File**
**Syntax**
```fs.ftruncate(fd, len, callback)```

**Parameters**

**fd** - This is the file descriptor returned by fs.open().
**len** - This is the length of the file after which the file will be truncated.
**callback** - This is the callback function No arguments other than a possible exception
are given to the completion callback.

**Example**
Let us create a js file named **main.js** having the following code
```
var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
if (err) {
return console.error(err);
}
console.log("File opened successfully!");
console.log("Going to truncate the file after 10 bytes");
// Truncate the opened file.
fs.ftruncate(fd, 10, function(err) {
if (err) {
console.log(err);
}
console.log("File truncated successfully.");
console.log("Going to read the same file");
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
if (err) {
console.log(err);
}
// Print only read bytes to avoid junk.
if(bytes > 0) {
console.log(buf.slice(0, bytes).toString());
}
// Close the opened file.
fs.close(fd, function(err) {
if (err) {
console.log(err);
}
console.log("File closed successfully.");
});
});
});
});
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the Output.
```
Going to open an existing file
File opened successfully!
Going to truncate the file after 10 bytes
File truncated successfully.
Going to read the same file
Tutorials
File closed successfully.
```

**Delete a File**
**Syntax**
```fs.unlink(path, callback)```

**Parameters**
**path** - This is the file name including path.
**callback** - This is the callback function No arguments other than a possible exception
are given to the completion callback

**Example**
Let us create a js file named **main.js** having the following code 
```
var fs = require("fs");
console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
if (err) {
return console.error(err);
}
console.log("File deleted successfully!");
});
```
Now run the main.js to see the result 
```
$ node main.js
```

Verify the Output:
```
Going to delete an existing file
File deleted successfully
```
**Create a Directory**
Syntax
```fs.mkdir(path[, mode], callback)```

Parameters

**path** - This is the directory name including path.
**mode** - This is the directory permission to be set. Defaults to 0777.
**callback** - This is the callback function No arguments other than a possible exception
are given to the completion callback.

**Example**
Let us create a js file named **main.js** having the following code 
```
var fs = require("fs");
console.log("Going to create directory /tmp/test");
fs.mkdir('/tmp/test',function(err) {
if (err) {
return console.error(err);
}
console.log("Directory created successfully!");
});
```
Now run the main.js to see the result
```
$ node main.js
```
Verify the Output.
```
Going to create directory /tmp/test
Directory created successfully!
```
**Read a Directory**
**Syntax**
```fs.readdir(path, callback)```

**Parameters**

**path** - This is the directory name including path.
**callback** - This is the callback function which gets two arguments (err, files) where files
is an array of the names of the files in the directory excluding '.' and '..'.

**Example**
Let us create a js file named **main.js** having the following code 
```
var fs = require("fs");
console.log("Going to read directory /tmp");
fs.readdir("/tmp/",function(err, files) {
if (err) {
return console.error(err);
}
files.forEach( function (file) {
console.log( file );
});
});
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the Output:
```
Going to read directory /tmp
ccmzx99o.out
ccyCSbkF.out
employee.ser
hsperfdata\_apache
test
test.txt
```
**Remove a Directory**
**Syntax**
```fs.rmdir(path, callback)```

**Parameters**
**path** - This is the directory name including path.
**callback** - This is the callback function No arguments other than a possible exception
are given to the completion callback.

**Example**
Let us create a js file named **main.js** having the following code 
```
var fs = require("fs");
console.log("Going to delete directory /tmp/test");
fs.rmdir("/tmp/test",function(err) {
if (err) {
return console.error(err);
}
console.log("Going to read directory /tmp");
fs.readdir("/tmp/",function(err, files) {
if (err) {
return console.error(err);
}
files.forEach( function (file) {
console.log( file );
});
});
});
```
Now run the main.js to see the result
```
$ node main.js
```
Verify the Output
```
Going to read directory /tmp
ccmzx99o.out
ccyCSbkF.out
employee.ser
hsperfdata\_apache
test.txt
```

**Node.js - Global Objects**

Global objects in Node.js are global in nature and are available in all modules. These objects do not need to be included in our application; instead, they can be used directly. Modules, functions, strings, and the object itself are examples of these objects.

**\_\_filename**


The **\_\_filename** represents the filename of the code being executed. This is the resolved absolute path of this code file. For a main program, this is not necessarily the same filename used in the command line. The value inside a module is the path to that module file.

**Example**
Create a js file named main.js with the following code 
// Let's try to print the value of \_\_filename
```console.log( \_\_filename );```

Now run the main.js to see the result 
```$ node main.js```

Based on the location of your program, it will print the main file name as follows 
``` /web/com/1427091028\_21099/main.js ```

**\_\_dirname**


The **\_\_dirname** represents the name of the directory that the currently executing script resides in.

**Example**
Create a js file named main.js with the following code 
// Let's try to print the value of \_\_dirname
```console.log( \_\_dirname );```

Now run the main.js to see the result
```$ node main.js```

Based on the location of your program, it will print current directory name as follows 
``` /web/com/1427091028\_21099 ```

**setTimeout(cb, ms)**


The **setTimeout(cb, ms)** global function is used to run callback cb after at least ms
milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days. This function returns an opaque value that represents the timer which can be used to clear the timer.

**Example**
Create a js file named main.js with the following code
```
function printHello() {
console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the output is printed after a little delay.
```
Hello, World!
```

**clearTimeout(t)**

The **clearTimeout(t)** global function is used to stop a timer that was previously created with
setTimeout(). Here **t** is the timer returned by the setTimeout() function.

**Example**
Create a js file named main.js with the following code 
```
function printHello() {
console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);
Live Demo  
// Now clear the timer
clearTimeout(t);
```
Now run the main.js to see the result 
```
$ node main.js
```
Verify the output where you will not find anything printed.

**setInterval(cb, ms)**

The **setInterval(cb, ms)** global function is used to run callback cb repeatedly after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.
This function returns an opaque value that represents the timer which can be used to clear the timer using the function **clearInterval(t)**.

**Example**
Create a js file named main.js with the following code
```
function printHello() {
console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);
```
Now run the main.js to see the result 
```
$ node main.js
```
The above program will execute printHello() after every 2 second. 

**Global Objects**

|**Sr.No.** |**Module Name & Description**|
| :- | :- |
|1 |**Console**<br>Used to print information on stdout and stderr.|
|2 |<p>**Process**</p><p>Used to get information on current process. Provides multiple events related to<br>process activities.</p>|

**Node.js - Utility Modules**

|**Sr.No.** |**Module Name & Description**|
| :- | :- |
|1 |OS Module<br>Provides basic operating-system related utility functions.|
|2 |Path Module<br>Provides utilities for handling and transforming file paths.|
|3 |Net Module<br>Provides both servers and clients as streams. Acts as a network wrapper.|
|4 |DNS Module<br>Provides functions to do actual DNS lookup as well as to use underlying operating<br>system name resolution functionalities.|
|5 |Domain Module<br>Provides ways to handle multiple different I/O operations as a single group.|

**Node.js - Web Module**

**What is a Web Server?**

A Web Server is a software application which handles HTTP requests sent by the HTTP client, like web browsers, and returns web pages in response to the clients. Web servers usually deliver html documents along with images, style sheets, and scripts.

Apache web server is one of the most commonly used web servers. It is an open source project.

**Web Application Architecture**
A Web application is usually divided into four layers

- **Client** - This layer consists of web browsers, mobile browsers or applications which
  can make HTTP requests to the web server.
- **Server** - This layer has the Web server which can intercept the requests made by the
  clients and pass them the response.
- **Business** - This layer contains the application server which is utilized by the web
  server to do the required processing. This layer interacts with the data layer via the
  database or some external programs.
- **Data** - This layer contains the databases or any other source of data.

**Creating a Web Server using Node**


Node.js provides an **http** module which can be used to create an HTTP client of a server. Following is the bare minimum structure of the HTTP server which listens at 8081 port.

Create a js file named server.js 
**File: server.js**
```
var http = require('http');
var fs = require('fs');
var url = require('url');
// Create a server
http.createServer( function (request, response) {
// Parse the request containing file name
var pathname = url.parse(request.url).pathname;
// Print the name of the file for which request is made.
console.log("Request for " + pathname + " received.");
// Read the requested file content from file system
fs.readFile(pathname.substr(1), function (err, data) {
if (err) {
console.log(err);
// HTTP Status: 404 : NOT FOUND
// Content Type: text/plain
response.writeHead(404, {'Content-Type': 'text/html'});
} else {
//Page found
// HTTP Status: 200 : OK
// Content Type: text/plain
response.writeHead(200, {'Content-Type': 'text/html'});
// Write the content of the file to response body
response.write(data.toString());
}
// Send the response body
response.end();
});
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
```
Next let's create the following html file named index.htm in the same directory where you created server.js.
**File: index.htm**
```
<html>
<head>
<title>Sample Page</title>
</head>
<body>
Hello World!
</body>
</html>
```
Now let us run the server.js to see the result 
```
$ node server.js
```
Verify the Output.
```
Server running at http://127.0.0.1:8081/
```

**Make a request to Node.js server**

Open ```http://127.0.0.1:8081/index.htm``` in any browser to see the following result.

Verify the Output at server end.
```
Server running at http://127.0.0.1:8081/
Request for /index.htm received.
```

**Creating Web client using Node**

A web client can be created using **http** module. Let's check the following example.
Create a js file named client.js 

**File: client.js**
```
var http = require('http');
// Options to be used by request
var options = {
host: 'localhost',
port: '8081',
path: '/index.htm'
};
// Callback function is used to deal with response
var callback = function(response) {
// Continuously update stream with data
var body = '';
response.on('data', function(data) {
body += data;
});
response.on('end', function() {
// Data received completely.
console.log(body);
});
}
// Make a request to the server
var req = http.request(options, callback);
req.end();
```
Now run the client.js from a different command terminal other than server.js to see the result 
```
$ node client.js
```
Verify the Output.
```
<html>
<head>
<title>Sample Page</title>
</head>
<body>
Hello World!
</body>
</html>
```
Verify the Output at server end.
```
Server running at http://127.0.0.1:8081/
Request for /index.htm received.
```


**childprocess**

https://nodejs.org/docs/latest-v15.x/api/child\_process.html#child\_process\_subprocess\_stdio

**2 broad categories**

**Asynchronous**

**1. childprocess.spawn(command[, args][, options]) -** spawns the child process asynchronously, without blocking the Node.js event loop. The child\_process.spawn() method spawns a new process using the given command, with command-line arguments in args. If omitted, args defaults to an empty array.

**2. childprocess.exec(command[, options][, callback]) -** opens/spawns a shell by default and executes the given input command and buffers the output (stdout and stderr) generated by shell as callback. (suitable for windows os as the code cannot be executed without running inside command or shell. so cmd or shell has to be spawned and arguments are passed to get desired output)

**3. childprocess.execFile(file[, args][, options][, callback]) -** same as exec, but the diiference is that, it doesnot spawns/opens shell by default. Itis efficient for Unix/Linux, macos based platform, since it doesnot need to be executed inside the cmd/shell like windows requires. Instead the file is directly spawned as new process

**4. childprocess.fork(modulePath[, args][, options]) -** The child\_process.fork() method is a special case of child\_process.spawn() used specifically to spawn new Node.js processes. Like child\_process.spawn(), a ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be passed back and forth between the parent and child. See subprocess.send() for details.

Keep in mind that spawned Node.js child processes are independent of the parent with exception of the IPC communication channel that is established between the two. Each process has its own memory, with their own V8 instances. Because of the additional resource allocations required, spawning a large number of child Node.js processes is not recommended.

**Synchronous:**

These 3 methods are synchronous and will block the Node.js event loop, pausing execution of any additional code until the spawned process exits. 

Blocking calls like these are mostly useful for simplifying general-purpose scripting tasks and for simplifying the loading/processing of application configuration at startup.

1. The child\_process.spawnSync()
2. child\_process.execSync()
3. child\_process.execFileSync()

All these commands are generally identical to the async version of itself, with the exception that the method will not return until the child process has fully closed. When a timeout has been encountered and killSignal is sent, the method won't return until the process has completely exited. If the child process intercepts and handles the SIGTERM signal and doesn't exit, the parent process will wait until the child process has exited.

**ChildProcess**

**options <Object>**

1. cwd <string> Current working directory of the child process.
2. env <Object> Environment key-value pairs. Default: process.env.
3. encoding <string> Default: 'utf8'
4. timeout <number> Default: 0
5. maxBuffer <number> Largest amount of data in bytes allowed on stdout or stderr. If exceeded, the child process is terminated and any output is truncated. See caveat at maxBuffer and Unicode. Default: 1024 \* 1024.
6. killSignal <string> | <integer> Default: 'SIGTERM'
7. uid <number> Sets the user identity of the process (see setuid(2)).
8. gid <number> Sets the group identity of the process (see setgid(2)).
9. windowsHide <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.
10. signal <AbortSignal> allows aborting the child process using an AbortSignal.

**callbacks:**

Called with the output when process terminates. (only for async version of exec and execFile)

1. error <Error>
2. stdout <string> | <Buffer>
3. stderr <string> | <Buffer>

**Events emitted:**

**1. close**

The 'close' event is emitted when the stdio streams of a child process have been closed

**2. disconnect**

The 'disconnect' event is emitted after calling the subprocess.disconnect() method in parent process or process.disconnect() in child process. After disconnecting it is no longer possible to send or receive messages, and the subprocess.connected property is false.

**3. error**

The 'error' event is emitted whenever:

1. The process could not be spawned, or

2. The process could not be killed, or

3. Sending a message to the child process failed.

**4. exit**

The 'exit' event is emitted after the child process ends. If the process exited, code is the final exit code of the process, otherwise null. If the process terminated due to receipt of a signal, signal is the string name of the signal, otherwise null

**5. message**

The 'message' event is triggered when a child process uses process.send() to send messages.

**6. spawn**

`	`The 'spawn' event is emitted once the child process has spawned successfully. If the child process does not spawn successfully, the 'spawn' event is not emitted and the 'error' event is emitted instead.



**Node.js - RESTful API**

**What is REST architecture?**

REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol. It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods. A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. Here each resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, JSON, XML but JSON is the most popular one.

**HTTP methods**

Following four HTTP methods are commonly used in REST based architecture.
1. **GET** - This is used to provide a read only access to a resource.
2. **PUT** - This is used to create a new resource.
3. **DELETE** - This is used to remove a resource.
4. **POST** - This is used to update a existing resource or create a new resource.

**RESTful Web Services**

A web service is a collection of open protocols and standards used for exchanging data between applications or systems. Software applications written in various programming languages and running on various platforms can use web services to exchange data over computer networks like the Internet in a manner similar to inter-process communication on a single computer. 

Web services based on REST Architecture are known as RESTful web services. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, which provides resource representation such as JSON and set of HTTP Methods.

**Creating RESTful for A Library**

Consider we have a JSON based database of users having the following users in a file

**users.json**:
```
{
"user1" : {
"name" : "mahesh",
"password" : "password1",
"profession" : "teacher",
"id": 1
},
"user2" : {
"name" : "suresh",
"password" : "password2",
"profession" : "librarian",
"id": 2
},
"user3" : {
"name" : "ramesh",
"password" : "password3",
"profession" : "clerk",
"id": 3
}
}
```
Based on this information we are going to provide following RESTful APIs.

|**Sr.No.** |**URI** |**HTTP Method** |**POST body** |**Result**|
| :- | :- | :- | :- | :- |
|1 |listUsers |GET |empty |Show list of all the users.|
|2 |addUser |POST |JSON String |Add details of new user.|
|3 |deleteUser |DELETE |JSON String |Delete an existing user.|
|4 |:id |GET |empty |Show details of a user.|

**List Users**
**server.js**
```
var express = require('express');
var app = express();
var fs = require("fs");
app.get('/listUsers', function (req, res) {
fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data)
console.log( data );
d( d )
Now try to access defined API using *URL: http://127.0.0.1:8081/listUsers* and *HTTP* 
```
**Method**

*GET* on local machine using any REST client. This should produce following result 
You can change given IP address when you will put the solution in production environment.
```
{
"user1" : {
"name" : "mahesh",
"password" : "password1",
"profession" : "teacher",
"id": 1
},
"user2" : {
"name" : "suresh",
"password" : "password2",
"profession" : "librarian",
"id": 2
},
"user3" : {
"name" : "ramesh",
"password" : "password3",
"profession" : "clerk",
"id": 3
}
}
```

**Add User**

Following API will show you how to add new user in the list. Following is the detail of the new user 
```
user = {
"user4" : {
"name" : "mohit",
"password" : "password4",
"profession" : "teacher",
"id": 4
}
}
res.end( data );
});
})
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})
```

**Show Detail**

Now we will implement an API which will be called using user ID and it will display the detail of the corresponding user.

***server.js***
```
var express = require('express');
var app = express();
var fs = require("fs");
var user = {
"user4" : {
"name" : "mohit",
"password" : "password4",
"profession" : "teacher",
"id": 4
}
}
app.post('/addUser', function (req, res) {
// First read existing users.
fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data)
data = JSON.parse( data );
data["user4"] = user["user4"];
console.log( data );
res.end( JSON.stringify(data));
});
})
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})
{
"user1":{"name":"mahesh","password":"password1","profession":"teacher","i
"user2":{"name":"suresh","password":"password2","profession":"librarian",
"user3":{"name":"ramesh","password":"password3","profession":"clerk","id"
"user4":{"name":"mohit","password":"password4","profession":"teacher","id
}
```
Now try to access defined API using *URL: http://127.0.0.1:8081/2* and *HTTP Method: GET* on local machine using any REST client. This should produce following result 
```
{"name":"suresh","password":"password2","profession":"librarian","id":2}
```

**Delete User**

This API is very similar to addUser API where we receive input data through req.body and then based on user ID we delete that user from the database. 

**server.js**
```
var express = require('express');
var app = express();
var fs = require("fs");
app.get('/:id', function (req, res) {
// First read existing users.
fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data)
var users = JSON.parse( data );
var user = users["user" + req.params.id]
console.log( user );
res.end( JSON.stringify(user));
});
})
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})
var express = require('express');
var app = express();
var fs = require("fs");
var id = 2;
app.delete('/deleteUser', function (req, res) {
// First read existing users.
fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data)
data = JSON.parse( data );
delete data["user" + 2];
console.log( data );
res.end( JSON.stringify(data));
});
})
```

Now try to access defined API using *URL: http://127.0.0.1:8081/deleteUser* and *HTTP Method:
DELETE* on local machine using any REST client. This should produce following result:
```
{"user1":{"name":"mahesh","password":"password1","profession":"teacher","id
"user3":{"name":"ramesh","password":"password3","profession":"clerk","id":3
```
