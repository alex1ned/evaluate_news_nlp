// ------------------------------------- IMPORT files
const getSentiment = require('./apicall.js');
const dotenv = require('dotenv');
dotenv.config();

// ------------------------------------- API Variables
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;
const language = "&lang=en";
const textPrefix = "&txt=";
const modelType = "&model=general";

let urlToAPI = `${baseURL}${API_KEY}${language}${textPrefix}`;

// Function transposes the API results to meaningful information
const transposeAPIresponse = (APIobject = {} ) => {
    const theScore = APIobject.score_tag;
    const theIrony = APIobject.irony;
    const theAgreement = APIobject.agreement;
    const theSubjectivity = APIobject.subjectivity;

    const scoreTag = {
        'P+': "Strongly positive",
        'P': "Positive",
        'NEU': "Neutral",
        'N': "Negative",
        'N+': "Strongly negative",
        'NONE': "No sentiment detected"
    };

    const agreementTag = {
        "AGREEMENT": "The different text elements have the same polarity",
        "DISAGREEMENT": "There is disagreement between the different text elements' polarity"
    }

    const subjectivityTag = {
        "OBJECTIVE": "The text does not have any marks of subjectivity",
        "SUBJECTIVE": "The text appears to have subjective bias"
    }

    const ironyTag = {
        "NONIRONIC": "The text does not have marks of irony",
        "IRONIC": "The text seems to be ironic"
    }

    let formattedAPIresponse = {
        confidence: APIobject.confidence,
        score: scoreTag[theScore],
        irony: ironyTag[theIrony],
        agreement: agreementTag[theAgreement],
        subjectivity: subjectivityTag[theSubjectivity]
    };

    return formattedAPIresponse;
};

// Object stores the information 
const routeFunctions = {
    // Function stores the text to analyse in analysis object
    postTextToAnalyse: async function(req, res) {
        const receivedText = req.query;
        if (receivedText) {
            const textToAnalyse = req.body.text;
            
            // Call API here
            const apiResponse = await getSentiment(urlToAPI, textToAnalyse, modelType);                
            let analysis = transposeAPIresponse(apiResponse);
            res.status(201).send(analysis);
        }
        else {
            res.status(400).send();
        }
    }
};

module.exports = routeFunctions;