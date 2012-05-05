<?php

extract( $_POST, EXTR_REFS );

$usersObj = new DB_Users();

$data = $_POST;
unset($data['confirm']);

if ( $id )
{
	if ($password)
	{
		$id = $usersObj->update($data);
	}
}
else 
{
	$id = $usersObj->update($data);
}

$this->forward( 'users-edit/' . $id );