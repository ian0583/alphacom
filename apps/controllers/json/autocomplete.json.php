<?php

extract($_REQUEST, EXTR_REFS);

$table = $PARAMS[0];
$field = $PARAMS[1];

$value = strtolower($$field);

$obj = new Core_DB();

$query = "Select $field from $table where lower($field) like '$value%'";

$result = $obj->getArray($query);

foreach ($result as $row)
{
	$data[] = Core_Helper::desanitize($row[$field]);
}

$this->_returndata = $data;
