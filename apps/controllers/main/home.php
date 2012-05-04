<?php

if (!$this->acl->isSignedIn())
{
	$this->forward('login');
}

