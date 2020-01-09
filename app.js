var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

// My First Route :D
app.get('/', function(req, res){
    // __dirname is the projects directory 
    res.sendFile(path.join(__dirname, "Views","index.html"));
});

// Tells express to serve up the files located by the requested
// path; in our case the Views Folder
app.use(express.static(path.join(__dirname, 'Views')));

app.use('/', router);

app.listen(7777, function()
{
    console.log("Running on Port 7777");    
});