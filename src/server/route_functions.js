// ------------------------------------- IMPORT files
const getSentiment = require('./apicall.js');
const dotenv = require('dotenv');
const fetch = require("node-fetch");
dotenv.config();

// ------------------------------------- API Variables
const baseURL = "https://api.meaningcloud.com/sentiment-2.1&key=";
const API_KEY = process.env.API_KEY;
const language = "&lang=en";
const textPrefix = "&txt=";
const modelType = "&model=general";

let urlToAPI = `${baseURL}${API_KEY}${language}${textPrefix}`;


let analysis = {};
const routeFunctions = {
    // 1) function stores the text to analyse in analysis object
    postTextToAnalyse: async function(req, res) {
        const receivedText = req.query;
        if (receivedText) {
            const textToAnalyse = req.body.text;
            
            // Call API here
            const apiResponse = await getSentiment(urlToAPI, textToAnalyse, modelType);            
            
            // Set parameters we would like to see on app
            analysis = {
                confidence: apiResponse.confidence,
                score: apiResponse.score_tag,
                irony: apiResponse.irony,
                agreement: apiResponse.agreement,
                subjectivity: apiResponse.subjectivity
            }
            
            // res.status(201).send(apiResponse);
            res.status(201).send(analysis);

        }
        else {
            res.status(400).send();
        }
    },

    // 2) function returns the complete analysis object
    getAnalysis: function(req, res) {
        res.send(analysis);
    }
};

module.exports = routeFunctions;