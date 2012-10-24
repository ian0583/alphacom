window.addEvent( 'domready', function()
{
	var contacts_id = getURLParam( 'contacts_id' );
	var profiles_id = getURLParam( 'profiles_id' );
	
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
			
			window.location = PAGES.contacts + profiles_id;
		} );
	} );
	
	getElementFromForm( $( 'contact_edit' ), 'profiles_id' ).set( 'value', profiles_id );
	
	updateSelectOptions( $( 'type_id' ), globalcache.get( 'Contacttypes' ), 'contacttypes_id', 'name' );
	
	if ( contacts_id )
	{
		new REST(
			{
			url : URLS.generic_contacts + contacts_id,
			method : 'get',
			onSuccess : function( contacts )
			{
				var contact = contacts.shift();
				
				populateForm( $( 'contact_edit' ), contact );
				$( 'contactName' ).innerHTML = contact.detail;
				
			}
			} ).send();
	}
	
	$( 'contact_edit' ).addEvent( 'ajaxPost', function()
	{
		var rMethod = 'post';
		if (  getValueFromForm( $('contact_edit'), 'contacts_id')  )
		{
			rMethod = 'put';
		}
		
		new REST(
			{
			url : URLS.generic_contacts,
			method : rMethod,
			onSuccess : function( response )
			{
				var contact = response.shift();
				roar( MESSAGES.save );
				$( 'contactName' ).innerHTML = contact.detail;
				populateForm( $( 'contact_edit' ), contact );
			}
			} ).send( $( 'contact_edit' ).toQueryString() );
	} );
	
	if ( $( 'errorMsg' ).innerHTML == '' )
	{
		$( 'errorMsg' ).hide();
	}
	
} );
