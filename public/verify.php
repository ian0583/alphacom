<?php

if (!file_exists(APP_CONF . 'config.php') && strpos($module, 'config'))
{
	header("Location: " . APP_URI . 'config');
}