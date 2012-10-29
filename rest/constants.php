<?
/**
 * Application settings that may be defined by the user
 *
 * @author Sheldon Senseng
 * @copyright Sheldon Senseng <sheldonsenseng@gmail.com>
 *           
 */

date_default_timezone_set( 'Asia/Manila' );

define( 'APP_NAME', 'Chukwu Framework' );
define( 'APP_EMAIL', 'sheldonsenseng@gmail.com' );
define( 'APP_MOD_DEFAULT', 'home' );
define( 'APP_TPL_DEFAULT', 'main.tpl' );

define( 'APP_SESSION', false ); // set this to true to enable db based session
                                // handling

define( 'APP_CACHING', false ); // set to true to enable caching

define( 'DEBUG', false ); // set to false for production

define( 'LOGRESTCALLS', true );

define( 'VALIDATION_DATEFORMAT', 'dd-mm-yyyy' );

define( 'ALLOWEDHOSTS_LIMIT', false );

define( 'TOKEN_LIMIT', 1800 );
define( 'TOKEN_REFRESH', 900 );

// SQLITE PATH
define( 'APP_SQLITE', '/var/www/oauth/' );


