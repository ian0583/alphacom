// globalcache.load();

var hasRoar = false;

window.addEvent( 'domready', function()
{
	
} );

window.addEvent( 'load', function()
{
	ROAR = new Roar(
		{
		position : 'upperRight',
		onHide : function( item )
		{
			hasRoar = false;
		},
		} );
	
} );
