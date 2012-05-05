<div id="profiles">
	<div id="listings">

		<div class="row-fluid">
			<table class="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Batch Name</th>
						<th>First Name</th>
						<th>Last Name</th>
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
		</div>		
	</div>
</div>