<?php

$tempColumns = array(
	'tx_contentgallery_class' => array(
		'label' => 'LLL:EXT:content_gallery/Resources/Private/Language/locallang_be.xlf:tt_content.tx_contentgallery_class',
		'displayCond' => 'FIELD:colPos:=:-1',
		'config' => array(
			'type' => 'select',
			'items' => array(
				array('', 'default'),
				array('360°', 'threesixty'),
				array('Image', 'image'),
				array('Video', 'video'),
			),
		),
	),
	'tx_contentgallery_label' => array(
		'label' => 'LLL:EXT:content_gallery/Resources/Private/Language/locallang_be.xlf:tt_content.tx_contentgallery_label',
		'displayCond' => 'FIELD:colPos:=:-1',
		'config' => array(
			'type' => 'input',
		),
	),
	'tx_contentgallery_thumbnail' => array(
		'label' => 'LLL:EXT:content_gallery/Resources/Private/Language/locallang_be.xlf:tt_content.tx_contentgallery_thumbnail',
		'displayCond' => 'FIELD:colPos:=:-1',
		'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('tx_contentgallery_thumbnail'),
	),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumns);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'tx_contentgallery_thumbnail,tx_contentgallery_label,tx_contentgallery_class', '', 'after:header');
