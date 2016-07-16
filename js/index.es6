/***********************************************
 * Project: Project Name Goes Here
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2015 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Index
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const landingPage = require( './gdSite2016.es6' );
	landingPage.fIntroAjax();
	//
	// /**----------===| MODULE: IMAGE CAROUSEL |===----------**/
	// const imageCarousel = require( './imageCarousel.es6' );
	// imageCarousel.fCarouselResize();
	//
	// /**----------===| MODULE: SERVICES |===----------**/
	// const servicesList = require( './servicesList.es6' );
	// servicesList.fServicesListAjax();
	//
	// /**----------===| MODULE: RESPONSES |===----------**/
	// const responsesSection = require( './responses.es6' );
	// responsesSection.fResponsesAjax();
	//
	// /**----------===| MODULE: HEALTH CARE |===----------**/
	// const halthCareSection = require( './healthCare.es6' );
	// halthCareSection.fHealthCareAjax();
	//
	// /**----------===| MODULE: ABOUT || EXPERIENCE |===----------**/
	// const aboutSection = require( './about.es6' );
	// aboutSection.fAboutAjax();
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
