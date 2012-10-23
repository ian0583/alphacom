<?
/**
 * Application settings
 *
 * @author Sheldon Senseng
 * @copyright Sheldon Senseng <sheldonsenseng@gmail.com>
 *           
 */

// DO NOT CHANGE THE VALUES BELOW

// files and directories
define( 'APP_ROOT', dirname( __FILE__ ) . '/' );
define( 'APP_CONF', APP_ROOT . 'conf/' );
define( 'APP_LIB', APP_ROOT . 'lib/' );
define( 'APP_LOG', APP_ROOT . 'log/' );
define( 'APP_DATA', APP_ROOT . 'data/' );
define( 'APP_UPLOAD', APP_ROOT . 'uploads/' );
define( 'APP_APPLICATION', APP_ROOT . 'application/' );
define( 'APP_CLASSES', APP_APPLICATION . 'models/' );
define( 'APP_TESTS', APP_APPLICATION . 'tests/' );
define( 'APP_TASKS', APP_APPLICATION . 'tasks/' );
define( 'APP_MODULES', APP_APPLICATION . 'controllers/' );
define( 'APP_TEMPLATES', APP_APPLICATION . 'views/' );
define( 'APP_TEMPLATES_COMPILED', APP_TEMPLATES . '.smarty/.compiled/' );
define( 'APP_TEMPLATES_CACHE', APP_TEMPLATES . '.smarty/.cache/' );
define( 'APP_DATA_AUTH', APP_DATA . 'auth/' );
define( 'APP_TESTS_PREFIX', 'Test_' );
define( 'APP_JS', APP_ROOT . 'includes/js/' );
define( 'APP_CSS', APP_ROOT . 'includes/css/' );

// Scribe Constants
define( 'SCRIBE_ROOT', APP_LIB . 'Scribe/includes' );
define( 'THRIFT_ROOT', APP_LIB . 'Scribe/includes' );
define( 'SCRIBE_BIN', '/usr/local/bin/scribed' );
define( 'SCRIBE_SERVER', 'localhost' );
define( 'SCRIBE_PORT', 1463 );

// SVN Repository of Framework for updates
define( 'APP_SVN_REPOSITORY', 'http://svn.theredfla.me/svn/framework/trunk/' );
define( 'APP_UPGRADE', APP_UPLOAD . 'framework_upgrade/' );
define( 'APP_UPGRADE_FILELIST', APP_ROOT . 'plist' );
define( 'APP_UPGRADE_REVISION', APP_ROOT . 'revision' );

// Packaging settings
define( 'PACKAGE_LIST', APP_ROOT . 'package' );

// Unit Test settings
define( 'UNITTEST_SNAPSHOT_PATH', APP_DATA . 'sql/' );
define( 'UNITTEST_SNAPSHOT_PREFIX', 'unittest_snapshot_' );
define( 'UNITTEST_CSV_PATH', APP_UPLOAD . 'unittest/' );
define( 'UNITTEST_CSV_PREFIX', 'export_' );

// urls
if ( isset( $_SERVER[ 'HTTPS' ] ) && $_SERVER[ 'HTTPS' ] == 'on' )
{
	define( 'APP_PROTOCOL', 'https' );
}
else
{
	define( 'APP_PROTOCOL', 'http' );
}

if ( isset( $_SERVER[ 'HTTP_HOST' ] ) )
{
	define( 'APP_URI', trim( APP_PROTOCOL . "://$_SERVER[HTTP_HOST]" . dirname( $_SERVER[ 'PHP_SELF' ] ), '/' ) . '/' );
	define( 'APP_INCLUDES', APP_URI . 'includes/' );
}

// set to true to enable debug mode
if ( isset( $_GET[ 'debug' ] ) )
{
	if ( strtolower( $_GET[ 'debug' ] ) == 'on' )
	{
		define( 'APP_DEBUG', true );
	}
	elseif ( strtolower( $_GET[ 'debug' ] ) == 'off' )
	{
		define( 'APP_DEBUG', false );
	}
}
else
{
	define( 'APP_DEBUG', false );
}

