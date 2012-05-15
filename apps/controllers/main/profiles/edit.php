<?php

$id = (int) $PARAMS[0];

$profilesObj = new DB_Profiles();

if ($id)
{
	$profile = Core_Helper::desanitize($profilesObj->getProfile($id));
}

$this->assign('profile', $profile);