<?php

$id = (int) $PARAMS[0];

$coursesObj = new DB_Courses();

if ($id)
{
	$course = $coursesObj->get($id);
}

$this->assign('course', $course);