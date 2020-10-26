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

const postTextToServer = async (url="", text) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // !!! Check if this is correct
        body: JSON.stringify(text),
    });

    try {
        const newData = await respponse.json();
        console.log(newData);
    } catch(error) {
        console.log(error);
    }
}
// const postTextToServer = (url="", text) => {};

export {
    validateInput,
    moveTextToResults,
    postTextToServer
}