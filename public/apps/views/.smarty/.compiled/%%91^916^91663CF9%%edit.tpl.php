<?php /* Smarty version 2.6.25, created on 2012-05-14 19:15:34
         compiled from D:%5Cwww%5Calphacom/apps/views/main/batches/edit.tpl */ ?>
<div id="batches">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="<?php echo @APP_INCLUDES; ?>
img/link.png"></div>
			<div class="span6">
				<h3 class="header">Batch details : <?php echo $this->_tpl_vars['batch']['name']; ?>
</h3>
				<div id="errorMsg"></div>
				<form id="batch_edit" class="form-horizontal" action="batches-edit.do" method="post">
				
					<input type="hidden" name="id" value="<?php echo $this->_tpl_vars['batch']['id']; ?>
">
					<div class="control-group">
						<label class="control-label">Batch name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required" value="<?php echo $this->_tpl_vars['batch']['name']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Year</label>
						<div class="controls">
							<input type="text" name="year" class="input-mini" value="<?php echo $this->_tpl_vars['batch']['year']; ?>
">
							<div class="input-append">
								<select class="input-mini" name="sub">
									<option value=""></option>
									<option value="A" <?php if ($this->_tpl_vars['batch']['sub'] == 'A'): ?>selected<?php endif; ?>>A</option>
									<option value="B" <?php if ($this->_tpl_vars['batch']['sub'] == 'B'): ?>selected<?php endif; ?>>B</option>
									<option value="C" <?php if ($this->_tpl_vars['batch']['sub'] == 'C'): ?>selected<?php endif; ?>>C</option>
								</select>
							</div>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
						<button class="btn backpage" onclick="location.href='batches';">Back to list</button>
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
});
'; ?>

</script>