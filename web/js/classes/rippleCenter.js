var loaded3 = false; // used in rippleCenter.js | set true if rippleCenter is
						// loaded

function rippleCenter( el )
{
	// get el size
	var elSize = el.getSize();
	
	// get window size
	var winSize = window.getSize();
	
	el.setStyle( 'position', 'fixed' );
	el.setStyle( 'left', ( winSize.x - elSize.x ) < 1 ? 0 : ( winSize.x - elSize.x ) / 2 );
	el.setStyle( 'top', ( winSize.y - elSize.y ) < 1 ? 0 : ( winSize.y - elSize.y ) / 2 );
	
	window.addEvent( 'resize', function()
	{
		// get el size
		var elSize = el.getSize();
		
		// get window size
		var winSize = window.getSize();
		
		el.setStyle( 'position', 'fixed' );
		el.setStyle( 'left', ( winSize.x - elSize.x ) < 1 ? 0 : ( winSize.x - elSize.x ) / 2 );
		el.setStyle( 'top', ( winSize.y - elSize.y ) < 1 ? 0 : ( winSize.y - elSize.y ) / 2 );
	} );
}

function ripplePosition( el, x, y )
{
	el.setStyle( 'position', 'fixed' );
	el.setStyle( 'left', x );
	el.setStyle( 'top', y );
	
	window.addEvent( 'resize', function()
	{
		el.setStyle( 'position', 'fixed' );
		el.setStyle( 'left', x );
		el.setStyle( 'top', y );
	} );
}

// for safari/opera domready -->main.js go to line: //Test for Safari
if ( /Safari/i.test( navigator.userAgent ) || /Opera/i.test( navigator.userAgent ) )
{
	loaded3 = true;
}