<?php 
 if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    // $development = $_POST['development'];
    // $design = $_POST['design'];
    // $software = $_POST['software'];
    $msg = $_POST['msg'];


    $to = 'longd3102@gmail.com';
    $subject = 'Form Submission';
    $message = "Name: ".$name."\n"."Phone: ".$email."\n"."Wrote the following: "."\n\n".$msg;
    $headers = "Form: ".$email;

    if (mail($to, $subject, $message, $headers)){
        echo "<h1>Sent Successfully! Thank you". " ".$name. ", We will contact you shortly! </h1>";
    }
    else {
        echo "Something went wrong.!"
    }
}





?>
