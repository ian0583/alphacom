<?php

$id = (int) $PARAMS[0];

$batchesObj = new DB_Batches();

if ($id)
{
	$batch = $batchesObj->get($id);
}

$this->assign('batch', $batch);