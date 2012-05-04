var ACOMM = {
	startTime: 6,
	endTime: 19,
	growl: ''
};

customValidators =
	[];

var currentForm = false;

var hasChanges = false;

var defaultValidateEvent = function( passed, form, evt )
{
	if ( passed )
	{
		form.fireEvent('ajaxPost', form);
		return true;
	}
	else
	{
		return false;
	}
};


//for mootools form validator. Custom validations
customValidators
		.push(
			[ 'validate-positivenumeric',
				{
				errorMsg : function( element )
				{
					return 'Number should be greater than or equal to 0' + '(you entered ' + element.value + ' characters).';
				},
				test : function( element )
				{
					return Form.Validator.getValidator( 'IsEmpty' )
							.test( element ) || ( /^(\+?((([0-9]+(\.)?)|([0-9]*\.[0-9]+))([eE][+-]?[0-9]+)?))$/ )
							.test( element.get( 'value' ) );
				}
				} ] );

// allows spaces
customValidators
		.push(
			[ 'validate-custom-alphanum',
				{
				errorMsg : function( element )
				{
					return 'This field accepts alphanumeric characters only.' + '(you entered ' + element.value + ' characters).';
				},
				test : function( element )
				{
					return Form.Validator.getValidator( 'IsEmpty' )
							.test( element ) || ( /^[a-z0-9A-Z ._\'?-]+$/i )
							.test( element.get( 'value' ) );
				}
				} ] );

// does not allow spaces
customValidators
		.push(
			[ 'validate-custom-alphanum-strict',
				{
				errorMsg : function( element )
				{
					return 'This field accepts alphanumeric characters only.' + '(you entered ' + element.value + ' characters).';
				},
				test : function( element )
				{
					return Form.Validator.getValidator( 'IsEmpty' )
							.test( element ) || ( /^[a-z0-9A-Z\._-]+$/i )
							.test( element.get( 'value' ) );
				}
				} ] );

customValidators
		.push(
			[ 'validate-custom-digit',
				{
				errorMsg : function( element )
				{
					return 'Please use numbers only in this field (for example, a number with + sign is permitted).';
				},
				test : function( element )
				{
					return Form.Validator.getValidator( 'IsEmpty' )
							.test( element ) || ( /^[-+]?[0-9]+$/ )
							.test( element.get( 'value' ) );
				}
				} ] );
// end -- custom validation