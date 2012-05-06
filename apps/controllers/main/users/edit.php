<?php

$user_id = @$PARAMS[0];

$usersObj = new DB_Users();

if ($user_id)
{
	$user = $usersObj->get($user_id);
}

$this->assign('user', $user);