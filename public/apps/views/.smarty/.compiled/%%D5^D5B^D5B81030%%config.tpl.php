<?php /* Smarty version 2.6.25, created on 2012-04-28 18:39:10
         compiled from D:%5Cwww%5Calphacom/apps/views/setup/config.tpl */ ?>
<div id="config">
	<div class="row-fluid">
		<div class="span2">&nbsp;</div>
		<div class="span8">
			<div>
				It seems that your database connection is not yet configured. Kindly specify the following so that we can set it up and have your community up and running
			</div>
			
			<br />

			<form class="form-horizontal" id="database-config-form">
				<div class="control-group">
					<label class="control-label">Database hostname</label>
				
					<div class="controls">
						<div class="input-append">
							<input type="text" class="input-large required" name="hostname" >
						</div>
					</div>
				</div>

				<div class="control-group">
					<label class="control-label">Username</label>
				
					<div class="controls">
						<div class="input-append">
							<input type="text" class="input-large required" name="username" >
						</div>
					</div>
				</div>

				<div class="control-group">
					<label class="control-label">Password</label>
				
					<div class="controls">
						<div class="input-append">
							<input type="password" class="input-large required" name="password" >
						</div>
					</div>
				</div>

				<div class="control-group">
					<label class="control-label">Database Name</label>
				
					<div class="controls">
						<div class="input-append">
							<input type="text" class="input-large required" name="dbname" >
						</div>
					</div>
				</div>
				
				<div class="form-actions">
					<button class="btn btn-primary submit" type="submit">Save changes</button>
					<button class="btn cancel">Cancel</button>
				</div>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript">
<?php echo '
window.addEvent(\'domready\', function()
{
	$(\'database-config-form\').addEvent(\'ajaxPost\', function()
	{
		new REST({
			url : \'config.do\',
			data : this.toQueryString(),
			method : \'post\',
			onSuccess : function(response)
			{
				if (response)
				{
					location.href = \'config-success\';
				}
			},

		}).send();
		console.log(this.toQueryString());
	});
});
'; ?>

</script>