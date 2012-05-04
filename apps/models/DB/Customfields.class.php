<?php

class DB_Customfields extends TableBase
{

    public function __construct()
    {
        $this->table = "customfields";
        $this->primary = "id";
        parent::__construct();
    }


}

