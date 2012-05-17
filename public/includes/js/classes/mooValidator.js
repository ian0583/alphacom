/**
 * Form Validator using MooTools Form.Validator and Bootstrap for the styling of
 * error messages
 * 
 * @author Sheldon
 */
var mooValidator = new Class(
{

	Implements : [ Options, Events ],

	// default options
	// don't change these here but on the instance (unless you want to)
	options :
	{
		closeDelay : 3000,
		position : 'right',
		validate : null,
	},

	defaultPosition : null,

	form : null,

	validator : null,

	initialize : function(form, options)
	{
		this.form = document.id(form);

		// start everything.
		this.setOptions(options);

		this.defaultPosition = this.options.position;

		this.changePosition(this.options.position);

		var self = this;

		this.validator = new Form.Validator(this.form,
		{
			stopOnFailure : true,
			evaluateOnSubmit : true,
			evaluateFieldsOnBlur : true,
			evaluateFieldsOnChange : true,
			serial : false,
			onElementFail : function(el, errors)
			{
				var fv = this;
				var errorMsg = '';
				errors.each(function(error)
				{
					var arr = new Array();
					arr = error.split(":");
					error = arr[0];
					errorMsg += fv.validators[error].getError(el, fv.validators[error].getProps(el)) + "<br/>\n";
				});

				self.addError(el, errorMsg);

			},
			onFormValidate : self.options.validate,
		});

		// adding custom validators
		if (customValidators)
		{
			this.validator.addAllThese(customValidators);
		}

		this.form.store('validator', this.validator);

	},

	changePosition : function(position)
	{
		switch (this.options.position)
		{
			case 'top':
				this.options.edge = 'bottom';
				break;

			case 'bottom':
				this.options.edge = 'top';
				break;

			case 'left':
				this.options.edge = 'right';
				break;

			default:
				this.options.edge = 'left';
				break;
		}
	},

	addError : function(el, message)
	{
		var self = this;

		if (el.hasClass('error-left'))
		{
			this.options.position = 'left';
		}
		else if (el.hasClass('error-top'))
		{
			this.options.position = 'top';
		}
		else if (el.hasClass('error-bottom'))
		{
			this.options.position = 'bottom';
		}
		else if (el.hasClass('error-right'))
		{
			this.options.position = 'right';
		}
		else
		{
			this.options.position = this.defaultPosition;
		}

		this.changePosition();

		var container = new Element('div',
		{
			'class' : 'alert-container'
		}).injectInside(self.form);

		var alert = new Element('div',
		{
			'class' : 'ui-tooltip-' + self.options.position + ' ui-tooltip-error'
		}).injectInside(container);

		var closer = new Element('a',
		{
			'class' : 'close',
			'data-dismiss' : 'alert'
		}).injectInside(alert);
		closer.set('text', 'x');

		var text = new Element('div').injectAfter(closer);
		text.innerHTML = message;

		closer.addEvent('click', function()
		{
			this.getParent().getParent().destroy();
		});

		container.position(
		{
			relativeTo : el,
			position : self.options.position,
			edge : self.options.edge,
		});

		if (this.options.closeDelay)
		{
			setTimeout(function()
			{
				closer.fireEvent('click');
			}, this.options.closeDelay);
		}

	}
});