$INCLUDE_PATHS = array( APP_CLASSES, APP_LIB, APP_LIB . 'Smarty/libs/', APP_LIB . 'ZendFramework/library' );
foreach ( $INCLUDE_PATHS as $INCLUDE_PATH )
{
	set_include_path( get_include_path() . PATH_SEPARATOR . $INCLUDE_PATH );
}
unset( $INCLUDE_PATHS );

// define the autoload function
if ( ! function_exists( '__autoload' ) )
{

	function __autoload ( $className )
	{
		if ( notFromPackage() )
		{
			if ( substr( $className, 0, 3 ) == 'db_' )
			{
				$fh = fopen( APP_LIB . 'Core/DBPrototype.class.php', 'r' );
				$code = fread( $fh, filesize( APP_LIB . 'Core/DBPrototype.class.php' ) );
				fclose( $fh );
				$code = str_replace( '<?', '', $code );
				$code = str_replace( '?>', '', $code );
				$code = str_replace( 'Core_DBPrototype', $className, $code );
				eval( $code );
			}
			elseif ( stripos( $className, 'zend' ) !== false )
			{
				require_once str_replace( '_', '/', $className ) . '.php';
			}
			elseif ( stripos( $className, 'shanty' ) !== false )
			{
				require_once str_replace( '_', '/', $className ) . '.php';
			}
			elseif ( substr( $className, 0, 9 ) == 'MongoDoc_' )
			{
				$class = 'class |classname| extends Shanty_Mongo_Document
			{
				
			protected static $_db = "|database|";
				
			protected static $_collection = "|collection|";

			|requirements|;
			
			|indexes|;
			
			|defaults|;

			protected function init()
			{
			    // Apply indexes
				foreach( $this->indexes as $key => $value)
				{
					$options = array();
					foreach ( $value as $kopt => $vopt )
					{
						if ( $vopt == 1 )
						{
							$options[$kopt] = true;
						}
					}
					$this->ensureIndex(array($key=>1), $options);
				}
			}
			
			public function preInsert()
			{
				foreach ( $this->defaults as $key => $value )
				{
					if (! $this->_data[$key])
					{
						$create = $value["create"];
						switch ($create["type"])
						{
							case "datetime":
								$this->_data[$key] = date("Y-m-d H:i:s");
								break;
							case "boolean":
								if ( $create["value"] == "true" )
								{
									$this->_data[$key] = true;
								}
								else
								{
									$this->_data[$key] = false;
								}
								break;
							case "integer":
								$this->_data[$key] = (int)$create["value"];
								break;
							default:
								$this->_data[$key] = $create["value"];
						}
					}
				}
			}
			
			public function preSave()
			{
				foreach ( $this->defaults as $key => $value )
				{
					$update = $value["update"];
					switch ($update["type"])
					{
						case "datetime":
							$this->_data[$key] = date("Y-m-d H:i:s");
							break;
						default:
							break;
					}
				}
			}
			
			}';
				
				$temp = explode( '_', $className );
				
				array_shift( $temp );
				$database = array_shift( $temp );
				$collection = implode( '_', $temp );
				
				$class = str_replace( '|classname|', $className, $class );
				$class = str_replace( '|database|', $database, $class );
				$class = str_replace( '|collection|', $collection, $class );
				
				// get requirements from mongodb.json
				$file = APP_CONF . 'mongodb.json';
				$fh = fopen( $file, 'r' );
				$data = fread( $fh, filesize( $file ) );
				$structure = Zend_Json::decode( $data );
				fclose( $fh );
				$properties = 'protected static $_requirements = array(';
				$indexes = 'public $indexes = array(';
				$defaults = 'public $defaults = array(';
				$data = array();
				foreach ( $structure as $collections )
				{
					if ( $collections[ 'collection' ] == $collection )
					{
						$data = $collections[ 'properties' ];
						break;
					}
				}
				
				$temp = $properties;
				foreach ( $data as $node => $requirements )
				{
					
					$temp .= "'$node' => array(";
					
					if ( is_array( $requirements[ 'type' ] ) )
					{
						foreach ( $requirements[ 'type' ] as $key => $value )
						{
							if ( is_int( $key ) )
							{
								$temp .= "'$value',";
							}
							else
							{
								if ( $key == "ensureIndex" )
								{
									$indexes .= "'$node'" . '=>' . "array(";
									
									foreach ( $value as $ikey => $ivalue )
									{
										$indexes .= "'$ikey'=>'$ivalue',";
									}
									
									$indexes = trim( $indexes, ", " );
									$indexes .= "), ";
									continue;
								}
								elseif ( $key == "default" )
								{
									$defaults .= "'$node'" . "=>" . "array(";
									
									foreach ( $value as $dkey => $dvalue )
									{
										$defaults .= "'$dkey'=>array(";
										
										foreach ( $dvalue as $ikey => $ivalue )
										{
											$defaults .= "'$ikey'=>'$ivalue',";
										}
										
										$defaults = trim( $defaults, ", " );
										$defaults .= "), ";
									}
									
									$defaults = trim( $defaults, ", " );
									$defaults .= "),";
									continue;
								}
								elseif ( $key == "description" )
								{
									continue;
								}
								else
								{
									$temp .= "'$key' => ";
									
									if ( is_array( $value ) )
									{
										$inarray = false;
										foreach ( $value as $pkey => $pvalue )
										{
											if ( is_array( $pvalue ) )
											{
												$temp .= "array('" . implode( "','", $pvalue ) . "'";
											}
											else
											{
												if ( ! $inarray )
												{
													$temp .= "array('$pkey' => '$pvalue', ";
													$inarray = true;
												}
												else
												{
													$temp .= "'$pkey' => '$pvalue', ";
												}
											}
										}
										$temp = trim( $temp, ", " );
										$temp .= "), ";
									}
									else
									{
										$temp .= "'$value', ";
									}
								}
							}
						}
					}
					
					$temp = trim( $temp, ", " );
					$temp .= "), ";
				
				}
				
				$temp = trim( $temp, ", " );
				$temp .= ")";
				$class = str_replace( '|requirements|', $temp, $class );
				$indexes = trim( $indexes, ", " );
				$indexes .= ")";
				$class = str_replace( '|indexes|', $indexes, $class );
				$defaults = trim( $defaults, ", " );
				$defaults .= ")";
				$class = str_replace( '|defaults|', $defaults, $class );
				if ( eval( $class ) === false )
				{
					printr( $class );
					throw new Exception( 'Cannot instantiate Mongo Doc Class: ' . $className );
				}
			}
			else
			{
				require_once str_replace( '_', '/', $className ) . '.class.php';
			}
		}
	}
}

require_once APP_ROOT . 'deployment.php';

require_once APP_ROOT . 'constants.php';

if ( ! function_exists( 'printr' ) )
{

	function printr ( $mixed )
	{
		echo '<pre>';
		print_r( $mixed );
		echo '</pre>';
		echo "\n\n";
	}
}

if ( ! function_exists( 'notFromPackage' ) )
{

	function notFromPackage ()
	{
		$trace = debug_backtrace();
		
		if ( count( $trace ) < 2 )
		{
			return true;
		}
		else
		{
			$file = @$trace[ 1 ][ 'file' ];
			
			if ( stripos( $file, APP_MODULES . 'packages/' ) !== false )
			{
				// get packages_id
				$packages_id = explode( '/', str_replace( APP_MODULES . 'packages/', '', $file ) );
				$packages_id = array_shift( $packages_id );
				
				if ( in_array( $packages_id, unserialize( PACKAGES_INTERNAL ) ) )
				{
					return true;
				}
				else
				{
					return false;
				}
			}
			else
			{
				return true;
			}
		}
	}
}