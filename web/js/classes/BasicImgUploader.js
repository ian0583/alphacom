/*
 * Set normal upload functionalities on a button or an element
 * 
 */

var BasicImgUploader = new Class(
	{
	
	Implements :
		[ Options, Events ],
	
	options :
		{
		trigger_element_id : "",
		img_element : "",
		imgtype : '',
		fileserverurl : '',
		autoUpload : true,
		img_container : null,
		container :  null,
		container_el : null,
		formid : null,
		importframeid : null,
		},
	
	initialize : function( options )
	{
		// start everything.
		this.setOptions( options );
		var options = this.options;
		this.addBasicUploadEvent();
	},
	
	addBasicUploadEvent : function()
	{
		var self = this;
		
		// create a file input element
		var options = this.options;
		var thisObject = this;
		var container;
		
		if(options.container_el)
		{
			container = options.container_el;
		}
		else
		{
			container = ($(options.container) ? $(options.container) : $$('.' + options.container));
		}
		// create uploader form
		var importframeid = (options.importframeid ? options.importframeid : "import-frame");
		var iframeelement = new Element( 'iframe',
			{
			"id" : importframeid,
			"name" : importframeid,
			styles :
				{
					display : 'none'
				},
			} ).injectAfter( container );
		var formid = (options.formid ? options.formid : "upload-form");
		if($(formid))
		{
			$(formid).destroy();
		}
		formelement = new Element( 'form',
			{
			"id" : formid,
			"method" : "post",
			"enctype" : "multipart/form-data",
			"target" : importframeid
			} );
		
		var actionurl = RESTSERVER_URI + "Uploadimg";
		
		formelement.set( 'action', actionurl );
		formelement.injectInside( container );
		
		// create iframe and file input
		this.imgtype = new Element( 'input',
			{
			"type" : "hidden",
			"name" : "imgtype",
			"value" : options.imgtype
			} ).injectInside( formelement );
		this.typeid = new Element( 'input',
			{
			"type" : "hidden",
			"name" : "imgid",
			"class" : "imgid_class",
			"value" : options.imgid
			} ).injectInside( formelement );
		var hiddenelement = new Element( 'input',
			{
			"type" : "hidden",
			"name" : "serverurl",
			"value" : options.fileserverurl
			} ).injectInside( formelement );
		var hiddenelement = new Element( 'input',
			{
			"type" : "hidden",
			"name" : "MAX_FILE_SIZE",
			"value" : "0"
			} ).injectInside( formelement );
		
		var filename = "";
		
		if(options.container_el)
		{
			var origfileelement = options.container_el.getElement('input');
			var fileelement_class = "input-file"
		}
		else
		{
			var origfileelement = $$( '#' + options.container + ' input[type=file]' );
			var fileelement_class = origfileelement.get( 'class' )[ 0 ];
			
		}
		var fileelement = new Element( 'input',
			{
			"type" : "file",
			"name" : "upload_file",
			"class" : fileelement_class,
			
			} ).injectInside( formelement );
		origfileelement.destroy();
		
		var submitelement = new Element( 'input',
			{
			"type" : "submit",
			"id" : "btn_submit",
			"value" : "submit",
			"style" : "display:none;"
			} ).injectInside( formelement );
		
		this.formelement = formelement;
		// Set behavior of the form submit
		if ( this.options.autoUpload )
		{
			fileelement.addEvent( 'change', function()
			{
				self.submitForm();
			} );
		}
	},
	
	submitForm : function()
	{
		this.formelement.submit();
	},
	
	} );
