<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>{$TEMPLATE_TITLE}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
		
		<base href="{$smarty.const.APP_URI}">
		<link rel="stylesheet" type="text/css" href="{$smarty.const.APP_INCLUDES}css/main.css" />
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/built.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/config.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/functions.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/classes/mooCal.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/classes/mooValidator.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/classes/rippleCenter.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/classes/notimoo.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/classes/cache.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/classes/REST.js"></script>
		<script type="text/javascript" src="{$smarty.const.APP_INCLUDES}js/main.js"></script>
				
		<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>

<body>

	{include file='setup/menu.tpl'}
	
	<div id="mainwrapper" class="container">

	{include file=$body}
	
	</div>
	
	<div id="footer" class="container">
		
		<hr>
		
		<div class="nav-collapse">
			<div class="navbar-text">
				&copy; peopsquik 2012. All Rights Reserved.
			</div>
		</div>
	
	</div>
	
</body>
</html>
	