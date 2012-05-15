<div id="customfields">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="{$smarty.const.APP_INCLUDES}img/save.png"></div>
			<div class="span6">
				<h3 class="header">Field details : {$customfield.name}</h3>
				<div id="errorMsg"></div>
				<form id="customfield_edit" class="form-horizontal" action="customfields-edit.do" method="post">
				
					<input type="hidden" name="id" value="{$customfield.id}">
					<div class="control-group">
						<label class="control-label">Field name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required" value="{$customfield.name}">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Type</label>
						<div class="controls">
							<select name="type" type="text" class="input-xlarge">
								<option value="alphanum">Alpha-numeric</option>
								<option value="numeric" {if $customfield.type eq 'numeric'}selected{/if}>Numeric</option>
							</select>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
						<button class="btn backpage" onclick="location.href='customfields';">Back to list</button>
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
});
{/literal}
</script>
