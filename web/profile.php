<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="<?php echo $page; ?>">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center">
				<img src="img/toolbox.png">
			</div>
			<div class="span6">
				<h3 class="header">
					Profile details : <span id="profileName"></span>
				</h3>
				<div id="errorMsg"></div>
				<form id="profile_edit" class="form-horizontal" method="post">

					<input type="hidden" name="profiles_id">
					<div class="control-group">
						<label class="control-label">Number</label>
						<div class="controls">
							<div class="input-append">
								<input type="text" name="number" class="input-medium required">
							</div>
							<div class="input-prepend">
								<select name="numbertype" class="input-small">
									<option value=""></option>
									<option value="Life">Life</option>
									<option value="Unrit">Unrit</option>
								</select>
							</div>
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">First name</label>
						<div class="controls">
							<input type="text" name="firstname" class="input-xlarge required">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Last name</label>
						<div class="controls">
							<input type="text" name="lastname" class="input-xlarge required">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Middle name</label>
						<div class="controls">
							<input type="text" name="middlename" class="input-xlarge">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Suffix</label>
						<div class="controls">
							<input type="text" name="suffix" class="input-xlarge">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Baptismal name</label>
						<div class="controls">
							<input type="text" name="baptismalname" class="input-xlarge">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Username</label>
						<div class="controls">
							<input type="hidden" name="users_id" id="users_id"> <input
								type="text" id="users"
								class="input-xlarge required autocomplete">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Batch</label>
						<div class="controls">
							<input type="hidden" name="batches_id" id="batches_id"> <input
								type="text" id="batches"
								class="input-xlarge required autocomplete">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Course</label>
						<div class="controls">
							<input type="hidden" name="courses_id" id="courses_id"> <input
								type="text" id="courses"
								class="input-xlarge required autocomplete">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Occupation</label>
						<div class="controls">
							<input type="text" name="occupation" class="input-xlarge">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Office</label>
						<div class="controls">
							<textarea name="office" rows="5" class="input-xlarge"></textarea>
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Remarks</label>
						<div class="controls">
							<textarea name="remarks" rows="5" class="input-xlarge"></textarea>
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Birth month</label>
						<div class="controls">
							<input type="text" name="birthmonth" class="input-large required">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Blood type</label>
						<div class="controls">
							<select name="bloodtype">
								<option value=""></option>
								<option value="a">A</option>
								<option value="b">B</option>
								<option value="ab">AB</option>
								<option value="o">O</option>
							</select>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
					</div>
				</form>

			</div>
			<div class="span3" id="otherInfo">
				<div class="row-fluid">
					<button class="btn btn-success span11" id="addAddress">
						<i class="icon-plus-sign icon-white"></i> Address
					</button>
				</div>
				<br clear="none">
				<div class="row-fluid">
					<button class="btn btn-success span11" id="addContact">
						<i class="icon-plus-sign icon-white"></i> Contact
					</button>
				</div>
			</div>
		</div>
	</div>

</div>

<script type="text/javascript">
Asset.javascript('js/pages/profile.js');
</script>