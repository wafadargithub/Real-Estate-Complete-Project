<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Function to send an email for contact us
function sendEmail($name, $email, $message)
{
    $mail = new PHPMailer(true);

    try {
        // SMTP server settings
        $mail->isSMTP();
        $mail->Host = 'o2standard.co.uk'; // Your SMTP server address
        $mail->SMTPAuth = true;
        $mail->Username = '_mainaccount@o2standard.co.uk'; // Your SMTP username
        $mail->Password = 'p!NphXa9I-?w'; // Your SMTP password
        $mail->SMTPSecure = 'ssl'; // Use 'tls' or 'ssl'
        $mail->Port = 465; // Your SMTP server's port number (e.g., 587 for TLS or 465 for SSL)

        // Set other email-related configurations
        $mail->setFrom('_mainaccount@o2standard.co.uk', 'Aqeel FYP Emailing');
        $mail->addAddress('moughees@360synergytech.com', 'name');
        $mail->isHTML(true);

        $mail->Subject = 'Contact Us Form Submission';
        $mail->Body = "<p>Name: $name</p><p>Email: $email</p><p>Message: $message</p>";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message\n";

        $mail->send();
        return 'Email has been sent successfully';
    } catch (Exception $e) {
        return 'Mailer Error: ' . $mail->ErrorInfo;
    }
}

// Function to send an email for modal
function sendEmailModal($name, $email, $phone, $address)
{
    $mail = new PHPMailer(true);

    try {
        // SMTP server settings
        $mail->isSMTP();
        $mail->Host = 'o2standard.co.uk'; // Your SMTP server address
        $mail->SMTPAuth = true;
        $mail->Username = '_mainaccount@o2standard.co.uk'; // Your SMTP username
        $mail->Password = 'p!NphXa9I-?w'; // Your SMTP password
        $mail->SMTPSecure = 'ssl'; // Use 'tls' or 'ssl'
        $mail->Port = 465; // Your SMTP server's port number (e.g., 587 for TLS or 465 for SSL)

        // Set other email-related configurations
        $mail->setFrom('_mainaccount@o2standard.co.uk', 'Aqeel FYP Emailing');
        $mail->addAddress('moughees@360synergytech.com', 'name');
        $mail->isHTML(true);

        $mail->Subject = 'Modal Form Submission';
        $mail->Body = "<p>Name: $name</p><p>Email: $email</p><p>Phone: $phone</p><p>Address: $address</p>";
        $mail->AltBody = "Name: $name\nEmail: $email\nPhone: $phone\nAddress: $address\n";

        $mail->send();
        return 'Email has been sent successfully';
    } catch (Exception $e) {
        return 'Mailer Error: ' . $mail->ErrorInfo;
    }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Request receive from React
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    // Get data from the frontend
    $type = $data['type'];
    if ($type == "Modal Form") {
        $name = $data['name'];
        $email = $data['email1'];
        $phone = $data['phone1'];
        $address = $data['address'];

        // Send the email for modal form
        $result = sendEmailModal($name, $email, $phone, $address);
    } else {
        $name = $data['name'];
        $email = $data['email1'];
        $message = $data['message'];

        // Send the email for contact us
        $result = sendEmail($name, $email, $message);
    }

    // PHP Post Request receive
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];

    echo $result;
} else {
    echo 'Invalid request method';
}
