<?php

extract($_POST, EXTR_REFS);

$source = APP_CONF . 'config-template.php';
$dest = APP_CONF . 'config.php';

$fh = fopen($source, "a+");
$contents = fread($fh, filesize($source));
fclose($fh);

$contents = str_replace(array('{DBHOST}', '{DBUSER}', '{DBPASS}', '{DBNAME}'), array($hostname, $username, $password, $dbname), $contents);

$fh = fopen($dest, "w+");

fwrite($fh, $contents);
fclose($fh);

$this->forward('success');