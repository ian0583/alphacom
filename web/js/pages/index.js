window.addEvent( 'domready', function()
{
	
	$$( '.boxed' ).each( function( el )
	{
		el.addEvent( 'click', function()
		{
			location.href = el.get( 'id' ) + '.php';
		} );
	} );
	
} );