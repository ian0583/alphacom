<div id="menu">

	<div class="navbar navbar-fixed-top">

		<div class="navbar-inner">
			<div class="container">
				<a class="brand" href="{$smarty.const.APP_URI}">
					<span>AlphaComm</span>
				</a>

				{if !$loggedIn}
				<ul class="nav pull-right" data-behavior="BS.Dropdown">
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">
							<i class="icon-lock icon-white"></i> Sign in <b class="caret"></b>
						</a>
						<div class="dropdown-menu roundedBlack">
							<div class="popoverPlaceholder">
								<h2>Sign In</h2>
								<form class="showLogin" action="login.php">
									<p>Sign in to AlphaComm.org or Register now if you don't already have an account.</p>
									<div class="control-group">
										<label>Username</label>
										<input class="input-medium focused" id="focusedInput" type="text" placeholder="Your username...">
									</div>
									<label>Password</label>
									<input class="input-medium focused" id="focusedInput" type="text" placeholder="Your password..."> 
									<label>&nbsp;</label>
									<button type="submit" class="btn btn-warning btn-medium">Sign in</button>
									<p class="fp"><a href="password-recover.php">Forgot your password?</a></p>
								</form> 
							</div>
						</div>
					</li>
				</ul>
				<!-- /End Public section -->
				{else}
				<!-- / Private section -->
				<ul class="nav pull-right" data-behavior="BS.Dropdown">
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">
							Settings
							<b class="caret"></b>
						</a>
						<ul class="dropdown-menu">
							<li>
									<a href="view-profile.php">
									<i class="icon-picture"></i>
									View Profile
								</a>
							</li>
							<li>
								<a href="create-profile.php">
									<i class="icon-pencil"></i>
									Edit Profile
								</a>
							</li>
							<li>
								<a href="account-settings.php">
									<i class="icon-cog"></i>
									Account Settings
								</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="#">
									<i class="icon-off"></i>
									Sign Out
								</a>
							</li>
						</ul>
					</li>
				</ul>
				{/if}
				
			</div>

		</div>

	</div>

</div>


<script type="text/javascript">
<!--
var menu = new Bootstrap.Dropdown($('menu'));
//-->
</script>
