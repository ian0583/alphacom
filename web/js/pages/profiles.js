window.addEvent( 'domready', function()
{
	
	function createProfile( container, profile )
	{
		var tr = new Element( 'tr' ).injectInside( container );
		if ( profile )
		{
			new Element('td').set('text', profile.batch).injectInside(tr);
			new Element('td').set('text', profile.firstname).injectInside(tr);
			new Element('td').set('text', profile.lastname).injectInside(tr);
			new Element('td').set('text', profile.longaddress).injectInside(tr);
			
			tr.addEvent('click', function(){
				window.location = PAGES.profile_edit + profile.profiles_id;
			});
		}
		else
		{
			new Element( 'td',
				{
				'colspan' : '4',
				'html' : 'No records found'
				} ).injectInside( tr );
		}
	}
	
	new REST(
		{
		url : URLS.custom_profilelist,
		method : 'get',
		onSuccess : function( profiles )
		{
			var container = $( 'profilesContainer' );
			if ( profiles.length > 0 )
			{
				profiles.each( function( profile )
				{
					createProfile( container, profile );
				} );
			}
			else
			{
				createProfile( container );
			}
		}
		} ).send();
	
	$('newProfile').addEvent('click', function(){
		window.location = PAGES.profile_edit;
	});
} );