window.addEvent( 'domready', function()
{
	var validator = new mooValidator( $$( 'form' ).shift() );
	
	$$( 'button.submit' ).each( function( el )
	{
		var currentform = el.form;
		
		el.addEvent( 'click', function( e )
		{
			e.stopPropagation();
			e.preventDefault();
			
			validateForm( currentform );
		} );
	} );
	
	$$( 'button.cancel' ).each( function( el )
	{
		var currentform = el.form;
		
		el.addEvent( 'click', function( e )
		{
			e.stopPropagation();
			e.preventDefault();
			
			window.location = PAGES.users;
		} );
	} );
	
	var users_id = getURLParam( 'users_id' );
	
	if ( users_id )
	{
		new REST(
			{
			url : URLS.generic_users + users_id,
			method : 'get',
			onSuccess : function( users )
			{
				var user = users.shift();
				
				populateForm( $( 'user_edit' ), user );
				$('userName').innerHTML = user.username;
				
				getElementFromForm( $('user_edit'), 'username').set('readonly', true);
			}
			} ).send();
	}
	
	$('user_edit').addEvent('ajaxPost', function (){
		var rMethod = 'post';
		if (users_id)
			{
			rMethod = 'put';
			}
		
		new REST({
			url : URLS.generic_users,
			method : rMethod,
			onSuccess : function ( response )
			{
				var user = response.shift();
				roar(MESSAGES.save);
				$('userName').innerHTML = user.username;
			}
		}).send( $('user_edit').toQueryString());
	});
	
	if ( $( 'errorMsg' ).innerHTML == '' )
	{
		$( 'errorMsg' ).hide();
	}
		
} );
