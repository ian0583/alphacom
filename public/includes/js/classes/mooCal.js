var mooCal = new Class({

	Implements : [ Options, Events ],

	// default options
	// don't change these here but on the instance (unless you want to)
	options : {
		onMouseover : '',
		onMouseout : '',
		onClick : '',
		onShow : '',
		onHide : '',
		inputObject : '',
		container : '',
		tableClass : 'mooCalTable',
		theadClass : 'mooCalThead',
		tbodyClass : 'mooCalTbody',
		dayClass : 'mooCalDay',
		monthClass : 'mooCalMonth',
		dayofweekClass : 'mooCalDayofweek',
		highlightClass : 'mooCalHighlight',
		monthHeaderClass : 'mooCalMonthheader',
		selectClass : 'mooCalSelect',
		prevClass : 'mooCalPrev',
		nextClass : 'mooCalNext',
		data : [],
		autoClose : true,
		currentDate : false,
		iconImage : 'includes/img/calendar.png',
		iconClass : 'icon-calendar',
		addIcon : true,
		addFocus : false,
		allowInputEdit : true,
		dateFormat : 'dd-MM-yyyy',
		autoFormat : true,
		autoUpdate : true,
	},

	months : {
		0 : 'January',
		1 : 'February',
		2 : 'March',
		3 : 'April',
		4 : 'May',
		5 : 'June',
		6 : 'July',
		7 : 'August',
		8 : 'September',
		9 : 'October',
		10 : 'November',
		11 : 'December'
	},

	dayofweek : {
		0 : 'Sun',
		1 : 'Mon',
		2 : 'Tue',
		3 : 'Wed',
		4 : 'Thu',
		5 : 'Fri',
		6 : 'Sat'
	},

	calData : {

	},

	calendarObject : {

	},

	iconImage : false,

	attachedElements : [],

	parsedData : [],

	clickClose : null,

	preventClick : null,

	initialize : function(options)
	{

		// start everything.
		this.setOptions(options);
		var self = this;

		if (this.options.addIcon)
		{
			// create icon for calendar toggle
			self.iconImage = new Element('span', {
				'class' : 'add-on'
			}).injectAfter(this.options.inputObject);
			var iconImg = new Element('i', {
				'class' : this.options.iconClass
			}).injectInside(self.iconImage);
			self.iconImage.addEvent('click', function()
			{
				console.log('test');
				if (self.$events.show)
				{
					self.$events.show[0](this);
				}
				self.initCalendar();
			});
		}
		else
		{
			// attach event to inputObject
		}

		if (this.$events.click)
		{
			this.options.inputObject.addEvent('change', function()
			{

				if (self.options.inputObject.get('value') && !isDate(self.options.inputObject.get('value'), self.options.dateFormat))
				{
					var temp = new Date();
					temp.parse(self.options.inputObject.get('value'));
					if (temp.toDateString() == 'Invalid Date')
					{
					}
					else
					{
						self.$events.click[0](formatDate(temp, 'MMM d, yyyy'));
					}
				}
				else if (self.options.inputObject.get('value') && isDate(self.options.inputObject.get('value'), self.options.dateFormat))
				{
					var temp = new Date(getDateFromFormat(self.options.inputObject.get('value'), self.options.dateFormat));

					self.$events.click[0](formatDate(temp, 'MMM d, yyyy'));
				}
			});
		}

	},

	initCalendar : function()
	{

		if (this.options.inputObject.get('value') && !isDate(this.options.inputObject.get('value'), this.options.dateFormat))
		{
			if (this.options.autoFormat)
			{
				var temp = new Date();
				temp.parse(this.options.inputObject.get('value'));
				if (temp.toDateString() == 'Invalid Date')
				{
					this.options.inputObject.addClass('validation-failed');
				}
				else
				{
					this.options.inputObject.set('value', formatDate(temp, this.options.dateFormat));
				}
			}
			else
			{
				this.options.inputObject.addClass('validation-failed');
			}
		}

		if (this.options.inputObject.get('value') && isDate(this.options.inputObject.get('value'), this.options.dateFormat))
		{
			this.options.currentDate = this.options.inputObject.get('value');
		}
		this.attachedElements = [];
		this.attachedElements.push(this.iconImage);
		$(this.options.container).innerHTML = '';

		var currentDate = '';
		if (this.options.currentDate && isDate(this.options.currentDate, this.options.dateFormat))
		{
			var d = new Date(getDateFromFormat(this.options.currentDate, this.options.dateFormat));
			currentDate = formatDate(d, 'MMM d, yyyy');
			d.parse(this.months[d.get('mo')] + ' 1, ' + d.get('Fullyear'));
		}
		else
		{
			var d = new Date();
			currentDate = formatDate(d, 'MMM d, yyyy');
			d.parse(this.months[d.get('mo')] + ' 1, ' + d.get('Fullyear'));
		}

		this.calData.day = d;
		this.calData.startofmonth = d.getDay();
		this.calData.startofmonthstr = this.dayofweek[d.getDay()];
		this.calData.daysofmonth = d.get('lastdayofmonth');
		this.calData.month = this.months[d.get('mo')];
		this.calData.year = d.get('Fullyear');
		this.calData.prevmonth = d.get('mo') == 0 ? 11 : d.get('mo') - 1;
		this.calData.nextmonth = d.get('mo') == 11 ? 0 : d.get('mo') + 1;
		this.calData.prevyear = d.get('mo') == 0 ? d.get('Fullyear') - 1 : d.get('Fullyear');
		this.calData.nextyear = d.get('mo') == 11 ? d.get('Fullyear') + 1 : d.get('Fullyear');
		this.calData.currentDate = currentDate;

		this.createCalendar();

		this.setData(this.options.data);

		if (this.options.autoClose)
		{
			// add event onclick of outside the element to close
			this.clickClose = function(event)
			{

				event.stopPropagation();
				if (this.attachedElements.contains(event.target))
				{
				}
				else
				{
					if ($(this.options.container))
					{
						this.remove();
					}
				}
			}.bind(this);

			this.calendarObject.table.getDocument().addEvent('click', this.clickClose);

			this.preventClick = function(event)
			{

				event.stopPropagation();
				return false;
			}
			this.calendarObject.table.addEvent('click', this.preventClick);
		}
	},

	remove : function()
	{

		this.calendarObject.table.getDocument().removeEvent('click', this.clickClose);
		this.calendarObject.table.removeEvent('click', this.preventClick);
		$(this.options.container).destroy();
	},

	setData : function(data)
	{

		this.options.data = data;
		this.parseData();
		var calObj = this;

		$$('#' + this.options.container + ' ' + '.' + this.options.highlightClass).each(function(el)
		{

			el.removeClass(calObj.options.highlightClass);
		});

		$$('#' + this.options.container + ' ' + '.' + this.options.dayClass).each(function(el)
		{

			var t = new Date().parse(el.get('title'));
			if (calObj.inData(t))
			{
				el.addClass(calObj.options.highlightClass);
			}
		});
	},

	parseData : function()
	{

		for ( var i in this.options.data)
		{
			this.parsedData[i] = new Date.parse(this.options.data[i]);
		}
	},

	inData : function(date)
	{

		var indata = false;
		this.parsedData.each(function(pd)
		{

			if (pd + '' == date + '')
			{
				indata = true;
			}
		});

		return indata;
	},

	createCalendar : function()
	{

		// create header
		this.createHeader();

		this.calendarObject.tbody = new Element('tbody', {
			'class' : this.options.tbodyClass
		}).injectInside(this.calendarObject.table);
		this.attachedElements.push(this.calendarObject.tbody);

		var tr = new Element('tr').injectInside(this.calendarObject.tbody);
		this.attachedElements.push(tr);

		for ( var i = 0; i < this.calData.startofmonth; i++)
		{
			this.attachedElements.push(new Element('td').set('text', '').injectInside(tr));
		}

		var d = new Date();
		d.parse(this.calData.month + ' 1, ' + this.calData.year);

		var calObj = this;

		for ( var i = 1; i <= this.calData.daysofmonth; i++)
		{
			if (d.getDay() == 0)
			{
				var tr = new Element('tr').injectInside(this.calendarObject.tbody);
				this.attachedElements.push(tr);
			}

			var day = new Element('td', {
				'class' : this.options.dayClass,
				'title' : this.months[d.get('mo')] + ' ' + i + ', ' + d.get('Fullyear')
			}).set('text', i).injectInside(tr);
			this.attachedElements.push(day);

			// highlight day if it is the currentDate
			if (this.months[d.get('mo')] + ' ' + i + ', ' + d.get('Fullyear') == this.calData.currentDate)
			{
				day.addClass(this.options.selectClass);
			}

			day.addEvent('click', function(e)
			{

				$$('#' + calObj.options.container + ' ' + '.' + calObj.options.selectClass).each(function(el)
				{

					el.removeClass(calObj.options.selectClass);
				});
				this.addClass(calObj.options.selectClass);
				if (calObj.options.autoUpdate)
				{
					var temp = new Date();
					temp.parse(this.get('title'));
					calObj.options.inputObject.set('value', formatDate(temp, calObj.options.dateFormat));
				}
			});

			if (this.$events.click)
			{
				day.addEvent('click', function()
				{

					calObj.$events.click[0](this.get('title'), this);
				});
			}

			if (this.$events.mouseover)
			{
				day.addEvent('mouseover', function()
				{

					calObj.$events.mouseover[0](this.get('title'), this);
				});
			}

			if (this.$events.mouseout)
			{
				day.addEvent('mouseout', function()
				{

					calObj.$events.mouseout[0](this.get('title'), this);
				});
			}

			d.increment('day', 1);
		}

		if (d.getDay() != 0)
		{
			for ( var i = d.getDay(); i <= 6; i++)
			{
				this.attachedElements.push(new Element('td').set('text', '').injectInside(tr));
			}
		}
	},

	createHeader : function()
	{

		this.calendarObject.table = new Element('table', {
			'width' : '100%',
			'class' : this.options.tableClass
		}).injectInside($(this.options.container));
		this.attachedElements.push(this.calendarObject.table);

		this.calendarObject.thead = new Element('thead', {
			'class' : this.options.theadClass
		}).injectInside(this.calendarObject.table);
		this.attachedElements.push(this.calendarObject.thead);

		this.calendarObject.monthRow = new Element('tr', {
			'class' : this.options.monthClass
		}).injectInside(this.calendarObject.thead);
		this.attachedElements.push(this.calendarObject.monthRow);

		var prev = new Element('td', {
			'align' : 'center',
			'class' : this.options.prevClass
		}).set('text', '<<').injectInside(this.calendarObject.monthRow);
		this.attachedElements.push(prev);

		var td = new Element('td', {
			'colspan' : 5,
			'align' : 'center',
			'class' : this.options.monthHeaderClass
		}).set('text', this.calData.month + ' ' + this.calData.year).injectInside(this.calendarObject.monthRow);
		this.attachedElements.push(td);

		var next = new Element('td', {
			'align' : 'center',
			'class' : this.options.nextClass
		}).set('text', '>>').injectInside(this.calendarObject.monthRow);
		this.attachedElements.push(next);

		var calObj = this;

		prev.addEvent('click', function()
		{

			// go to previous month
			var p = calObj.calData.day;

			p.parse(calObj.months[calObj.calData.prevmonth] + ' 1, ' + calObj.calData.prevyear);

			calObj.updateCal(p);
		});

		next.addEvent('click', function()
		{

			// go to previous month
			var p = calObj.calData.day;

			p.parse(calObj.months[calObj.calData.nextmonth] + ' 1, ' + calObj.calData.nextyear);

			calObj.updateCal(p);
		});

		this.calendarObject.headerRow = new Element('tr', {
			'class' : this.options.dayofweekClass
		}).injectInside(this.calendarObject.thead);
		this.attachedElements.push(this.calendarObject.headerRow);

		for ( var i = 0; i < 7; i++)
		{
			this.attachedElements.push(new Element('td', {
				'align' : 'center'
			}).set('text', this.dayofweek[i]).injectInside(this.calendarObject.headerRow));
		}
	},

	updateCal : function(p)
	{

		this.calData.day = p;
		this.calData.startofmonth = p.getDay();
		this.calData.startofmonthstr = this.dayofweek[p.getDay()];
		this.calData.daysofmonth = p.get('lastdayofmonth');
		this.calData.month = this.months[p.get('mo')];
		this.calData.year = p.get('Fullyear');
		this.calData.prevmonth = p.get('mo') == 0 ? 11 : p.get('mo') - 1;
		this.calData.nextmonth = p.get('mo') == 11 ? 0 : p.get('mo') + 1;
		this.calData.prevyear = p.get('mo') == 0 ? p.get('Fullyear') - 1 : p.get('Fullyear');
		this.calData.nextyear = p.get('mo') == 11 ? p.get('Fullyear') + 1 : p.get('Fullyear');

		$(this.options.container).set('text', '');

		this.createCalendar();

		this.setData(this.options.data);
	}
});

