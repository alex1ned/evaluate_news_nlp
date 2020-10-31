function validateInput(inputText) {
    if (inputText.value.trim()) {
        return true;
    }
    return false;
}

function moveTextToResults(textElement) {
    const elementToSet = document.querySelector(".analysed-text");
    elementToSet.innerHTML = textElement.value;
    textElement.value = "";
}

const postTextToServer = async (url="", text = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(text),
        });

        if (response.ok) {
            const JSONresponse = await response.json();
            console.log(JSONresponse);
            return JSONresponse;
        }
    }
    catch(error) {
        console.log(error);
    }
};

const updateUI = (theSentiment = {}) => {
    const resultsParent = document.querySelector('ul.results');
    
    const sentimentScore = document.querySelector('li.sentimentScore');
    const subjectivity = document.querySelector('li.subjectivity');
    const confidence = document.querySelector('li.confidence');
    const irony = document.querySelector('li.irony');
    const agreement = document.querySelector('li.agreement');

    sentimentScore.innerHTML = `Score: ${theSentiment.score}`;
    subjectivity.innerHTML = `Subjectivity: ${theSentiment.subjectivity}`;
    confidence.innerHTML = `Confidence: ${theSentiment.confidence} from max. 100`;
    irony.innerHTML = `Irony: ${theSentiment.irony}`;
    agreement.innerHTML = `Agreement: ${theSentiment.agreement}`;

    resultsParent.appendChild(sentimentScore);
    resultsParent.appendChild(subjectivity);
    resultsParent.appendChild(confidence);
    resultsParent.appendChild(irony);
    resultsParent.appendChild(agreement);
}

export {
    validateInput,
    moveTextToResults,
    postTextToServer,
    updateUI
}