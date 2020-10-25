function validateInput(inputText) {
    const inputValue = inputText.value.trim();
    
    // If inputValue is true ... then run API
    if (inputValue) {
        console.log("There is SOMETHING RIGHT!");
    }

    // ... else notify user that no input was made
    else {
        console.log("There is no value!");
    }
}

export { validateInput }