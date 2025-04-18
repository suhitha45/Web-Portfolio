<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// You can add email sending functionality here
// For now, we'll just return a success response
$response = array(
    'status' => 'success',
    'message' => 'Message sent successfully!'
);

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);
?> 