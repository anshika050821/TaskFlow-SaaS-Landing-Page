
// Select the contact form
const contactForm = document.getElementById("contact-form");

// Select the success message element
const successMessage = document.getElementById("success-message");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
        successMessage.style.color = "red";
        successMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Display success message
    successMessage.style.color = "green";
    successMessage.textContent =
        `Thank you, ${name}! Your message has been submitted successfully.`;

    // Clear form fields
    contactForm.reset();

});
