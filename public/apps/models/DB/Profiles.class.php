<?php

class DB_Profiles extends TableBase
{

	private $addressesObj;
	private $batchObj;
	private $contactsObj;
	private $coursesObj;
	private $customdataObj;
	private $usersObj;
	
    public function __construct()
    {
    	$this->addressesObj = new DB_Addresses();
    	$this->batchObj = new DB_Batches();
    	$this->contactsObj = new DB_Contacts();
    	$this->coursesObj = new DB_Courses();
    	$this->customdataObj = new DB_Customfieldsdata();
    	$this->usersObj = new DB_Users();
    	
    	$this->table = "profiles";
        $this->primary = "id";
        parent::__construct();
    }

    public function getProfile($id)
    {
    	$profile = $this->get($id);
    	
    	if ($profile) 
    	{
	    	$profile['user'] = $this->usersObj->get($profile['users_id']);
	    	$profile['batch'] = $this->batchObj->get($profile['batch_id']);
	    	$profile['course'] = $this->coursesObj->get($profile['course_id']);
	    	$profile['contacts'] = $this->contactsObj->getContactsByProfile($id);
	    	$profile['addresses'] = $this->addressesObj->getAddressByProfile($id);
	    	$profile['customfields'] = $this->customdataObj->getCustomDataByProfile($id);
    	}
    	
    	return $profile;
    }

    public function getProfiles()
    {
    	$profiles = $this->getAll();
    	
    	foreach ($profiles as $key => $profile) 
    	{
	    	$profile['user'] = $this->usersObj->get($profile['users_id']);
	    	$profile['batch'] = $this->batchObj->get($profile['batch_id']);
	    	$profile['course'] = $this->coursesObj->get($profile['course_id']);
	    	$profile['contacts'] = $this->contactsObj->getContactsByProfile($id);
	    	$profile['addresses'] = $this->addressObj->getAddressByProfile($id);
	    	$profile['customfields'] = $this->customdataObj->getCustomDataByProfile($id);
	    	
	    	$profiles[$key] = $profile;
    	}
    	
    	return $profiles;
    }

}

