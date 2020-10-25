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

export { validateInput, moveTextToResults }