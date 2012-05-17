<?php

$user_id = @$PARAMS[0];

$usersObj = new DB_Users();

if ($user_id)
{
	$user = Core_Helper::desanitize($usersObj->get($user_id));
}

$this->assign('user', $user);