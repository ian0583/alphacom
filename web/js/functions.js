function log( obj )
{
	console.log( obj );
}

function getURLParam( strParamName )
{
	var strReturn = "";
	var strHref = window.location.href;
	if ( strHref.indexOf( "?" ) > -1 )
	{
		var strQueryString = strHref.substr( strHref.indexOf( "?" ) );
		var aQueryString = strQueryString.split( "&" );
		for ( var iParam = 0; iParam < aQueryString.length; iParam++ )
		{
			if ( aQueryString[ iParam ].indexOf( strParamName + "=" ) > -1 )
			{
				var aParam = aQueryString[ iParam ].split( "=" );
				strReturn = aParam[ 1 ];
				break;
			}
		}
	}
	return unescape( strReturn );
}

function validateForm( form )
{
	form = document.id( form );
	
	var validator = form.retrieve( 'validator' );
	
	return validator.validate();
}

function validateCurrentForm()
{
	var blank = function()
	{
	};
	
	if ( currentForm )
	{
		var validator = document.id( currentForm ).retrieve( 'validator' );
		
		// replace onValidate event
		validator.removeEvent( 'formValidate', defaultValidateEvent );
		validator.addEvent( 'formValidate', blank );
		
		if ( validateForm( currentForm ) )
		{
			if ( hasChanges )
			{
				// submit the form
				currentForm.fireEvent( 'ajaxPost', currentForm );
				hasChanges = false;
			}
			// restore onValidate Event
			validator.removeEvent( 'formValidate', blank );
			validator.addEvent( 'formValidate', defaultValidateEvent );
			return true;
		}
		else
		{
			// restore onValidate Event
			validator.removeEvent( 'formValidate', blank );
			validator.addEvent( 'formValidate', defaultValidateEvent );
			return false;
		}
	}
	else
	{
		return true;
	}
}

function getFormElements( form )
{
	var elements =
		[];
	$$( form.getElements( 'input' ) ).each( function( el )
	{
		elements.unshift( el );
	} );
	$$( form.getElements( 'select' ) ).each( function( el )
	{
		elements.unshift( el );
	} );
	$$( form.getElements( 'textarea' ) ).each( function( el )
	{
		elements.unshift( el );
	} );
	
	return $$( elements );
}

function serializeFormElements( form )
{
	var form = document.id( form );
	
	var elements = getFormElements( form );
	
	var queryString = '';
	
	elements.each( function( el )
	{
		switch ( el.tagName )
		{
			case 'SELECT':
				if ( el.options[ el.selectedIndex ].value )
				{
					queryString += '&' + el.get( 'name' ) + '=' + encodeURIComponent( el.options[ el.selectedIndex ].value );
				}
				break;
			
			default:
				if ( el.get( 'value' ) )
				{
					if ( el.get( 'type' ) == 'checkbox' || el.get( 'type' ) == 'radio' )
					{
						if ( el.get( 'checked' ) )
						{
							queryString += '&' + el.get( 'name' ) + '=1';
						}
						else
						{
							queryString += '&' + el.get( 'name' ) + '=0';
						}
					}
					else
					{
						if ( el.get( 'name' ) )
						{
							queryString += '&' + el.get( 'name' ) + '=' + encodeURIComponent( el.get( 'value' ) );
						}
					}
				}
				break;
		}
	} );
	
	return queryString;
}

function populateForm( form, data )
{
	form = document.id( form );
	var elements = getFormElements( form );
	
	elements.each( function( el )
	{
		switch ( el.tagName )
		{
			case 'SELECT':
				if ( data[ el.get( 'name' ) ] )
				{
					for ( var i = 0; i < el.options.length; i++ )
					{
						if ( el.options[ i ].value == data[ el.get( 'name' ) ] )
						{
							el.selectedIndex = i;
						}
					}
				}
				break;
			
			default:

				if ( data[ el.get( 'name' ) ] )
				{
					if ( el.get( 'type' ) == 'checkbox' || el.get( 'type' ) == 'radio' )
					{
						if ( data[ el.get( 'name' ) ] == 0 )
						{
							el.set( 'checked', false );
						}
						else
						{
							el.set( 'checked', true );
						}
					}
					else if ( el.get( 'type' ) == 'file' )
					{
						// do nothing
					}
					else
					{
						el.set( 'value', data[ el.get( 'name' ) ] );
						if ( el.hasClass( 'autocomplete-hidden' ) )
						{
							var classes = el.get( 'class' ).replace( 'autocomplete-hidden', '' ).trim();
							el.store( 'oldValue', el.get( 'value' ) );
							var parentElem = el.getParent();
							new REST(
								{
								url : RESTSERVER_URI + classes + '/' + el.value,
								method : 'get',
								onSuccess : function( response )
								{
									var input = parentElem.getElements( '.autocomplete' ).shift();
									var value = response[ 0 ].service ? response[ 0 ].service : response[ 0 ].name;
									input.set( 'value', value );
								},
								} ).send();
						}
					}
				}
				break;
		}
	} );
}

