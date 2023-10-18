// registration.js
// Add any registration page-specific JavaScript here

// Get the form element
const registrationForm = document.getElementById('registrationForm');

// Add an event listener for form submission
registrationForm.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform further actions like sending data to the server or validating input

    // For now, let's log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add AJAX requests or other logic to send data to the server for actual registration
});
