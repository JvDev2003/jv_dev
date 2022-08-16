<?php

if(isset($_POST(['email']) && !empty($_POST(['email']))));

$nome = addcslashes($_POST(['name']));
$email = addcslashes($_POST(['email']));
$comentario = addcslashes($_POST(['comentario']));

$to = 'jv.developer2003@gmail.com';
$subject = 'Contato de trabalo';
$body = "Nome: " .$nome. "\n Email: " . $email . "\n Mensagem: " . $comentario;

$header="from:{ADICIONAR EMAIL DE DOMINIO}". "\r\n". "Reply-To".$email . "\r\n".
        "X.Mailer:PHP/". phpversion();

if(mail($to, $subject, $body, $header)){
    header("Location: ". 'index.html');
}else{
    echo("O email não pode ser enviado");
}

?>