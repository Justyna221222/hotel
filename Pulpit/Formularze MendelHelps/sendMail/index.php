<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\OAuth;
use League\OAuth2\Client\Provider\Google;

date_default_timezone_set('Etc/UTC');


require_once 'vendor/autoload.php';
require_once 'class-db.php';

$mail = new PHPMailer();
$mail->isSMTP();

//Enable SMTP debugging
// SMTP::DEBUG_OFF = off (for production use)
// SMTP::DEBUG_CLIENT = client messages
// SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;

//Set the encryption mechanism to use:
// - SMTPS (implicit TLS on port 465) or
// - STARTTLS (explicit TLS on port 587)
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

$mail->SMTPAuth = true;
$mail->AuthType = 'XOAUTH2';

$email = 'mendelhelps1@gmail.com'; // the email used to register google app
$clientId = '761050550533-3a79as7goii91hm9lf2dor77hljr0rqe.apps.googleusercontent.com';
$clientSecret = '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';

 $db = new DB();
 $refreshToken = $db->get_refresh_token();

//Create a new OAuth2 provider instance
$provider = new Google(
    [
        'clientId' => $clientId,
        'clientSecret' => $clientSecret,
        'redirectUri' => 'https://form.codewithblonde.com',
        'hostedDomain' => 'https://codewithblonde.com'
    ]
);

//Pass the OAuth provider instance to PHPMailer
$mail->setOAuth(
    new OAuth(
        [
            'provider' => $provider,
            'clientId' => $clientId,
            'clientSecret' => $clientSecret,
            'refreshToken' => $refreshToken,
            'userName' => $email,
        ]
    )
);

$mail->setFrom($email, 'Justyna');
$mail->addAddress('justynaskurzok@gmail.com', 'Justyna');
$mail->isHTML(true);
$mail->Subject = 'Email Subject';
$mail->Body = '<b>Email Body</b>';

//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}