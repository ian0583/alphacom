<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="addresses">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center">
				<img src="img/home.png">
			</div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Address</th>
						</tr>
					</thead>

					<tbody id="addressesContainer">

					</tbody>
				</table>
			</div>
			<div class="span3">
				<button id="newAddress" class="btn btn-success">Add new +</button>
				<button id="backToProfile" class="btn">Back</button>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">
Asset.javascript('js/pages/addresses.js');
</script>

<?php
require 'footer.php';
?>