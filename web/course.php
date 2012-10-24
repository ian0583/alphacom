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
				<h3 class="header">Course details : <span id="courseName"></span></h3>
				<div id="errorMsg"></div>
				<form id="course_edit" class="form-horizontal"
					action="courses-edit.do" method="post">

					<input type="hidden" name="courses_id" >
					<div class="control-group">
						<label class="control-label">Course name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required"
								value="">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Description</label>
						<div class="controls">
							<input type="text" name="description" class="input-xlarge"
								value="">
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
Asset.javascript('js/pages/course.js');
</script>

<?php 
require 'footer.php';
?>