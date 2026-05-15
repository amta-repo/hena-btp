<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed. Use POST."]);
    exit;
}

$rawName = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$rawEmail = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$rawSubject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$rawMessage = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$name = trim($rawName ?? '');
$email = trim($rawEmail ?? '');
$subject = trim($rawSubject ?? '');
$message = trim($rawMessage ?? '');

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "All fields are required: name, email, subject, message."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid email address."]);
    exit;
}

$mysqli = new mysqli("localhost", "your_db_user", "your_db_password", "your_database_name");

if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Database connection failed: " . $mysqli->connect_error]);
    exit;
}

$stmt = $mysqli->prepare("INSERT INTO submissions (`name`, `email`, `subject`, `message`, `created_at`) VALUES (?, ?, ?, ?, NOW())");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Database error: " . $mysqli->error]);
    $mysqli->close();
    exit;
}

$stmt->bind_param("ssss", $name, $email, $subject, $message);
if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to save submission: " . $stmt->error]);
    $stmt->close();
    $mysqli->close();
    exit;
}

$stmt->close();
$mysqli->close();

$companyEmail = "info@henabtp.com";
$emailHeaders = "From: info@henabtp.com\r\n" .
                "Reply-To: " . $email . "\r\n" .
                "Content-Type: text/plain; charset=UTF-8\r\n";

$emailBody = "You have a new submission from your website contact form:\n\n" .
             "Name: " . $name . "\n" .
             "Email: " . $email . "\n" .
             "Subject: " . $subject . "\n\n" .
             "Message:\n" . $message . "\n";

$mailSent = mail($companyEmail, "New contact form submission: " . $subject, $emailBody, $emailHeaders);

if (!$mailSent) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Submission saved, but failed to send notification email."]);
    exit;
}

echo json_encode(["success" => true, "message" => "Submission received successfully."]);
