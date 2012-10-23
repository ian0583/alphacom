<?

function sendEmail($from, $to, $subject, $body)
{
	/*
	 * @formatter:off
	 */
	$config = array (
			'ssl' => 'tls', 
			'port' => 587, 
			'auth' => 'login', 
			'username' => 'name@gmail.com', 
			'password' => 'passwordhere' 
	);
	/*
	 * @formatter:on
	 */
	
	$transport = new Zend_Mail_Transport_Smtp ( 'mail.google.com', $config );
	
	$mail = new Zend_Mail ();
	$mail->setBodyText ( $body );
	$mail->setFrom ( $from );
	$mail->addTo ( $to );
	$mail->setSubject ( $subject );
	$mail->send ( $transport );
}