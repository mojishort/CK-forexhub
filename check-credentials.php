<?php
// Establish database connection
$conn = mysqli_connect("localhost", "root", "", "users");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process signin form submission
if (isset($_POST["signin"])) {
    // Retrieve form data and sanitize inputs
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);

    // Query to fetch user data based on email
    $query = "SELECT * FROM users_db WHERE email = '$email'";
    $result = mysqli_query($conn, $query);

    if ($result && mysqli_num_rows($result) > 0) {
        // User exists, verify password
        $user = mysqli_fetch_assoc($result);
        $hashed_password = $user['password']; // Assuming password field name is 'password' in the database
        if (password_verify($password, $hashed_password)) {
            // Password is correct, redirect to portal page
            header("Location: portal.html");
            exit();
        } else {
            // Incorrect password, display alert message and redirect to signin page using JavaScript
            echo "<script>alert('Incorrect password. Please try again.'); window.location='signin.html';</script>";
            exit();
        }
    } else {
        // User does not exist, display alert message and redirect to signin page using JavaScript
        echo "<script>alert('User not found. Please sign up.'); window.location='signin.html';</script>";
        exit();
    }
}
?>
