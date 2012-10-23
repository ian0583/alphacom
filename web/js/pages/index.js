window.addEvent( 'domready', function()
{
	
	$$( '#buttons #employee' ).each( function( el )
	{
		el.addEvent( 'click', function( e )
		{
			e.preventDefault();
			e.stopPropagation();
			
			location.href = PAGES.job_userprofile;
		} );
	} );
	
	$$( '#buttons #agency' ).each( function( el )
	{
		el.addEvent( 'click', function( e )
		{
			e.preventDefault();
			e.stopPropagation();
			
			location.href = PAGES.agencylogin;
		} )
	} );
	
	$$( '#buttons #employer' ).each( function( el )
			{
				el.addEvent( 'click', function( e )
				{
					e.preventDefault();
					e.stopPropagation();
					
					location.href = PAGES.employer_home;
				} )
			} );
	
} );