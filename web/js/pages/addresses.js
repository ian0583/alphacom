window.addEvent( 'domready', function()
{
	
	function createBatch( container, address )
	{
		var tr = new Element( 'tr' ).injectInside( container );
		if ( address )
		{
			new Element( 'td' ).set( 'text', address.longaddress ).injectInside( tr );
			
			tr.addEvent( 'click', function()
			{
				window.location = PAGES.addresses_edit + 'profiles_id=' + address.profiles_id + '&addresses_id=' + address.addresses_id;
			} );
		}
		else
		{
			new Element( 'td' ).set( 'text', 'No records found' ).injectInside( tr );
		}
	}
	
	var profiles_id = getURLParam( 'profiles_id' );
	
	new REST(
		{
		url : URLS.generic_addresses + '[profiles_id=' + profiles_id + ']',
		method : 'get',
		onSuccess : function( addresses )
		{
			var container = $( 'addressesContainer' );
			if ( addresses.length > 0 )
			{
				addresses.each( function( address )
				{
					createBatch( container, address );
				} );
			}
			else
			{
				createBatch( container );
			}
		}
		} ).send();
	
	$( 'newAddress' ).addEvent( 'click', function()
	{
		window.location = PAGES.addresses_edit + 'profiles_id=' + profiles_id;
	} );
	
	$( 'backToProfile' ).addEvent( 'click', function()
	{
		window.location = PAGES.profile_edit + profiles_id;
	} );
} );