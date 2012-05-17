<?php

$id = (int) $PARAMS[0];

$customfieldsObj = new DB_Customfields();

if ($id)
{
	$customfield = Core_Helper::desanitize($customfieldsObj->get($id));
}

$this->assign('customfield', $customfield);