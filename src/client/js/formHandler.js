import {
    validateInput,
    moveTextToResults,
    postTextToServer
} from "./helper";

function handleSubmit(event) {
    event.preventDefault()

    // Get the form element of website
    const formText = document.getElementById('input-text');
    const formTextObject = {
        text: formText.value
    };

    let isInputValid = Client.validateInput(formText);

    // If there is input, then run the API
    if (isInputValid) {
        if (formText.classList.contains('no-value')) {
            formText.classList.remove('no-value');
        }     
        // Post text to server and receive the analysis
        Client.postTextToServer('http://localhost:8081/postTextToAnalyse', formTextObject);
        
        // ... then update the UI
        Client.moveTextToResults(formText);
    }
    
    // ... if there is no input, notify the user.
    else {
        formText.classList.add('no-value');
        alert("Please provide an input text before submitting."); 
    }
}

export { handleSubmit };
