<?php

class Rest_Getprofilelist extends Core_RestObject
{

	protected $db;

	public function __construct ( $restServer, $table, $ids = array(), $arguments = array(), $restArguments = array(), $restFilters = array() )
	{
		$this->_restServer = $restServer;
		$this->db = new Core_DB();
		
		parent::__construct( $ids, $arguments, $restArguments, $restFilters );
	}
	
	public function _doGet()
	{
		$query = "Select t1.*, t2.name as batch, t3.longaddress from profiles as t1 left join batches as t2 on t1.batches_id = t2.batches_id left join addresses as t3 on t1.profiles_id = t3.profiles_id and t3.currentflag=1";
		
		$result = $this->db->getArray($query);
		
		$this->setResponseData($result);
	}
}