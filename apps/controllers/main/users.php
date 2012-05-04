<?php

if (!$this->acl->isSignedIn())
{
	$this->forward('login');
}

$usersObj = new DB_Users();

$this->assign('users', $usersObj->getAll());