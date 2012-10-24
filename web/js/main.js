globalcache.load();

var hasRoar = false;

window.addEvent( 'domready', function()
{
	LISTDATA.each( function( type )
	{
		if ( globalcache.get( type ) == undefined )
		{
			new REST(
				{
				url : URLS[ 'generic_' + type.toLowerCase() ],
				method : 'get',
				onSuccess : function( response )
				{
					globalcache.set( type, response );
					globalcache.save();
				},
				
				} ).send();
		}
	} );
	
	var users_id = globalcache.get( 'acom_users_id' );
	var profiles_id = globalcache.get( 'acom_profiles_id' );
	
	$('editUserItem').set('href', PAGES.users_edit + users_id);
	
	if ( profiles_id )
	{
		$( 'viewProfileItem' ).set( 'href', PAGES.viewprofile + profiles_id );
		$( 'editProfileItem' ).set( 'hrer', PAGES.profile_edit + profiles_id );
	}
	else
	{
		$( 'viewProfileItem' ).getParent().hide();
		$( 'editProfileItem' ).getParent().hide();
	}
	
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
