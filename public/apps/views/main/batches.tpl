<div id="profiles">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center"><img src="{$smarty.const.APP_INCLUDES}img/link.png"></div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Batch Name</th>
							<th colspan="2">Year</th>
						</tr>
					</thead>
					
					<tbody>
						{section name=x loop=$batches}
							<tr onclick="location.href='batches-edit/{$batches[x].id}'">
								<td>{$batches[x].name}</td>
								<td>{$batches[x].year}</td>
								<td>{$batches[x].sub}</td>
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
						<a href="{$smarty.const.APP_URI}batches/{$previous}/{$searchterm}">Previous</a>
					</div>
					{/if}
					
					{if $next != -1}
					<div class="next">
						<a href="{$smarty.const.APP_URI}batches/{$next}/{$searchterm}">Next</a>
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