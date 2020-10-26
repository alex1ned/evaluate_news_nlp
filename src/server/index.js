// ------------------ Import modules
const routeHandlers = require('./route_functions.js')

var path = require('path')
const express = require('express')



// ------------------ Global Variables
// --------- API CREDENTIALS
const dotenv = require('dotenv');
dotenv.config();
// !!! 2) ... like this?
const API_KEY = process.env.API_KEY;
// --------- OTHER
let apiResponse = [];



// ------------------ INITIATE APP
const app = express()
app.use(express.static('dist'))


app.get('/', function (req, res) {
    // !!! What is the difference among the two?
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// Designate what port the app will listen on
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })






// function postTextToAnalyse(req, res) {
//     console.log(req.body);
//     const newText = req.body;
// };









// ------ 1) POST route (counter to formHandler)
// --------- a) The formHandler sends the text via POST
app.post('/postTextToAnalyse', routeHandlers.postTextToAnalyse);
// --------- b) We store the text as string here
// --------- c) Then we go to POST ist to API

// ------ 2) Call API
// --------- a) POST request containing the text as string.
// --------- b) GET request retrieving the results.

// ------ 3) GET route (counter)
// --------- a) POST request containing the text as string.
// --------- b) GET request retrieving the results.
