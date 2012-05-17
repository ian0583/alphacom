<?php

extract($_POST, EXTR_REFS);

if ($username && $password)
{
	if ($this->acl->authenticate($username, $password))
	{
		$this->forward('home');
		exit;
	}
}

$this->setMessage(array('error' => 'Invalid username and password'));
$this->forward('login');