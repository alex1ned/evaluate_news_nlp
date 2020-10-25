function handleSubmit(event) {
    event.preventDefault()

    // Get the form element of website
    let formText = document.getElementById('input-text');
    // Client.checkForName(formText)

    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message;
    })
}

export { handleSubmit }
