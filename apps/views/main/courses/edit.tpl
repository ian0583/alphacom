<div id="courses">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="{$smarty.const.APP_INCLUDES}img/toolbox.png"></div>
			<div class="span6">
				<h3 class="header">Course details : {$course.name}</h3>
				<div id="errorMsg"></div>
				<form id="course_edit" class="form-horizontal" action="courses-edit.do" method="post">
				
					<input type="hidden" name="id" value="{$course.id}">
					<div class="control-group">
						<label class="control-label">Course name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required" value="{$course.name}">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Description</label>
						<div class="controls">
							<input type="text" name="description" class="input-xlarge required" value="{$course.description}">
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
						<button class="btn backpage" onclick="location.href='courses';">Back to list</button>
					</div>
				</form>
			
			</div>
		</div>
		
	</div>

</div>

<script type="text/javascript">
{literal}
window.addEvent('domready', function()
{
	if ($('errorMsg').innerHTML == '')
	{
		$('errorMsg').hide();
	}

	$('course_edit').addEvent('ajaxPost', function()
	{
		new REST({
			url : 'courses-edit.do',
			data : this.toQueryString(),
			method : 'post',
			onSuccess : function(response)
			{
				if ( response )
				{
					$('errorMsg').innerHTML = 'Saved';
					$('errorMsg').show();
					$('errorMsg').setStyle('color', '#46a546');
					setTimeout("$('errorMsg').hide()", 5000);
				}
			},
			onFailure : function(response)
			{
				if ( response )
				{
					$('errorMsg').innerHTML = 'Something went wrong';
					$('errorMsg').show();
					$('errorMsg').setStyle('color', '#9d261d');
					setTimeout("$('errorMsg').hide()", 5000);
				}
			},

		}).send();
	});
});
{/literal}
</script>
