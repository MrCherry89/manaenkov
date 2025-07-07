<?php

$to = 'manaenkovv@rambler.ru,smirnov@artris.ru';

$subject = 'Заявка с сайта manaenkov.pro';

$message = '
        <p><strong>ФИО:</strong> '.htmlspecialchars($_POST['name']).'</p>  
		<p><strong>Email:</strong> '.htmlspecialchars($_POST['email']).'</p>  
		<p><strong>Сообщение:</strong> '.htmlspecialchars($_POST['message']).'</p>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: manaenkov.pro <noreply@manaenkov.pro>\r\n";
$headers .= "Reply-To: ".htmlspecialchars($_POST['email'])."\r\n";


$spam = htmlspecialchars($_POST['text']);

if ( ($spam == '') or (!isset($_POST['text'])) ) {
    mail($to, $subject, $message, $headers);
}
else {
    die('Спам!');
}