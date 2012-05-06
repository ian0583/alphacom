<div id="profiles">
	<div id="listings">

		<div class="row-fluid">
		 	<div class="span10">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="span2">Batch Name</th>
							<th class="span2">First Name</th>
							<th class="span2">Last Name</th>
							<th>Address</th>
						</tr>
					</thead>
					
					<tbody>
						{section name=x loop=$profiles}
							<tr onclick="location.href='profiles-edit/{$profiles[x].id}'">
								<td>{$users[x].username}</td>
								<td>{$users[x].username}</td>
								<td>{$users[x].username}</td>
								<td>{$users[x].username}</td>
							</tr>
						{sectionelse}
							<tr><td colspan="4">No records found</td></tr>
						{/section}
					</tbody>
				</table>
				{if $pages > 1}
				<div class="pager">
				
					{if $previous != -1}
					<div class="previous">
						<a href="{$smarty.const.APP_URI}profiles/{$previous}/{$searchterm}">Previous</a>
					</div>
					{/if}
					
					{if $next != -1}
					<div class="next">
						<a href="{$smarty.const.APP_URI}profiles/{$next}/{$searchterm}">Next</a>
					</div>
					{/if}
				</div>
				{/if}
			</div>
			<div class="span2">
				<button class="btn btn-success pull-right">Add new +</button>
			</div>
		</div>		
	</div>
</div>