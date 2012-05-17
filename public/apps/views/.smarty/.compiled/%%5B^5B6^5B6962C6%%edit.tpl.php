<?php /* Smarty version 2.6.25, created on 2012-05-09 17:53:09
         compiled from D:%5Cwww%5Calphacom/apps/views/main/courses/edit.tpl */ ?>
<div id="courses">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="<?php echo @APP_INCLUDES; ?>
img/toolbox.png"></div>
			<div class="span6">
				<h3 class="header">Course details : <?php echo $this->_tpl_vars['course']['name']; ?>
</h3>
				<div id="errorMsg"></div>
				<form id="course_edit" class="form-horizontal" action="courses-edit.do" method="post">
				
					<input type="hidden" name="id" value="<?php echo $this->_tpl_vars['course']['id']; ?>
">
					<div class="control-group">
						<label class="control-label">Course name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required" value="<?php echo $this->_tpl_vars['course']['name']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Description</label>
						<div class="controls">
							<input type="text" name="description" class="input-xlarge" value="<?php echo $this->_tpl_vars['course']['description']; ?>
">
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
						<button class="btn backpage" onclick="location.href='courses';">Back to list</button>
					</div>
				</form>
			
			</div>
		</div>
		
	</div>

</div>

<script type="text/javascript">
<?php echo '
window.addEvent(\'domready\', function()
{
	if ($(\'errorMsg\').innerHTML == \'\')
	{
		$(\'errorMsg\').hide();
	}

	$(\'course_edit\').addEvent(\'ajaxPost\', function()
	{
		new REST({
			url : \'courses-edit.do\',
			data : this.toQueryString(),
			method : \'post\',
			onSuccess : function(response)
			{
				if ( response )
				{
					$(\'errorMsg\').innerHTML = \'Saved\';
					$(\'errorMsg\').show();
					$(\'errorMsg\').setStyle(\'color\', \'#46a546\');
					setTimeout("$(\'errorMsg\').hide()", 5000);
				}
			},
			onFailure : function(response)
			{
				if ( response )
				{
					$(\'errorMsg\').innerHTML = \'Something went wrong\';
					$(\'errorMsg\').show();
					$(\'errorMsg\').setStyle(\'color\', \'#9d261d\');
					setTimeout("$(\'errorMsg\').hide()", 5000);
				}
			},

		}).send();
	});
});
'; ?>

</script>