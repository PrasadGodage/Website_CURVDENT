<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "soulsoft.urmila@gmail.com"; // Replace with the recipient's email address
    $subject = "New Subscriber";
    $message = "Email: " . $_POST["email"];

    // Additional headers if needed
    $headers = "From: your@example.com"; // Replace with a valid sender email address

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        $response = array(
            "status" => "success",
            "message" => "Email sent successfully."
        );
    } else {
        $response = array(
            "status" => "error",
            "message" => "Email could not be sent."
        );
    }

    echo json_encode($response);
}
?>