var mooDay = new Class({

	Implements : [ Options, Events ],

	// default options
	// don't change these here but on the instance (unless you want to)
	options : {
		onMouseover : '',
		onMouseout : '',
		onClick : '',
		container : '',
		timeClass : 'mooDayTime',
		textClass : 'mooDayText',
		rowClass : 'mooDayRow',
		date : '',
		startTime : 0,
		endTime : 23,
		timeIncrement : 30,
		data : []
	},

	dayData : {

	},

	dayObject : {

	},

	dayofweek : {
		0 : 'Sunday',
		1 : 'Monday',
		2 : 'Tuesday',
		3 : 'Wednesday',
		4 : 'Thursday',
		5 : 'Friday',
		6 : 'Saturday'
	},

	initialize : function(options)
	{

		// start everything.
		this.setOptions(options);
		$(this.options.container).innerHTML = '';

		this.dayData.date = new Date().parse(this.options.date);
		this.dayData.dayofweek = this.dayofweek[this.dayData.date.getDay()];

		this.createDay();
		this.setData(this.options.data);
	},

	createDay : function()
	{

		this.createHeader();
		var dayObj = this;

		this.dayObject.tbody = new Element('tbody').injectInside(this.dayObject.table);

		for ( var i = this.options.startTime; i <= this.options.endTime; i++)
		{
			for ( var j = 0; j < 60; j += this.options.timeIncrement)
			{
				if (i < 10)
				{
					var time = '0' + i + ':';
				}
				else
				{
					var time = i + ':';
				}

				if (j < 10)
				{
					time += '0' + j;
				}
				else
				{
					time += '' + j;
				}

				var tr = new Element('tr', {
					'class' : this.options.rowClass
				}).injectInside(this.dayObject.tbody);

				var tdtime = new Element('td', {
					'align' : 'center',
					'width' : '100px',
					'class' : this.options.timeClass
				}).set('text', time).injectInside(tr);
				var tdcontent = new Element('td', {
					'align' : 'center',
					'class' : this.options.textClass
				}).set('text', '').injectInside(tr);

				tr.set('title', time);

				if (this.$events.click)
				{
					tr.addEvent('click', function()
					{

						dayObj.$events.click[0](dayObj.options.date, this.get('title'), this.getChildren()[1].get('text'), this.getChildren()[1].get('id'));
					});
				}

				if (this.$events.mouseover)
				{
					tr.addEvent('mouseover', function()
					{

						dayObj.$events.mouseover[0](dayObj.options.date, this.get('title'), this.getChildren()[1].get('text'), this.getChildren()[1].get('id'));
					});
				}

				if (this.$events.mouseout)
				{
					tr.addEvent('mouseout', function()
					{

						dayObj.$events.mouseout[0](dayObj.options.date, this.get('title'), this.getChildren()[1].get('text'), this.getChildren()[1].get('id'));
					});
				}
			}
		}
	},

	createHeader : function()
	{

		this.dayObject.table = new Element('table', {
			'width' : '100%'
		}).injectInside($(this.options.container));

		this.dayObject.thead = new Element('thead').injectInside(this.dayObject.table);

		var tr = new Element('tr').injectInside(this.dayObject.thead);

		new Element('td', {
			'align' : 'center',
			'colspan' : 2
		}).set('text', this.dayData.dayofweek + ' ' + this.options.date).injectInside(tr);
	},

	setData : function(data)
	{

		this.options.data = data;
		var dayObj = this;

		$$('#' + this.options.container + ' ' + '.' + this.options.rowClass).each(function(el)
		{

			el.getChildren()[1].set('text', dayObj.getText(el.getChildren()[0].get('text')));
			el.getChildren()[1].set('id', dayObj.getID(el.getChildren()[0].get('text')));
		});
	},

	getText : function(time)
	{

		var text = '';
		this.options.data.each(function(data)
		{

			if (data.time == time)
			{
				text = data.text;
			}
		});
		return text;
	},

	getID : function(time)
	{

		var id = '';
		this.options.data.each(function(data)
		{

			if (data.time == time)
			{
				id = data.id;
			}
		});
		return id;
	}
});

