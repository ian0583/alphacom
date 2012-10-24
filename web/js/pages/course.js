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
			
			window.location = PAGES.courses;
		} );
	} );
	
	var courses_id = getURLParam( 'courses_id' );
	
	if ( courses_id )
	{
		new REST(
			{
			url : URLS.generic_courses + courses_id,
			method : 'get',
			onSuccess : function( courses )
			{
				var course = courses.shift();
				
				populateForm( $( 'course_edit' ), course );
				$( 'courseName' ).innerHTML = course.name;
				
			}
			} ).send();
	}
	
	$( 'course_edit' ).addEvent( 'ajaxPost', function()
	{
		var rMethod = 'post';
		if ( courses_id )
		{
			rMethod = 'put';
		}
		
		new REST(
			{
			url : URLS.generic_courses,
			method : rMethod,
			onSuccess : function( response )
			{
				var course = response.shift();
				roar( MESSAGES.save );
				$( 'courseName' ).innerHTML = course.coursename;
			}
			} ).send( $( 'course_edit' ).toQueryString() );
	} );
	
	if ( $( 'errorMsg' ).innerHTML == '' )
	{
		$( 'errorMsg' ).hide();
	}
	
} );
