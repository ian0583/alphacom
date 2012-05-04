<?php

$user_id = @$PARAMS[0];

$usersObj = new DB_Users();

$this->assign('user', $usersObj->get($user_id));