/***********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Index
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";
	console.log( "Module: index 072416" );

/**----------===| ******************************************************************************************** |===----------**/

	/**----------===||||| MODULE: MENU NAVIGATIONS |||||===----------**/
	const menuProj = require( './plugins/CreateMenuNav.es6' );
	let introContainer = $( ".introContainer" );
	let menuContainer = $( ".menuContainer" );
	const menuNav = new menuProj.CreateMenuNav( introContainer, "projMenuNav.json" ); //gdContainer  introContainer menuContainer
	menuNav.fProjectAjax();

	/**----------===||||| MODULE: LANDING PAGE |||||===----------**/
	const introProj = require( './plugins/CreateLandingPage.es6' );
	//let introContainer = $( ".introContainer" );
	const landingPage = new introProj.CreateProjectLandingPage( introContainer, "projLandingPage.json" );
	landingPage.fProjectAjax();
	//landingPage.fProjectQueries();

	/**----------===||||| MODULE: HEADER BANNER |||||===----------**/
	const headerProj = require( './plugins/CreateHeader.es6' );

	/**----------===| INVOKE: HEADER BANNER WEB GRAPHICS DESIGN |===----------**/
	let sectionWGDHeaderClass = $( ".sectionWGDHeaderClass" );
	const projHeader = new headerProj.CreateProjectHeader( sectionWGDHeaderClass, "projHeaders.json" );
	projHeader.fProjectAjax();
	//projHeader.fProjectQueries();

	/**----------===||||| MODULE: CREATE PROJECT |||||===----------**/
	const proj = require( './plugins/CreateProject.es6' );

	/**----------===| INVOKE: CREATE PROJECT OWNPHONES |===----------**/
	let ownPhonesContainer = $( ".ownPhonesContainer" );
	const ownProj = new proj.CreateProject( ownPhonesContainer, "projOwnPhones.json" );
	ownProj.fProjectAjax();
	//ownProj.fProjectQueries();

	/**----------===| INVOKE: CREATE PROJECT PERSONALFRESH |===----------**/
	//const pfProj = require( './plugins/CreateProject.es6' );
	let personalFreshContainer = $( ".personalFreshContainer" );
	const PersonalFreshProj = new proj.CreateProject( personalFreshContainer, "projPersonalFresh.json" );
	PersonalFreshProj.fProjectAjax();

	/**----------===| INVOKE: CREATE PROJECT HBCBS |===----------**/
	let HBCBSContainer = $( ".HBCBSContainer" );
	const horizonBlueProj = new proj.CreateProject( HBCBSContainer, "projHBCBS.json" );
	horizonBlueProj.fProjectAjax();

	/**----------===||||| MODULE: CREATE PROJECT YOUTUBE |||||===----------**/
	const projVideo = require( './plugins/CreateProjectYouTube.es6' );

	/**----------===| INVOKE: CREATE PROJECT VIDEO OWNPHONES |===----------**/
	let ownPhonesVideoContainer = $( ".ownPhonesVideoContainer" );
	const ownVideoProj = new projVideo.CreateProject( ownPhonesVideoContainer, "projOwnPhonesYouTube.json" );
	ownVideoProj.fProjectAjax();
	ownVideoProj.fProjectQueries();

	/**----------===| INVOKE: HEADER BANNER ILLUSTRATIONS |===----------**/
	let sectionIllustrationsHeaderClass = $( ".sectionIllustrationsHeaderClass" );
	const projHeaderIllus = new headerProj.CreateProjectHeader( sectionIllustrationsHeaderClass, "projHeadersIllustrations.json" );
	projHeaderIllus.fProjectAjax();

	/**----------===| INVOKE: CREATE PROJECT FILIPINAS |===----------**/
	let filipinasContainer = $( ".filipinasContainer" );
	const filipinasProj = new proj.CreateProject( filipinasContainer, "projFilipinas.json" );
	filipinasProj.fProjectAjax();

	/**----------===| INVOKE: CREATE PROJECT DIGITAL ILLUSTRATIONS |===----------**/
	let digitalIllustrationsContainer = $( ".digitalIllustrationsContainer" );
	const digIllusProj = new proj.CreateProject( digitalIllustrationsContainer, "projDigitalIllustrations.json" );
	digIllusProj.fProjectAjax();

	/**----------===| INVOKE: HEADER BANNER INTERACTIVE |===----------**/
	let interactiveHeaderClass = $( ".interactiveHeaderClass" );
	const projHeaderInteractive = new headerProj.CreateProjectHeader( interactiveHeaderClass, "projHeadersInteractive.json" );
	projHeaderInteractive.fProjectAjax();

	/**----------===| INVOKE: CREATE PROJECT AKON |===----------**/
	let akonContainer = $( ".akonContainer" );
	const akonProj = new proj.CreateProject( akonContainer, "projAkon.json" );
	akonProj.fProjectAjax();

	/**----------===| INVOKE: CREATE PROJECT STAX GALLERY |===----------**/
	let staxGalleryContainer = $( ".staxGalleryContainer" );
	const staxProj = new proj.CreateProject( staxGalleryContainer, "projStax.json" );
	staxProj.fProjectAjax();

	/**----------===| INVOKE: CREATE PROJECT PLAYPEN |===----------**/
	let playpenContainer = $( ".playpenContainer" );
	const playpenProj = new proj.CreateProject( playpenContainer, "projPlaypen.json" );
	playpenProj.fProjectAjax();

/**----------===| ******************************************************************************************** |===----------**/

	/**----------===| EVENT LISTENER: ON RESIZE |===----------**/
	let fOnWindowResize = function() {
		menuNav.fProjectQueries();
		landingPage.fProjectQueries();
		projHeader.fProjectQueries();
		ownProj.fProjectQueries();
		ownVideoProj.fProjectQueries();
	}
	$( window ).on( 'resize', fOnWindowResize );

	/**----------===| EVENT LISTENER: ON SCROLL |===----------**/
	let fOnScroll = () => {
		menuNav.fProjectScrollTo();
	}
	$( window ).on( 'scroll', fOnScroll );

/**----------===| ******************************************************************************************** |===----------**/

}() );
