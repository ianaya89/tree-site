var express = require('express');
var http = require('http');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	//app.set('view cache', true);

	//app.use(express.cookieParser());
	//app.use(express.session({secret: 'lalala secret'}))

	//Connect framework --> MiddleWare
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + "/public"));

	app.use(function(req,res){
		res.send(404, "no existe man");
	});

	app.use(function(err, req, res, next){
		res.status(err.status || 404);
		res.send(err.message);
	});

});


//app.get("/", function(request, response){
	//response.render("home", { title: "Having fun with Express"});
	//response.render("home");
	//response.sendFile("home.html");
	//response.send(request.get('user-agent'));
	//response.send(request.accepts(['html','text','json'])); 
	//response.send(request.acceptsCharset('utf-8') ? 'yes' : 'no');
	//response.send(request.acceptedLanguages);
	//response.json({message: "piola amigo"});

	/*response.format(
	{
		html: function () {respons  e.send("<h1>Body</h1>"); },
		json: function () {response.json({ message: "Body"}); },
		text: function () {response.send("Body") }
	});*/
//});
     
app.get("/", function(request, response){
	response.render("home");
});

app.get("/home", function(request, response){
	response.render("home");
});

app.get("/nosotros", function(request, response){
	response.render("about");
});

app.get("/servicios", function(request, response){
	response.render("services");
});

app.get("/contacto", function(request, response){
	response.render("contact");
});	



/*app.param('name', function(req,res,next,name){
	
	if(name !== 'jota')
	{
		req.name = name;
		next();
	}
	else
	{
		next(new Error("no found"));
	}

});*/

/*app.get("/name/:name", function (req,res,next){

	req.session.name = req.name;
	res.cookie('name', req.name).send('<p>'+ req.name+'</p>');

});*/

//app.get("/name", function (req,res){
//	res.send(req.cookies.name);
//	res.send(req.session.name);
//});

/*app.get("/hi", function(request, response){
	var message = [
		"<h1>Hello, Express!</h1>",
		"<p>Welcome</p>",
		"<p>Express is:</p>",
		"<ul>",
		"<li>fast</li>",
		"<li>fun</li>",
		"<li>flexible</li>",
		"</ul>" ].join("\n");

	response.send(message);
});
app.get("/users/:userId", function(request, response){
	response.send("<h1>Hello, User #" + request.params.userId + "! </h1>")
});

app.post("/users", function(request, response){
	response.send("Creating a new user: " + request.body.username);
});

app.get(/\/users\/(\d*)\/?(edit)?/, function(request, response){
	// /users/10
	// /users/10/
	// /users/10/edit
	var message = "user #" + request.params[0] + "'s profile";

	if(request.params[1] === 'edit')
		message = "Editing " + message;
	else
		message = "Viewing " + message;

	response.send(message);

});*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
 