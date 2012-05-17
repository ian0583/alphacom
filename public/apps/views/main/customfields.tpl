<div id="profiles">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center"><img src="{$smarty.const.APP_INCLUDES}img/save.png"></div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Field Name</th>
						</tr>
					</thead>
					
					<tbody>
						{section name=x loop=$customfields}
							<tr onclick="location.href='customfields-edit/{$customfields[x].id}'">
								<td>{$customfields[x].name}</td>
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
						<a href="{$smarty.const.APP_URI}customfields/{$previous}/{$searchterm}">Previous</a>
					</div>
					{/if}
					
					{if $next != -1}
					<div class="next">
						<a href="{$smarty.const.APP_URI}customfields/{$next}/{$searchterm}">Next</a>
					</div>
					{/if}
				</div>
				{/if}
			</div>
			<div class="span3">
				<button onclick="location.href='customfields-edit'" class="btn btn-success">Add new +</button>
			</div>
		</div>		
	</div>
</div>