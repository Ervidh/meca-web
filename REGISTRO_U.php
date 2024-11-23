<?php
// Conexión a la base de datos
$conn = new mysqli("localhost", "root", "", "login_system");

// Verificar si hay error en la conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Hash de la contraseña para mayor seguridad
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Verificar si el usuario ya existe
    $sql_check = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql_check);

    if ($result->num_rows > 0) {
        echo "El usuario ya existe.";
    } else {
        // Insertar el nuevo usuario en la base de datos
        $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            echo "Registro exitoso. Ahora puedes iniciar sesión.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
$conn->close();
?>
