<?php

$id = (int) $PARAMS[0];

$batchesObj = new DB_Batches();

if ($id)
{
	$batch = Core_Helper::desanitize($batchesObj->get($id));
}

$this->assign('batch', $batch);