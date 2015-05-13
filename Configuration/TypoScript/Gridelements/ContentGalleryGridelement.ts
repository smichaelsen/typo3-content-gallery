tt_content.gridelements_pi1.20.10.setup {
	contentGallery < lib.gridelements.defaultGridSetup
	contentGallery {
		columns.default.renderObj {
			10 = FLUIDTEMPLATE
			10 {
				file = EXT:content_gallery/Resources/Private/Templates/Gridelements/ContentGallery.html
				partialRootPaths.0 = {$plugin.tx_contentgallery.view.partialRootPath}ContentGallery/
				layoutRootPaths.0 = {$plugin.tx_contentgallery.view.layoutRootPath}ContentGallery/
			}
			20 >
		}
		wrap = <div class="gridelement-contentgallery"><div class="gridelement-contentgallery-canvas"></div><div class="gridelement-contentgallery-thumbnails row">|</div></div>
	}
}
