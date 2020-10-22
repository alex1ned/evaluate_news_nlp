var path = require('path')
const express = require('express')

// ------------------ API START
const mockAPIResponse = require('./mockAPI.js')

const dotenv = require('dotenv');
dotenv.config();

// !!! 2) ... like this?
const API_KEY = process.env.API_KEY;

// ------------------ API END

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // !!! What is the difference among the two?
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
