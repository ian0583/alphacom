var Cache = new Class({
	options:
	{
		cacheName: 'mycache',
		duration: 60, //seconds
	},

	Implements: [Options],

	initialize: function(options)
	{
		this.setOptions(options);
		this.data = {};
	},

	set: function(key, value, duration)
	{
		if(this.data == null)
		{
			this.data = {};
		}
		this.data[key] = {
			data: value,
			expires: this.calculateDuration(duration || this.options.duration)
		}
	},

	get: function(key)
	{
		if (this.isFresh(key))
		{
			return this.data[key].data;
		}
		else
		{
			return null;
		}
	},

	isFresh: function(key)
	{
		return (this.data && typeof this.data[key] != 'undefined' && this.data[key].expires > $time()) ? true : false;
	},

	load: function()
	{
		if(window.localStorage)
		{
			if (localStorage[this.options.cacheName] != 'null')
			{
				this.data = JSON.decode(localStorage[this.options.cacheName]);
			}
		}
		else
		{
			 //
		}

	},

	save: function()
	{
		cookieValue = JSON.encode(this.data);
		if(window.localStorage)
		{
			localStorage[this.options.cacheName] = cookieValue;
		}
		else
		{
			//
		}
	},

	calculateDuration: function(seconds)
	{
		return seconds * 1000 + $time();
	},

	clear: function(key)
	{
		delete this.data[key];
	},

	reset: function()
	{
		if(window.localStorage)
		{
			localStorage[this.options.cacheName] = null;
		}
		else
		{
			//
		}
	}

});

var globalcache = new Cache(
{
	duration: 3600
});
