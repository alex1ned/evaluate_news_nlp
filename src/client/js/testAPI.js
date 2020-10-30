const API_KEY = "e50686f90fa228c6acd6ffbf672666f6";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1&key=";
let language = "&lang=en";
let textPrefix = "&txt=";
let urlToAPI = `${baseURL}${API_KEY}${language}${textPrefix}`;

const getSentiment = async () => {
    const response = await fetch(urlToAPI + "Global equities have suffered their worst week since the ructions in March");
    
    try {
        if (response.ok) {
            const response_js = await response.json();
            console.log(response_js);
        }
    }
    catch(error) {
        console.log(error);
    }
}

export {
    getSentiment
}