<?php

class Rest_Autocomplete extends Core_RestObject
{

	protected $db;

	public function __construct ( $restServer, $table, $ids = array(), $arguments = array(), $restArguments = array(), $restFilters = array() )
	{
		$this->_restServer = $restServer;
		$this->db = new Core_DB();
		$this->_table = $restArguments[ 'table' ];
		
		unset( $restArguments[ 'table' ] );
		
		parent::__construct( $ids, $arguments, $restArguments, $restFilters );
	}

	public function _doGet ()
	{
		$arguments = '';
		foreach ( $this->_arguments as $key => $value )
		{
			if ( $arguments != '' )
			{
				$arguments .= ' AND ';
			}
			$arguments .= 'lower(' . $key . ') LIKE "' . strtolower( $value ) . '%"';
			
			$field = $key;
		}
		
		$query = "SELECT $field from $this->_table where $arguments";
		
		$result = $this->db->getArray( $query, array() );
		$this->setResponseData( $result );
	}
}