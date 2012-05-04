<?php

class DB_Courses extends TableBase
{

    public function __construct()
    {
        $this->table = "courses";
        $this->primary = "id";
        parent::__construct();
    }


}

