<<<<<<< HEAD
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};
=======
/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var results = [];
var fs = require('fs');
>>>>>>> c263d31c359f566c36bf543719f378e8f2a20d5d

var messages = [];

<<<<<<< HEAD
module.exports = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);

  if (request.url.indexOf('/classes/messages') === -1) {
    sendResponse(response, '', 404);
  } else if (request.method === 'GET') {
    sendResponse(response, {results: messages});
  } else if (request.method === 'POST') {
    collectData(request, function(message) {
      messages.push(message);
      sendResponse(response, {results: messages}, 201);
    });
  } else if (request.method === 'OPTIONS') {
    sendResponse(response, {results: messages}, null);
  }

};
=======
  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  var index = fs.readFileSync('../client/index.html');
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/JSON";
  var statusCode = 200;
  if (request.url === '/') {
    headers['Content-Type'] = "text/html";
    response.writeHead(statusCode, headers);
    response.end(index);
  }
  if(request.method === "GET" && request.url === "/styles/styles.css"){
    index = fs.readFileSync('../client/styles/styles.css');
    headers['Content-Type'] = "text/css";
    response.writeHead(statusCode, headers);
    response.end(index);
  }
  if(request.method === "GET" && request.url === "/bower_components/jquery/dist/jquery.js"){
    index = fs.readFileSync('../client//bower_components/jquery/dist/jquery.js');
    headers['Content-Type'] = "text/html";
    response.writeHead(statusCode, headers);
    response.end(index);
  }
  if(request.method === "GET" && request.url === "/bower_components/underscore/underscore.js"){
    index = fs.readFileSync('../client/bower_components/underscore/underscore.js');
    headers['Content-Type'] = "text/html";
    response.writeHead(statusCode, headers);
    response.end(index);
  }
  if(request.method === "GET" && request.url === "/env/config.js"){
    index = fs.readFileSync('../client/env/config.js');
    headers['Content-Type'] = "text/html";
    response.writeHead(statusCode, headers);
    response.end(index);
  }
  if(request.method === "GET" && request.url === "/scripts/app.js"){
    index = fs.readFileSync('../client/scripts/app.js');
    headers['Content-Type'] = "text/html";
    response.writeHead(statusCode, headers);
    response.end(index);
  }
  if(request.method === "GET" && request.url === "/images/whitebrick.jpg"){
    index = fs.readFileSync('../client/images/whitebrick.jpg');
    headers['Content-Type'] = "text/html";
    response.writeHead(statusCode, headers);
    response.end(index);
  }

  console.log("Serving request type " + request.method + " for url " + request.url);



  if (request.url.indexOf('classes') === -1) {
    statusCode = 404;
  }
  else if(request.method === 'POST'){
    statusCode = 201;
    request.addListener('data', function(message) {
      results.push(JSON.parse(message));
    });
  } 

  // The outgoing status.

  // See the note below about CORS headers.
  // var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  // headers['Content-Type'] = "application/JSON";
>>>>>>> c263d31c359f566c36bf543719f378e8f2a20d5d

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
<<<<<<< HEAD
  response.end(JSON.stringify(data));
=======
  console.log(response.statusCode);
  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  response.end(JSON.stringify({
    results: results
  }));
>>>>>>> c263d31c359f566c36bf543719f378e8f2a20d5d
};

var collectData = function(request, callback) {
  var data = "";
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(data));
  });
};
<<<<<<< HEAD
=======

exports.requestHandler = requestHandler;

>>>>>>> c263d31c359f566c36bf543719f378e8f2a20d5d
