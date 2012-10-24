<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="courses">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center"><img src="img/toolbox.png"></div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Course Name</th>
						</tr>
					</thead>
					
					<tbody id="coursesContainer">
					</tbody>
				</table>
			</div>
			<div class="span3">
				<button class="btn btn-success" id="newCourse">Add new +</button>
			</div>
		
		</div>		
	</div>
</div>

<script type="text/javascript">
Asset.javascript('js/pages/courses.js');
</script>

<?php
require 'footer.php';
?>