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
	
	// var profiles_id = globalcache.get( 'acom_profiles_id' );
	
	// if ( profiles_id )
	// {
	// $( 'viewProfileItem' ).set( 'href', PAGES.viewprofile + profiles_id );
	// $( 'editProfileItem' ).set( 'hrer', PAGES.profile_edit + profiles_id );
	// }
	// else
	// {
	// $( 'viewProfileItem' ).getParent().hide();
	// $( 'editProfileItem' ).getParent().hide();
	// }
	
	var page = basename( window.location.pathname, '.php' );
	
	if ( !LOGINPAGES.contains( page ) )
	{
		var c = new rippleAuth(
			{
			redirectOnFail : CONFIG.loginPage,
			onAuthorize : function()
			{
				$( 'mainwrapper' ).setStyle( 'visibility', 'visible' );
				
				var users_id = globalcache.get( 'acom_users_id' );
				$( 'editUserItem' ).set( 'href', PAGES.users_edit + users_id );
			}
			} );
		var check = c.check( CONFIG.authCheck * 60000 ); // 5mins
	}
	else
	{
		$( 'mainwrapper' ).setStyle( 'visibility', 'visible' );
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