function autoCompleteDropdown ( text, table, field, url, hidden, length )
{
	new Autocompleter.Request.JSON( text,  url + '[table=' + table + ']' ,
		{
		'postVar' : field,
		minLength : length,
		width : '250px',
		maxChoices : 12,
		onSelection : function( el, sel, val, input )
		{
			new REST({
				url : URLS['generic_' + table] + '[' + field + '=' + val + ']',
				method : 'get',
				onSuccess : function ( response )
				{
					var result = response.shift();
					$(table + '_id').set('value', result[table + '_id']);
				}
			}).send();
		},
		} );
}

function updateSelectOptions( select, data, id_value, id_text, defaultvalue )
{
	select.options.length = 0;
	
	data.each( function( opt )
	{
		var o = new Element( 'option',
			{
				value : opt[ id_value ],
			} ).injectInside( select ).set( 'text', opt[ id_text ] );
		if ( !!defaultvalue && defaultvalue == opt[ id_value ] )
		{
			o.set( 'selected', 'selected' );
		}
	} );
}

function getValueFromForm( form, elementName )
{
	form = document.id( form );
	
	var elements = getFormElements( form );
	
	var value = '';
	
	elements.each( function( el )
	{
		if ( el.get( 'name' ) == elementName )
		{
			switch ( el.tagName )
			{
				case 'SELECT':
					value = el.options[ el.selectedIndex ].value;
					break;
				
				default:
					if ( el.get( 'type' ) == 'checkbox' || el.get( 'type' ) == 'radio' )
					{
						if ( el.get( 'checked' ) )
						{
							value = 1;
						}
						else
						{
							value = 0;
						}
					}
					else
					{
						value = encodeURIComponent( el.get( 'value' ) );
					}
					break;
			}
		}
	} );
	
	return value;
}

function getElementFromForm( form, elementName )
{
	form = document.id( form );
	
	var elements = getFormElements( form );
	
	var element = false;
	elements.each( function( el )
	{
		if ( el.get( 'name' ) == elementName )
		{
			element = el;
		}
	} );
	
	return element;
}

function basename( path, suffix )
{
	var b = path.replace( /^.*[\/\\]/g, '' );
	if ( typeof ( suffix ) == 'string' && b.substr( b.length - suffix.length ) == suffix )
	{
		b = b.substr( 0, b.length - suffix.length );
	}
	
	return b;
}

function encode64( input )
{
	var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
	var output = "";
	var chr1, chr2, chr3 = "";
	var enc1, enc2, enc3, enc4 = "";
	var i = 0;
	
	do
	{
		chr1 = input.charCodeAt( i++ );
		chr2 = input.charCodeAt( i++ );
		chr3 = input.charCodeAt( i++ );
		
		enc1 = chr1 >> 2;
		enc2 = ( ( chr1 & 3 ) << 4 ) | ( chr2 >> 4 );
		enc3 = ( ( chr2 & 15 ) << 2 ) | ( chr3 >> 6 );
		enc4 = chr3 & 63;
		
		if ( isNaN( chr2 ) )
		{
			enc3 = enc4 = 64;
		}
		else if ( isNaN( chr3 ) )
		{
			enc4 = 64;
		}
		
		output = output + keyStr.charAt( enc1 ) + keyStr.charAt( enc2 ) + keyStr.charAt( enc3 ) + keyStr.charAt( enc4 );
		chr1 = chr2 = chr3 = "";
		enc1 = enc2 = enc3 = enc4 = "";
	}
	while ( i < input.length );
	
	return output;
}

function roar( title, message )
{
	ROAR.alert( title, message );
}

function clearCache()
{
	globalcache.clear( 'acomm_token' );
	globalcache.clear( 'acomm_user' );
	globalcache.clear( 'acomm_users_id' );
	globalcache.clear( 'keepalive' );
	globalcache.reset();
	Cookie.dispose( 'acomm_token' );
	Cookie.dispose( 'keepalive_ck' );

	Cookie.dispose( 'token',
		{
			domain : COOKIEDOMAIN
		} );
	Cookie.dispose( 'keepalive_ck',
		{
			domain : COOKIEDOMAIN
		} );
}

// Truncating method
function truncate( string, length, end )
{
	if ( typeof length == 'undefined' )
	{
		length = 20;
	}
	
	if ( typeof end == 'undefined' )
	{
		end = '...';
	}
	
	if ( string == null )
	{
		return '';
	}
	
	return string.substring( 0, length - 1 ) + ( string.length > length ? end : '' );
}
