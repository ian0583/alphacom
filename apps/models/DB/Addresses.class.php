<?php

class DB_Addresses extends TableBase
{

	private $countriesObj;
	
    public function __construct()
    {
    	$this->countriesObj = new DB_Countries();
        $this->table = "addresses";
        $this->primary = "id";
        parent::__construct();
    }

    public function getAddressByProfile($profile_id)
    {
    	$addresses = $this->getDbData($this->table, '*', 'profile_id = ' . $profile_id);
    	
    	foreach ($addresses as $key => $address)
    	{
    		$addresses[$key]['countryname'] = $this->countriesObj->getName($address['country']);
    	}
    	return $addresses;
    }
}

