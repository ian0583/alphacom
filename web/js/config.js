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
		custom_register : RESTSERVER_URI + 'register/',
		custom_getagencyapplicants : RESTSERVER_URI + 'getagencyapplicants/',
		
		rest_jobseekers : RESTSERVER_URI + 'jobseekers/',
		rest_jobseekerschools : RESTSERVER_URI + 'jobseekerschools/',
		rest_jobseekeremployments : RESTSERVER_URI + 'jobseekeremployments/',
		rest_jobseekerreferences : RESTSERVER_URI + 'jobseekerreferences/',
		rest_jobseekerskills : RESTSERVER_URI + 'jobseekerskills/',
		rest_agencies : RESTSERVER_URI + 'agencies/',
		rest_employers : RESTSERVER_URI + 'employers/',
		rest_users : RESTSERVER_URI + 'users/',
		rest_jobpostings : RESTSERVER_URI + 'jobpostings/',
		rest_jobapplications : RESTSERVER_URI + 'jobapplications/',
	};

var PAGES =
	{
		jobs : APP_URI + 'jobs.php',
		agencylogin : APP_URI + 'agency_login.php',
		job : APP_URI + 'job.php',
		jobs : APP_URI + 'jobs.php',
		job_apply : APP_URI + 'job_apply.php',
		job_user : APP_URI + 'job_user.php',
		employer_profile : APP_URI + 'employer_profile.php',
		employer_home : APP_URI + 'employer_home.php',
		employer_viewapplications : APP_URI + 'employer_viewapplications.php',
		employer_agencies : APP_URI + 'employer_agencies.php',
		agency_home : APP_URI + 'agency_home.php',
		job_userprofile : APP_URI + 'job_userprofile.php',
		job_userinfo : APP_URI + 'job_userinfo.php'
	}

var REQUIREDFIELDS = 
	{
		schools : ["educationalattainment","schoolname","course"],
		employment : ["department","company","industry"],
		trainings : ["trainingcenter","coursetitle"],
		skills : ["skillname","proficiency"],
		references : ["referencename","position","relation","contactnumber"],
	};

var REQUESTFIELDS =
	{
		//for put purposes please follow this pattern
		//<name> : ["<tablename_id>", <colname>, <colname>, <colname>, <colname>]
		schools : ["jobseekerschools_id","educationalattainment","schoolname","course", "jobseekers_id", "startdate","enddate", "status"],
		employment : ["jobseekeremployments_id","department","company","industry", "jobseekers_id", "startdate","enddate", "status"],
		trainings : ["jobseekertrainings_id","trainingcenter","coursetitle", "jobseekers_id","startdate","enddate", "status"],
		skills : ["jobseekerskills_id ", "skillname","proficiency", "jobseekers_id"],
		references : ["jobseekerreferences_id","referencename","position","relation","contactnumber", "jobseekers_id"],
	};


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

var HELPTEXT =
	{
		defaulttext : 'Click on one of the fields to get help.',
		completename : 'Your complete legal name.',
		homeaddress : 'Your current address.',
		domicileaddress : 'Your permanent address.',
		email : 'Your valid email address. This will be used to send you updates on your application.',
		contactnumber : 'Your mobile or landline number. This will be used to contact you for updates on your application.',
		availability : 'Date when you will be available to join the company.',
		civilstatus : 'Your civil status (Single, Married, Divorced, Widow, Widower).',
		gender : 'Your gender (Male, Female).',
		religion : 'Your religion (Roman Catholicism, Protestantism, Islam, etc.)',
		nationality : 'Your nationality.',
		username : 'Your username to be used for future transactions.',
		password : 'Your password to help protect your account.',
	}
