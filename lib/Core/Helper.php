<?
class Core_Helper
{
	public static function sanitize($data)
	{
		if (is_array($data))
		{
			foreach ($data as $key => $value)
			{
				if (is_array($value))
				{
					$data[$key] = Core_Helper::sanitize($value);
				}
				else
				{
					$data[$key] = addslashes(urlencode(htmlentities($value)));
				}
			}

			return $data;
		}
		else
		{
			return addslashes(urlencode($data));
		}

	}

	public static function desanitize($data)
	{
		if (is_array($data))
		{
			foreach ($data as $key => $value)
			{
				if (is_array($value))
				{
					$data[$key] = Core_Helper::desanitize($value);
				}
				else
				{
					$data[$key] = html_entity_decode(urldecode(stripslashes($value)));
				}
			}

			return $data;
		}
		else
		{
			return urldecode(stripslashes($data));
		}
	}

	public static function updateSession($key, $data)
	{
		$_SESSION[APP_NAME][$key] = $data;
	}

	public static function getSession($key)
	{
		if (isset($_SESSION[APP_NAME][$key]))
		{
			return $_SESSION[APP_NAME][$key];
		}
		else
		{
			return null;
		}
	}

	public static function clearSession($key)
	{
		if (isset($_SESSION[APP_NAME][$key]))
		{
			unset($_SESSION[APP_NAME][$key]);
		}
	}

	public static function prettyBacktrace($data, $key, $length)
	{
		if ($key > 0)
		{
			extract($data, EXTR_REFS);
			echo "<br/><b>" . ($length - $key) . ":</b><br/>\n";
			echo "<b>File:</b> $file<br/>\n";
			echo "<b>Line:</b> $line<br/>\n";
			echo "<b>Function:</b> $function<br/>\n";
		}
	}
	
	public static function paginationCounters($totalPages, $currentPage, $startWithZero = true, $adjacents = 2, $hasStartAndEnd = true)
	{
		$links = array();
		$start = $startWithZero ? 0 : 1;
		$position = 0;
		
		if ($totalPages <= $linksToDisplay) 
		{
			for ($i = $start; $i < ($totalPages + $start); $i++)
			{
				$links[] = $i;
			}
		}
		else 
		{
			// check if currentPage is too close to start and end
			if (($currentPage - $adjacents) < 1) 
			{
				// start
				for ($i = $start; $i < ($currentPage + $adjacents + $start); $i++)
				{
					$links[] = $i;
				}
				$position = 1;
			}
			elseif (($currentPage + $adjacents) > $totalPages)
			{
				// end
				for ($i = ($currentPage - $adjacents); $i < ($totalPages + $start); $i++)
				{
					$links[] = $i;
				}
				$position = 2;
			}
			else 
			{
				// middle
				for ($i = ($currentPage - $adjacents); $i < ($currentPage + $adjacents + $start); $i++)
				{
					$links[] = $i;
				}
				
				if ($currentPage - $adjacents == $start)
				{
					$position = 1;
				}
				
				if ($currentPage + $adjacents == $totalPages) 
				{
					$position = 2;
				}
				
			}
			
			if ($hasStartAndEnd) 
			{
				if ($position != 1) 
				{
					// start
					$links = array_merge(array($start, '...'), $links);
				}
				
				if ($position != 2) 
				{
					// end
					array_push($links, '...');
					array_push($links, $totalPages - 1 + $start);
				}
			}
		}
		
		return $links;
	}
}