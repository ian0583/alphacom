<?php

extract( $_POST, EXTR_REFS );

$usersObj = new DB_Users();

$data = $_POST;
unset($data['confirm']);

if ( $id )
{
	if (!$password)
	{
		unset($data['confirm']);
	}
	$id = $usersObj->update(Core_Helper::sanitize($data));
}
else 
{
	$id = $usersObj->update(Core_Helper::sanitize($data));
}

$this->forward( 'users-edit/' . $id );