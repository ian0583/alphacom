<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="<?php echo $page; ?>">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="img/link.png"></div>
			<div class="span6">
				<h3 class="header">Batch details : <span id="batchName"></span></h3>
				<div id="errorMsg"></div>
				<form id="batch_edit" class="form-horizontal">
				
					<input type="hidden" name="batches_id" >
					<div class="control-group">
						<label class="control-label">Batch name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Year</label>
						<div class="controls">
							<input type="text" name="year" class="input-mini" value="">
							<div class="input-append">
								<select class="input-mini" name="sub">
									<option value=""></option>
									<option value="A">A</option>
									<option value="B">B</option>
									<option value="C">C</option>
								</select>
							</div>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
					</div>
				</form>
			
			</div>
		</div>
		
	</div>
</div>

<script type="text/javascript">
Asset.javascript('js/pages/batch.js');
</script>

<?php 
require 'footer.php';
?>