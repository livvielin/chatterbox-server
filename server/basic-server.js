/* Import node's http module: */
var http = require("http");
var handleRequest = require("./request-handler.js");

<<<<<<< HEAD
=======
// Every server needs to listen on a port with a unique number. The
// standard port for HTTP servers is port 80, but that port is
// normally already claimed by another server and/or not accessible
// so we'll use a standard testing port like 3000, other common development
// ports are 8080 and 1337.
>>>>>>> c263d31c359f566c36bf543719f378e8f2a20d5d
var port = 3000;

var ip = "127.0.0.1";

<<<<<<< HEAD
var server = http.createServer(handleRequest);
=======

var handleRequest = require('./request-handler.js');

// We use node's http module to create a server.
//
// The function we pass to http.createServer will be used to handle all
// incoming requests.
//
// After creating the server, we will tell it to listen on the given port and IP. */

var server = http.createServer(handleRequest.requestHandler);
>>>>>>> c263d31c359f566c36bf543719f378e8f2a20d5d
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
