window.addEvent( 'domready', function()
{
	function createLongAddress()
	{
		var longaddress = '';
		var form = $('address_edit');
		longaddress += getValueFromForm( form, 'address1') + ', ';
		longaddress += getValueFromForm( form, 'address2') + ', ';
		longaddress += getValueFromForm( form, 'city') + ', ';
		longaddress += getValueFromForm( form, 'stateprovince') + ', ';
		longaddress += getValueFromForm( form, 'country') + ' ';
		longaddress += getValueFromForm( form, 'postcode');
		
		return longaddress;
	}
	
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
			
			window.location = PAGES.addresses;
		} );
	} );
	
	var profiles_id = getURLParam( 'profiles_id' );
	var addresses_id = getURLParam( 'addresses_id' );
	
	getElementFromForm($('address_edit'), 'profiles_id').set('value', profiles_id);
	
	updateSelectOptions($('country'), globalcache.get('Countries'), 'countries_id', 'name');
	
	if ( addresses_id )
	{
		new REST(
			{
			url : URLS.generic_addresses + addresses_id,
			method : 'get',
			onSuccess : function( addresses )
			{
				var address = addresses.shift();
				
				populateForm( $( 'address_edit' ), address );
				$( 'addressName' ).innerHTML = address.longaddress;
				
			}
			} ).send();
	}
	
	$( 'address_edit' ).addEvent( 'ajaxPost', function()
	{
		var rMethod = 'post';
		if (  getValueFromForm( $('address_edit'), 'addresses_id')  )
		{
			rMethod = 'put';
		}
		
		var longaddress = createLongAddress();
		getElementFromForm($('address_edit'), 'longaddress').set('value', longaddress);
		
		new REST(
			{
			url : URLS.generic_addresses,
			method : rMethod,
			onSuccess : function( response )
			{
				var address = response.shift();
				roar( MESSAGES.save );
				populateForm( $( 'address_edit' ), address );
				$( 'addressName' ).innerHTML = address.longaddress;
			}
			} ).send( $( 'address_edit' ).toQueryString() + '&status=1' );
	} );
	
	if ( $( 'errorMsg' ).innerHTML == '' )
	{
		$( 'errorMsg' ).hide();
	}
	
} );
