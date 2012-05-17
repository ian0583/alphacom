<?php /* Smarty version 2.6.25, created on 2012-05-17 19:26:23
         compiled from menu.tpl */ ?>
<div id="menu">

	<div class="navbar">

		<div class="navbar-inner">
			<div class="container">
				<a class="brand" href="<?php echo @APP_URI; ?>
">
					<span>AlphaComm</span>
				</a>

				<?php if ($this->_tpl_vars['loggedIn']): ?>
				<ul class="nav pull-right" data-behavior="BS.Dropdown">
					<?php if ($this->_tpl_vars['loggedUser']['type'] == 1): ?>
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
					<?php endif; ?>
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
							Settings
							<b class="caret"></b>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a href="profiles-view/<?php echo $this->_tpl_vars['loggedUser']['id']; ?>
">
									<i class="icon-eye-open"></i>
									View Profile
								</a>
							</li>
							<li>
								<a href="profiles-edit/<?php echo $this->_tpl_vars['loggedUser']['id']; ?>
">
									<i class="icon-pencil"></i>
									Edit Profile
								</a>
							</li>
							<li>
								<a href="users-edit/<?php echo $this->_tpl_vars['loggedUser']['id']; ?>
">
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
				</ul>
				<?php endif; ?>
				
			</div>

		</div>

	</div>

</div>


<script type="text/javascript">
<!--
var menu = new Bootstrap.Dropdown($('menu'));
//-->
</script>