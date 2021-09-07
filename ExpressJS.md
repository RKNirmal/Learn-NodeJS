**Express.js**

``` (https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express\_Nodejs/Introduction) ```

Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:

1. Write handlers for requests with different HTTP verbs at different URL paths (routes).

2. Integrate with "view" rendering engines in order to generate responses by inserting data into templates.

3. Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.

4. Add additional request processing "middleware" at any point within the request handling pipeline.

While Express itself is fairly minimalist, developers have created compatible middleware packages to address almost any web development problem.

Web frameworks often refer to themselves as "opinionated" or "unopinionated". Opinionated frameworks are those with opinions about the "right way" to handle any particular task, and tend to offer fewer choices for what components and approaches they can use. 

Express is unopinionated. You can insert almost any compatible middleware you like into the request handling chain, in almost any order you like. 

Express provides methods to specify what function is called for a particular HTTP verb (GET, POST, SET, etc.) and URL pattern ("Route"), and methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response. You can use Express middleware to add support for cookies, sessions, and users, getting POST/GET parameters, etc.

sample code to test express framework
***
``` 
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
```

**Explanation:**

The first two lines require() (import) the express module and create an Express application. This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

The middle part of the code (the three lines starting with app.get) shows a route definition. The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response object as arguments, and calls send() on the response to return the string "Hello World!"

The final block starts up the server on a specified port ('3000') and prints a log comment to the console. With the server running, you could go to localhost:3000 in your browser to see the example response returned.

**Express.js routes**

Routers are simply an endpoint of a server. For example, facebook.com/codeforgeek, here the codeforgeek is a route.

The Express application object also provides methods to define route handlers for all the other HTTP verbs. It includes the following verbs:

checkout(), copy(), delete(), get(), head(), lock(), merge(), mkactivity(), mkcol(), move(), m-search(), notify(), options(), patch(), post(), purge(), put(), report(), search(), subscribe(), trace(), unlock(), unsubscribe().

There is a special routing method, app.all(), which will be called in response to any HTTP method. This is used for loading middleware functions at a particular path for all request methods.
for ex:
``` 
const express = require('express');
const app = express();
const router = express.Router();
router.get('/home', (req,res) => {
    res.send('Hello World, This is home router');
});
router.get('/profile', (req,res) => {
    res.send('Hello World, This is profile router');
});
router.get('/login', (req,res) => {
    res.send('Hello World, This is login router');
});
router.get('/logout', (req,res) => {
    res.send('Hello World, This is logout router');
});
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
``` 

**Response methods:**
``` (https://expressjs.com/en/guide/routing.html) ```

1. res.download() 	Prompt a file to be downloaded.

2. res.end() 	End the response process.

3. res.json() 	Send a JSON response.

4. res.jsonp() 	Send a JSON response with JSONP support.

5. res.redirect() 	Redirect a request.

6. res.render() 	Render a view template.

7. res.send() 	Send a response of various types.

8. res.sendFile() 	Send a file as an octet stream.

9. res.sendStatus() Set the response status code and send its string representation as the response body.

**Route path based on string patterns**
``` (https://expressjs.com/en/guide/routing.html) ``` 
Here are some examples of route paths based on **string patterns**.

This route path will match acd and abcd.
``` 
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
})
``` 
This route path will match abcd, abbcd, abbbcd, and so on.
``` 
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
})
``` 
This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
``` 
app.get('/ab\*cd', function (req, res) {
    res.send('ab\*cd')
})
``` 
This route path will match /abe and /abcde.
``` 
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
})
``` 
Examples of route paths based on **regular expressions**:
This route path will match anything with an “a” in it.
``` 
app.get(/a/, function (req, res) {
    res.send('/a/')
})
``` 
This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
``` 
app.get(/.\*fly$/, function (req, res) {
    res.send('/.\*fly$/')
})
``` 

**Using middleware**
``` (https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express\_Nodejs/Introduction) ``` 

Middleware is used extensively in Express apps, for tasks from serving static files to error handling, to compressing HTTP responses. Whereas route functions end the HTTP request-response cycle by returning some response to the HTTP client, middleware functions typically perform some operation on the request or response and then call the next function in the "stack", which might be more middleware or a route handler. The order in which middleware is called is up to the app developer.

Note: The middleware can perform any operation, execute any code, make changes to the request and response object, and it can also end the request-response cycle. If it does not end the cycle then it must call next() to pass control to the next middleware function (or the request will be left hanging).

