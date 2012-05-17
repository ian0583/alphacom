<?php /* Smarty version 2.6.25, created on 2012-04-29 15:50:55
         compiled from setup/main.tpl */ ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php echo $this->_tpl_vars['TEMPLATE_TITLE']; ?>
</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
		
		<base href="<?php echo @APP_URI; ?>
">
		<link rel="stylesheet" type="text/css" href="<?php echo @APP_INCLUDES; ?>
css/main.css" />
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/built.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/config.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/functions.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/classes/mooCal.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/classes/mooValidator.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/classes/rippleCenter.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/classes/notimoo.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/classes/cache.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/classes/REST.js"></script>
		<script type="text/javascript" src="<?php echo @APP_INCLUDES; ?>
js/main.js"></script>
				
		<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>

<body>

	<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'setup/menu.tpl', 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	
	<div id="mainwrapper" class="container">

	<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => $this->_tpl_vars['body'], 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	
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
	