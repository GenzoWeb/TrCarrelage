<?php
   $url = "php://input";
   $data = json_decode(file_get_contents($url), true);

   $errors = false;

   if ((!isset($data['name']) || $data['name'] == '') || (!isset($data['message']) || $data['message'] == '') || (!isset($data['title']) || $data['title'] == '')){
      $errors = true;
   }
   if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
      $errors = true;
   }

   if($data && $errors === false) {
      $to = "genzo10@hotmail.fr";
      $subject = $data['title'];
      $from = 'site@dupetitpire.fr';
      $messageSend ='
         <html>
            <head>
               <title>Contact</title>
            </head>
            <body>
               <p>
                  Adresse mail : ' . $data['email'] .' <br/>
                  Message envoyé par : ' . $data['name'] . '. <br/> <br/>'
                  . $data['message'] .'
               </p>
            </body>
         </html>
      ';

      $headers = array(
         'MIME-Version' => '1.0',
         'Content-type' => 'text/html; charset=UTF-8',
         'From' => $from,
         'X-Mailer' => 'PHP/' . phpversion()
      );

      mail($to, $subject, $messageSend, $headers);
      echo "true";
   } else {
      echo "false"; 
   }
?>