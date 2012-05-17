<?php

class DB_Batches extends TableBase
{

    public function __construct()
    {
        $this->table = "batches";
        $this->primary = "id";
        parent::__construct();
    }
    
}

