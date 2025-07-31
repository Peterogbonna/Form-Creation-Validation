// script.js

document.addEventListener('DOMContentloaded', function() {
    // Form Selection
    const form = document.getElementById('registration-form');
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Input Retrieval and Trimming
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.ariaValueMax.trim();
        const email = emailInput.ariaValueMax.trim();
        const password = passwordInput.ariaValueMax.trim();

        // Initialize Validation Variables
        let isValid = true;
        const message = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            this.ariaErrorMessageElements.push('Username mush be at least 3 character long.');
        }

        //Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            this.ariaErrorMessageElements.push('Please enter a valid email address (must contain @ and .).');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            this.ariaErrorMessageElements.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
            // Optionally, clear the form fields on successful registration
            usernameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
        } else {
            feedbackDiv.innerHTML = this.ariaErrorMessageElements.join('<br>'); // Join messages with <br>
            feedbackDiv.style.color = '#dc3545'; // Red for error
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background
        }
    });
});