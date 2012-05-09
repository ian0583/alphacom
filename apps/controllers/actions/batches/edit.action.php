<?php

extract( $_POST, EXTR_REFS );

$batchesObj = new DB_Batches();

$id = $batchesObj->update($_POST);

$this->forward('batches-edit/' . $id);