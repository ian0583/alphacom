<?php

require 'settings.php';
require "includes/css/lessc.inc.php";
lessc::ccompile( 'includes/css/main.less', 'includes/css/main.css', true );

// set error and exception handlers
set_error_handler('Core_Handler::errorHandler');
set_exception_handler('Core_Handler::exceptionHandler');

if (!empty($_SERVER['REDIRECT_MODULE']))
{
	$PARAMS = explode('/', $_SERVER['REDIRECT_MODULE']);
}

$module = array_shift($PARAMS);
$moduleBasePath = str_replace('-', '/', $module) . '.php';
$templateBasePath = str_replace('-', '/', $module) . '.tpl';

require 'verify.php';

session_start();

// Get the module name and parameters - end
// parse the modules.ini file
$modules = parse_ini_file(APP_LIB . 'modules.ini', true);

if (isset($modules[$module]))
{
        $parameters = $modules[$module];
        $parameters['allowdisplay'] = true;
        $isDefault = false;
}
else 
{
	if (stripos($module, '.do') !== false)
	{
		$parameters['module'] = 'actions/' . str_replace('.do', '.action', $moduleBasePath);
		$parameters['allowdisplay'] = false;
	}
	else 
	{
		$parameters['module'] = 'main/' . $moduleBasePath;
		$parameters['allowdisplay'] = true;
		$parameters['template'] = 'main/' . $templateBasePath;
		
		if (stripos($templateBasePath, 'partial') === false)
		{
			$parameters['body'] = 'main/' . $templateBasePath;
			$parameters['template'] = APP_MAIN;
		}
	}
}

if (file_exists(APP_CONTROLS . $parameters['module']) && (!isset($parameters['body']) || file_exists(APP_VIEWS . @$parameters['body'])))
{
	$PEOPS = new Core_Peopsquik($parameters);
	
	if ($parameters['allowdisplay'])
	{
		$PEOPS->display();
	}
}
else
{
	// display the 'module not found' page
	throw new Exception("Module $module not found");
}
