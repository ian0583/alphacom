<div id="homepage">
	<div class="row-fluid">
		<div class="span4 boxed" id="profiles">
			<h3>View listing of profiles</h3>
			<p>View and search for member profiles</p>
			<div class="text_center">
				<img alt="" src="{$smarty.const.APP_INCLUDES}img/database.png">
				<img alt="" src="{$smarty.const.APP_INCLUDES}img/search_user.png">
			</div>
		</div>
		<div class="span4 boxed" id="profiles-edit">
			<h3>Add new profile</h3>
			<p>Add a new member profile in to the system</p>
			<div class="text_center">
				<img alt="" src="{$smarty.const.APP_INCLUDES}img/add_male_user.png">
				<img alt="" src="{$smarty.const.APP_INCLUDES}img/add_female_user.png">
			</div>
		</div>
		<div class="span4 boxed" id="users">
			<h3>Create a user with profile</h3>
			<p>Have a new user? Add them now so they can also make contributions with the list</p>
			<div class="text_center">
				<img alt="" src="{$smarty.const.APP_INCLUDES}img/add_user.png">
				<img alt="" src="{$smarty.const.APP_INCLUDES}img/male_female_users.png">
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
{literal}

$$('.boxed').each(function(el)
{
	el.addEvent('click', function()
	{
		location.href = el.get('id');
	});
});

{/literal}
</script>