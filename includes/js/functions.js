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
				alert( 'this is the fake js post' );
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

function getURLParam(strParamName)
{
	var strReturn = "";
	var strHref = window.location.href;
	if (strHref.indexOf("?") > -1)
	{
		var strQueryString = strHref.substr(strHref.indexOf("?"));
		var aQueryString = strQueryString.split("&");
		for ( var iParam = 0; iParam < aQueryString.length; iParam++)
		{
			if (aQueryString[iParam].indexOf(strParamName + "=") > -1)
			{
				var aParam = aQueryString[iParam].split("=");
				strReturn = aParam[1];
				break;
			}
		}
	}
	return unescape(strReturn);
}

function growl(growlmessage)
{
	ACOMM.growl.show({
		title : 'Notification',
		message : growlmessage
	});
}
