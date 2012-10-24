<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="batches">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center">
				<img src="img/link.png">
			</div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Batch Name</th>
							<th colspan="2">Year</th>
						</tr>
					</thead>

					<tbody id="batchesContainer">

					</tbody>
				</table>
			</div>
			<div class="span3">
				<button id="newBatch" class="btn btn-success">Add new +</button>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">
Asset.javascript('js/pages/batches.js');
</script>

<?php
require 'footer.php';
?>