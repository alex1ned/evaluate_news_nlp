const getSentiment = require('./apicall.js');

// ------------------------------------- Global Variables
const baseURL = "https://api.meaningcloud.com/sentiment-2.1&key=";
// --------- API CREDENTIALS
const dotenv = require('dotenv');
dotenv.config();
// !!! 2) ... like this?
const API_KEY = process.env.API_KEY;
let language = "&lang=en";
let textPrefix = "&txt=";

let urlToAPI = `${baseURL}${API_KEY}${language}${textPrefix}`;


let analysis = {};
const routeFunctions = {
    // 1) function stores the text to analyse in analysis object
    postTextToAnalyse: function(req, res) {
        const receivedText = req.query;
        if (receivedText) {
            newText = analysis.rawText = req.body;
            // res.status(201).send(newText);

            // Call API here
            const apiResponse = getSentiment(urlToAPI, newText);
            
            console.log(apiResponse);
            res.status(201).send(apiResponse);

        }
        else {
            res.status(400).send();
        }
    },

    // 3) function returns the complete analysis object
    getAnalysis: function(req, res) {
        res.send(analysis);
    }
};

module.exports = routeFunctions;
// module.exports = analysis;