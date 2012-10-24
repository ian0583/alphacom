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
				<h3 class="header">Address details : <span id="addressName"></span></h3>
				<div id="errorMsg"></div>
				<form id="address_edit" class="form-horizontal">
				
					<input type="hidden" name="addresses_id" >
					<input type="hidden" name="longaddress" >
					<input type="hidden" name="profiles_id" >
					<div class="control-group">
						<label class="control-label">Address</label>
						<div class="controls">
							<input type="text" name="address1" class="input-xlarge required">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label"></label>
						<div class="controls">
							<input type="text" name="address2" class="input-xlarge required">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">City</label>
						<div class="controls">
							<input type="text" name="city" class="input-xlarge required">
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">State/Province</label>
						<div class="controls">
							<input type="text" name="stateprovince" class="input-xlarge required">
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">Postcode</label>
						<div class="controls">
							<input type="text" name="postcode" class="input-xlarge required">
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">Country</label>
						<div class="controls">
							<select id="country" name="country" class="input-xlarge required"></select>
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">Current address</label>
						<div class="controls">
							<input type="checkbox" name="currentflag" value="1">
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
Asset.javascript('js/pages/address.js');
</script>

<?php 
require 'footer.php';
?>