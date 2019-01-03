       <?php 

if(isset($_POST['submit'])) {
	
$to = "opemipoaikomo@gmail.com";
$subject = "Themerrykid.com";
$name = $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$body = "$name at $email just sent a message from the website as follows \n\n $message";

$headers = "From: $email";
$sent = mail($to, $name, $body) ;

if($sent)
{echo "$comment"."Your enquiry/complaint was lodged. We will contact you soon."."</p>"; }
else
{echo "$comment"."Your enquiry/complaint was not submitted. Please try again"."</p>"; }

}

?>
