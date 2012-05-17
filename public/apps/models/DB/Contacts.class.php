<?php

class DB_Contacts extends TableBase
{
	private $contacttypesObj;

    public function __construct()
    {
    	$this->contacttypesObj = new DB_Contacttypes();
        $this->table = "contacts";
        $this->primary = "id";
        parent::__construct();
    }

    public function getContactsByProfile($profile_id)
    {
    	$contacts = $this->getDbData($this->table, '*', 'profile_id = ' . $profile_id);
    	
    	foreach ($contacts as $key => $contact)
    	{
    		$contacts[$key]['type'] = $this->contacttypesObj->getName($contact['type_id']);
    	}
    	return $contacts;
    }
    
}

