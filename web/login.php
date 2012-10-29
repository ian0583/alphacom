<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require 'header.php';
?>
<div id="login">
	<div class="row-fluid">
		<div class="span4">&nbsp;</div>
		<div class="span4" id="loginForm">
			<h2>Sign In</h2>
			<form class="showLogin" id="formLogin">
				<div id="errorMsg"></div>
				<p>Sign in to AlphaComm.org or Register now if you don't already
					have an account.</p>
				<div class="control-group">
					<label>Username</label> <input id="username"
						class="input-medium required" type="text"
						placeholder="Your username...">
				</div>
				<div class="control-group">
					<label>Password</label> <input id="password"
						class="input-medium required" type="password"
						placeholder="Your password...">
				</div>
				<label>&nbsp;</label>
				<button type="submit" id="login_btn"
					class="btn btn-warning btn-medium">Sign in</button>
				<p class="fp">
					<a href="password-recover.php">Forgot your password?</a>
				</p>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript">
		Asset.javascript('js/pages/login.js');
		</script>

<?php
require 'footer.php';
?>