var MONTH_NAMES = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
		'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
var DAY_NAMES = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

function LZ(x)
{

	return (x < 0 || x > 9 ? "" : "0") + x
}

function isDate(val, format)
{

	var date = getDateFromFormat(val, format);
	if (date == 0)
	{
		return false;
	}
	return true;
}

function compareDates(date1, dateformat1, date2, dateformat2)
{

	var d1 = getDateFromFormat(date1, dateformat1);
	var d2 = getDateFromFormat(date2, dateformat2);
	if (d1 == 0 || d2 == 0)
	{
		return -1;
	}
	else if (d1 > d2)
	{
		return 1;
	}
	return 0;
}

function formatDate(date, format)
{

	format = format + "";
	var result = "";
	var i_format = 0;
	var c = "";
	var token = "";
	var y = date.getYear() + "";
	var M = date.getMonth() + 1;
	var d = date.getDate();
	var E = date.getDay();
	var H = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var yyyy, yy, MMM, MM, dd, hh, h, mm, ss, ampm, HH, H, KK, K, kk, k;
	var value = new Object();
	if (y.length < 4)
	{
		y = "" + (y - 0 + 1900);
	}
	value["y"] = "" + y;
	value["yyyy"] = y;
	value["yy"] = y.substring(2, 4);
	value["M"] = M;
	value["MM"] = LZ(M);
	value["MMM"] = MONTH_NAMES[M - 1];
	value["NNN"] = MONTH_NAMES[M + 11];
	value["d"] = d;
	value["dd"] = LZ(d);
	value["E"] = DAY_NAMES[E + 7];
	value["EE"] = DAY_NAMES[E];
	value["H"] = H;
	value["HH"] = LZ(H);
	if (H == 0)
	{
		value["h"] = 12;
	}
	else if (H > 12)
	{
		value["h"] = H - 12;
	}
	else
	{
		value["h"] = H;
	}
	value["hh"] = LZ(value["h"]);
	if (H > 11)
	{
		value["K"] = H - 12;
	}
	else
	{
		value["K"] = H;
	}
	value["k"] = H + 1;
	value["KK"] = LZ(value["K"]);
	value["kk"] = LZ(value["k"]);
	if (H > 11)
	{
		value["a"] = "PM";
	}
	else
	{
		value["a"] = "AM";
	}
	value["m"] = m;
	value["mm"] = LZ(m);
	value["s"] = s;
	value["ss"] = LZ(s);
	while (i_format < format.length)
	{
		c = format.charAt(i_format);
		token = "";
		while ((format.charAt(i_format) == c) && (i_format < format.length))
		{
			token += format.charAt(i_format++);
		}
		if (value[token] != null)
		{
			result = result + value[token];
		}
		else
		{
			result = result + token;
		}
	}
	return result;
}

