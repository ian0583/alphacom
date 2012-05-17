<?php

extract( $_POST, EXTR_REFS );

$customfieldsObj = new DB_Customfields();

$id = $customfieldsObj->update(Core_Helper::sanitize($_POST));

$this->forward('customfields-edit/' . $id);