<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="<?php echo $page; ?>">
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
							<tr onclick="location.href='profiles-edit/{$profiles[x].id}'">
								<td>{$users[x].username}</td>
								<td>{$users[x].username}</td>
								<td>{$users[x].username}</td>
								<td>{$users[x].username}</td>
							</tr>
							<tr><td colspan="4">No records found</td></tr>
					</tbody>
				</table>
			</div>
			<div class="span2">
				<button class="btn btn-success pull-right">Add new +</button>
			</div>
		</div>		
	</div>

</div>
