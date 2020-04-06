const express = require('express');
const app = express(); //initialize

//how to serve up website: middleware (middle piece between input and output)
app.use(express.static('public')); //read from file system and pull in static directory called public

app.use('/css', express.static(__dirname + '/public/css')); //adding css = http://localhost:3000/css
app.use('/js', express.static(__dirname + '/public/src')); //adding js = http://localhost:3000/js
app.use('/js', express.static(__dirname + '/public/images'))
// also do with images if you add images - make sure they are in the public folder

//output that we want
app.listen(3000, function() {
    console.log('Server started at http://localhost:%s', 3000) 
});