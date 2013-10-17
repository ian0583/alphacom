<?php

mkdir ("application/views/.smarty/.compiled", 0777, true);

mkdir ("application/views/.smarty/.cache", 0777, true);

mkdir ("log", 0777, true);

mkdir ("uploads", 0777, true);

mkdir ("data/auth", 0777, true);

mkdir ("data/db", 0777, true);

mkdir ("data/cache", 0777, true);

mkdir ("data/search", 0777, true);

mkdir ("data/sql", 0777, true);
mkdir ("data/sqlite", 0777, true);

array_map('unlink', glob("application/views/.smarty/.compiled/*"));
array_map('unlink', glob("application/views/.smarty/.cache/*"));

exec("svn propset svn:ignore -F .ignores .");
exec("svn propset svn:ignore -F conf/.ignores conf/.");
exec("svn propset svn:ignore -F includes/.ignores includes/.");
exec("svn propset svn:ignore -F application/views/.ignores application/views/.");
