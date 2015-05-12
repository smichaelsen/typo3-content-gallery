tt_content.gridelements_pi1.20.10.setup {
	contentGallery < lib.gridelements.defaultGridSetup
	contentGallery {
		columns.default.renderObj {
			10 = FLUIDTEMPLATE
			10.file = EXT:content_gallery/Resources/Private/Templates/Gridelements/ContentGallery.html
			20 >
		}
		wrap = <div class="gridelement-contentgallery">|</div>
	}
}
