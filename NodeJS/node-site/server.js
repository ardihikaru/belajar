/*// import the http module
var http = require('http');

// handle sending requests and returning responses
function handleRequests(req, res){
    // return string
    res.end('Hello World!');
}

// create the server
var server = http.createServer(handleRequests);

// start server and listen to port x
server.listen(8080, function(){
   console.log('Listening on port 8080');
});*/

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// use EJS and Express Layouts: need to be set BEFORE setting ROUTER!
app.set('view engine', 'ejs');
app.use(expressLayouts);

// route our app
var router = require('./app/routes'); // no need to write the extension .js
app.use('/', router);

// // use EJS and Express Layouts
// app.set('view engine', 'ejs');
// app.use(expressLayouts);

// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function(){
   console.log('app started!');
});

// biar gak pake restart (NODEMON), install di windows: npm install nodemon -g --no-optional
// create file in CMD windows: echo.>routes.js
// EJS layout:
//    $ npm install ejs --g --no-optional
//    $ npm install express-ejs-layouts --save -g --no-optional