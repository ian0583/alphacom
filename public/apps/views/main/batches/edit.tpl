<div id="batches">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="{$smarty.const.APP_INCLUDES}img/link.png"></div>
			<div class="span6">
				<h3 class="header">Batch details : {$batch.name}</h3>
				<div id="errorMsg"></div>
				<form id="batch_edit" class="form-horizontal" action="batches-edit.do" method="post">
				
					<input type="hidden" name="id" value="{$batch.id}">
					<div class="control-group">
						<label class="control-label">Batch name</label>
						<div class="controls">
							<input type="text" name="name" class="input-xlarge required" value="{$batch.name}">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Year</label>
						<div class="controls">
							<input type="text" name="year" class="input-mini" value="{$batch.year}">
							<div class="input-append">
								<select class="input-mini" name="sub">
									<option value=""></option>
									<option value="A" {if $batch.sub eq 'A'}selected{/if}>A</option>
									<option value="B" {if $batch.sub eq 'B'}selected{/if}>B</option>
									<option value="C" {if $batch.sub eq 'C'}selected{/if}>C</option>
								</select>
							</div>
						</div>
					</div>

					<div class="form-actions">
						<button class="btn btn-primary submit">Save changes</button>
						<button class="btn btn-danger cancel">Cancel</button>
						<button class="btn backpage" onclick="location.href='batches';">Back to list</button>
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
