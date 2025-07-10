<?php
// Establish database connection
$conn = mysqli_connect("localhost", "root", "", "users");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process registration form submission
if (isset($_POST["signup"])) {
    // Retrieve form data and sanitize inputs
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $number = mysqli_real_escape_string($conn, $_POST["number"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);
    $confirmpassword = mysqli_real_escape_string($conn, $_POST["confirm_password"]);

    // Check if passwords match
    if ($password !== $confirmpassword) {
        echo "<script>
            alert('Password does not match');
            window.location.href = 'signup.html';
        </script>";
        exit();
    }

    // Check if email already exists
    $stmt = mysqli_query($conn, "SELECT * FROM users_db WHERE email = '$email'");
    if (mysqli_num_rows($stmt) > 0) {
        echo "<script>
            alert('Email is already exists');
            window.location.href = 'signup.html';
        </script>";
        exit();
    }

    // Check if phone number already exists
    $stmt = mysqli_query($conn, "SELECT * FROM users_db WHERE number = '$number'");
    if (mysqli_num_rows($stmt) > 0) {
        echo "<script>
            alert('Phone number is already registered');
            window.location.href = 'signup.html';
        </script>";
        exit();
    }

    // Hash password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into database
    $query = "INSERT INTO users_db  (name, number, email, password) VALUES ('$name', '$number', '$email', '$hashed_password')";

    if (mysqli_query($conn, $query)) {
        echo "<script> alert ('Registration Successful');
        window.location.href = 'portal.html';
    </script>";
    exit();
    } else {
        echo "<script> alert ('Registration Failed'); </script>";
    }
}
?>