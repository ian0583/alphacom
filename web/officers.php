<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="users">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center">
				<img src="img/users.png">
			</div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Username</th>
						</tr>
					</thead>

					<tbody id="usersContainer">

					</tbody>
				</table>
			</div>
			<div class="span3">
				<button id="newUser" class="btn btn-success">Add new +</button>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">
Asset.javascript('js/pages/users.js');
</script>

<?php
require 'footer.php';
?>