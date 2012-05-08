<?php

$id = (int) $PARAMS[0];

$customfieldsObj = new DB_Customfields();

if ($id)
{
	$customfield = $customfieldsObj->get($id);
}

$this->assign('customfield', $customfield);