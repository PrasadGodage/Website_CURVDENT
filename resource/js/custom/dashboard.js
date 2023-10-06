 // Function to show the success message
 function showSuccessMessage(message) {
    const successMessage = $("#successMessage");
    successMessage.text(message);
    successMessage.show();

    // Set a timeout to hide the message after a few seconds (optional)
    setTimeout(function () {
        successMessage.hide();
    }, 5000); // Message will hide after 5 seconds (5000 milliseconds)
}

// Trigger the success message when the page loads
$(document).ready(function () {
    // You can call showSuccessMessage with your success message here
    showSuccessMessage("Login successful! Welcome to the dashboard.");
});