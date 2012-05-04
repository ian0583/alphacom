<?php

class DB_Countries extends TableBase
{

    public function __construct()
    {
        $this->table = "countries";
        $this->primary = "id";
        parent::__construct();
    }

    public function getName($id)
    {
    	$country = $this->get($id);
    	return $country['name'];
    }
}

