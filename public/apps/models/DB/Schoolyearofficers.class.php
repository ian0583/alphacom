<?php

class DB_Schoolyearofficers extends Base
{

    public function __construct()
    {
        $this->table = "schoolyearofficers";
        $this->primary = "id";
        parent::__construct();
    }


}