Most apps will use third-party middleware in order to simplify common web development tasks like working with cookies, sessions, user authentication, accessing request POST and JSON data, logging, etc.

express.static(), express.json() and express.urlencoded()are some of the basic middleware standardly available which is offered by express.js by default

Always add middleware before routes and should be in order. Express initializes the middleware which is specified in script order. If the order is not made correct, initializing the third-party middleware before initializing its dependency middlewares, might attract/throw error
syntax:
``` 
const express = require('express');
const app = express();
// An example middleware function
let a\_middleware\_function = function(req, res, next) {
    // ... perform some operations
    next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a\_middleware\_function);

// Function added with use() for a specific route
app.use('/someroute', a\_middleware\_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a\_middleware\_function);

app.listen(3000);
``` 

Example:
``` 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
router.get('/home', (req,res) => {
    res.send('Hello World, This is home router');
});
router.get('/profile', (req,res) => {
    res.send(' Hello World, This is profile router');
});
router.get('/login', (req,res) => {
    res.send('Hello World, This is login router');
});
router.get('/logout', (req,res) => {
    res.send(' Hello World, This is logout router');
});

// add middleware before routes
app.use(bodyParser.json());
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
``` 

here bodyParser is the middleware.

**Serving static files**
``` (https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express\_Nodejs/Introduction) ``` 

You can use the express.static middleware to serve static files, including your images, CSS and JavaScript (static() is the only middleware function that is actually part of Express). For example, you would use the line below to serve images, CSS files, and JavaScript files from a directory named 'public' at the same level as where you call node: ``` app.use(express.static('public')); ``` 

Any files in the public directory are served by adding their filename (relative to the base "public" directory) to the base URL. So, for example:

1. http://localhost:3000/images/dog.jpg
2. http://localhost:3000/css/style.css
3. http://localhost:3000/js/app.js
4. http://localhost:3000/about.html

You can call static() multiple times to serve multiple directories. If a file cannot be found by one middleware function then it will be passed on to the subsequent middleware (the order that middleware is called is based on your declaration order).

``` app.use(express.static('public')); ``` 

``` app.use(express.static('media')); ``` 

You can also create a virtual prefix for your static URLs, rather than having the files added to the base URL. For example, here we specify a mount path so that the files are loaded with the prefix "/media":

app.use('/media', express.static('public'));

Now, you can load the files that are in the public directory from the /media path prefix.
1. http://localhost:3000/media/images/dog.jpg
2. http://localhost:3000/media/video/cat.mp4
3. http://localhost:3000/media/cry.mp3

**Error handling in Express.js**
``` (https://codeforgeek.com/error-handling-in-express-using-middleware/) ``` 		
Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: (err, req, res, next).

For example:
``` 
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
``` 

These can return any content required, but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process!

Express comes with a built-in error handler, which takes care of any remaining errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. If you pass an error to next() and you do not handle it in an error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.

Express error handling middle-ware is very helpful in catching globally occurring errors without worrying about the Server to crash.

**Example:**

Here is simple Express Server with error handler middle-ware.

Server.js
``` 
var express = require('express');
var app = express();
var router = express.Router();
router.get('/',function(req,res) {
    //this line throws error.comment below line to see the app running normally.
    //not commenting this line throws error, as the below line is intended for the same
    throw new Error();
    res.send("Hello World!");
});
app.use('/',router);
app.use(function(err,req,res,next) {
    console.log(err.stack);
    res.status(500).send({"Error" : err.stack});
});
app.listen(3000);
``` 
Run the app using node Server.js command and visit ``` localhost:3000 ``` to view the app.

Run the app and hit localhost:3000 url. You should see following error in console and in browser too.


**HTTP headers**

HTTP is a stateless protocol. That means, once a http request-response cycle is complete, the client and server forget about each other.

HTTP client is nothing but whoever is accessing the internet whatever the device is capable of connecting to internet, say for example: mobile, laptops, desktops, IoT devices, all are the examples of an HTTP client. Whereas, the thing which manages the request from these clients are called HTTP Servers.

While requesting a page from site, for ex: ``` google.com```,  the site involves process of the client request and analyses the request given by the user and fetches the data back accordingly. 

**3 headers in HTTP:**

(refer mdn ``` https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers```) for broad list of available information in each headers. Below are for understanding and it is simpler in context obviously in this case)

1. General (contains general metadata of the request, like webpage, type of request made)

