var loaded4 = false; // used in REST.js | set true if REST is loaded
var RestCalls = [];
var RestSpinner = null;

// load cache
globalcache.load();
var REST = new Class(
{

	Implements : [ Options, Events ],

	// default options
	// don't change these here but on the instance (unless you want to)
	options :
	{
		spinnerText : 'Loading',
		headers :
		{
			'token' : globalcache.get('token')
		},
		emulation: false,
	},

	initialize : function(options)
	{
		// start everything.
		this.setOptions(options);

		var self = this;

		this.options.onRequest = function()
		{
			// load spinner
			if (!RestSpinner)
			{
				var div = new Element('div',
				{
					id : 'RestSpinnerContainer'
				}).injectInside(document.body);
				rippleCenter(div);
				setTimeout(function()
				{
					rippleCenter(div);
					div.set('styles',
					{
						'background-color' : '#fff',
						'text-align' : 'center',
						'padding' : '20px',
						'z-index' : 20000
					});
					div.set('text', self.options.spinnerText).set('opacity', '.5');
					new Element('br').injectInside(div);
					var spinner = new Element('img',
					{
						src : 'includes/img/ajax-loader.gif'
					}).injectInside(div);
				}, 10);
				RestSpinner = div;
			}
		};

		this.options.onComplete = function()
		{
			// remove spinner
			self.requestsDone(function()
			{
				if (RestSpinner)
				{
					RestSpinner.destroy();
					RestSpinner = null;
				}
			});
		}

		this.options.onSuccess = options.onSuccess;
		this.options.onFailure = options.onFailure;

		var request = new Request.JSON(this.options);

		RestCalls.push(request);

		return request;
	},

	requestsDone : function(fx)
	{
		var status = true;
		var self = this;

		RestCalls.each(function(req)
		{
			if (req.isRunning())
			{
				status = false;
			}
		});

		if (status)
		{
			RestCalls = [];
			fx();
		}
		else
		{
			setTimeout(function()
			{
				self.requestsDone(fx);
			}, 500);
		}

		return status;
	},
});

// for safari/opera domready -->main.js go to line: //Test for Safari
if (/Safari/i.test(navigator.userAgent) || /Opera/i.test(navigator.userAgent))
{
	loaded4 = true;
}
