window.addEvent( 'load', function()
{
	ACOMM.growl = new Notimoo();

	$$( '.close' ).each( function( el )
	{
		el.addEvent( 'click', function( evt )
		{
			evt.preventDefault();
			evt.stopPropagation();
			el.getParent().destroy();
		} );
	} );
	
	$$( 'form' ).each( function( el )
	{
		var validator = new mooValidator( el );
	} );
	
	$$( 'button.submit' ).each( function( el )
	{
		var form = el.form;
		
		el.addEvent( 'click', function( e )
		{
			e.stopPropagation();
			e.preventDefault();
			
			validateForm( form );
		} );
	} );
	
	$$( 'button.cancel' ).each( function( el )
	{
		var form = el.form;
		
		el.addEvent( 'click', function( e )
		{
			e.stopPropagation();
			e.preventDefault();
			
			form.reset();
		} );
	} );
	
	$$( '#mainwrapper .nav li' ).each( function( el )
	{
		el.addEvent( 'click', function( e )
		{
			e.preventDefault();
			e.stopPropagation();
		} );
	} );
	
	$$( 'input,select,textarea' ).each( function( el )
	{
		el.addEvent( 'focus', function()
		{
			currentForm = el.form;
		} );
		
		el.addEvent( 'change', function()
		{
			hasChanges = true;
		} );
	} );
	
} );