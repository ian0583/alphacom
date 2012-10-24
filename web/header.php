<?php
define( 'APP_URI', trim( "http://$_SERVER[HTTP_HOST]" . dirname( $_SERVER[ 'PHP_SELF' ] ), '/' ) . '/' );
define( 'APP_ROOT', dirname( __FILE__ ) . '/' );

header( "Cache-Control: no-cache, must-revalidate" ); // HTTP/1.1
@header( "Expires: " . date( "D, j M Y 00:00:00 GMT", time() - 86400 ) ); // Date in the past

require "css/lessc.inc.php";
$less = new lessc();

// lessc::ccompile( APP_ROOT . 'css/main.less', APP_ROOT . 'css/main.css', true );
$less->compileFile( APP_ROOT . 'css/main.less', APP_ROOT . 'css/main.css' );
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
<meta charset="utf-8">
<title><?=$documentTitle;?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">

<base href="<?=APP_URI;?>">

<link rel="stylesheet" type="text/css" href="css/main.css" />
<script type="text/javascript" src="js/crypto/md5.js"></script>
<script type="text/javascript" src="js/built.js"></script>
<script type="text/javascript" src="js/urls.js"></script>
<script type="text/javascript" src="js/config.js"></script>
<script type="text/javascript" src="js/functions.js"></script>
<script type="text/javascript" src="js/classes/REST.js"></script>
<script type="text/javascript" src="js/classes/Autocompleter.js"></script>
<script type="text/javascript" src="js/classes/Autocompleter.Request.js"></script>
<script type="text/javascript" src="js/classes/cache.js"></script>
<script type="text/javascript" src="js/classes/stringfunctions.js"></script>
<script type="text/javascript" src="js/classes/roar.js"></script>
<script type="text/javascript" src="js/classes/mooValidator.js"></script>
<script type="text/javascript" src="js/classes/scrollspy.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</head>

<body>

	<?
		require "nav.php";
	?>

	<div id="mainwrapper" class="row-fluid">