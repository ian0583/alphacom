<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="<?php echo $page; ?>">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="img/edit_profile.png"></div>
			<div class="span6">
				<h3 class="header">User details : <span id="userName"></span></h3>
				<div id="errorMsg"></div>
				<form id="user_edit" class="form-horizontal" >
				
					<input type="hidden" name="users_id" value="{$user.id}">
					<div class="control-group">
						<label class="control-label">Username</label>
						<div class="controls">
							<input type="text" name="username" class="input-xlarge required" value="">
						</div>
					</div>
				
					<div class="control-group">
						<label class="control-label">Change Password</label>
						<div class="controls">
							<input type="password" class="input-xlarge validate-match matchInput:'confirm'" id="password" name="password">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Confirm Password</label>
						<div class="controls">
							<input type="password" id="confirm" class="input-xlarge validate-match matchInput:'password' matchName:'password'">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Type</label>
						<div class="controls">
							<select name="type" type="text" class="input-xlarge">
								<option value="0">Contributor</option>
								<option value="1">Administrator</option>
							</select>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
					</div>
				</form>
			
			</div>
		</div>
		
	</div>
</div>

<script type="text/javascript">
Asset.javascript('js/pages/user.js');
</script>

<?php 
require 'footer.php';
?>