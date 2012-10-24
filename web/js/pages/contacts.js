window.addEvent( 'domready', function()
{
	
	function createBatch( container, contact )
	{
		var tr = new Element( 'tr' ).injectInside( container );
		if ( contact )
		{
			var type = new Element( 'td' ).injectInside( tr );
			
			new REST(
				{
				url : URLS.generic_contacttypes + contact.type_id,
				method : 'get',
				onSuccess : function( response )
				{
					var contacttype = response.shift();
					type.set( 'text', contacttype.name );
				}
				} ).send();
			new Element( 'td' ).set( 'text', contact.detail ).injectInside( tr );
			
			tr.addEvent( 'click', function()
			{
				window.location = PAGES.contacts_edit + 'profiles_id=' + contact.profiles_id + '&contacts_id=' + contact.contacts_id;
			} );
		}
		else
		{
			new Element( 'td',
				{
				'html' : 'No records found',
				'colspan' : 3
				} ).injectInside( tr );
		}
	}
	
	var profiles_id = getURLParam( 'profiles_id' );
	
	new REST(
		{
		url : URLS.generic_contacts + '[profiles_id=' + profiles_id + ']',
		method : 'get',
		onSuccess : function( contacts )
		{
			var container = $( 'contactsContainer' );
			if ( contacts.length > 0 )
			{
				contacts.each( function( contact )
				{
					createBatch( container, contact );
				} );
			}
			else
			{
				createBatch( container );
			}
		}
		} ).send();
	
	$( 'newBatch' ).addEvent( 'click', function()
	{
		window.location = PAGES.contacts_edit + 'profiles_id=' + profiles_id;
	} );
	
	$( 'backToProfile' ).addEvent( 'click', function()
	{
		window.location = PAGES.profile_edit + profiles_id;
	} );
} );