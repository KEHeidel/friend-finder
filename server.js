// npm packages

var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");

// express configuration
var app = express();

// sets an initial port
var PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});