<?php

########### CONFIG ###############

$recipient = 'johana_ar@yahoo.com';
$redirect = 'success.html';

########### CONFIG END ###########



########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: content-type");
        
        // Payload aus php://input lesen
        $json = file_get_contents('php://input');
        // JSON in ein PHP-Objekt umwandeln
        $params = json_decode($json);

        // Die Daten aus dem JSON-Objekt extrahieren
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        // E-Mail-Inhalt und Header vorbereiten
        $subject = "Kontakt von " . $name;
        $headers = "From: " . $email . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8";

        $emailContent = "<strong>Name:</strong> " . $name . "<br>";
        $emailContent .= "<strong>E-Mail:</strong> " . $email . "<br>";
        $emailContent .= "<strong>Nachricht:</strong><br>" . nl2br($message);

        // E-Mail senden
        mail($recipient, $subject, $emailContent, $headers);
        
        // Optional: Weiterleitung nach erfolgreichem Senden der E-Mail z.b. success.html
        // header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>