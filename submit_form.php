<?php
// submit_form.php

// Get the form fields and remove whitespace
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$number = filter_var(trim($_POST["number"]), FILTER_SANITIZE_NUMBER_INT);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$password = trim($_POST["password"]);

if (isset($_POST['confirm_password']) && !empty($_POST['confirm_password'])) {
    $confirm_password = trim($_POST['confirm_password']);
} else {
    $confirm_password = ""; // Initialize $confirm_password to an empty string
}

// Check that data was submitted to the mailer
if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit
    http_response_code(400);
    echo "Please complete the form and try again.";
    exit;
}

// Check that the password and confirm password match
if ($password != $confirm_password) {
    // Set a 400 (bad request) response code and exit
    http_response_code(400);
    echo "The passwords do not match.";
    exit;
}

// Connect to the database
$db = new PDO('mysql:host=localhost;dbname=FXKILLER;charset=utf8', 'username', 'password');

// Insert the new client into the clients table
$sql = "INSERT INTO clients (name, number, email, password,) VALUES (:name, :number, :email, :password,)";
$stmt = $db->prepare($sql);

// Bind the provided client data to the placeholder in the INSERT statement
$stmt->bindValue(':name', $name);
$stmt->bindValue(':number', $number);
$stmt->bindValue(':email', $email);
$stmt->bindValue(':password', password_hash($password, PASSWORD_DEFAULT));
// Execute the prepared statement
$result = $stmt->execute();

// Check if the insert was successful
if ($result) {
    // Set a 201 (created) response code
    http_response_code(201);
    echo "Thank you! Your information has been saved.";
} else {
    // Set a 500 (internal server error) response code
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn't save your information.";
}

// Close the database connection
$db = null;

// Redirect to the portal page
header('Location: portal.html');
?>