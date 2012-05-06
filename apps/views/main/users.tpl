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
				{if $pages > 1}
				<div class="pager">
				
					{if $previous != -1}
					<div class="previous">
						<a href="{$smarty.const.APP_URI}users/{$previous}/{$searchterm}">Previous</a>
					</div>
					{/if}
					
					{if $next != -1}
					<div class="next">
						<a href="{$smarty.const.APP_URI}users/{$next}/{$searchterm}">Next</a>
					</div>
					{/if}
					<br class="clear" />
				
				</div>
				{/if}
			</div>
			<div class="span3">
				<button onclick="location.href='users-edit'" class="btn btn-success">Add new +</button>
			</div>
		
		</div>		
	</div>
</div>