2. Response header - set by the server which receives the request from the client that has information like
    1. content-type: the type of data fetched in response to the client (html, encoding(utf8))
    2. set-cookie: contains cookie info’s like its key value pair (to attach it to every request the client makes once set by the server), expiry of the cookie (after which, the cookie will automatically get deleted/expired and no longer the client will have access to, that resetting the status of client authentication reset)
3. Request header - it has information of request made by client like,
    1. accept-encoding: what kind of data the client accepts (gzip, utf8)
    2. accept-language: what kind of language the client accepts the data when requested data fetched (en-US)
    3. set-cookie: contains cookie information if the client in his browser has a valid cookie to attach with the request (user-login)
    4. user-agent : the browser with the client requesting data for (mozilla, chrome)	

**Authentication options available**

Authentication is the process of making or proving something is valid. This is used to check whether a user exist and his credentials are valid.

Ordered based on increasing complexity. that said, low complexity doesn't intrepreted as low secured, rather the complexity describes the operation/functionalities happening behind with additional features getting involved with varied complexity levels that client may in need of while requesting it to the user

1. session
2. JSON Web tokens (JWT)
3. OAuth (google-api and other big tech company's apis, OAuth is protocol, gives access rights to the users trying to access different resources within the api)
    1. In-House
    2. Saas
4. Other Ad-Hoc

Session and JSON Web tokens(JWT) are usually used to identify who the user is. i.e it is mainly used for the purpose of "USER AUTHENTICATION"

Whereas OAuth in general, it is used for "USER AUTORISATION", where involves social logins like facebook, google sign-ins, it basically not only involves the need of who the user is we are talking about, but also which user is having rights to which resources. there comes "scope" of the user in picture

for ex: inside youtube api, users cannot edit or access or modify some of the resources within the api.

scope involves user have authorisation to access (just to make get request, or also have authorisation to edit the resources within the api). These are all defined in the scopes provided in the access token

**Stateless to stateful HTTP using cookie and session**

HTTP is a stateless protocol. That means , once a http request-response cycle is complete, the client and server forget about each other. This is why the usage of sessions and cookies come in to play.

For ex:

step 1. consider a Client (browser/front end application) and server being the Nodejs application
step 2. When the client makes a request to server, server automatically creates a session and stores it in the database
step 3. when the server, response to the client, it sends the cookie and it is saved in the browser. This cookie is pointed/referenced to the session stored in the database. The cookie contains the session id
step 4. After this, for every consecutive request made by the client to the server, so that the server knows who is requesting.
step 5. Thus, the use of cookie and session makes the connection between the server and client stateful.

**Difference b/w session and cookie**

The difference can be easily spotted on the places where the data is stored

1. Cookie - stored on browser - attach the cookie key value pair for every http request the browser makes - has an expiry set while creation for additional security - cookie is not used store any user credentials or any secret information, if that is done, then it will be a security hole/bug through which, the middleman/anyone can easily get the whole lot of credentials/secret info. of the user very easily.

2. session - stored on server side - i.e on expressjs session -  since session stores lots of data so it is obvious store that in server side rather than on the browser - it stores all the credentials/secret/info which is intended not to expose it to anyone, so that user/any middleman cant access/get that information so easily

``` package:express-session (only for local testing, not used for actual deployment)``` 



**Difference b/w cookie vs local storage vs session storage**

||Cookies|local|storageSession|
| :- | :- | :- | :- |
|Capacity|4kb|10mb|5mb|
|Browser|HTML4/5|HTML5|HTML5|
|Accessiblefrom|Any window|Any window|Same tab|
|Expires|Manual|Never|Tab close|
|Storage location|Browser&ServerBrowser|Browser only|Browser only|
|sent with request|Yes|No|No|

these commands are accessed within the client's browser by opening Dev tools

**localStorage:**

1. getItem (key:string) - get an item from local storage with reference to the key
2. removeItem (key:string) - delete an item from local storage with reference to the key
3. setItem (key, value) - create a item with value, in reference to the given key

**sessionStorage:**

1. getItem (key:string) - get an item from local storage with reference to the key
2. removeItem (key:string) - delete an item from local storage with reference to the key
3. setItem (key, value) - create a item with value, in reference to the given key

**cookie:**

create cookie:
``` document.cookie = 'name=anyName; path =/; expires=' + newDate(anyDate).toUTCString() ``` 

list cookie: 
``` document.cookie ``` 

cookie can be deleted only by expiration date. If any cookie want to be deleted, overwriting the cookie with the expired expiration date with the same key value pair and path
