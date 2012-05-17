<?php

class DB_Customfieldsdata extends TableBase
{
	private $fieldsObj;

    public function __construct()
    {
    	$this->fieldsObj = new DB_Customfields();
        $this->table = "customfieldsdata";
        $this->primary = "id";
        parent::__construct();
    }
    
    public function getCustomDataByProfile($profile_id)
    {
    	$customdata = $this->getDbData($this->table, '*', 'profile_id = ' . $profile_id);
    	
    	foreach ($customdata as $key => $data)
    	{
    		$customdata[$key]['countryname'] = $this->fieldsObj->getName($data['fields_id']);
    	}
    	return $customdata;
    }
}

