window.addEvent('domready', function()
{
	Cookie.dispose( 'token',
	{
		domain : COOKIEDOMAIN
	} );
	globalcache.reset();
	clearCache();
	location.href = APP_URI;
});