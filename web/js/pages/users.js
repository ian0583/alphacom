window.addEvent( 'domready', function()
{
	
	function createUser( container, user )
	{
		var tr = new Element( 'tr' ).injectInside( container );
		if ( user )
		{
			new Element('td').set('text', user.username).injectInside(tr);
			
			tr.addEvent('click', function(){
				window.location = PAGES.users_edit + user.users_id;
			});
		}
		else
		{
			new Element('td').set('text', 'No records found').injectInside(tr);
		}
	}
	
	new REST(
		{
		url : URLS.generic_users,
		method : 'get',
		onSuccess : function( users )
		{
			var container = $( 'usersContainer' );
			if ( users.length > 0 )
			{
				users.each( function( user )
				{
					createUser( container, user );
				} );
			}
			else
			{
				createUser( container );
			}
		}
		} ).send();
	
	$('newUser').addEvent('click', function(){
		window.location = PAGES.users_edit;
	});
} );