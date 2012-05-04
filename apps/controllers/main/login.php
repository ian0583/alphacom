<?php
$this->acl->signOut();

$message = $this->getMessage();

if ($message['error'])
{
	$this->assign('error', $message['error']);
}