
/* step-1: add click event handler with the submit button */
document.getElementById('btn-submit').addEventListener('click', function () {
    // step: 2 -get the email address inside the email input field
    // always remember to use .value to get text from an input feild
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    /* **step-3: get password
        **set id on the html element
        ** get the element
        **get the value from the element
     */
const passwordFeild = document.getElementById('user-password');
const password = passwordFeild.value;

/* verify email and password */
if(email === 'kala@gmail.com' && password === 'kala@10'){
    window.location.href = 'bank.html';
}
else{
    alert('invalid user');
}

})
