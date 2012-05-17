<?php

class DB_Users extends TableBase
{

    public function __construct()
    {
        $this->table = "users";
        $this->primary = "id";
        parent::__construct();
    }


}

