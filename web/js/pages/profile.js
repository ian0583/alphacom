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
			
			window.location = PAGES.profiles;
		} );
	} );
	
	var profiles_id = getURLParam( 'profiles_id' );
	
	if ( profiles_id )
	{
		new REST(
			{
			url : URLS.generic_profiles + profiles_id,
			method : 'get',
			onSuccess : function( profiles )
			{
				var profile = profiles.shift();
				
				populateForm( $( 'profile_edit' ), profile );
				
				$( 'profileName' ).innerHTML = profile.lastname + ', ' + profile.firstname;
				
				if ( !!profile.batches_id.toInt() )
				{
					new REST(
						{
						url : URLS.generic_batches + profile.batches_id,
						method : 'get',
						onSuccess : function( response )
						{
							$( 'batches' ).set( 'value', response[ 0 ].name );
						}
						} ).send();
				}
				
				if ( !!profile.courses_id.toInt() )
				{
					new REST(
						{
						url : URLS.generic_courses + profile.courses_id,
						method : 'get',
						onSuccess : function( response )
						{
							$( 'courses' ).set( 'value', response[ 0 ].name );
						}
						} ).send();
				}
			}
			} ).send();
	}
	else
	{
		$( 'otherInfo' ).hide();
	}
	
	$( 'profile_edit' ).addEvent( 'ajaxPost', function()
	{
		var rMethod = 'post';
		if ( getValueFromForm( $( 'profile_edit' ), 'profiles_id' ) )
		{
			rMethod = 'put';
		}
		
		new REST(
			{
			url : URLS.generic_profiles,
			method : rMethod,
			onSuccess : function( response )
			{
				var profile = response.shift();
				roar( MESSAGES.save );
				$( 'otherInfo' ).show();
				populateForm( $( 'profile_edit' ), profile );
				$( 'profileName' ).innerHTML = profile.lastname + ', ' + profile.firstname;
			}
			} ).send( $( 'profile_edit' ).toQueryString() );
	} );
	
	if ( $( 'errorMsg' ).innerHTML == '' )
	{
		$( 'errorMsg' ).hide();
	}
	
	$$( '.autocomplete' ).each( function( elem )
	{
		var hiddenElem = $( elem.id + '_id' );
		var field = 'name';
		if ( elem.id == 'users' )
		{
			field = 'user' + field;
		}
		autoCompleteDropdown( elem, elem.id, field, URLS.custom_autocomplete, hiddenElem, 2, true )
	} );
	
	$( 'addAddress' ).addEvent( 'click', function()
	{
		window.location = PAGES.addresses + profiles_id;
	} );
	
	$( 'addContact' ).addEvent( 'click', function()
	{
		window.location = PAGES.contacts + profiles_id;
	} );
	
} );
