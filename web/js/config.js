var APP_URI = document.head.baseURI;

var defaultValidateEvent = function( passed, form, evt )
{
	if ( passed )
	{
		form.fireEvent( 'ajaxPost', form );
		return true;
	}
	else
	{
		return false;
	}
};

customValidators =
	[];

var RESTSERVER_URI = 'http://devbox/personal/alphacom/rest/default.rest/';
var COOKIEDOMAIN = APP_URI;

var CONFIG =
	{};

var URLS =
	{
		custom_profilelist : RESTSERVER_URI + 'getprofilelist/',
		custom_autocomplete : RESTSERVER_URI + 'autocomplete/',
		
		generic_profiles : RESTSERVER_URI + 'profiles/',
		generic_batches : RESTSERVER_URI + 'batches/',
		generic_addresses : RESTSERVER_URI + 'addresses/',
		generic_courses : RESTSERVER_URI + 'courses/',
		generic_contacttypes : RESTSERVER_URI + 'contacttypes/',
		generic_countries : RESTSERVER_URI + 'countries/',
		generic_users : RESTSERVER_URI + 'users/',
	};

var PAGES =
	{
		profile_edit : APP_URI + 'profile.php?profiles_id=',
		viewprofile : APP_URI + 'view.php?profiles_id=',
		users_edit : APP_URI + 'user.php?users_id=',
		courses_edit : APP_URI + 'course.php?courses_id=',
		batches_edit : APP_URI + 'batch.php?batches_id=',
		officers_edit : APP_URI + 'officer.php?officers_id=',
		batches : APP_URI + 'batches.php',
		officers : APP_URI + 'officers.php',
		users : APP_URI + 'users.php',
		courses : APP_URI + 'courses.php',
		profiles : APP_URI + 'profiles.php',
	}

var LISTDATA =
	[ 'Batches', 'Contacttypes', 'Countries', 'Courses' ];

var CUSTOMVALIDATORS =
	[
		[ 'validate-phone',
			{
			errorMsg : 'Please use numbers and punctuation only in this field (for example, a phone number with dashes, dots or the plus sign is permitted).',
			test : function( element )
			{
				return Form.Validator.getValidator( 'IsEmpty' ).test( element ) || ( /^(\+)?[\d() .:\-#]+$/.test( element.get( 'value' ) ) );
			}
			} ], ];

Form.Validator.addAllThese( CUSTOMVALIDATORS );


var MESSAGES =
	{
		save : "Data saved",
	}
