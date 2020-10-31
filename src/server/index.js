// ------------------------------------- Import modules
const routeHandlers = require('./route_functions.js');
var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// ------------------------------------- INITIATE SERVER
const app = express();

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    // !!! What is the difference among the two?
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// Designate what port the app will listen on
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


// ------------------------------------- ROUTES
// ------ 1) POST route (counter to formHandler)
// --------- a) The formHandler sends the text via POST
// --------- b) The text is stored in an object in file "route_functions"
app.post('/postTextToAnalyse', routeHandlers.postTextToAnalyse);