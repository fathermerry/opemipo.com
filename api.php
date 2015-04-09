<?php
	require_once('config.php');
	/* read the docs!
		by default, I'm just returning the most recent
		pocket item.
		read more here: http://getpocket.com/developer/docs/v3/retrieve
	 */
	$url = 'https://getpocket.com/v3/get?count=1';
	$data = array(
		'consumer_key' => $consumer_key, 
		'access_token' => $access_token
	);
	$options = array(
		'http' => array(
			'method'  => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);
	$pocket = json_decode($result, true);

	function array_values_recursive($array) {
   	$temp = array();

   	foreach ($array as $value) {
           if(is_array($value)) { $temp[] = array_values_recursive($value); }
           else { $temp[] = $value; }
   	}
   	return $temp;
	}

	$article = array_values_recursive($pocket);
	$article_link = $article[2][0][12];
	$article_title = $article[2][0][11];

	echo "<a target=\"_blank\" href=\"$article_link\"> $article_title </a>";
?>