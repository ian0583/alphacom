/*
 * 
 * description: Class for scrolling menu
 * 
 * requires: mootools core
 * 
 */

var rippleAuth = new Class(
	{
	
	Implements :
		[ Options ],
	
	options :
		{
		request : '',
		loginname : null,
		loginpass : null,
		remember :
			[ false, null ], // [<bool>, <element>]
		alertmsg : null, // <element>
		redirect : null,
		redirectOnFail : true,
		keepalive : false,
		errormsgbox_id : null,
		redirectOnFail : null,
		onAuthorize : null,
		},
	
	initialize : function( options )
	{
		this.setOptions( options );
	},
	
	authenticate : function()
	{
		globalcache.load();
		var ln = this.options.loginname;
		var lp = this.options.loginpass;
		var self = this;
		Cookie.write( 'name', ln,
			{
				duration : CONFIG.expireCookie
			} );
		if ( this.options.remember[ 0 ] )
		{
			if ( this.options.remember[ 1 ].checked )
			{
				Cookie.write( 'pwd', lp,
					{
						duration : CONFIG.expireCookie
					} );
			}
			else
			{
				if ( Cookie.read( 'pwd' ) )
				{
					Cookie.dispose( 'pwd' );
				}
			}
		}
		
		var enc = ln + ':' + lp;
		var enc = encode64( enc );
		
		var keepalive_bool = ( self.options.keepalive ? 1 : 0 );
		new REST(
			{
			url : CONFIG.gettoken,
			method : 'post',
			spinnerText : 'Signing in...',
			data :
				{
				keepalive : keepalive_bool,
				type : self.options.type,
				token : getURLParam( 'token' )
				},
			headers :
				{
					'Authorization' : 'Basic ' + enc
				},
			onRequest : function()
			{
				if ( self.options.alertmsg )
				{
					self.options.alertmsg.set( 'text', 'Signing in...' );
				}
			},
			onSuccess : function( token )
			{
				self.getUser( token );
			},
			onFailure : function( xhr )
			{
				if ( self.options.errormsgbox_id )
				{
					if ( $( self.options.errormsgbox_id ) )
					{
						$( self.options.errormsgbox_id ).show();
					}
				}
				
				if ( self.options.alertmsg )
				{
					self.options.alertmsg.set( 'text', 'Authorization failed' ).setStyle( 'color', 'red' );
				}
				
				if ( self.options.redirectOnFail )
				{
					window.location = self.options.redirectOnFail;
				}
			}
			} ).send();
	},
	
	check : function( interval )
	{
		this.checkToken();
		if ( this.options.redirectOnFail )
		{
			this.checkToken.periodical( interval );
		}
	},
	
	getUser : function( token )
	{
		self = this;
		// store the user object to user
		new REST(
			{
			url : URLS.generic_users + token.id,
			method : 'get',
			onSuccess : function( response )
			{
				if ( response.length > 0 )
				{
					var user = response.shift();
					var users_id = user._id;
					
					globalcache.set( 'user', user );
					globalcache.set( 'users_id', users_id );
					globalcache.set( 'firstname', user.personal.firstname );
					globalcache.set( 'lastname', user.personal.lastname );
					Cookie.write( 'users_id_ck', users_id,
						{
						duration : CONFIG.expireCookie,
						domain : COOKIEDOMAIN, // change to correct
						// settings on qa,
						// uat and prod
						} );
					Cookie.write( 'firstname_ck', user.personal.firstname,
						{
						duration : CONFIG.expireCookie,
						domain : COOKIEDOMAIN, // change to correct
						// settings on qa,
						// uat and prod
						} );
					Cookie.write( 'lastname_ck', user.personal.lastname,
						{
						duration : CONFIG.expireCookie,
						domain : COOKIEDOMAIN, // change to correct
						// settings on qa,
						// uat and prod
						} );
					Cookie.write( 'avatar_ck', user.personal.avatar,
						{
						duration : CONFIG.expireCookie,
						domain : COOKIEDOMAIN, // change to correct
						// settings on qa,
						// uat and prod
						} );
					
					if ( globalcache.get( 'redirect' ) )
					{
						globalcache.clear( 'redirect' );
					}
					globalcache.set( 'token', token.value, CONFIG.expire,
						{
						duration : CONFIG.expireCookie,
						domain : COOKIEDOMAIN, // change to correct
						// settings on qa,
						// uat and prod
						} );
					var ck = Cookie.write( 'token', token.value,
						{
						duration : CONFIG.expireCookie,
						domain : COOKIEDOMAIN, // change to correct
						// settings on qa,
						// uat and prod
						} );
					
					globalcache.set( 'keepalive', token.keepalive, CONFIG.expire );
					if ( 0 == token.keepalive )
					{
						ck = Cookie.write( 'keepalive_ck', 'enabled',
							{
								duration : CONFIG.expireCookie
							} );
					}
					globalcache.save();
					// location.href = PAGES.createprofile;
					
					if ( self.options.redirect )
					{
						replaceAuthBox( token.firstname, token.lastname );
						window.location = self.options.redirect;
					}
					else
					{
						// window.location =
						// window.location.href.replace('#', '') + '';
					}
				}
			},
			onFailure : function()
			{
				
				// location.href = PAGES.login;
			},
			
			} ).send();
		
	},
	
	checkToken : function()
	{
		var self = this;
		globalcache.load();
		new REST(
			{
			url : CONFIG.gettoken,
			method : 'get',
			data :
				{
					keepalive : globalcache.get( 'keepalive' ) ? globalcache.get( 'keepalive' ) : ( Cookie.read( 'keepalive_ck' ) ? Cookie.read( 'keepalive_ck' ) : false )
				},
			headers :
				{
					'token' : globalcache.get( 'token' ) ? globalcache.get( 'token' ) : ( Cookie.read( 'token' ) ? Cookie.read( 'token' ) : '' )
				},
			onSuccess : function( bool )
			{
				// assign new token
				if ( bool.value )
				{
					if ( isFunction( self.getUser ) )
					{
						self.getUser( bool );
					}
					globalcache.set( 'token', bool.value, CONFIG.expire );
					globalcache.set( 'id', bool.id, CONFIG.expire );
					globalcache.set( 'keepalive', bool.keepalive, CONFIG.expire );
					globalcache.save();
					globalcache.load();
					
					if ( self.options.onAuthorize.call )
					{
						self.options.onAuthorize.call();
					}
					
				}
				else
				// if ( this.xhr.status == 401 && self.options.redirectOnFail )
				{
					globalcache.reset();
					globalcache.set( 'redirect', location.href );
					globalcache.save();
					window.location = CONFIG.loginPage;
				}
				
			},
			onFailure : function( response )
			{
				if ( this.xhr.status == 401 && self.options.redirectOnFail )
				{
					globalcache.reset();
					globalcache.set( 'redirect', location.href );
					globalcache.save();
					window.location = CONFIG.loginPage;
				}
			}
			} ).send();
	}
	} );

function isFunction( functionToCheck )
{
	var getType =
		{};
	return functionToCheck && getType.toString.call( functionToCheck ) == '[object Function]';
}
