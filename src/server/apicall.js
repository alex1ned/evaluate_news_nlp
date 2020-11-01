const fetch = require("node-fetch");

const getSentiment = async (url, text, modelType) => {
    const response = await fetch(url + text + modelType);
    
    try {
        if (response.ok) {
            const response_js = await response.json();
            // console.log(response_js);
            return response_js;
        }
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = getSentiment;