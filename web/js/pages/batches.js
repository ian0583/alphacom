window.addEvent( 'domready', function()
{
	
	function createBatch( container, batch )
	{
		var tr = new Element( 'tr' ).injectInside( container );
		if ( batch )
		{
			new Element('td').set('text', batch.name).injectInside(tr);
			new Element('td').set('text', batch.year).injectInside(tr);
			new Element('td').set('text', batch.sub).injectInside(tr);
			
			tr.addEvent('click', function(){
				window.location = PAGES.batches_edit + batch.batches_id;
			});
		}
		else
		{
			new Element('td', {'html' : 'No records found', 'colspan' : 3}).injectInside(tr);
		}
	}
	
	new REST(
		{
		url : URLS.generic_batches,
		method : 'get',
		onSuccess : function( batches )
		{
			var container = $( 'batchesContainer' );
			if ( batches.length > 0 )
			{
				batches.each( function( batch )
				{
					createBatch( container, batch );
				} );
			}
			else
			{
				createBatch( container );
			}
		}
		} ).send();
	
	$('newBatch').addEvent('click', function(){
		window.location = PAGES.batches_edit;
	});
} );