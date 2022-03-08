const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Please enter valid email')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
    if (email.value === '' || email.value == null) {
        setErrorFor(email)
    }
    
    function setErrorFor(input) {
        const formControl = input.parentElement;
        
        formControl.className = 'form-control error';
    }
    
});