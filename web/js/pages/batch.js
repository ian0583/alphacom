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
			
			window.location = PAGES.batches;
		} );
	} );
	
	var batches_id = getURLParam( 'batches_id' );
	
	if ( batches_id )
	{
		new REST(
			{
			url : URLS.generic_batches + batches_id,
			method : 'get',
			onSuccess : function( batches )
			{
				var batch = batches.shift();
				
				populateForm( $( 'batch_edit' ), batch );
				$( 'batchName' ).innerHTML = batch.name;
				
			}
			} ).send();
	}
	
	$( 'batch_edit' ).addEvent( 'ajaxPost', function()
	{
		var rMethod = 'post';
		if (  getValueFromForm( $('batch_edit'), 'batches_id')  )
		{
			rMethod = 'put';
		}
		
		new REST(
			{
			url : URLS.generic_batches,
			method : rMethod,
			onSuccess : function( response )
			{
				var batch = response.shift();
				roar( MESSAGES.save );
				populateForm( $( 'batch_edit' ), batch );
				$( 'batchName' ).innerHTML = batch.name;
			}
			} ).send( $( 'batch_edit' ).toQueryString() );
	} );
	
	if ( $( 'errorMsg' ).innerHTML == '' )
	{
		$( 'errorMsg' ).hide();
	}
	
} );
