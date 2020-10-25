import { validateInput, moveTextToResults } from "./helper";

function handleSubmit(event) {
    event.preventDefault()

    // Get the form element of website
    const formText = document.getElementById('input-text');
    let isInputValid = Client.validateInput(formText);

    // If there is input, then run the API
    if (isInputValid) {
        if (formText.classList.contains('no-value')) {
            formText.classList.remove('no-value');
        }
        
        moveTextToResults(formText);

        // Run API here
        // Brainstorm functionality
        // How to access API key etc.
    }
    
    // ... if not, notify the user.
    else {
        formText.classList.add('no-value');
        alert("Please provide an input text before submitting."); 
    }

    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message;
    // })
}

export { handleSubmit }
