var fs = require('fs');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};

var messages = [];

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

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
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

exports.requestHandler = requestHandler;
