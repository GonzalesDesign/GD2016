/***********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Index
 * Description: Project Modules Collection
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const landingPage = require( './gdSite2016.es6' );
	landingPage.fIntroAjax();









	//
	// /**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
	// let fOnWindowResize = function() {
	//
	// 	servicesList.fServicesResize();
	//
	// 	landingPage.fLandingPageResize();
	//
	// 	imageCarousel.fCarouselResize();
	//
	// }
	//
	// $( window ).on( 'resize', fOnWindowResize );

}() );
