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
								<a href="profiles-view/{$loggedUser.id}">
									<i class="icon-eye-open"></i>
									View Profile
								</a>
							</li>
							<li>
								<a href="profiles-edit/{$loggedUser.id}">
									<i class="icon-pencil"></i>
									Edit Profile
								</a>
							</li>
							<li>
								<a href="users-edit/{$loggedUser.id}">
									<i class="icon-cog"></i>
									Account Settings
								</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="login">
									<i class="icon-off"></i>
									Sign Out
								</a>
							</li>
						</ul>
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">
							Menu
							<b class="caret"></b>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a href="profiles">
									<i class="icon-map-marker"></i>
									Profiles
								</a>
							</li>
							<li>
								<a href="users">
									<i class="icon-user"></i>
									Users
								</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="summary">
									<i class="icon-file"></i>
									Summary
								</a>
							</li>
						</ul>
					</li>
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#">
							Administration
							<b class="caret"></b>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a href="courses">
									<i class="icon-book"></i>
									Courses
								</a>
							</li>
							<li>
								<a href="batches">
									<i class="icon-th"></i>
									Batches
								</a>
							</li>
							<li>
								<a href="officers">
									<i class="icon-star"></i>
									Officers
								</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="customfields">
									<i class="icon-edit"></i>
									Custom Fields
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
