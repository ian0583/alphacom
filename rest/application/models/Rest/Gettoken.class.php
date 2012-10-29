<?

class Rest_GetToken extends Core_RestObject
{

	protected $db;

	protected $_auth;

	public function __construct ( $restServer, $table, $ids = array(), $arguments = array(), $restArguments = array(), $restFilters = array() )
	{
		$this->_restServer = $restServer;
		$this->db = new Core_DB();
		$this->_table = 'users';
		$this->_primaryKey = 'users_id';
		$this->_auth = new Core_RestAuth();
		
		parent::__construct( $ids, $arguments, $restArguments, $restFilters );
	}

	protected function _doGet ()
	{
		if ( $_SERVER[ 'HTTP_TOKEN' ] )
		{
			if ( $this->_auth->verifyToken( 'session', $_SERVER[ 'HTTP_TOKEN' ] ) )
			{
				$token = unserialize( Core_Helper::decrypt( $_SERVER[ 'HTTP_TOKEN' ] ) );
				$result = $this->db->getRow( "SELECT * FROM $this->_table WHERE users_id = '" . $token[ 'id' ] . "'" );
				if ( 0 < count( $result ) )
				{
					$id = $token[ 'id' ];
					$checkTime = time();
					$timeDiff = $checkTime - $result[ 'timestamp' ];
					
					if ( 0 == $_GET[ 'keepalive' ] )
					{
						if ( $timeDiff < TOKEN_LIMIT && $timeDiff > TOKEN_REFRESH )
						{
							$data = array( 'timestamp' => $checkTime );
							$this->db->autoexecute( $this->_table, $data, array( $this->_primaryKey => $result[ $this->_primaryKey ] ) );
							
							$a[ 'id' ] = $id->__toString();
							$a[ 'keepalive' ] = $_GET[ 'keepalive' ];
							$a[ 'ts' ] = $checkTime;
							
							$a[ 'value' ] = $this->_auth->generateToken( 'session', $a );
						}
						elseif ( $timeDiff < TOKEN_LIMIT )
						{
							$a[ 'id' ] = $id;
							$a[ 'keepalive' ] = $_GET[ 'keepalive' ];
							$a[ 'ts' ] = $checkTime;
							$a[ 'value' ] = $this->_auth->generateToken( 'session', $a );
						}
						else
						{
							$this->_restServer->setStatusCode( 401 );
							echo Zend_Json::encode( array( 'reason' => 'Session Expired' ) );
							exit();
						}
					}
					else
					{
						$a[ 'id' ] = $id;
						$a[ 'keepalive' ] = $_GET[ 'keepalive' ];
						$a[ 'ts' ] = $checkTime;
						$a[ 'value' ] = $this->_auth->generateToken( 'session', $a );
					}
				}
				else
				{
				$this->_restServer->setStatusCode( 401 );
				echo Zend_Json::encode( array( 'reason' => 'Authentication Failed' ) );
				exit();
				}
			}
			else
			{
			$this->_restServer->setStatusCode( 401 );
			echo Zend_Json::encode( array( 'reason' => 'Authentication Failed' ) );
			exit();
			}
		}
		else
		{
		$this->_restServer->setStatusCode( 401 );
		echo Zend_Json::encode( array( 'reason' => 'Authentication Failed' ) );
		exit();
		}
		
		$this->setResponseData( $a );
	}

	protected function _doPost ()
	{
		$arr = $this->_restServer->getRequestAuth();
		foreach ( $arr as $key => $value )
		{
			$arr[ $key ] = Core_Helper::sanitize( $value );
		}
		
		$ts = time();
		$result = $this->db->getRow( "SELECT * FROM $this->_table WHERE username = '" . $arr[ 'username' ] . "' AND password = '" . $arr[ 'password' ] . "'" );
		
		if ( isset( $result ) && count( $result ) != 0 )
		{
			$ts = time();
			$data = array( 'timestamp' => $ts );
			$this->db->autoexecute( $this->_table, $data, array( $this->_primaryKey => $result[ $this->_primaryKey ] ) );
			
			$a[ 'id' ] = $result[ 'users_id' ];
			$a[ 'keepalive' ] = $_POST[ 'keepalive' ] ? true : false;
			$a[ 'ts' ] = $ts;
			
			$a[ 'value' ] = $this->_auth->generateToken( 'session', $a );
			
			$this->setResponseData( $a );
		}
		else
		{
			$this->_restServer->setStatusCode( 401 );
			echo Zend_Json::encode( array( 'reason' => 'Authentication Failed' ) );
			exit();
		}
	}
}