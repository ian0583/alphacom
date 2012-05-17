<?php

class DB_Contacttypes extends TableBase
{

    public function __construct()
    {
        $this->table = "contacttypes";
        $this->primary = "id";
        parent::__construct();
    }

    public function getName($id)
    {
    	$type = $this->get($id);
    	return $type['detail'];
    }
}

