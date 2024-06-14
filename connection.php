<?php  

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Your connection code here
    $sname = "codecraftt.database.windows.net.mysql.database.azure.com";
    $uname = "codecraftuser@codecraftt.database.windows.net";
    $password = "Codecraft2024";
    $db_name = "Registers";

    $conn = mysqli_init();
    mysqli_ssl_set($conn, NULL, NULL, "C:\Users\user\Downloads\DigiCertGlobalRootG2.crt.pem", NULL, NULL);
    mysqli_real_connect($conn, $sname, $uname, $password, $db_name, 3306, MYSQLI_CLIENT_SSL);


    if (!$conn) {
        echo "Connection failed!";
        exit();
    }
    echo "Connection successful!";
    } else {
    echo "Invalid request method.";
    }
    ?>
