<?php /* Smarty version 2.6.25, created on 2012-05-02 11:24:16
         compiled from D:%5Cwww%5Calphacom/apps/views/main/login.tpl */ ?>
<div id="login">
	<div class="row-fluid">
		<div class="span4">&nbsp;</div>
		<div class="span4" id="loginForm">
			<h2>Sign In</h2>
			<form class="showLogin" action="login.do" method="post" id="formLogin">
				<div id="errorMsg"><?php echo $this->_tpl_vars['error']; ?>
</div>
				<p>Sign in to AlphaComm.org or Register now if you don't already have an account.</p>
				<div class="control-group">
					<label>Username</label>
					<input name="username" class="input-medium focused required" id="focusedInput" type="text" placeholder="Your username...">
				</div>
				<div class="control-group">
					<label>Password</label>
					<input name="password" class="input-medium focused required" id="focusedInput" type="password" placeholder="Your password...">
				</div> 
				<label>&nbsp;</label>
				<button type="submit" class="btn btn-warning btn-medium">Sign in</button>
				<p class="fp"><a href="password-recover.php">Forgot your password?</a></p>
			</form> 
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

//$(\'formLogin\').addEvent(\'ajaxPost\', function()
//{
//	new REST({
//		url : \'login.do\',
//		data : this.toQueryString(),
//		method : \'post\',
//		onSuccess : function(response)
//		{
//			if (response.error)
//			{
//				$(\'errorMsg\').innerHTML = response.error;
////				$(\'errorMsg\').show();
//			}
//			else
//			{
//				location.href = \'home\';
//			}
//		},
//
//	}).send();
//
//});

'; ?>

</script>