<?php /* Smarty version 2.6.25, created on 2012-05-14 20:16:38
         compiled from D:%5Cwww%5Calphacom/apps/views/main/profiles/edit.tpl */ ?>
<div id="profiles">
	<div id="edit">
		<div class="row-fluid">
			<div class="span3 text_center"><img src="<?php echo @APP_INCLUDES; ?>
img/toolbox.png"></div>
			<div class="span6">
				<h3 class="header">Profile details : <?php if ($this->_tpl_vars['profile']['firstname']): ?><?php echo $this->_tpl_vars['profile']['firstname']; ?>
, <?php echo $this->_tpl_vars['profile']['lastname']; ?>
<?php endif; ?></h3>
				<div id="errorMsg"></div>
				<form id="profile_edit" class="form-horizontal" action="profiles-edit.do" method="post">
				
					<input type="hidden" name="id" value="<?php echo $this->_tpl_vars['profile']['id']; ?>
">
					<div class="control-group">
						<label class="control-label">Number</label>
						<div class="controls">
							<input type="text" name="number" class="input-medium required" value="<?php echo $this->_tpl_vars['profile']['number']; ?>
">
							<div class="input-append">
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
							<input type="text" name="firstname" class="input-xlarge required" value="<?php echo $this->_tpl_vars['profile']['firstname']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Last name</label>
						<div class="controls">
							<input type="text" name="lastname" class="input-xlarge required" value="<?php echo $this->_tpl_vars['profile']['lastname']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Middle name</label>
						<div class="controls">
							<input type="text" name="middlename" class="input-xlarge" value="<?php echo $this->_tpl_vars['profile']['middlename']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Suffix</label>
						<div class="controls">
							<input type="text" name="suffix" class="input-xlarge" value="<?php echo $this->_tpl_vars['profile']['suffix']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Baptismal name</label>
						<div class="controls">
							<input type="text" name="baptismalname" class="input-xlarge" value="<?php echo $this->_tpl_vars['profile']['baptismalname']; ?>
">
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">Username</label>
						<div class="controls">
							<input type="hidden" name="users_id" id="users_id" value="<?php echo $this->_tpl_vars['profile']['users_id']; ?>
">
							<input type="text" id="users" class="input-xlarge required autocomplete" value="<?php echo $this->_tpl_vars['profile']['user']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Batch</label>
						<div class="controls">
							<input type="hidden" name="batch_id" id="batches_id" value="<?php echo $this->_tpl_vars['profile']['batch_id']; ?>
">
							<input type="text" id="batches" class="input-xlarge required autocomplete" value="<?php echo $this->_tpl_vars['profile']['batch']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Course</label>
						<div class="controls">
							<input type="hidden" name="course_id" id="courses_id" value="<?php echo $this->_tpl_vars['profile']['course_id']; ?>
">
							<input type="text" id="courses" class="input-xlarge required autocomplete" value="<?php echo $this->_tpl_vars['profile']['course']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Occupation</label>
						<div class="controls">
							<input type="text" name="occupation" class="input-xlarge" value="<?php echo $this->_tpl_vars['profile']['occupation']; ?>
">
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">Office</label>
						<div class="controls">
							<textarea name="office" rows="5" class="input-xlarge"><?php echo $this->_tpl_vars['profile']['office']; ?>
</textarea>
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">Remarks</label>
						<div class="controls">
							<textarea name="remarks" rows="5" class="input-xlarge"><?php echo $this->_tpl_vars['profile']['remarks']; ?>
</textarea>
						</div>
					</div>
					
					<div class="control-group">
						<label class="control-label">Birth month</label>
						<div class="controls">
							<input type="text" name="number" class="input-large required" value="<?php echo $this->_tpl_vars['profile']['number']; ?>
">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label">Blood type</label>
						<div class="controls">
							<select name="numbertype">
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
						<button class="btn backpage" onclick="location.href='profiles';">Back to list</button>
					</div>
				</form>
			
			</div>
		</div>
		
	</div>

</div>

<script type="text/javascript">
<?php echo '
window.addEvent(\'domready\', function()
{
	if ($(\'errorMsg\').innerHTML == \'\')
	{
		$(\'errorMsg\').hide();
	}

	$$(\'.autocomplete\').each(function(elem)
	{
		var hiddenElem = $(elem.id + \'_id\');
		var field = \'name\';
		if (elem.id == \'users\')
		{
			field = \'user\' + field;
		}
		autoCompleteDropdown ( elem, elem.id, field, URLS.autocomplete, hiddenElem, 2, true )
	});

});
'; ?>

</script>