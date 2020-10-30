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
            const JSONresponse = await response.json()
            console.log(JSONresponse);
        }
    }
    catch(error) {
        console.log(error);
    }
};


export {
    validateInput,
    moveTextToResults,
    postTextToServer
}