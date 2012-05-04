<div id="users">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center"><img src="{$smarty.const.APP_INCLUDES}img/users.png"></div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Username</th>
						</tr>
					</thead>
					
					<tbody>
						{section name=x loop=$users}
							<tr onclick="location.href='users-edit/{$users[x].id}'"><td>{$users[x].username}</td></tr>
						{sectionelse}
							<tr><td>No records found</td></tr>
						{/section}
					</tbody>
				</table>
			</div>
		</div>		
	</div>
</div>