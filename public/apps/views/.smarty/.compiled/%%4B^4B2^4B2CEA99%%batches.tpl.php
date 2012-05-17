<?php /* Smarty version 2.6.25, created on 2012-05-08 17:08:55
         compiled from D:%5Cwww%5Calphacom/apps/views/main/batches.tpl */ ?>
<div id="profiles">
	<div id="listings">

		<div class="row-fluid">
			<div class="span3 text_center"><img src="<?php echo @APP_INCLUDES; ?>
img/link.png"></div>
			<div class="span6">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Batch Name</th>
							<th colspan="2">Year</th>
						</tr>
					</thead>
					
					<tbody>
						<?php unset($this->_sections['x']);
$this->_sections['x']['name'] = 'x';
$this->_sections['x']['loop'] = is_array($_loop=$this->_tpl_vars['batches']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['x']['show'] = true;
$this->_sections['x']['max'] = $this->_sections['x']['loop'];
$this->_sections['x']['step'] = 1;
$this->_sections['x']['start'] = $this->_sections['x']['step'] > 0 ? 0 : $this->_sections['x']['loop']-1;
if ($this->_sections['x']['show']) {
    $this->_sections['x']['total'] = $this->_sections['x']['loop'];
    if ($this->_sections['x']['total'] == 0)
        $this->_sections['x']['show'] = false;
} else
    $this->_sections['x']['total'] = 0;
if ($this->_sections['x']['show']):

            for ($this->_sections['x']['index'] = $this->_sections['x']['start'], $this->_sections['x']['iteration'] = 1;
                 $this->_sections['x']['iteration'] <= $this->_sections['x']['total'];
                 $this->_sections['x']['index'] += $this->_sections['x']['step'], $this->_sections['x']['iteration']++):
$this->_sections['x']['rownum'] = $this->_sections['x']['iteration'];
$this->_sections['x']['index_prev'] = $this->_sections['x']['index'] - $this->_sections['x']['step'];
$this->_sections['x']['index_next'] = $this->_sections['x']['index'] + $this->_sections['x']['step'];
$this->_sections['x']['first']      = ($this->_sections['x']['iteration'] == 1);
$this->_sections['x']['last']       = ($this->_sections['x']['iteration'] == $this->_sections['x']['total']);
?>
							<tr onclick="location.href='batches-edit/<?php echo $this->_tpl_vars['batches'][$this->_sections['x']['index']]['id']; ?>
'">
								<td><?php echo $this->_tpl_vars['batches'][$this->_sections['x']['index']]['name']; ?>
</td>
								<td><?php echo $this->_tpl_vars['batches'][$this->_sections['x']['index']]['year']; ?>
</td>
								<td><?php echo $this->_tpl_vars['batches'][$this->_sections['x']['index']]['sub']; ?>
</td>
							</tr>
						<?php endfor; else: ?>
							<tr><td colspan="4">No records found</td></tr>
						<?php endif; ?>
					</tbody>
				</table>
				<?php if ($this->_tpl_vars['pages'] > 1): ?>
				<div class="pager">
				
					<?php if ($this->_tpl_vars['previous'] != -1): ?>
					<div class="previous">
						<a href="<?php echo @APP_URI; ?>
batches/<?php echo $this->_tpl_vars['previous']; ?>
/<?php echo $this->_tpl_vars['searchterm']; ?>
">Previous</a>
					</div>
					<?php endif; ?>
					
					<?php if ($this->_tpl_vars['next'] != -1): ?>
					<div class="next">
						<a href="<?php echo @APP_URI; ?>
batches/<?php echo $this->_tpl_vars['next']; ?>
/<?php echo $this->_tpl_vars['searchterm']; ?>
">Next</a>
					</div>
					<?php endif; ?>
					<br class="clear" />
				
				</div>
				<?php endif; ?>
			</div>
			<div class="span3">
				<button onclick="location.href='users-edit'" class="btn btn-success">Add new +</button>
			</div>
		</div>		
	</div>
</div>