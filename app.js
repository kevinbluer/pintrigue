// for express
var express = require('express');

// for mongo
var mongoose = require('mongoose');

// create the express instance
var app = module.exports = express.createServer();

var Photo = require('./models/photo.js');

// configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "pintrigue session" }))
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	mongoose.connect('mongodb://localhost/test/');
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
	mongoose.connect('mongodb://pintrigue:p1ntr1gu3@alex.mongohq.com:10067/pintrigue');
    app.use(express.errorHandler()); 
});

mongoose.connection.on("open", function(){
  console.log("mongodb is connected.");
});

// ******************
// register endpoints
// ******************

/* ### example-1 ### */
app.get('/hello', function(request, response) {

	// say hello
	response.send('hello world');
});

/* ### get the images ### */
app.get('/images/get', function(request, response) {
		
	// search the mongo database for the photo
	Photo.find(function(err, photo){
		
		// respond with the photo
		response.send(photo);
  });
});

/* ### save an image ### */
app.post('/images/upload', function(request, response) {
	
	// create the photo
	photo = new Photo({
	  title: request.body.title,
	  content: request.body.content,
	  url: request.body.url
	});
	
	// save the photo
	photo.save(function(err) {
		// log the error to the console
		console.log(err);
		
		// send the error response
		response.send('{"status": "error"}');
	});
	
	// send the success response
	response.send('{"status": "ok"}');
	
});

/* ### example-1 ### */
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Pintrigue is Listening on " + port);
});