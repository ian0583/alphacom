function validateForm( form )
{
	form = document.id( form );
	
	var validator = form.retrieve( 'validator' );
	return validator.validate();
}
