<?php /* Smarty version 2.6.25, created on 2012-05-08 17:03:05
         compiled from D:%5Cwww%5Calphacom/apps/views/main/customfields/edit.tpl */ ?>
<div id="customfields">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="<?php echo @APP_INCLUDES; ?>
img/save.png"></div>
			<div class="span6">
				<h3 class="header">Field details : <?php echo $this->_tpl_vars['customfield']['name']; ?>
</h3>
				<div id="errorMsg"></div>
				<form id="customfield_edit" class="form-horizontal" action="customfields-edit.do" method="post">
				
					<input type="hidden" name="id" value="<?php echo $this->_tpl_vars['customfield']['id']; ?>
">
					<div class="control-group">
						<label class="control-label">Field name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required" value="<?php echo $this->_tpl_vars['customfield']['name']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Type</label>
						<div class="controls">
							<select name="type" type="text" class="input-xlarge">
								<option value="alphanum">Alpha-numeric</option>
								<option value="numeric" <?php if ($this->_tpl_vars['customfield']['type'] == 'numeric'): ?>selected<?php endif; ?>>Numeric</option>
							</select>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
						<button class="btn backpage" onclick="location.href='customfields';">Back</button>
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

	$(\'customfield_edit\').addEvent(\'ajaxPost\', function()
	{
		new REST({
			url : \'customfields-edit.do\',
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