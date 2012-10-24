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
				<h3 class="header">Contact details : <span id="contactName"></span></h3>
				<div id="errorMsg"></div>
				<form id="contact_edit" class="form-horizontal">
				
					<input type="hidden" name="contacts_id" >
					<input type="hidden" name="profiles_id" >
					<div class="control-group">
						<label class="control-label">Type</label>
						<div class="controls">
							<select name="type_id" id="type_id" class="input-xlarge required"></select>
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Detail</label>
						<div class="controls">
							<input type="text" name="detail" class="input-xlarge">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Primary</label>
						<div class="controls">
							<input type="checkbox" value="1" name="primaryflag" >
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
Asset.javascript('js/pages/contact.js');
</script>

<?php 
require 'footer.php';
?>