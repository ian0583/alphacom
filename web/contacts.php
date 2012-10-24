<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="contacts">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center">
				<img src="img/link.png">
			</div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Type</th>
							<th>Detail</th>
						</tr>
					</thead>

					<tbody id="contactsContainer">

					</tbody>
				</table>
			</div>
			<div class="span3">
				<button id="newBatch" class="btn btn-success">Add new +</button>
				<button id="backToProfile" class="btn">Back</button>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">
Asset.javascript('js/pages/contacts.js');
</script>

<?php
require 'footer.php';
?>