'use strict';

var util = require('util');

// default greeting
var greeting = "Hello";

/*
 You should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  hello,
  helloPost,
  updateGreeting,
};

/*
  GET /hello?name={value}

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('%s, %s!', greeting, name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

//POST /hello name
function helloPost(req, res, next) {
  var hello = util.format('%s, %s!', greeting, req.body.name);
  res.json(hello);
}


// PUT /hello
function updateGreeting (req, res) {
  greeting = req.body.greeting;
  res.json(util.format('Greeting message updated to %s', greeting));
}


