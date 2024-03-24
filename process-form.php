<?php
// process_form.php

// Check if the email data was sent via POST request
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["email"])) {
    // Retrieve the email from the POST data
    $email = $_POST["email"];

    // You can perform additional validation here if needed
    
    // Send a confirmation message back to the client
    echo "Thank you for your interest! We'll contact you at " . $email;
} else {
    // If the request method is not POST or email data is not set, return an error message
    echo "Error: Invalid request.";
}
?>