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
					
					<tbody id="profilesContainer">
							
					</tbody>
				</table>
			</div>
			<div class="span2">
				<button class="btn btn-success pull-right" id="newProfile">Add new +</button>
			</div>
		</div>		
	</div>

</div>

<script type="text/javascript">
Asset.javascript('js/pages/profiles.js');
</script>

<?php 
require 'footer.php';
?>