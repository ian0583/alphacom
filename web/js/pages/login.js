window.addEvent( 'domready', function()
{
	if ( $( 'errorMsg' ).innerHTML == '' )
	{
		$( 'errorMsg' ).hide();
	}
	
	$( 'login_btn' ).addEvent( 'click', function( e )
	{
		e.stopPropagation();
		e.preventDefault();
		
		doLogin();
	} );
	
	$$( '#login form input' ).each( function( el )
	{
		el.addEvent( 'keyup', function( e )
		{
			if ( e.code == 13 )
			{
				doLogin();
			}
		} );
	} );
	
	function doLogin()
	{
		$( 'errorMsg' ).hide();
		
		var a = new rippleAuth(
			{
			loginname : $( 'username' ).get( 'value' ),
			loginpass : $( 'password' ).get( 'value' ),
			redirect : ( globalcache.get( 'redirect' ) ) ? globalcache.get( 'redirect' ) : APP_URI,
			keepalive : true,
			errormsgbox_id : 'errorMsg',
			} );
		a.authenticate();
		
	}
} );