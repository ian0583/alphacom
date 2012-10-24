window.addEvent( 'domready', function()
{
	
	function createCourse( container, course )
	{
		var tr = new Element( 'tr' ).injectInside( container );
		if ( course )
		{
			new Element('td').set('text', course.name).injectInside(tr);
			
			tr.addEvent('click', function(){
				window.location = PAGES.courses_edit + course.courses_id;
			});
		}
		else
		{
			new Element('td').set('text', 'No records found').injectInside(tr);
		}
	}
	
	new REST(
		{
		url : URLS.generic_courses,
		method : 'get',
		onSuccess : function( courses )
		{
			var container = $( 'coursesContainer' );
			if ( courses.length > 0 )
			{
				courses.each( function( course )
				{
					createCourse( container, course );
				} );
			}
			else
			{
				createCourse( container );
			}
		}
		} ).send();
	
	$('newCourse').addEvent('click', function(){
		window.location = PAGES.courses_edit;
	});
} );