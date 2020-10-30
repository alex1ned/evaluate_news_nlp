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
            // !!! Check if this is correct
            body: JSON.stringify(text),
        });

        if (response.ok) {
            const JSONresponse = await response.json()
            console.log(JSONresponse);
        }

        // throw new Error("Request Failed!");
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