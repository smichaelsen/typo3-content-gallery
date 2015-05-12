<?php
/*****************************************************************************
 * Extension Manager/Repository config file for ext "content_gallery". *
 ****************************************************************************/
$EM_CONF['content_gallery'] = array(
	'title' => 'Content Gallery',
	'description' => 'Content Gallery',
	'category' => 'fe',
	'state' => 'stable',
	'author' => 'Sebastian Michaelsen',
	'author_email' => 'sebastian@app-zap.de',
	'author_company' => 'app zap',
	'version' => '0.0.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0-7.99.99',
			'vhs' => '2.3.0-2.3.99',
		),
	),
);
