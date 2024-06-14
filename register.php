<?php
if (
    isset($_POST['first_name']) && isset($_POST['last_name']) && 
    isset($_POST['middle_initial']) && isset($_POST['email']) && 
    isset($_POST['password']) && isset($_POST['terms'])
) {
    include 'connection.php';

    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $first_name = validate($_POST['first_name']);
    $last_name = validate($_POST['last_name']);
    $middle_initial = validate($_POST['middle_initial']);
    $email = validate($_POST['email']);
    $password = validate($_POST['password']);
    $terms = validate($_POST['terms']) == '1' ? 1 : 0;
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check for required fields
    if (empty($first_name) || empty($last_name) || empty($middle_initial) || empty($email) || empty($password)) {
        header("Location: Register.html");
        exit();
    }

    // Check for email domain
    if (!preg_match("/@feualabang\.edu\.ph$/", $email)) {
        header("Location: Register.html?error=invalid_email_domain");
        exit();
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO Registers (first_name, last_name, middle_initial, email, password, terms) 
                            VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $first_name, $last_name, $middle_initial, $email, $hashed_password, $terms);

    if ($stmt->execute()) {
        echo "Your registration was successful!";
    } else {
        echo "Your registration could not be completed!";
    }

    $stmt->close();
    $conn->close();
} else {
    header("Location: Register.html");
    exit();
}
?>
