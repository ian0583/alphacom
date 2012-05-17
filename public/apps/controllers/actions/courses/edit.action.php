<?php

extract( $_POST, EXTR_REFS );

$coursesObj = new DB_Courses();

$id = $coursesObj->update(Core_Helper::sanitize($_POST));

$this->forward('courses-edit/' . $id);