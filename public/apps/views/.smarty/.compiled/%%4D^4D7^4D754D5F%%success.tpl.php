<?php /* Smarty version 2.6.25, created on 2012-05-02 11:03:18
         compiled from D:%5Cwww%5Calphacom/apps/views/setup/success.tpl */ ?>
<div id="config">
	<div class="row-fluid">
		<div class="span2">&nbsp;</div>
		<div class="span8">
			<div>
				You can now start using the system.  The current available user is <b class="error-msg">admin</b> with password <i class="error-msg">password1234</i>.  Once you have logged in, you can change the password and create other users.
			</div>
			
			<br />

			<form class="form-horizontal" id="database-config-form" method="post" action="login.do">
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

				<div class="form-actions">
					<button class="btn btn-success" type="submit">Log in</button>
				</div>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript">
<?php echo '
window.addEvent(\'domready\', function()
{
//	$(\'database-config-form\').addEvent(\'submit\', function()
//	{
//		return false;
//	});
//	
//	$(\'database-config-form\').addEvent(\'ajaxPost\', function()
//	{
//		new REST({
//			url : \'login.do\',
//			data : this.toQueryString(),
//			method : \'post\',
//			onSuccess : function(response)
//			{
//				if (response.error)
//				{
//					$$(\'.error-msg\').each(function(el)
//					{
//						el.setStyle(\'color\', \'red\')
//					});
//				}
//				else
//				{
//					location.href = \'home\';
//				}
//			},
//
//		}).send();
//	});
});
'; ?>

</script>