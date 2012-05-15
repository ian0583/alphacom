<div id="users">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="{$smarty.const.APP_INCLUDES}img/edit_profile.png"></div>
			<div class="span6">
				<h3 class="header">User details : {$user.username}</h3>
				<div id="errorMsg"></div>
				<form id="user_edit" class="form-horizontal" action="users-edit.do" method="post">
				
					<input type="hidden" name="id" value="{$user.id}">
					<div class="control-group">
						<label class="control-label">Username</label>
						<div class="controls">
							<input type="text" name="username" class="input-xlarge required" {if $user.username}disabled="disabled"{/if} value="{$user.username}">
						</div>
					</div>
				
					<div class="control-group">
						<label class="control-label">Change Password</label>
						<div class="controls">
							<input type="password" class="input-xlarge" id="password" name="password">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Confirm Password</label>
						<div class="controls">
							<input type="password" id="confirm" name="confirm" class="input-xlarge validate-match matchInput:'password' matchName:'password'">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Type</label>
						<div class="controls">
							<select name="type" type="text" class="input-xlarge">
								<option value="0">Contributor</option>
								<option value="1" {if $user.type eq 1}selected{/if}>Administrator</option>
							</select>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
						<button class="btn backpage" onclick="location.href='users';">Back to list</button>
					</div>
				</form>
			
			</div>
		</div>
		
	</div>

</div>

<script type="text/javascript">
{literal}
window.addEvent('domready', function()
{
	if ($('errorMsg').innerHTML == '')
	{
		$('errorMsg').hide();
	}
});
{/literal}
</script>