function _isInteger(val)
{

	var digits = "1234567890";
	for ( var i = 0; i < val.length; i++)
	{
		if (digits.indexOf(val.charAt(i)) == -1)
		{
			return false;
		}
	}
	return true;
}

function _getInt(str, i, minlength, maxlength)
{

	for ( var x = maxlength; x >= minlength; x--)
	{
		var token = str.substring(i, i + x);
		if (token.length < minlength)
		{
			return null;
		}
		if (_isInteger(token))
		{
			return token;
		}
	}
	return null;
}

function getDateFromFormat(val, format)
{

	val = val + "";
	format = format + "";
	var i_val = 0;
	var i_format = 0;
	var c = "";
	var token = "";
	var token2 = "";
	var x, y;
	var now = new Date();
	var year = now.getYear();
	var month = now.getMonth() + 1;
	var date = 1;
	var hh = now.getHours();
	var mm = now.getMinutes();
	var ss = now.getSeconds();
	var ampm = "";
	while (i_format < format.length)
	{
		c = format.charAt(i_format);
		token = "";
		while ((format.charAt(i_format) == c) && (i_format < format.length))
		{
			token += format.charAt(i_format++);
		}
		if (token == "yyyy" || token == "yy" || token == "y")
		{
			if (token == "yyyy")
			{
				x = 4;
				y = 4;
			}
			if (token == "yy")
			{
				x = 2;
				y = 2;
			}
			if (token == "y")
			{
				x = 2;
				y = 4;
			}
			year = _getInt(val, i_val, x, y);
			if (year == null)
			{
				return 0;
			}
			i_val += year.length;
			if (year.length == 2)
			{
				if (year > 70)
				{
					year = 1900 + (year - 0);
				}
				else
				{
					year = 2000 + (year - 0);
				}
			}
		}
		else if (token == "MMM" || token == "NNN")
		{
			month = 0;
			for ( var i = 0; i < MONTH_NAMES.length; i++)
			{
				var month_name = MONTH_NAMES[i];
				if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase())
				{
					if (token == "MMM" || (token == "NNN" && i > 11))
					{
						month = i + 1;
						if (month > 12)
						{
							month -= 12;
						}
						i_val += month_name.length;
						break;
					}
				}
			}
			if ((month < 1) || (month > 12))
			{
				return 0;
			}
		}
		else if (token == "EE" || token == "E")
		{
			for ( var i = 0; i < DAY_NAMES.length; i++)
			{
				var day_name = DAY_NAMES[i];
				if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase())
				{
					i_val += day_name.length;
					break;
				}
			}
		}
		else if (token == "MM" || token == "M")
		{
			month = _getInt(val, i_val, token.length, 2);
			if (month == null || (month < 1) || (month > 12))
			{
				return 0;
			}
			i_val += month.length;
		}
		else if (token == "dd" || token == "d")
		{
			date = _getInt(val, i_val, token.length, 2);
			if (date == null || (date < 1) || (date > 31))
			{
				return 0;
			}
			i_val += date.length;
		}
		else if (token == "hh" || token == "h")
		{
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || (hh < 1) || (hh > 12))
			{
				return 0;
			}
			i_val += hh.length;
		}
		else if (token == "HH" || token == "H")
		{
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || (hh < 0) || (hh > 23))
			{
				return 0;
			}
			i_val += hh.length;
		}
		else if (token == "KK" || token == "K")
		{
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || (hh < 0) || (hh > 11))
			{
				return 0;
			}
			i_val += hh.length;
		}
		else if (token == "kk" || token == "k")
		{
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || (hh < 1) || (hh > 24))
			{
				return 0;
			}
			i_val += hh.length;
			hh--;
		}
		else if (token == "mm" || token == "m")
		{
			mm = _getInt(val, i_val, token.length, 2);
			if (mm == null || (mm < 0) || (mm > 59))
			{
				return 0;
			}
			i_val += mm.length;
		}
		else if (token == "ss" || token == "s")
		{
			ss = _getInt(val, i_val, token.length, 2);
			if (ss == null || (ss < 0) || (ss > 59))
			{
				return 0;
			}
			i_val += ss.length;
		}
		else if (token == "a")
		{
			if (val.substring(i_val, i_val + 2).toLowerCase() == "am")
			{
				ampm = "AM";
			}
			else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm")
			{
				ampm = "PM";
			}
			else
			{
				return 0;
			}
			i_val += 2;
		}
		else
		{
			if (val.substring(i_val, i_val + token.length) != token)
			{
				return 0;
			}
			else
			{
				i_val += token.length;
			}
		}
	}
	if (i_val != val.length)
	{
		return 0;
	}
	if (month == 2)
	{
		if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
		{
			if (date > 29)
			{
				return 0;
			}
		}
		else
		{
			if (date > 28)
			{
				return 0;
			}
		}
	}
	if ((month == 4) || (month == 6) || (month == 9) || (month == 11))
	{
		if (date > 30)
		{
			return 0;
		}
	}
	if (hh < 12 && ampm == "PM")
	{
		hh = hh - 0 + 12;
	}
	else if (hh > 11 && ampm == "AM")
	{
		hh -= 12;
	}
	var newdate = new Date(year, month - 1, date, hh, mm, ss);
	return newdate.getTime();
}

function parseDate(val)
{

	var preferEuro = (arguments.length == 2) ? arguments[1] : false;
	generalFormats = new Array('y-M-d', 'MMM d, y', 'MMM d,y', 'y-MMM-d', 'd-MMM-y', 'MMM d');
	monthFirst = new Array('M/d/y', 'M-d-y', 'M.d.y', 'MMM-d', 'M/d', 'M-d');
	dateFirst = new Array('d/M/y', 'd-M-y', 'd.M.y', 'd-MMM', 'd/M', 'd-M');
	var checkList = new Array('generalFormats', preferEuro ? 'dateFirst' : 'monthFirst', preferEuro ? 'monthFirst' : 'dateFirst');
	var d = null;
	for ( var i = 0; i < checkList.length; i++)
	{
		var l = window[checkList[i]];
		for ( var j = 0; j < l.length; j++)
		{
			d = getDateFromFormat(val, l[j]);
			if (d != 0)
			{
				return new Date(d);
			}
		}
	}
	return null;
}
