function validateForm( form )
{
	form = document.id( form );
	
	var validator = form.retrieve( 'validator' );
	return validator.validate();
}

function autoCompleteDropdown ( el, table, field, url, hiddenElem,
		minlength, force )
{
	autocomplete = new Autocompleter.Request.JSON( el, url + table + '/' + field, {
		'postVar' : field,
		minLength : minlength,
		maxChoices : 10,
		autoSubmit : false,
		cache : false,
		delay : 0,
		filterCase : true,
		forceSelect : force,
		onSelection : function ( el, selected, value, input )
		{
			new REST( {
				url : RESTSERVER_URI + table + '/' + field + '/' + value,
				method : 'get',
				onSuccess : function ( response )
				{
					hiddenElem.set( 'value', response[ 0 ]._id );
				}
			} ).send();
		},
	} );
}

