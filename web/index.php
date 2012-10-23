<?
$documentTitle = "Home - AlphaComm";
$pageTitle = "";
$page = str_replace( '.php', '', basename( __FILE__ ) );
require "header.php";
?>

<div id="homepage">
	<div class="row-fluid">
		<button class="span4 btn boxed" id="profiles">
			<h3>View listing of profiles</h3>
			<p>View and search for member profiles</p>
			<div class="text_center">
				<img alt="" src="img/database.png">
				<img alt="" src="img/search_user.png">
			</div>
		</button>
		<button class="span4 btn boxed" id="profiles_edit">
			<h3>Add new profile</h3>
			<p>Add a new member profile in to the system</p>
			<div class="text_center">
				<img alt="" src="img/add_male_user.png">
				<img alt="" src="img/add_female_user.png">
			</div>
		</button>
		<button class="span4 btn boxed" id="users">
			<h3>Create a user with profile</h3>
			<p>Have a new contributor? Add them now so they can also add new information to the list</p>
			<div class="text_center">
				<img alt="" src="img/add_user.png">
				<img alt="" src="img/male_female_users.png">
			</div>
		</button>
	</div>
</div>

<script type="text/javascript">
Asset.javascript ( 'js/pages/index.js' );
</script>

<?
require "footer.php";
?>