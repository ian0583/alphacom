<?php

$page = (int) @$PARAMS[0];
$searchterm = @$PARAMS[1];

$coursesObj = new DB_Courses();

$this->assign( 'courses', Core_Helper::desanitize($coursesObj->getByPage($page, ITEMSPERPAGE, $searchterm, array('name'))));

$pages = $coursesObj->getTotalPages($searchterm, array('name'));

if (($page + 1) < $pages)
{
	$next = $page + 1;
}
else
{
	$next = -1;
}

if ($page > 0)
{
	$previous = $page - 1;
}
else
{
	$previous = -1;
}

$this->assign('next', $next);
$this->assign('previous', $previous);
$this->assign('page', $page);
$this->assign('pages', $pages);
$this->assign('searchterm', $searchterm);

$pagination = Core_Helper::paginationCounters($pages, $page + 1, false);
$this->assign('pagination', $pagination);