/**
 * Autocompleter.Request
 * 
 * http://digitarald.de/project/autocompleter/
 * 
 * @version 1.1.2
 * 
 * @license MIT-style license
 * @author Harald Kirschner <mail [at] digitarald.de>
 * @copyright Author
 */

Autocompleter.Request = new Class(
{

	Extends : Autocompleter,

	options :
	{/*
		 * indicator: null, indicatorClass: null, onRequest: $empty, onComplete:
		 * $empty,
		 */
		postData : {},
		ajaxOptions : {},
		postVar : 'value'

	},

	query : function()
	{
		var data = $unlink(this.options.postData) || {};
		data[this.options.postVar] = this.queryValue;
		var indicator = $(this.options.indicator);
		if (indicator)
			indicator.setStyle('display', '');
		var cls = this.options.indicatorClass;
		if (cls)
			this.element.addClass(cls);
		this.fireEvent('onRequest', [ this.element, this.request, data, this.queryValue ]);
		var call = this.request;
		var tempurl = call.options.url;
		call.options.url += '?' + this.options.postVar + '=' + data[this.options.postVar] + '';
		call.send();
		call.options.url = tempurl;
	},

	/**
	 * queryResponse - abstract
	 * 
	 * Inherated classes have to extend this function and use this.parent()
	 */
	queryResponse : function()
	{
		var indicator = $(this.options.indicator);
		if (indicator)
			indicator.setStyle('display', 'none');
		var cls = this.options.indicatorClass;
		if (cls)
			this.element.removeClass(cls);
		return this.fireEvent('onComplete', [ this.element, this.request ]);
	}

});

Autocompleter.Request.JSON = new Class(
{

	Extends : Autocompleter.Request,

	initialize : function(el, url, options)
	{
		this.parent(el, options);
		this.request = new Request.JSON($merge(
		{
			'url' : url,
			'link' : 'cancel',
			'method' : 'GET',
		}, this.options.ajaxOptions)).addEvent('onComplete', this.queryResponse.bind(this));
	},

	queryResponse : function(response)
	{
		this.parent();
		var self = this;
		var data = [];
		response.each(function(el)
		{
			data.push(el[self.options.postVar]);
		});
		this.update(data);
	}

});

Autocompleter.Request.HTML = new Class(
{

	Extends : Autocompleter.Request,

	initialize : function(el, url, options)
	{
		this.parent(el, options);
		this.request = new Request.HTML($merge(
		{
			'url' : url,
			'link' : 'cancel',
			'update' : this.choices
		}, this.options.ajaxOptions)).addEvent('onComplete', this.queryResponse.bind(this));
	},

	queryResponse : function(tree, elements)
	{
		this.parent();
		if (!elements || !elements.length)
		{
			this.hideChoices();
		}
		else
		{
			this.choices.getChildren(this.options.choicesMatch).each(this.options.injectChoice || function(choice)
			{
				var value = choice.innerHTML;
				choice.inputValue = value;
				this.addChoiceEvents(choice.set('html', this.markQueryValue(value)));
			}, this);
			this.showChoices();
		}

	}

});

/* compatibility */

Autocompleter.Ajax =
{
	Base : Autocompleter.Request,
	Json : Autocompleter.Request.JSON,
	Xhtml : Autocompleter.Request.HTML
};
