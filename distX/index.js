/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Index
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
		console.log( "Module: index 112016" );
	
	/**----------===| ************************************************* |===----------**/
	
		/**----------===||||| MODULE: MENU NAVIGATIONS |||||===----------**/
		const menuProj = __webpack_require__( 1 );
		// let introContainer = $( ".introContainer" );
		 let menuContainer = $( ".menuContainer" );
		//let menuContainer = document.getElementsByClassName( "menuContainer" );
		const menuNav = new menuProj.CreateMenuNav( menuContainer, "projMenuNav.json" ); //gdContainer  introContainer menuContainer
		menuNav.fProjectAjax();
		menuNav.fProjectQueries();
	
		/**----------===||||| MODULE: LANDING PAGE |||||===----------**/
		const introProj = __webpack_require__( 10 );
		let introContainer = $( ".introContainer" );
		const landingPage = new introProj.CreateProjectLandingPage( introContainer, "projLandingPage.json" );
		landingPage.fProjectAjax();
		//landingPage.fProjectQueries();
	
		/**----------===||||| MODULE: HEADER BANNER |||||===----------**/
		const headerProj = __webpack_require__( 12 );
	
		/**----------===| INVOKE: HEADER BANNER WEB GRAPHICS DESIGN |===----------**/
		let sectionWGDHeaderClass = $( ".sectionWGDHeaderClass" );
		const projHeader = new headerProj.CreateProjectHeader( sectionWGDHeaderClass, "projHeaders.json" );
		projHeader.fProjectAjax();
		//projHeader.fProjectQueries();
	
		/**----------===||||| MODULE: CREATE PROJECT |||||===----------**/
		const proj = __webpack_require__( 3 );
	
		/**----------===| INVOKE: CREATE PROJECT OWNPHONES |===----------**/
		let jtnsContainer = $( ".jtnsContainer" );
		const jtnsProj = new proj.CreateProject( jtnsContainer, "projJTNS.json" );
		jtnsProj.fProjectAjax();
	
		let ownPhonesContainer = $( ".ownPhonesContainer" );
		const ownProj = new proj.CreateProject( ownPhonesContainer, "projOwnPhones.json" );
		ownProj.fProjectAjax();
		//ownProj.fProjectQueries();
	
		/**----------===| INVOKE: CREATE PROJECT PERSONALFRESH |===----------**/
		//const pfProj = require( './modules/CreateProject.es6' );
		let personalFreshContainer = $( ".personalFreshContainer" );
		const PersonalFreshProj = new proj.CreateProject( personalFreshContainer, "projPersonalFresh.json" );
		PersonalFreshProj.fProjectAjax();
	
		/**----------===| INVOKE: CREATE PROJECT HBCBS |===----------**/
		let HBCBSContainer = $( ".HBCBSContainer" );
		const horizonBlueProj = new proj.CreateProject( HBCBSContainer, "projHBCBS.json" );
		horizonBlueProj.fProjectAjax();
	
		/**----------===||||| MODULE: CREATE PROJECT YOUTUBE |||||===----------**/
		const projVideo = __webpack_require__( 13 );
	
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
	
		/**----------=====| anim |=====----------**/
		const anim = __webpack_require__( 7 );
	
		/**----------=====| timer |=====----------**/
		const tym = __webpack_require__( 14 );
	
	
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
		// let fScrollTimer = () => {
		//
		// }
	
		let scrollCounter = 0;
		let yPos = 100
		let fScrollControl = () => {
			let scrollAmount = $(window).scrollTop();
			console.log("index scrollAmount: ", scrollAmount);
			//console.log("OwnPhones_ProjRight0: ", OwnPhones_ProjRight0);
			scrollCounter++;
			console.log("index scrollCounter: ", scrollCounter);
			// let yPos = 100
			if(scrollCounter >= 20){
				// if(yPos >= 300){
				// 	//yPos = 0
				// }
				yPos += 10;
				scrollCounter = 0;
				console.log("reset scrollCounter: ", scrollCounter);
	
				let OwnPhones_ProjRight0 = $("#OwnPhones_ProjRight0");
				OwnPhones_ProjRight0.css({
					"top" : yPos
				})
			}
		}
	
		let fOnScroll = () => {
			/*-----= Invoke CreateMenuNav:fProjectScrollTo: fHideShowMenuNav ) =-----*/
			menuNav.fProjectScrollTo();
		}
	
		//fOnScroll();
	
		$( window ).on( 'scroll', fOnScroll );
	
	/**----------===| ******************************************** |===----------**/
	
	}() );


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Project Menu Navigation Template
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: CreateMenuNav" );
	
		/**----------===| MODULE: CREATE BASICS |===----------**/
		const createBasics = __webpack_require__( 2 );
		const createDiv = new createBasics.CreateBasicElement();
		const imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.fBasicDivStyle();
		const tagElement = new createBasics.CreateElementAny();
	
		/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
		const createProject = __webpack_require__( 3 );
	
		/**----------===| MODULE: CREATE STYLES |===----------**/
		const myStyle = __webpack_require__( 4 );
	
		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		const createTextContent = __webpack_require__( 5 );
		let textDiv = new createTextContent.CreateTextContent();
		const menuNavText = new createTextContent.CreateTextContent();
	
		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		const openWindow = __webpack_require__( 6 );
		//let textDiv = new openWindow.CreateTextContent();
	
		/**----------=====| anim |=====----------**/
		const anim = __webpack_require__( 7 );
	
		/**----------===| MODULE: TWO COLUMNS |===----------**/
		const twoKolumns = __webpack_require__( 8 );
		let twoColumnsMenuNav = new twoKolumns.TwoColumnsQueriesClass();
	
		/**----------===| MODULE: LANDING PAGE |===----------**/
		const introProjX = __webpack_require__( 10 );
	
		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );
		let menuContainer = $( ".menuContainer" );
	
		/**-----------=====| MISC VARS |=====-----------**/
		const additionalHeight = 60;
		const arbitraryNum = 10;
		//ANIMATION TIME
		let animTymSlow = 1;
		let animTymFast = .25;
	
		let inWindowHeight = window.innerHeight;
	
		/**----------===| FONT SIZE VARIABLES |===----------**/
		const headerSmlFontSize = "1.4em";
		const headerMidFontSize = "1.6em";
		const headerLrgFontSize = "1.8em";
	
		let jx = 0;
		let ji = 0;
		let i3 = 0;
		let j1 = 0;
	
		/**----------===| ARRAYS |===----------**/
		let aProjectCount = [];
		let aProjectRightColumnPercent = [];
		let aMenuNav = [];
		let aMenuNavLeftColmn = [];
		let aMenuNavRightColmn = [];
		let aMenuNavTitles = [];
	
		/**----------===| FUNCTION: ANCHOR LINK |===----------**/
		/* Not working in Firefox */
		const fGoTo = ( link ) => {
			location.href = "#" + link;
		}
	
		const fHideShowMenuNav = () => {
			 let winHeight = $(window).height(); //Viewport Height
			 let scrollAmount = $(window).scrollTop();
	
			/**----------===| GDCONTAINER START TOP ZERO |===----------**/
			let projectScroll = scrollAmount - winHeight;
	
			/**----------===| TRIGGER VARIABLES FROM CREATEPROJECT |===----------**/
			/** These are triggers for showing & hiding the menu based on the
				heights of the different projects.
				This is a workaround until I can figure out how to get each of the project's top positions.
				!!!!! THESE HEIGHTS INFO NEEDS TO BE UPDATED EVERYTIME THERE'S A PROJECT ADDED
				OR REMOVED. !!!!!!
				IDEALLY IT SHOULD BE DYNANIC!
			==-------------------------------------------------------------------**/
			/**----------===| JTNS: IMAGE CAROUSEL HEIGHT |===----------**/
			// let JTNS_ProjContainer0 = $("#JTNS_ProjContainer0");
			// let JTNS_ProjContainer0Height = JTNS_ProjContainer0.height();
			// console.log("JTNS_ProjContainer0Height: ", JTNS_ProjContainer0Height);
	
			let JTNS_ProjRight0 = $("#JTNS_ProjRight0");
			let JTNS_ProjRight0Height = JTNS_ProjRight0.height();
			console.log("JTNS_ProjRight0Height: ", JTNS_ProjRight0Height);
	
			let JTNS_ParagRightColmn0 = $("#JTNS_ParagRightColmn0");
			let JTNSParagraphHeight = JTNS_ParagRightColmn0.height();
			console.log("JTNSParagraphHeight: ", JTNSParagraphHeight);
	
			let jtnsHeight = JTNS_ProjRight0Height + JTNSParagraphHeight;
			console.log("jtnsHeight: ", jtnsHeight);
	
			/**----------===| OWNPHONES: CONTAINER HEIGHT |===----------**/
			let OwnPhones_ProjRight0 = $("#OwnPhones_ProjRight0");
			let OwnPhones_ProjRight0Height = OwnPhones_ProjRight0.height();
			console.log("OwnPhones_ProjRight0Height: ", OwnPhones_ProjRight0Height);
	
			let OwnPhones_Paragraph0 = $("#OwnPhones_Paragraph0");
			let OwnPhones_Paragraph0Height = OwnPhones_Paragraph0.height();
			console.log("OwnPhones_Paragraph0Height: ", OwnPhones_Paragraph0Height);
	
			let ownPhonesHeight = OwnPhones_ProjRight0Height + OwnPhones_Paragraph0Height;
			console.log("ownPhonesHeight: ", ownPhonesHeight);
	
			let projsHeight = jtnsHeight + ownPhonesHeight;
			console.log("projsHeight: ", projsHeight);
	
			/**----------===| OWNPHONES: IMAGE CAROUSEL HEIGHT |===----------**/
			//let OwnPhones_ProjRight0 = $("#OwnPhones_ProjRight0");
			let proj0_ImageContainer = createProject.proj0_ImageColDiv; //IMPORTED FROM CreateProject
			let proj0_ImageContainerHeight = $(proj0_ImageContainer).height();
			console.log("proj0_ImageContainer: ", proj0_ImageContainer);
			//let project0_ImageContainerId = $(proj0_ImageContainer); //GET ID
			//let proj0_ImageContainerHeight = project0_ImageContainerId.height();
			//console.log("proj0_ImageContainer: ", proj0_ImageContainer);
			/**----------===| OWNPHONES: PARAGRAPH HEIGHT |===----------**/
			let OwnPhones_ParagRightColmn0 = $("#OwnPhones_ParagRightColmn0");
			let ownPhonesParagraphHeight = OwnPhones_ParagRightColmn0.height();
			console.log("ownPhonesParagraphHeight: ", ownPhonesParagraphHeight);
			/**----------===| OWNPHONES: VIDEO CONTAINER HEIGHT |===----------**/
			let videoContainerDiv = $("#OwnPhonesVideo_VideoContainer1");
			let ownPhonesVideoHeight = videoContainerDiv.height();
			let ownPhonesVideoTopPos = videoContainerDiv.top;
			console.log("ownPhonesVideoTopPos: ", ownPhonesVideoTopPos);
			/**----------===| MENU HEIGHT |===----------**/
			let MenuNav_Left0 = $("#MenuNav_Left0");
			let menuHeight = MenuNav_Left0.height();
			/**----------===| OWNPHONES: CAROUSEL & PARAGRAPH HEIGHT |===----------**/
			let ownPhonesContainerHeight = proj0_ImageContainerHeight + ownPhonesParagraphHeight;
			//console.log("ownPhonesContainerHeight: ", ownPhonesContainerHeight);
			/**----------===| OWNPHONES: CAROUSEL + PARAGRAPH + VIDEO HEIGHT |===----------**/
			let ownPhonesImageVideoHeight = projsHeight + ownPhonesVideoHeight;
			//console.log("ownPhonesImageVideoHeight: ", ownPhonesImageVideoHeight);
	
			/**----------===| HIDE & SHOW MENU |===----------------------------------------**/
			/** Hide menu on landing page. Show menu when landing page is covered or not visible.
				Hide menu before video container hits the bottom of the menu container.
					- So not to interfere viewing the video with smaller devices.
				Show menu when the video container scroll passed the menu top
				Hide menu if the right column equals to 100%. Show if less than 100%.
			==-----------------------------------------------------------------------------**/
			console.log("projectScroll: ", projectScroll);
			console.log("projsHeight - menuHeight: ", projsHeight - menuHeight);
			// console.log("ownPhonesContainerHeight - menuHeight: ", ownPhonesContainerHeight - menuHeight);
			console.log("ownPhonesImageVideoHeight: ", ownPhonesImageVideoHeight);
			//if((projectScroll <= 0) || (projectScroll >= (ownPhonesContainerHeight - menuHeight) && projectScroll <= ownPhonesImageVideoHeight) || (twoColumnsMenuNav.ColumnPercentage === 100)){
			if((projectScroll <= 0) || (projectScroll >= (projsHeight - menuHeight) && projectScroll <= ownPhonesImageVideoHeight) || (twoColumnsMenuNav.ColumnPercentage === 100)){
				menuContainer.css({
					"opacity" : "0"
				})
			} else {
				menuContainer.css({
					"opacity" : "1"
				})
			}
		}
	
	
		class CreateMenuNav {
			constructor( projContainer, projectJSON ) {
				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}
	
			fProjectAjax() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				//console.log("projectContainerWidth: ", projectContainerWidth);
				let promise = $.get( "./js/json/" + this.ProjJSON );
				promise.then( function( data ) {
	
					for ( let proj of data.ProjectData ) {
	
						//let scrollAmount = $(window).scrollTop()*2.5;
						//let scrollAmount = $(window).scrollTop();
						//console.log("scrollAmount: ", scrollAmount);
	
						aProjectCount[ aProjectCount.length ] = proj; //PUSH
	
						/**----------===| INVOKE TWO COLUMNS |===----------**/
						twoColumnsMenuNav.fTwoColumnsQueries( projectContainerWidth, proj.rightColumnPercent, arbitraryNum, arbitraryNum );
						aProjectRightColumnPercent[ aProjectRightColumnPercent.length ] = proj.rightColumnPercent;
	
						// console.log("proj.rightColumnPercent: ", proj.rightColumnPercent);
						// console.log("twoColumnsMenuNav.LeftColumn: ", twoColumnsMenuNav.LeftColumn);
	
						/**----------===| CREATE MENU CONTAINER |===------------------------------------------------------------**/
						createDiv.fCreateBasicElement( proj.title + "menuNavContainer", jx, "menuNavContainerClass", projectContainer );
						//let menuNavContainerId = document.getElementById( "menuNavContainer" + "Id_" + jx );
						let menuNavContainerId = $( "#" + proj.title + "menuNavContainer" + jx );
						aMenuNav[ aMenuNav.length ] = menuNavContainerId;
	
						// if(twoColumnsMenuNav.LeftColumn === 0){
						menuNavContainerId.css({
							//"display": "none"
							"width": twoColumnsMenuNav.LeftColumn,
							//"border" : "1px solid blue"
						})
						// }
	
						/**----------===| ON LOAD: INVOKE: SHOW || HIDE MENU NAV |===----------**/
						fHideShowMenuNav();
	
						/**----------===| CREATE MENU LEFT COLUMN |===------------------------------------------------------------**/
						createDiv.fCreateBasicElement( proj.title + "_Left", j1, "menuNavLeftColmnClass", menuNavContainerId );
						let sectLeftIds = $( "#" + proj.title + "_Left" + j1 );
						myStyle.fBasicDivStyle( sectLeftIds, "auto", twoColumnsMenuNav.LeftColumn, "relative" );
						aMenuNavLeftColmn[ aMenuNavLeftColmn.length ] = sectLeftIds;
						sectLeftIds.css({
							//"border" : "1px solid red"
						})
	
						/**----------===| CREATE MENU RIGHT COLUMN |===-------------------------------------------------------------**/
						createDiv.fCreateBasicElement( proj.title + "_Right", j1, "menuNavRightColmnClass", menuNavContainerId );
						let sectRightIds = $( "#" + proj.title + "_Right" + j1 );
						myStyle.fBasicDivStyle( sectRightIds, "auto", twoColumnsMenuNav.RightColumn, "relative" );
						aMenuNavRightColmn[ aMenuNavRightColmn.length ] = sectRightIds;
	
						/**----------===| CREATE MENU NAVIGATIONS |===-------------------------------------------------------------**/
						for ( let menus of proj.mainMenuNavs ) {
							ji++;
							//createDiv.fCreateTag( "div", "menu", "menuClass", ji, menuNavContainerId );
							createDiv.fCreateBasicElement( proj.title + "menu", ji, "menuClass", sectLeftIds );
							//let menuId = document.getElementById( proj.title + "menu" + ji );
							let menuId = $( "#" + proj.title + "menu" + ji );
							//let menuId = $("#menu" + "Id_" + ji);
							//let menuId = $("#menuId_" + ji);
							//let menuClass = $( ".menuClass" );
							menuId.innerHTML = menus.menu;
							// console.log("menuId: ", menuId);
							// console.log("menuId.innerHTML: ", menuId.innerHTML);
							// console.log("menus.menu: ", menus.menu);
	
							menuNavText.fCreateTextDiv( proj.title + "_Text", ji, "menuNavTxtContentClass", menuId, menus.menu );
	
							const randRGBAFrLandingPage = introProjX.RandomRGBA;
							menuId.css({
								"color": randRGBAFrLandingPage
							})
	
							/**-----| Menu anchor links |-----**/
							let linkTarget = menus.link
							$( menuId ).click( () => {
								fGoTo( linkTarget );
								//console.log("menus.link: ", menus.link);
								// console.log("menuId: ", menuId);
								console.log("linkTarget: ", linkTarget);
								// console.log("this: ", this);
							} );
						}
					}
				} )
			};
	
			 fProjectQueries() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				for ( let e1 = 0; e1 < aProjectCount.length; e1++ ) {
					/**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/
					twoColumnsMenuNav.fTwoColumnsQueries( projectContainerWidth, aProjectRightColumnPercent[ e1 ], arbitraryNum, arbitraryNum );
					anim.fAnimateHeightWidth( aMenuNav[ e1 ], "auto", twoColumnsMenuNav.LeftColumn, animTymSlow );
					anim.fAnimateHeightWidth( aMenuNavLeftColmn[ e1 ], "auto", twoColumnsMenuNav.LeftColumn, animTymSlow );
					// anim.fAnimateHeightWidth( aMenuNav[ e1 ], "auto", projectContainerWidth, animTymSlow );
					//console.log("projectContainerWidth: ", projectContainerWidth);
					anim.fAnimateHeightWidth( aMenuNavRightColmn[ e1 ], "auto", "auto", animTymSlow );
				}
				/**----------===| ON RESIZE: INVOKE: SHOW || HIDE MENU NAV |===----------**/
				fHideShowMenuNav();
			 }
	
			 fProjectScrollTo(){
				let projectContainer = this.ProjContainer;
	 			let projectContainerWidth = this.ProjContainer.width();
				let projectContainerHeight = this.ProjContainer.height();
				//let scrollAmount = $(window).scrollTop();
				//console.log("scrollAmount: ", scrollAmount);
				/**----------===| ON SCROLL: INVOKE: SHOW || HIDE MENU NAV |===----------**/
				fHideShowMenuNav();
			 }
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
		module.exports.CreateMenuNav = CreateMenuNav;
	
	
	}() );


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*-**********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Create Basics
	 **********************************************-*/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: createBasics" );
	
		/**------------=====| CreateBasicElement Class |=====------------**/
		/** Description: For creating basic elements
		 **--------------------------------------------------------------**/
		class CreateBasicElement {
			constructor() {
				this.titleName;
			}
	
			fCreateBasicElement( titleId, counter, titleClass, appendedTo ) {
				this.titleName = document.createElement( "div" );
				this.titleName.id = titleId + counter; //set id // title + "Id_" + counter;
				this.titleName.className = titleClass; //set className
				//let titleNameId     = $ ("#" + title + "Id_" + counter); //get id
				$( this.titleName ).appendTo( appendedTo );
				//fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
			}
		};
	
		/**----------=====| CreateElementAny Class |=====----------**/
		/** Description: Class template for creating basic "a" tag.
		 ************************************************************/
		class CreateElementAny {
			constructor() {}
	
			/** Generic method for creating a tag element **/
			fCreateTag( tagType, className, title, counter, appendedTo ) {
				let divName = document.createElement( tagType );
				divName.id = title + counter; //set id
				divName.className = className; //title + "Class";
				divName.href = "#modalCarousel";
				//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
				$( divName ).appendTo( appendedTo );
			}
		}
	
		/**----------=====| CreateElementVideo Class |=====-------------------------------**/
		/** Description:Class template for creating div specifically for YouTube video.
		 ***********************************************************************************/
		class CreateElementVideo {
			constructor() {}
	
			fCreateVideoDiv( videoId, appendedTo ) {
				let divName = document.createElement( "div" );
				divName.id = videoId; //set id
				let divClass = $( "." + videoId + "Class" ); //get class
				let divId = $( "#" + videoId );
				$( divName ).appendTo( appendedTo );
			}
		}
		/**----------=====| CREATE BUTTON ELEMENT CLASS |=====-------------**/
		/** Description: Class template for creating basic "BUTTON" tag.
		 ********************************************************************/
		class CreateElementButton {
			constructor() {}
	
			/** Generic method for creating a tag element **/
			fCreateBtn( className, idName, counter, appendedTo, label ) {
				let divName = document.createElement( "BUTTON" );
				divName.id = idName + "Id_" + counter; //set id
				divName.className = className; //title + "Class";
				//divName.href = "#modalCarousel";
				//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
				$( divName ).appendTo( appendedTo );
				let buttonLabel = document.createTextNode( label );
				$( buttonLabel ).appendTo( divName );
			}
		}
		/**----------=====| FUNCTION TO OPEN|CLOSE TOGGLE : CODING THIS SITE |=====----------**/
		let fToggleBtn = ( btn, targetElem ) => {
			btn.click( () => {
				targetElem.slideToggle( "slow" );
			} );
		}
	
		/**----------=====| FUNCTION FOR ROLLOVER AND ROLLOUT |=====----------**/
		function fRollEvents( elem, origColor ) {
			//	console.log( "elem: ", elem );
			elem.css( {
				"color": origColor
			} )
			elem.mouseover( () => {
				elem.css( {
					"color": "Orange",
					"cursor": "pointer",
					"text-decoration": "none"
				} )
			} )
			elem.mouseout( () => {
				elem.css( {
					"color": origColor,
					"text-decoration": "none"
				} )
			} )
		}
	
		let fRandomized = (elemLength) => {
			return +(Math.floor( elemLength * Math.random() ))
		}
	
		let RandNumero
	
		class CreateRandomNumber {
			constructor() {}
	
			fRandomNumber( elemLength ) {
				this.RandNum = Math.floor( elemLength * Math.random() );
				RandNumero = this.RandNum;
				module.exports.TestXport = "TestExports";
			}
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.CreateBasicElement = CreateBasicElement;
		module.exports.CreateElementAny = CreateElementAny;
		module.exports.CreateElementVideo = CreateElementVideo;
		module.exports.CreateElementButton = CreateElementButton;
		module.exports.fToggleBtn = fToggleBtn;
		module.exports.fRollEvents = fRollEvents;
	
		module.exports.fRandomized = fRandomized;
		module.exports.CreateRandomNumber = CreateRandomNumber;
		module.exports.RandNumero = RandNumero;
	
	}() );


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Project Template
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: CreateProject" );
	
		/**----------===| MODULE: CREATE BASICS |===----------**/
		const createBasics = __webpack_require__( 2 );
		const createDiv = new createBasics.CreateBasicElement();
		const imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.fBasicDivStyle();
		const tagElement = new createBasics.CreateElementAny();
	
		/**----------===| MODULE: CREATE STYLES |===----------**/
		const myStyle = __webpack_require__( 4 );
	
		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		const createTextContent = __webpack_require__( 5 );
		let textDiv = new createTextContent.CreateTextContent();
	
		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		const openWindow = __webpack_require__( 6 );
		//let textDiv = new openWindow.CreateTextContent();
	
		/**----------=====| anim |=====----------**/
		const anim = __webpack_require__( 7 );
	
		/**----------===| MODULE: TWO COLUMNS |===----------**/
		const twoKolumns = __webpack_require__( 8 );
		let logoText = new twoKolumns.TextQueriesClass();
		let headerText = new twoKolumns.TextQueriesClass();
		let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();
	
		/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
		const nextPreviousNav = __webpack_require__( 9 );
	
		//const nxtPrv = new nextPreviousNav.NextPrevNavClass();
	
		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );
	
		/**-----------=====| MISC VARS |=====-----------**/
		const additionalHeight = 60;
		const arbitraryNum = 10;
		//ANIMATION TIME
		let animTymSlow = 1;
		let animTymFast = .25;
		/**----------===| FONT SIZE VARIABLES |===----------**/
		const logoTitleSmlFontSize = "4em";
		const logoTitleMidFontSize = "7em";
		const logoTitleLrgFontSize = "8em";
	
		const logoSubTitleSmlFontSize = "1em";
		const logoSubTitleMidFontSize = "1.2em";
		const logoSubTitleLrgFontSize = "1.6em";
	
		const introCalloutFontSize = ".9em";
		const codingBtnFontSize = ".9em";
	
		const headerSmlFontSize = "1.4em";
		const headerMidFontSize = "1.6em";
		const headerLrgFontSize = "1.8em";
	
		const projTitleSmlFontSize = "1.6em";
		const projTitleMidFontSize = "1.8em";
		const projTitleLrgFontSize = "2em";
	
		const projSubTitleSmlFontSize = "1em";
		const projSubTitleMidFontSize = "1em";
		const projSubTitleLrgFontSize = "1.2em";
	
		const projDescSmlFontSize = "1em";
		const projDescMidFontSize = "1em";
		const projDescLrgFontSize = "1.2em";
	
		const imgDescSmlFontSize = "1em";
		const imgDescMidFontSize = "1em";
		const imgDescLrgFontSize = "1.2em";
	
		let jx = 0;
		let ji = 0;
		let i3 = 0;
	
		//let projectContainer;
		//let projectContainerWidth;
		let projContainrLeftColDivIds;
		let projRightColDivIds;
		let fluidContainerIds;
	
		/**----------===| ARRAYS |===----------**/
		let aProjectCount = [];
		let aProjectRightColumnPercent = [];
		let aImagesOrigWidth = [];
		let aImagesOrigHeight = [];
		let aImageDescriptIds = [];
		let aProjContainrLeftColDivIds = [];
		let aProjRightColDivIds = [];
		let aProjImagesLength = [];
	
		let aFluidContainerIds = [];
		let aFluidContainerWidth = [];
		let aFluidContainerHeight = [];
	
		let aLeftShaderIds = [];
		let aRightShaderIds = [];
		let aNxtPrv = [];
	
		let aProjParagDivIds = [];
		let aParagLeftColDivIds = [];
		let aParagRightColDivIds = [];
		let aParaghProjTitleIds = [];
		let aParaghProjSubTitleIds = [];
		let aParaghProjlinkURLs = [];
		let aProjContainerIds = [];
	
		let aParagraphContainer = []; //aProjParagDivIds
		let aProjParagLeftDivIds = []; //aParagLeftColDivIds
		let aProjParagRightDivIds = []; //aParagRightColDivIds
	
		let aParagraphRightColumnPercent = [];
		let aParagraphLeftColumnWidth = [];
		let aParagraphRightColumnWidth = [];
	
		//let aParaghProjTitleIds = [];
		//let aParaghProjSubTitleIds = [];
		let aParagraphProjDescription = []; //aParaghProjlinkURLs
	
		let aImagesRightColumnPercent = [];
		let aImagesCount = [];
		let aImageIds = [];
		let aImages = [];
		let aImagesWidth = [];
		let aImagesHeight = [];
		//let aImageDescriptIds = [];
	
		//let project0_ImageTitle;
	
	
		class CreateProject {
			constructor( projContainer, projectJSON ) {
				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}
	
			fProjectAjax() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				let promise = $.get( "./js/json/" + this.ProjJSON );
				console.log("promise: ", promise);
				promise.then( function( data ) {
					for ( let proj of data.ProjectData ) {
	
						aProjectCount[ aProjectCount.length ] = proj; //PUSH
						//console.log("aProjectCount: ", aProjectCount);
	
						/**----------===| TWO COLUMNS: IMAGE PROJECTS |===----------**/
						twoColumnsImgProjects.fTwoColumnsQueries( projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight );
						aProjectRightColumnPercent[ aProjectRightColumnPercent.length ] = proj.imgRightColumnPercent; //PUSH
						aImagesOrigWidth[ aImagesOrigWidth.length ] = proj.imagesWidth; //PUSH
						aImagesOrigHeight[ aImagesOrigHeight.length ] = proj.imagesHeight; //PUSH
	
						/**----------===| CREATE PROJECT IMAGE CONTAINER |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_ProjContainer", jx, "projectContainerClass", projectContainer );
						const projContainerIds = $( "#" + proj.title + "_ProjContainer" + jx );
						myStyle.fBasicDivStyle( projContainerIds, "auto", projectContainerWidth ); // ID, HEIGHT, WID, "relative"TH
						aProjContainerIds[ aProjContainerIds.length ] = projContainerIds; //PUSH
	
						/**----------===| CREATE PROJECT IMAGE CONTAINER: LEFT COLUMN |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_Left", jx, "projectLeftColmnClass", projectContainer );
						projContainrLeftColDivIds = $( "#" + proj.title + "_Left" + jx );
						myStyle.fBasicDivStyle( projContainrLeftColDivIds, "50px", twoColumnsImgProjects.LeftColumn );
						aProjContainrLeftColDivIds[ aProjContainrLeftColDivIds.length ] = projContainrLeftColDivIds; //PUSH
	
						/**----------===| CREATE PROJECT IMAGE CONTAINER: RIGHT COLUMN |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_ProjRight", jx, "projectRightColmnClass", projectContainer );
						projRightColDivIds = $( "#" + proj.title + "_ProjRight" + jx );
						aProjRightColDivIds[ aProjRightColDivIds.length ] = projRightColDivIds; //PUSH
						myStyle.fBasicDivStyle( projRightColDivIds, twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn );
						/* IMAGES HEIGHT INFO */
						let imgHtInfo = twoColumnsImgProjects.NewHeight + additionalHeight;
						//console.log(proj.title + " imgHtInfo: ", imgHtInfo);
	
						//aProjRightColDivIds[ aProjRightColDivIds.length ] = projRightColDivIds; //PUSH
						aProjImagesLength[ aProjImagesLength.length ] = proj.projectImages.length + 1; //push
	
						/**----------===| CREATE FLUID-CONTAINER INSIDE RIGHT COLUMN |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_FluidContainer_", jx, "fluidContainerClass", projRightColDivIds );
						//createDiv.fCreateBasicElement( proj.title + "_FluidContainer_", jx, "fluidContainerClass", projectContainer );
						fluidContainerIds = $( "#" + proj.title + "_FluidContainer_" + jx );
						aFluidContainerIds[ aFluidContainerIds.length ] = fluidContainerIds; //PUSH
	
						/**----------===| FLUID-CONTAINER WIDTH |===----------**/
						const fluidContainerWidth = twoColumnsImgProjects.RightColumn * ( proj.projectImages.length + 1 );
						aFluidContainerWidth[ aFluidContainerWidth.length ] = fluidContainerWidth; //PUSH
	
						/**----------===| FLUID-CONTAINER HEIGHT |===----------**/
						const fluidContainerHeight = twoColumnsImgProjects.NewHeight + additionalHeight;
						aFluidContainerHeight[ aFluidContainerHeight.length ] = fluidContainerHeight; //PUSH
	
						/**----------===| FLUID-CONTAINER: BASIC CSS |===----------**/
						myStyle.fBasicDivStyle( fluidContainerIds, fluidContainerHeight, fluidContainerWidth );
	
						/**----------===| CAROUSEL CONTROL: LEFT |===----------**/
						tagElement.fCreateTag( "a", "carousel-control left", proj.title + "leftCarousel", jx, projRightColDivIds );
						const leftShaderIds = $( "#" + proj.title + "leftCarousel" + jx ); //GET IDS
						aLeftShaderIds[ aLeftShaderIds.length ] = leftShaderIds; //PUSH
	
						/**----------===| CREATE GLYPHICON LEFT ARROW |===----------**/
						tagElement.fCreateTag( "i", "glyphicon glyphicon-menu-left", "leftArrow", jx, leftShaderIds ); //glyphicon glyphicon-menu-left glyphicon-chevron-left
						/**----------===| CAROUSEL CONTROL: RIGHT |===----------**/
						tagElement.fCreateTag( "a", "carousel-control right", proj.title + "rightCarousel", jx, projRightColDivIds );
						const rightShaderIds = $( "#" + proj.title + "rightCarousel" + jx ); //GET IDS
						aRightShaderIds[ aRightShaderIds.length ] = rightShaderIds; //PUSH
	
						/**----------===| KEEPING THE CAROUSELCONTROL HEIGHT SAME AS THE IMAGE HEIGHT |===----------**/
						myStyle.fBasicDivStyle( leftShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute" );
						myStyle.fBasicDivStyle( rightShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute" );
	
						/**----------===| CREATE NEW NEXT PREVIOUS CLASS INSTANCES |===----------**/
						const nxtPrv = new nextPreviousNav.NextPrevNavClass();
						aNxtPrv[ aNxtPrv.length ] = nxtPrv;
						/**----------===| INVOKE NEXT PREVIOUS CLASS INSTANCE |===----------**/
						nxtPrv.fNextPrevNavigation( rightShaderIds, leftShaderIds, fluidContainerIds, twoColumnsImgProjects.RightColumn, fluidContainerWidth );
						/**----------===| CREATE GLYPHICON RIGHT ARROW |===----------**/
						tagElement.fCreateTag( "i", "glyphicon glyphicon-menu-right", "rightArrow", jx, rightShaderIds ); ////glyphicon glyphicon-menu-right  glyphicon-chevron-right  glyphicons-fit-image-to-frame
						/**----------===| On first enter the site all left image arrows are hidden |===----------**/
						leftShaderIds.hide();
						let glyphicon = $( ".glyphicon" ); //GET CLASSNAME
	
						/**----------==========| PROJECT PARAGRAPHS |==========----------**/
						/**----------===| PARAGRAPH COLUMNS PERCENTAGE |===----------**/
						twoColumnsParagProjects.fTwoColumnsQueries( projectContainerWidth, proj.paragraphRightColumnPercent, 0, 0 );
						aParagraphRightColumnPercent[ aParagraphRightColumnPercent.length ] = proj.paragraphRightColumnPercent;
						aParagraphLeftColumnWidth[ aParagraphLeftColumnWidth.length ] = twoColumnsParagProjects.LeftColumn;
	
						/**----------===| CREATE PARAGRAPH CONTAINER |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_Paragraph", jx, "paragraphContainerClass", projectContainer );
						let projParagDivIds = $( "#" + proj.title + "_Paragraph" + jx );
						myStyle.fBasicDivStyle( projParagDivIds, "auto", projectContainerWidth );
						aProjParagDivIds[ aProjParagDivIds.length ] = projParagDivIds; //PUSH
	
						/**----------===| CREATE PARAGRAPH LEFT COLUMNS |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_ParagLeftColmn", jx, "paragraphLeftColumnClass", projParagDivIds );
						let paragLeftColDivIds = $( "#" + proj.title + "_ParagLeftColmn" + jx );
						myStyle.fBasicDivStyle( paragLeftColDivIds, arbitraryNum, twoColumnsParagProjects.LeftColumn );
						aParagLeftColDivIds[ aParagLeftColDivIds.length ] = paragLeftColDivIds; //PUSH
	
						/**----------===| CREATE PARAGRAPH RIGHT COLUMNS |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_ParagRightColmn", jx, "paragraphRightColumnClass", projParagDivIds );
						let paragRightColDivIds = $( "#" + proj.title + "_ParagRightColmn" + jx );
						myStyle.fBasicDivStyle( paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn );
						//myStyle.fBasicDivStyle( paragRightColDivIds, twoColumnsParagProjects.NewHeight, twoColumnsParagProjects.RightColumn );
						aParagRightColDivIds[ aParagRightColDivIds.length ] = paragRightColDivIds; //PUSH
	
						/* PARAGRAPH HEIGHT INFO */
						//let paragHtInfo = $("#paragRightColDivIds")
						// console.log("paragRightColDivIds: ", paragRightColDivIds);
						// console.log(proj.title + " paragRightColDivIds: ", paragRightColDivIds.height());
	
						let elemHt = paragRightColDivIds.scrollTop();
						//console.log("elemHt: ", elemHt);
	
						var s2ScrnTopPos = paragRightColDivIds.position().top;
						//console.log("s2ScrnTopPos: ", s2ScrnTopPos);
	
						/**----------===| CREATE PROJECT TITLES |===----------**/
						textDiv.fCreateTextDiv( proj.title + "_ProjTitle", jx, "projTitleClass", paragRightColDivIds, proj.title );
						let paraghProjTitleIds = $( "#" + proj.title + "_ProjTitle" + jx );
						headerText.fTextQueries( projectContainer, paraghProjTitleIds, projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize );
						aParaghProjTitleIds[ aParaghProjTitleIds.length ] = paraghProjTitleIds; //PUSH
	
						/**----------===| CREATE PROJECT SUB-TITLES |===----------**/
						textDiv.fCreateTextDiv( proj.title + "_ProjSubTitle", jx, "projSubTitleClass", paragRightColDivIds, proj.subTitle );
						let paraghProjSubTitleIds = $( "#" + proj.title + "_ProjSubTitle" + jx );
						headerText.fTextQueries( projectContainer, paraghProjSubTitleIds, projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize );
						aParaghProjSubTitleIds[ aParaghProjSubTitleIds.length ] = paraghProjSubTitleIds; //PUSH
	
						/**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/
						textDiv.fCreateTextDiv( proj.title + "_ProjDescription", jx, "projDescriptionClass", paragRightColDivIds, proj.projDescription );
						let paraghProjlinkURLs = $( "#" + proj.title + "_ProjDescription" + jx );
						headerText.fTextQueries( projectContainer, paraghProjlinkURLs, projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize );
						aParaghProjlinkURLs[ aParaghProjlinkURLs.length ] = paraghProjlinkURLs; //PUSH
	
						let projTitleClass = $( ".projTitleClass" );
	
						/**----------===| VARIABLE MODULE EXPORTS: DYNAMIC ID NAMES |===----------**/
						/** Usage: Pass these variables for the CreateMenuNav to
							keep track of their heights that will be used to show
							and hide the menu navigation.
						==-------------------------------------------------------**/
						module.exports.proj0_ImageColDiv = aProjRightColDivIds[0]; //export ownphones project
						// console.log("project0_ImageTitle: ", project0_ImageTitle);
						// module.exports.project0_ImageTitle = project0_ImageTitle;
	
						for ( let imgs of proj.projectImages ) {
							ji++;
							//glyphiconXpand = $( ".glyphicon-expand" );
	
							aImagesCount[ aImagesCount.length ] = imgs;
	
							/**----------===| RIGHT COLUMN PERCENTAGE |===----------**/
							twoColumnsImages.fTwoColumnsQueries( projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight );
							aImagesRightColumnPercent[ aImagesRightColumnPercent.length ] = proj.imgRightColumnPercent;
							aImagesWidth[ aImagesWidth.length ] = twoColumnsImages.RightColumn;
							aImagesHeight[ aImagesHeight.length ] = twoColumnsImages.NewHeight;
	
							/**----------===| CREATE IMAGE DIV INSIDE FLUID-CONTAINER |===----------**/
							imageBasicDiv.fCreateBasicElement( proj.title + "_Image", ji, "imageDivClass", fluidContainerIds );
							let imageIds = $( "#" + proj.title + "_Image" + ji );
							aImageIds[ aImageIds.length ] = imageIds; //PUSH
	
							/**----------===| IMAGE CREATION |===----------**/
							let myImage = new Image();
							let imagesPath = "./images/" + proj.title + "/"; //FILEPATH
							myImage.src = imagesPath + imgs.imgName; //CONCAT
							aImages[ aImages.length ] = myImage.src; //PUSH
	
							/**----------===| IMAGE DIV: CSS |===----------**/
							/*        Populating the div with image        *
							 **--------------------------------------------**/
							let columnHeight = twoColumnsImages.NewHeight;
							let columnWidth = twoColumnsImages.RightColumn;
							myStyle.fBasicImageStyle( imageIds, columnHeight, columnWidth, myImage.src ); //
							/**----------===| IMAGE DESCRIPTIONS |===----------**/
							textDiv.fCreateTextDiv( "imgDescription_", ji, "imgDescription_Class", imageIds, imgs.imgDescription, imgs.hoverTitle );
							/*** TEST: Put this outside ajax and into a class **/
							let imageDescriptIds = $( "#imgDescription_" + ji ); //id = imgDescription_ji
							imageDescriptIds.css( {
								"margin-top": twoColumnsImages.NewHeight + 8 //+ "px"
									//"margin-top": columnHeight //400 + "px"
							} );
							aImageDescriptIds[ aImageDescriptIds.length ] = imageDescriptIds; //PUSH
	
							headerText.fTextQueries( projectContainer, imageDescriptIds, imgDescSmlFontSize, imgDescMidFontSize, imgDescLrgFontSize );
							/**----------===| OPEN DESCRIPTION LINK |===----------**/
							let fullScreen = imgs.fullScreen;
							let linkToOpen = imgs.linkURL;
							let screenHeight = imgs.scrnHeight;
							let screenWidth = imgs.scrnWidth;
							openWindow.fWindowOpen( imageDescriptIds, linkToOpen, fullScreen, screenHeight, screenWidth );
						}
					}
				} )
			};
	
			fProjectQueries() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				for ( let ax = 0; ax < aProjectCount.length; ax++ ) {
					/**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/
					twoColumnsImgProjects.fTwoColumnsQueries( projectContainerWidth, aProjectRightColumnPercent[ ax ], aImagesOrigWidth[ ax ], aImagesOrigHeight[ ax ] );
					myStyle.fBasicDivStyle( aProjContainerIds[ ax ], "auto", projectContainerWidth );
					myStyle.fBasicDivStyle( aProjContainrLeftColDivIds[ ax ], arbitraryNum, twoColumnsImgProjects.LeftColumn );
					myStyle.fBasicDivStyle( aProjRightColDivIds[ ax ], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn );
					myStyle.fBasicDivStyle( aFluidContainerIds[ ax ], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn * aProjImagesLength[ ax ] );
	
					aNxtPrv[ ax ].ImgContainer = aFluidContainerIds[ ax ];
					aNxtPrv[ ax ].ImgContainerWidth = twoColumnsImgProjects.RightColumn;
					aNxtPrv[ ax ].fluidContainerWidth = twoColumnsImgProjects.RightColumn * aProjImagesLength[ ax ];
					myStyle.fBasicDivStyle( aLeftShaderIds[ ax ], twoColumnsImgProjects.NewHeight, "null", "absolute" );
					myStyle.fBasicDivStyle( aRightShaderIds[ ax ], twoColumnsImgProjects.NewHeight, "null", "absolute" );
					anim.fXSlider( aFluidContainerIds[ ax ], -( aNxtPrv[ ax ].ImgContainerWidth * aNxtPrv[ ax ].Num ) );
	
					/**----------===| Project Paragraph Columns |===----------**/
					twoColumnsParagProjects.fTwoColumnsQueries( projectContainerWidth, aParagraphRightColumnPercent[ ax ], 0, 0 );
					myStyle.fBasicDivStyle( aProjParagDivIds[ ax ], "auto", projectContainerWidth );
					myStyle.fBasicDivStyle( aParagLeftColDivIds[ ax ], arbitraryNum, twoColumnsParagProjects.LeftColumn );
					myStyle.fBasicDivStyle( aParagRightColDivIds[ ax ], "auto", twoColumnsParagProjects.RightColumn );
	
					headerText.fTextQueries( projectContainer, aParaghProjTitleIds[ ax ], projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize );
					headerText.fTextQueries( projectContainer, aParaghProjSubTitleIds[ ax ], projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize );
					headerText.fTextQueries( projectContainer, aParaghProjlinkURLs[ ax ], projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize );
				}
	
				for ( let i3 = 0; i3 < aImagesCount.length; i3++ ) {
					/**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/
					twoColumnsImagesAnim.fTwoColumnsQueries( projectContainerWidth, aImagesRightColumnPercent[ i3 ], aImagesWidth[ i3 ], aImagesHeight[ i3 ] );
					/***----------=====| Images divs height and width |=====-------------------***/
					anim.fAnimateHeightWidth( aImageIds[ i3 ], twoColumnsImagesAnim.NewHeight, twoColumnsImagesAnim.RightColumn, animTymSlow );
					aImageDescriptIds[ i3 ].css( {
						"margin-top": twoColumnsImagesAnim.NewHeight + "px"
					} );
					headerText.fTextQueries( projectContainer, aImageDescriptIds[ i3 ], imgDescSmlFontSize, imgDescMidFontSize, imgDescLrgFontSize );
					//twoColumnsVideo.fTwoColumnsQueries( projectContainerWidth, aVideoColumnPercent[ i3 ], aVideoWidth[ i3 ], aVideoHeight[ i3 ] );
				}
			}
	
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.CreateProject = CreateProject;
		// module.exports.project0_ImageTitle = project0_ImageTitle;
		// console.log("project0_ImageTitle: ", project0_ImageTitle);
	
	}() );


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*-**********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Create Styles
	 **********************************************-*/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: createStyles" );
	
		/**------------=====| FUnctions for css with dynamic values |=====------------**/
		/** Description: For creating css styles
		 **--------------------------------------------------------------**/
	
		/**------------=====| fBasicDivStyle CSS |=====------------*, "relative"*/
		let fBasicDivStyle = function( divName, divHeight, divWidth, divPosition ) {
			divName.css( {
				"width": divWidth,
				"height": divHeight,
				"float": "left",
				//"border": "0px solid rgba(250, 10, 150, .35)",
				"position": divPosition //relative absolute
			} );
		};
	
	
		/**------------=====| fBasicImageStyle CSS |=====------------**/
		let fBasicImageStyle = function( divName, divHeight, divWidth, imgSrc ) {
			divName.css( {
				"width": divWidth,
				"height": divHeight,
				//"background": "url(" + imgSrc + ")  center center fixed",
				"background": "url(" + imgSrc + ") center top no-repeat",
				"background-size": "cover" //cover 100%
					//"position": "relative", //relative absolute
					//"float": "left"
					//"overflow": divOverflow, //hidden; visible
					//"border"  : "0px solid " + borderColor
					//"border-top": "0px solid red"
					//"border-color": borderColor
			} );
		};
	
		/**------------=====| TO DO: !!!! MERGE THESE TWO TOGETHER: fBasicImageStyle CSS |=====------------**/
	
		/**------------=====| fBasicImageStyle CSS |=====------------**/
		let fIntroImageStyle = function( divName, divHeight, divWidth, imgSrc ) {
			divName.css( {
				"width": divWidth,
				"height": divHeight,
				"background": "url(" + imgSrc + ")  center top fixed",
				//"background": "url(" + imgSrc + ") no-repeat",
				"background-size": "cover", //cover 100%
				"position": "relative", //relative absolute
				"float": "left"
					//"overflow": divOverflow, //hidden; visible
					//"border"  : "0px solid " + borderColor
					//"border-top": "0px solid red"
					//"border-color": borderColor
			} );
		};
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fBasicDivStyle = fBasicDivStyle;
		module.exports.fBasicImageStyle = fBasicImageStyle;
		module.exports.fIntroImageStyle = fIntroImageStyle;
	
	}() );


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*-**********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Create Text Content
	 **********************************************-*/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: createTextContent" );
	
		/**----------=====| CreateElementDiv Class |=====----------**/
		/** Description:
		 ** Parent class template for creating basic generic divs.
		 ** To minimize the creation of multiple methods that are similar in functionalities.
		 **--------------------------------------------------------**/
		class CreateElementDiv {
			constructor() {}
	
			/** Generic method for creating div element **/
			fCreateDiv( title, counter, appendedTo ) {
				this.divName = document.createElement( "div" );
				this.divName.id = title + counter; //set id // title + "Id_" + counter;
				this.divName.className = title + "Class"; //set className
				$( this.divName ).appendTo( appendedTo );
			}
		}
	
		/**----------=====| TextContent Class |=====----------**/
		/** Description:
		 ** TextContent class template is an extension
		 ** of the CreateElementDiv class.
		 ** For creating innerHTML divs. ************/
		/**------------**/
		class CreateTextContent extends CreateElementDiv {
			constructor() {
				super();
			}
	
			fCreateSimpleTextDiv( name, counter, appendedTo, textString ) {
				super.fCreateDiv( name, counter, appendedTo );
				this.divName.innerHTML = textString;
			}
			fCreateTextDiv( name, counter, nameClass, appendedTo, textString, titleString ) {
				super.fCreateDiv( name, counter, appendedTo );
				//this.nameName = document.createElement("div");
				//this.nameName.id = nameId + counter; //set id // name + "Id_" + counter;
				this.divName.className = nameClass; //set className
				//let nameNameId     = $ ("#" + name + "Id_" + counter); //get id
				//$(this.nameName).appendTo(appendedTo);
				this.divName.innerHTML = textString;
				if ( titleString ) {
					this.divName.title = titleString;
				}
			}
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.CreateTextContent = CreateTextContent;
	
	}() );


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*-**********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Open Window
	 **********************************************-*/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: openWindow" );
	
		/**----------=====| fWindowOpen: FUNCTION FOR OPENING TEXT LINKS |=====----------**/
		/**DESCRIPTION: To open page link from the image description link
		--------------------------------------------------------------------**/
		let glyphiconXpand2 = $( ".glyphicon-expand" );
		let fWindowOpen = ( idName, pageToOpen, fs, scrnHt, scrnWt ) => {
			if ( pageToOpen === "noLink" ) {
				//link is null!
			} else {
				idName.mouseover( () => {
					idName.css( {
						"color": "Orange",
						"cursor": "pointer",
						"text-decoration": "none"
					} )
					glyphiconXpand2.css( {
						"color": "Orange",
						"cursor": "pointer",
						"text-decoration": "none"
					} )
				} )
				idName.mouseout( () => {
					idName.css( {
						"color": "white"
					} )
					glyphiconXpand2.css( {
						"color": "white",
						"opacity": ".90"
					} )
				} )
				idName.click( () => {
					if ( scrnHt === "screen.height" ) {
						scrnHt = window.screen.height;
					}
					if ( scrnWt === "screen.width" ) {
						scrnWt = window.screen.width;
					}
					//window.open(pageToOpen, '_blank'); //, "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
					//window.open(pageToOpen, "_blank", "fs", "fullscreen=yes")
					if ( fs === "yes" ) {
						window.open( pageToOpen, '_blank', 'height=' + scrnHt + ', width=' + scrnWt );
	
					} else {
						window.open( pageToOpen, '_blank' );
					}
				} )
			}
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fWindowOpen = fWindowOpen;
	
	}() );


/***/ },
/* 7 */
/***/ function(module, exports) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Animation Functions
	 ***********************************************/
	(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
	  "use strict";
	
	  console.log("Module: animationFunctions");
	
	  /**-----------=====| TweenMax Reference Variables |=====-----------**/
	  /** Description:
	   ** Animation engine using GSAP TweenMax
	   ********************************************************************/
	  let tMx = TweenMax;
	  let easeSine = Sine.easeOut;
	  let power3 = Power3.easeOut;
	  let power4 = Power4.easeOut;
	  let back = Back.easeOut.config(1);
	  let elastic = Elastic.easeOut;
	  let circular = Circ.easeOut;
	  let expo = Expo.easeOut;
	  let sloMo = SlowMo.ease.config(0.7, 0.7, false)
	  let animTym = 1;
	  let animTymSlow = 3;
	  let animTymFast = .25;
	
	  /**-----------=====| SCROLL TIMER |=====-----------------------**/
	  /** Description: Functions for a scroller with a timer.
	   ** When scrolled, execute a function. It also fires the timer
	      for a given time and during that time the scroller is null.
	  *****************************************************************/
	  // let fScrollControl = () => {
	  //   let scrollAmount = $(window).scrollTop();
	  //   console.log("scrollAmountXX: ", scrollAmount);
	  // }
	
	
	  let fScrollTimer = (funct2Execute) => {
	    var ix = 0;
	    var fAddEvntListnr = function() {
	      tMx.ticker.addEventListener("tick", fTimer);
	      //fScrollControl();
	      //funct2Execute;
	
	      function fTimer() {
	        /**-----===( Load Media Queries )===-----**/
	        //fOnWindowResize();
	        //$(window).on('resize', fOnWindowResize);
	        //fScrollControl();
	        funct2Execute;
	        ix++;
	        console.log("ix: ", ix);
	        if (ix >= 10) {
	          fRemoveEvntListnr(fTimer);
	        }
	      }
	    };
	    var fRemoveEvntListnr = function(myFunct) {
	      tMx.ticker.removeEventListener("tick", myFunct);
	    };
	
	    fAddEvntListnr();
	  }
	
	  /**-----------=====| fOpacityAnim Function |=====-----------**/
	  /** Description: Animates element's opacity from 0% to 100%
	   *************************************************************/
	  let fOpacityAnim = function(elem) {
	    elem.css({
	      "opacity": 0
	    });
	    tMx.to(elem, animTym, {
	      opacity: 1,
	      ease: easeSine
	    });
	  };
	
	  /**-----------=====| fXSlider Function |=====-----------**/
	  /** Description:
	   ** Animates element's horizontal positions
	   ** Use the attribute "left" instead of the matrix "x" (translateX())
	   ** as a key and the horizPos param as value.
	   ** http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
	   ****************************************************************/
	  let fXSlider = function(elem, horizPos) {
	    tMx.to(elem, animTym, {
	      left: horizPos,
	      ease: back
	    });
	  };
	
	  let fYSlider = function(elem, vertPos) {
	    tMx.to(elem, animTymSlow, {
	      top: vertPos,
	      position: "fixed",
	      ease: back
	    });
	  };
	
	  // /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
	  // /** Descriptions:
	  //  ** Animates element's height and width
	  //  **----------------------------------------------------------------**/
	  // let fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
	  //   //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: power3});
	  //   tMx.to(elem, animTym, {
	  //     height: (eHeight + "px"),
	  //     width: eWidth,
	  //     ease: power3
	  //   });
	  // };
	
	  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
	  /** Descriptions: Animates element's height and width
	   **----------------------------------------------------------------**/
	  let fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
	    tMx.to(elem, animTym, {
	      height: eHeight,
	      width: eWidth,
	      ease: power3
	    });
	  };
	
	  // let fImageHeightWidth = function(imgsArray, ht, wt) {
	  //   /**----( Setting array member's heights and widths )----**/
	  //   for (let i = 0; i < imgsArray.length; i++) {
	  //     fAnimateHeightWidth(imgsArray[i], ht, wt); //rowImgRightColmnWidth);
	  //     console.log("imgsArray[i]: ", imgsArray[i]);
	  //   }
	  // };
	
	  let fFontSizer = function(elem, sizeFont) {
	    tMx.to(elem, animTymSlow, {
	      fontSize: sizeFont,
	      ease: power3
	    });
	  };
	
	
	  /**-----------=====| MODULE EXPORTS |=====-----------**/
	  module.exports.fXSlider = fXSlider;
	  module.exports.fYSlider = fYSlider;
	  module.exports.fAnimateHeightWidth = fAnimateHeightWidth;
	  //module.exports.fImageHeightWidth = fImageHeightWidth;
	  module.exports.fFontSizer = fFontSizer;
	  module.exports.fScrollTimer = fScrollTimer;
	  /**--------------------------------------------------**/
	
	}());
	// ----**/
	//
	// }());


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**----------===| Created by Odee on 06/17/16.|===----------**/
	
	(function() { //IIFE:Immediately-Invoked Function Expression
	
	  "use strict";
	  //console.log("Filename: twoColumns.js");
	
	  let anim = __webpack_require__(7);
	
	  /**----------=====| fRoundToTwo Function |=====----------**/
	  /** Description: fRoundToTwo: rounds the decimals to two.
	   **------------------------------------------------------**/
	  let fRoundToTwo = function(num) {
	    return +(Math.round(num + "e+2") + "e-2");
	  };
	
	  /**----------=====| TwoColumnsQueriesClass Class |=====----------------------------------------------------**/
	  /** Description:
	   ** Class to calculate the two columns within the container, in all screen sizes.
	   ** The right column width uses the "rightColumnPercentage" argument when the screen width is small
	      and uses the percentage pulled from json at larger screen width. Converted to pixel.
	   ** The left column will have the container's width minus the right column width.
	   **--------------------------------------------------------------------------------------------------**/
	  class TwoColumnsQueriesClass {
	    constructor() {}
	
	    fTwoColumnsQueries(contnrWidth, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
	      //console.log("contnrWidth: ", contnrWidth);
	      if (contnrWidth <= 400) {
	        this.ColumnPercentage = 100;
	        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
	        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
	        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
	        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
	        //console.log("this.ColumnPercentage: ", this.ColumnPercentage);
	
	      } else if (contnrWidth > 400 && contnrWidth <= 650) {
	        this.ColumnPercentage = 100;
	        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
	        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
	        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
	        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
	        //console.log("this.ColumnPercentage: ", this.ColumnPercentage);
	
	      } else {
	        this.ColumnPercentage = rightColumnPercentage;
	        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
	        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
	        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
	        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
	        //console.log(this + ".ColumnPercentage: ", this.ColumnPercentage);
	      }
	    }
	  }
	
	  /**--------------------------------------------**/
	  class ThreeColumnsClass {
	    constructor() {}
	
	    fThreeColumns(contnrWidth) {
	      //console.log("contnrWidth: ", contnrWidth);
	      let oneThird = contnrWidth / 3;
	      //console.log("oneThird: ", oneThird);
	    }
	  };
	  /**--------------------------------------------**/
	
	  class TextQueriesClass {
	    constructor() {}
	
	    fTextQueries(contnr, elem, smlFntSize, midFntSize, lrgFntSize) {
	      //fTextQueries(contnrWidth, elem, smlFntSize, midFntSize, lrgFntSize) {
	      //console.log("contnrWidth: ", contnrWidth);
	      //console.log("elem.height(): ", elem.height());
	      let contnrWidth = contnr.width();
	      let contnrHeight = contnr.height();
	
	      if (contnrWidth <= 400 && contnrHeight <= 400) {
	        anim.fFontSizer(elem, smlFntSize); //"4em"
	        elem.css({
	          "padding-left": "20px"
	        })
	      } else if ((contnrWidth > 400 && contnrWidth <= 650) || (contnrHeight > 400 && contnrHeight <= 650)) {
	        anim.fFontSizer(elem, midFntSize); //"4em"
	        elem.css({
	          "padding-left": "20px"
	        })
	      } else {
	        anim.fFontSizer(elem, lrgFntSize); //"4em"
	        elem.css({
	          "padding-left": "0px"
	        })
	      }
	    }
	
	
	  }
	
	  /**-----------=====| MODULE EXPORTS |=====-----------**/
	
	  module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass;
	  module.exports.TextQueriesClass = TextQueriesClass;
	  module.exports.ThreeColumnsClass = ThreeColumnsClass;
	  /**----------------------------------------------------------------**/
	
	}());


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**----------===| Created by Odee on 5/17/16.|===----------**/
	
	(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
	
	  "use strict";
	
	  /**-----------=====| IMPORT | REQUIRE |=====-----------**/
	  /** DESCRIPTIONS:
	   ** FILES IMPORTED FROM OTHER JS FILES
	   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
	   **----------------------------------------------------------------**/
	  let anim = __webpack_require__(7);
	
	
	  class NextPrevNavClass {
	    constructor() {}
	
	    fNextPrevNavigation(
	      rightArrow, leftArrow, imgContainer, imgContainerWidth, fluidContainerWidth) { //}, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
	      this.String = "Hello from fNextPreviousTwoColumnsClass method";
	      this.RightArrow = rightArrow;
	      this.LeftArrow = leftArrow;
	      this.ImgContainer = imgContainer;
	      this.ImgContainerWidth = imgContainerWidth;
	      this.fluidContainerWidth = fluidContainerWidth;
	
	      this.Num = 0;
	      let num = 0;
	      let containerXPos = 0;
	      this.fluidContainerLeftPosition = 0;
	      let fluidContainerLeftPosition;
	
	      /**-----------=====| Next button function |=====-----------**/
	      rightArrow.click(() => {
	        num++;
	        this.Num = num;
	        containerXPos = this.ImgContainerWidth * num;
	        leftArrow.show();
	        // console.log(`
	        // 		    np:${imgContainer}-----------------------------------------
	        // 		    image width:                    ${this.ImgContainerWidth}
	        // 		    multiplied by numbr of clicks:  ${num}
	        // 		                                    ------------------
	        // 		    container x position:           ${containerXPos}
	        // 		    fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
	        // 		    this.Num: same as clicks        ${this.Num}
	        // 		    np:---------------------------------------------------`)
	        /**-----| If the current x position greater or equals to the fluid-container width |-----**/
	        this.fluidContainerLeftPosition = (this.fluidContainerWidth - (this.ImgContainerWidth * 2))
	        if (containerXPos >= this.fluidContainerLeftPosition) {
	          rightArrow.hide();
	        }
	        /**-----| fXSlider: Slides the image container to the left |-----**/
	        anim.fXSlider(imgContainer, -(containerXPos));
	        //console.log(rightArrow, num, ":np---------------------------------------------------");
	      });
	
	      /**-----------=====| Previous button function |=====-----------**/
	      leftArrow.click(() => {
	        num--;
	        this.Num = num;
	        containerXPos = this.ImgContainerWidth * num;
	        rightArrow.show();
	        // console.log(`
	        //     image width:                    ${this.ImgContainerWidth}
	        //     multiplied by numbr of clicks:  ${num}
	        //                                     ------------------
	        //     container x position:           ${containerXPos}
	        //     fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
	        //     this.Num: same as clicks        ${this.Num}
	        // `)
	        /**-----| when it hits the beginning of the image container |-----**/
	        if (containerXPos <= 0) {
	          leftArrow.hide();
	        }
	        /**-----| fXSlider: Slides the image container to the right |-----**/
	        anim.fXSlider(imgContainer, -(containerXPos));
	      });
	    }
	  }
	
	  /**-----------=====| MODULE EXPORTS |=====-----------**/
	  /**--------------------------------------------------**/
	  module.exports.NextPrevNavClass = NextPrevNavClass;
	  /**--------------------------------------------------**/
	
	
	}());


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Landing Page Template
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: CreateLandingPage" );
	
		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		// const createElem = require( './CreateElementClass.es6' );
		// let imageBasicDiv = new createElem.CreateElementAny();
	
		/**----------===| MODULE: CREATE BASICS |===----------**/
		const createBasics = __webpack_require__( 2 );
		//const imageBasicDiv = new createBasics.CreateBasicElement();
		const imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.myStyle.fBasicDivStyle();
		const tagElement = new createBasics.CreateElementAny();
		const createButton = new createBasics.CreateElementButton();
	
		const createRandNum = new createBasics.CreateRandomNumber();
		// createRandNum.fRandomNumber(5);
		// console.log("createRandNum.RandNum: ", createRandNum.RandNum);
	
		/**----------===| MODULE: CREATE STYLES |===----------**/
		const myStyle = __webpack_require__( 4 );
	
		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		const createTextContent = __webpack_require__( 5 );
		let textDiv = new createTextContent.CreateTextContent();
		const sectionHeaderText = new createTextContent.CreateTextContent();
	
		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		const openWindow = __webpack_require__( 6 );
		//let textDiv = new openWindow.CreateTextContent();
	
		/**----------=====| anim |=====----------**/
		const anim = __webpack_require__( 7 );
	
		/**----------=====| CreateColor |=====----------**/
		const convertHex = __webpack_require__( 11 );
		let hex2RGBA = new convertHex.CreateColor();
	
	
		/**----------===| MODULE: TWO COLUMNS |===----------**/
		const twoKolumns = __webpack_require__( 8 );
		let twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();
	
		let logoText = new twoKolumns.TextQueriesClass();
		let headerText = new twoKolumns.TextQueriesClass();
		let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();
	
		let twoKolumnsGeneric = new twoKolumns.TwoColumnsQueriesClass();
	
		/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
		const nextPreviousNav = __webpack_require__( 9 );
	
		//const nxtPrv = new nextPreviousNav.NextPrevNavClass();
	
		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );
	
		/**-----------=====| MISC VARS |=====-----------**/
		const additionalHeight = 60;
		const arbitraryNum = 10;
		//ANIMATION TIME
		let animTymSlow = 1;
		let animTymFast = .25;
		/**----------===| FONT SIZE VARIABLES |===----------**/
		const logoTitleSmlFontSize = "4em";
		const logoTitleMidFontSize = "7em";
		const logoTitleLrgFontSize = "8em";
	
		const logoSubTitleSmlFontSize = "1em";
		const logoSubTitleMidFontSize = "1.2em";
		const logoSubTitleLrgFontSize = "1.6em";
	
		const introCalloutFontSize = "14px";
		const codingBtnFontSize = ".9em";
	
		const headerSmlFontSize = "1.4em";
		const headerMidFontSize = "1.6em";
		const headerLrgFontSize = "1.8em";
	
		let jx = 0;
		let ji = 0;
		let i3 = 0;
		let j1 = 0;
	
		//let codingThisSiteId;
		let logoContainerDivId;
		let logoLeftColDivId;
		let logoRightColDivId;
		let logoTitleColumnPercent;
		let logoTitleClass;
		let logoSubTitleClass;
		let logoTitleId;
		let logoSubTitleId;
		let introCalloutId;
		let toggleBtn;
		//let codingThisSiteId;
	
		let introImageIds;
		let myIntroImageSrc;
		let myIntroImage;
		let introBackgroungImage;
		let rightColumnHeight;
	
		let randNum;
		let randColorTheme;
		let aImages = [];
		//let RandomNumero;
	
		let fLogoContainerYPos = () => {
			let inWindowHeight = window.innerHeight; // / 2;
			let inWindowWidth = window.innerWidth;
			let logoContainer = $(".logoContainer");
			let logoContainerHeight = logoContainer.height();
			let centerOnScreenY = ( inWindowHeight / 2 ) - ( logoContainerHeight / 2 );
	
			if(inWindowHeight <= 400 && inWindowWidth <= 400){
				logoContainer.css( {
						"margin-top": centerOnScreenY //inWindowHeight //centerOnScreenY // - centerOnScreenY //- ( rightColumnHeight + 40 ) // - 800 //(400 + (inWindowHeight / 5)) //"100px" //-(inWindowHeight / 4)
					} )
			} else {
				logoContainer.css( {
						"margin-top": inWindowHeight - ( logoContainerHeight + 40 ) //inWindowHeight //centerOnScreenY // - centerOnScreenY //- ( rightColumnHeight + 40 ) // - 800 //(400 + (inWindowHeight / 5)) //"100px" //-(inWindowHeight / 4)
					} )
			}
		}
	
		class CreateProjectLandingPage {
			constructor( projContainer, projectJSON ) {
				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
				//console.log("CreateProjectLandingPage: constructor");
			}
	
			fProjectAjax() {
				//console.log("fProjectAjax: ");
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				/**----------===| FULL LANDING PAGE IMAGE DIV |===----------**/
				let inWindowHeight = window.innerHeight; // / 2;
				let inWindowWidth = window.innerWidth;
	
				let introFluidContainer = $(".introFluidContainer");
	
				//let myIntroImage;
	
				let promise = $.get( "./js/json/" + this.ProjJSON );
				promise.then( function( data ) {
					for ( let introData of data.GDSiteIntro ) {
						//console.log("introData: ", introData);
	
						/**----------===| CREATE LOGO CONTAINER DIV INSIDE projectContainer DIV |===----------**/
						imageBasicDiv.fCreateBasicElement( introData.title + "_LogoContainer", jx, "logoContainer", projectContainer );
						logoContainerDivId = $( "#" + introData.title + "_LogoContainer" + jx ); //GET ID
						let logoContainer = $(".logoContainer"); //GET CLASSNAME
						/**----------===| LOGO TITLE CONTAINER COLUMNS PERCENTAGE |===----------**/
						logoTitleColumnPercent = introData.logoTitleColumnPercent; //json supplied
						twoKolumnsGeneric.fTwoColumnsQueries( projectContainerWidth, logoTitleColumnPercent, 0, 0 );
	
						/**----------===| CREATE LOGO TITLE LEFT COLUMNS |===----------**/
						imageBasicDiv.fCreateBasicElement( introData.title + "_IntroLeftColmn", jx, "introLeftColumnClass", logoContainerDivId );
						logoLeftColDivId = $( "#" + introData.title + "_IntroLeftColmn" + jx ); //GET ID
						myStyle.fBasicDivStyle( logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, "relative" ); //CSS
	
						/**----------===| CREATE LOGO TITLE RIGHT COLUMNS |===----------**/
						imageBasicDiv.fCreateBasicElement( introData.title + "_IntroRightColmn", jx, "introRightColumnClass", logoContainerDivId );
						logoRightColDivId = $( "#" + introData.title + "_IntroRightColmn" + jx ); //GET ID
						myStyle.fBasicDivStyle( logoRightColDivId, "auto", "auto", "relative" ); //CSS
	
						/**----------===| CREATE LOGO TITLES |===----------**/
						textDiv.fCreateTextDiv( introData.title + "_LogoTitle", jx, "logoTitleClass", logoRightColDivId, introData.introTitle ); //R.LLOYD GONZALES
						logoTitleId = $( "#" + introData.title + "_LogoTitle" + jx );
						logoText.fTextQueries( projectContainer, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize );
	
						/**----------===| CREATE INTRO SUB-TITLES |===----------**/
						textDiv.fCreateTextDiv( introData.title + "_LogoSubTitle", jx, "logoSubTitleClass", logoRightColDivId, introData.introSubTitle ); //Passionate about Arts, Designs & Coding
						logoSubTitleId = $( "#" + introData.title + "_LogoSubTitle" + jx );
						logoText.fTextQueries( projectContainer, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize );
	
						/**----------===| CREATE CALLOUT |===----------**/
						textDiv.fCreateTextDiv( introData.title + "_Callout", jx, "calloutClass", logoRightColDivId, introData.callout ); //Portfolio: Scroll Down
						introCalloutId = $( "#" + introData.title + "_Callout" + jx );
						logoText.fTextQueries( projectContainer, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize );
						//console.log("introData.callout: ", introData.callout);
	
						/**----------===| TOGGLE "CODE THIS SITE" DESCRIPTION |===----------**/
	
						/**----------===| CREATE BUTTON ELEMENT |===----------**/
						createButton.fCreateBtn( "btn btn-link codingBtn", "_Btn", jx, logoRightColDivId, "coding this site" ); //introFluidContainer
						toggleBtn = $( ".codingBtn" ); //get clasname
						const closeCoding = $( ".closeCoding" ); //get clasname
						logoText.fTextQueries( projectContainer, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize );
						let toggleBtnId = $( "#" + introData.title + "_Btn" + jx );
						logoText.fTextQueries( projectContainer, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize );
	
						/**----------===| LOGO CONTAINER: BASIC CSS |===----------**/
	
						rightColumnHeight = logoRightColDivId.height(); // + 30;
	
						myStyle.fBasicDivStyle( logoContainerDivId, "auto", projectContainerWidth );
	
						/**----------===| LOGO CONTAINER HEIGHT QUERIES |===----------**/
						fLogoContainerYPos();
	
						createBasics.fToggleBtn( toggleBtn );
						createBasics.fRollEvents( toggleBtn, "#949494" );
	
						/**----------===| CREATE IMAGE DIV INSIDE INTROFLUIDCONTAINER |===----------**/
						imageBasicDiv.fCreateBasicElement( introData.title + "_IntroImg", jx, "introDivClass", introFluidContainer );
	
						/**----------===| NEW IMAGE CREATION |===----------**/
						myIntroImage = new Image();
						let imagesPath = "./images/" + introData.title + "/";
						/**-----====={ Load image randomly }=====-----**/
						randNum = createBasics.fRandomized(introData.images.length);
						var randImg = introData.images[ randNum ];
						//console.log("randImg: ", randImg);
	
						module.exports.RandomNumero = randNum;
	
						aImages[ aImages.length ] = myIntroImage.src; //PUSH
						/**----------===| IMAGE DIV: IDS |===----------**/
						introImageIds = $( "#" + introData.title + "_IntroImg" + jx );
	
						//let fLogoContainerYPos = () => {
						console.log("image loading...");
						myIntroImage.onload = () => { //function() {
							introImageIds.src = this.src;
							console.log("image loaded!");
						};
	
						myIntroImage.src = imagesPath + randImg.imgName; //introData.images[0].imgName; //randImg;
	
						/**----------===| COLOR THEME: INTRO SUB TITLE |===----------**/
						randColorTheme = randImg.colorTheme;
						logoSubTitleId.css( {
								"color": randColorTheme
							} )
							/**----------===| COLOR THEME: INTRO LOGO CONTAINER |===----------**/
						let hex2Rgb = hex2RGBA.fConvertHex( randColorTheme, 50 )
						logoContainerDivId.css( {
							"border-top": "4px double " + hex2Rgb,
							"border-bottom": "6px double " + hex2Rgb
						} );
	
						module.exports.RandomRGBA = hex2Rgb;
	
						myStyle.fIntroImageStyle( introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src );
					}
				} )
			};
	
			 fProjectQueries() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
	
				/**----------===| FULL LANDING PAGE IMAGE DIV |===----------**/
				let inWindowHeight = window.innerHeight; // / 2;
				let inWindowWidth = window.innerWidth;
	
				myStyle.fIntroImageStyle( introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src );
	
				/**----------===| CALCULATE LEFT & RIGHT COLUMN WIDTHS |===--------------------**/
				/** Description:
				    Invoke fTwoColumnsQueries to  calculates Left and Right columns widths
						based on the percentage passed to the class
				    Usage: twoKolumnsGeneric.LeftColumn, twoKolumnsGeneric.RightColumn...
				==----------------------------------------------------------------------------**/
				twoKolumnsGeneric.fTwoColumnsQueries( projectContainerWidth, logoTitleColumnPercent, arbitraryNum, arbitraryNum );
	
				/**----------===| LOGO CONTAINER |===----------**/
				//fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, "relative");
				anim.fAnimateHeightWidth( logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, animTymSlow );
				//fBasicDivStyle(logoRightColDivId, "auto", twoKolumnsGeneric.RightColumn - 20, "relative");
				myStyle.fBasicDivStyle( logoRightColDivId, "auto", "auto", "relative" );
				anim.fAnimateHeightWidth( logoContainerDivId, "auto", projectContainerWidth, animTymSlow );
	
				// logoContainerDivId.css( {
				// 		"margin-top": inWindowHeight - ( rightColumnHeight + 40 ) // - 800 //(400 + (inWindowHeight / 5)) //"100px" //-(inWindowHeight / 4)
				// 	} )
	
				/**----------===| SCREEN WIDTH QUERIES |===----------**/
				logoText.fTextQueries( projectContainer, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize );
				logoText.fTextQueries( projectContainer, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize );
				logoText.fTextQueries( projectContainer, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize );
				logoText.fTextQueries( projectContainer, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize );
	
				/**----------===| LOGO CONTAINER HEIGHT QUERIES |===----------**/
				fLogoContainerYPos();
				//let inWindowHeight = window.innerHeight;
		        //let logoContainerDivId = $("#logoContainerDivId");
	
				/**----------===| CODING CONTAINER |===----------**/
				//myStyle.fBasicDivStyle( codingThisSiteId, "auto", projectContainerWidth, "relative" );
			 }
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
		// console.log("randNum: ", randNum);
		//module.exports.RandomNumerox1 = RandomNumerox1;
		module.exports.CreateProjectLandingPage = CreateProjectLandingPage;
	
	
	}() );


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*-**********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Create Color
	 **********************************************-*/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: CreateColor" );
	
	    /**----------=====| FUNCTION FOR CONVERTING HEX COLOR TO RGBA |=====----------**/
	    /** http://jsfiddle.net/subodhghulaxe/t568u/ **/
	    //function fConvertHex(hex, opacity) {
	    class CreateColor {
	        constructor( ) {
	        }
	
	        fConvertHex(hex, opacity) {
	            hex = hex.replace( '#', '' );
	    		let r = parseInt( hex.substring( 0, 2 ), 16 );
	    		let g = parseInt( hex.substring( 2, 4 ), 16 );
	    		let b = parseInt( hex.substring( 4, 6 ), 16 );
	
	    		let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
	    		return result;
	        }
	    }
	
	
	/**-----------=====| EXPORTS |=====-----------**/
	//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
	module.exports.CreateColor = CreateColor;
	
	
	}() );


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Project Header Template
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: CreateHeader" );
	
		/**----------===| MODULE: CREATE BASICS |===----------**/
		const createBasics = __webpack_require__( 2 );
		const createDiv = new createBasics.CreateBasicElement();
	
		/**----------===| MODULE: CREATE STYLES |===----------**/
		const myStyle = __webpack_require__( 4 );
	
		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		const createTextContent = __webpack_require__( 5 );
		let textDiv = new createTextContent.CreateTextContent();
		const sectionHeaderText = new createTextContent.CreateTextContent();
	
		/**----------=====| anim |=====----------**/
		const anim = __webpack_require__( 7 );
	
		/**----------===| MODULE: TWO COLUMNS |===----------**/
		const twoKolumns = __webpack_require__( 8 );
		let twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();
	
		let logoText = new twoKolumns.TextQueriesClass();
		let headerText = new twoKolumns.TextQueriesClass();
		let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();
	
		/**----------===| MODULE: LANDING PAGE |===----------**/
		const introProjX = __webpack_require__( 10 );
	
		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );
	
		/**-----------=====| MISC VARS |=====-----------**/
		const additionalHeight = 60;
		const arbitraryNum = 10;
		//ANIMATION TIME
		let animTymSlow = 1;
		let animTymFast = .25;
	
		/**----------===| FONT SIZE VARIABLES |===----------**/
		const headerSmlFontSize = "1.4em";
		const headerMidFontSize = "1.6em";
		const headerLrgFontSize = "1.8em";
	
		let jx = 0;
		let ji = 0;
		let i3 = 0;
		let j1 = 0;
	
		/**----------===| ARRAYS |===----------**/
		let aProjectCount = [];
		let aProjectRightColumnPercent = [];
		let aSectionHeaders = [];
		let aSectionHeadrLeftColmn = [];
		let aSectionHeadrRightColmn = [];
		let aSectionHeadrTitles = [];
	
		class CreateProjectHeader {
			constructor( projContainer, projectJSON ) {
				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}
	
			fProjectAjax() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				//console.log("projectContainerWidth: ", projectContainerWidth);
				let promise = $.get( "./js/json/" + this.ProjJSON );
				promise.then( function( data ) {
					for ( let proj of data.ProjectData ) {
	
						//const randNumFrLandingPage = introProjX.RandomNumero;
						//console.log("randNumFrLandingPage: ", randNumFrLandingPage);
	
						const randRGBAFrLandingPage = introProjX.RandomRGBA;
						//console.log("randRGBAFrLandingPage: ", randRGBAFrLandingPage);
	
						aProjectCount[ aProjectCount.length ] = proj; //PUSH
	
						/**----------===| INVOKE TWO COLUMNS |===----------**/
						twoColumnsHeaderSection.fTwoColumnsQueries( projectContainerWidth, proj.headerRightColumnPercent, arbitraryNum, arbitraryNum );
						aProjectRightColumnPercent[ aProjectRightColumnPercent.length ] = proj.headerRightColumnPercent;
	
						/**----------===| CREATE SECTION HEADER CONTAINER |===----------------------------------------**/
						createDiv.fCreateBasicElement( proj.title, j1, "sectionHeaderClass", projectContainer );
						let sectDivIds = $( "#" + proj.title + j1 );
						myStyle.fBasicDivStyle( sectDivIds, "auto", projectContainerWidth, "relative" );
						aSectionHeaders[ aSectionHeaders.length ] = sectDivIds;
	
						/**----------===| CREATE SECTION HEADER DIVIDER |===----------------------------------------**/
						createDiv.fCreateBasicElement( "sectDivider", j1, "sectionDividerClass", sectDivIds );
						let sectDividerIds = $( "#" + "sectDivider" + j1 );
						let sectionDividerClass = $( ".sectionDividerClass" );
						/**----------===| COLOR THEME: DIVIDER |===----------**/
						sectionDividerClass.css( {
							"background-color": randRGBAFrLandingPage //"yellowGreen" //randColorTheme
						} )
	
						/**----------===| CREATE HEADER LEFT COLUMN |===------------------------------------------------------------**/
						createDiv.fCreateBasicElement( proj.title + "_Left", j1, "sectionHeaderLeftColmnClass", sectDivIds );
						let sectLeftIds = $( "#" + proj.title + "_Left" + j1 );
						myStyle.fBasicDivStyle( sectLeftIds, arbitraryNum, twoColumnsHeaderSection.LeftColumn, "relative" );
						aSectionHeadrLeftColmn[ aSectionHeadrLeftColmn.length ] = sectLeftIds;
	
						/**----------===| CREATE HEADER RIGHT COLUMN |===-------------------------------------------------------------**/
						createDiv.fCreateBasicElement( proj.title + "_Right", j1, "sectionHeaderRightColmnClass", sectDivIds );
						let sectRightIds = $( "#" + proj.title + "_Right" + j1 );
						myStyle.fBasicDivStyle( sectRightIds, "auto", twoColumnsHeaderSection.RightColumn, "relative" );
						aSectionHeadrRightColmn[ aSectionHeadrRightColmn.length ] = sectRightIds;
	
						/**----------===| Sections Header Title Text |===----------**/
						//sectionHeaderText.fBasicTextContent( proj.title + "_Text", j1, "sectionHeaderTxtContentClass", sectRightIds, proj.sectionTitle );
						sectionHeaderText.fCreateTextDiv( proj.title + "_Text", j1, "sectionHeaderTxtContentClass", sectRightIds, proj.sectionTitle );
						//fCreateTextDiv( name, counter, nameClass, appendedTo, textString, titleString );
						let sectionTitleIds = $( "#" + proj.title + "_Text" + j1 );
						myStyle.fBasicDivStyle( sectionTitleIds, "auto", twoColumnsHeaderSection.RightColumn, "relative" );
						headerText.fTextQueries( projectContainer, sectionTitleIds, headerSmlFontSize, headerMidFontSize, headerLrgFontSize );
						aSectionHeadrTitles[ aSectionHeadrTitles.length ] = sectionTitleIds;
					}
				} )
			};
	
			 fProjectQueries() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				for ( let e1 = 0; e1 < aProjectCount.length; e1++ ) {
					//console.log("e1: ", e1);
					/**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/
					twoColumnsHeaderSection.fTwoColumnsQueries( projectContainerWidth, aProjectRightColumnPercent[ e1 ], arbitraryNum, arbitraryNum );
					anim.fAnimateHeightWidth( aSectionHeadrLeftColmn[ e1 ], arbitraryNum, twoColumnsHeaderSection.LeftColumn, animTymSlow );
					anim.fAnimateHeightWidth( aSectionHeaders[ e1 ], "auto", projectContainerWidth, animTymSlow );
					anim.fAnimateHeightWidth( aSectionHeadrRightColmn[ e1 ], "auto", "auto", animTymSlow ); //twoColumnsHeaderSection.RightColumn
					anim.fAnimateHeightWidth( aSectionHeadrTitles[ e1 ], "auto", "auto", animTymSlow );
					headerText.fTextQueries( projectContainer, aSectionHeadrTitles[ e1 ], headerSmlFontSize, headerMidFontSize, headerLrgFontSize );
				}
			 }
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
		module.exports.CreateProjectHeader = CreateProjectHeader;
	
	}() );


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Project Template
	 ***********************************************/
	
	( function() { /*IIFE:Immediately-Invoked Function Expression*/
		"use strict";
	
		console.log( "Module: CreateProjectYouTube" );
	
		/**----------===| MODULE: CREATE BASICS |===----------**/
		const createBasics = __webpack_require__( 2 );
		const createDiv = new createBasics.CreateBasicElement();
		const imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.fBasicDivStyle();
		const tagElement = new createBasics.CreateElementAny();
	
		const youTubeVideo = new createBasics.CreateElementVideo();
	
		/**----------===| MODULE: CREATE STYLES |===----------**/
		const myStyle = __webpack_require__( 4 );
	
		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		const createTextContent = __webpack_require__( 5 );
		let textDiv = new createTextContent.CreateTextContent();
	
		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		const openWindow = __webpack_require__( 6 );
		//let textDiv = new openWindow.CreateTextContent();
	
		/**----------=====| anim |=====----------**/
		const anim = __webpack_require__( 7 );
	
		/**----------===| MODULE: TWO COLUMNS |===----------**/
		const twoKolumns = __webpack_require__( 8 );
		let logoText = new twoKolumns.TextQueriesClass();
		let headerText = new twoKolumns.TextQueriesClass();
		let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();
	
		/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
		const nextPreviousNav = __webpack_require__( 9 );
	
		//const nxtPrv = new nextPreviousNav.NextPrevNavClass();
	
		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );
	
		/**-----------=====| MISC VARS |=====-----------**/
		const additionalHeight = 60;
		const arbitraryNum = 10;
		//ANIMATION TIME
		let animTymSlow = 1;
		let animTymFast = .25;
	
		/**----------===| FONT SIZE VARIABLES |===----------**/
		const projTitleSmlFontSize = "1.6em";
		const projTitleMidFontSize = "1.8em";
		const projTitleLrgFontSize = "2em";
	
		const projSubTitleSmlFontSize = "1em";
		const projSubTitleMidFontSize = "1em";
		const projSubTitleLrgFontSize = "1.2em";
	
		const projDescSmlFontSize = "1em";
		const projDescMidFontSize = "1em";
		const projDescLrgFontSize = "1.2em";
	
		const imgDescSmlFontSize = "1em";
		const imgDescMidFontSize = "1em";
		const imgDescLrgFontSize = "1.2em";
	
		let jx = 0;
		let ji = 0;
		let i3 = 0;
	
		//let projectContainer;
		//let projectContainerWidth;
		// let projContainrLeftColDivIds;
		// let projRightColDivIds;
		// let fluidContainerIds;
	
		/**----------===| ARRAYS |===----------**/
		let aProjectCount = [];
		let aProjectRightColumnPercent = [];
		let aImagesOrigWidth = [];
		let aImagesOrigHeight = [];
		let aImageDescriptIds = [];
		let aProjContainrLeftColDivIds = [];
		let aProjRightColDivIds = [];
		let aProjImagesLength = [];
	
		let aFluidContainerIds = [];
		// let aFluidContainerWidth = [];
		// let aFluidContainerHeight = [];
	
		let aLeftShaderIds = [];
		let aRightShaderIds = [];
		let aNxtPrv = [];
	
		let aProjParagDivIds = [];
		let aParagLeftColDivIds = [];
		let aParagRightColDivIds = [];
		let aParaghProjTitleIds = [];
		let aParaghProjSubTitleIds = [];
		let aParaghProjlinkURLs = [];
		let aProjContainerIds = []; //aVideoContainerIds
		let aVideoContainerIds = [];
	
		// let aParagraphContainer = []; //aProjParagDivIds
		// let aProjParagLeftDivIds = []; //aParagLeftColDivIds
		// let aProjParagRightDivIds = []; //aParagRightColDivIds
	
		let aParagraphRightColumnPercent = [];
		let aParagraphLeftColumnWidth = [];
		//let aParagraphRightColumnWidth = [];
	
		//let aParaghProjTitleIds = [];
		//let aParaghProjSubTitleIds = [];
		//let aParagraphProjDescription = []; //aParaghProjlinkURLs
	
		let aImagesRightColumnPercent = [];
		let aImagesCount = [];
		let aImageIds = [];
		//let aImages = [];
		let aImagesWidth = [];
		let aImagesHeight = [];
		//let aImageDescriptIds = [];
	
		let aVideoColumnPercent = [];
		let aVideoWidth = [];
		let aVideoHeight = [];
	
	
		class CreateProject {
			constructor( projContainer, projectJSON ) {
				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}
	
			fProjectAjax() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
				let promise = $.get( "./js/json/" + this.ProjJSON );
				promise.then( function( data ) {
					for ( let proj of data.ProjectData ) {
						jx++;
						//rightShaderIds.hide();
						aProjectCount[ aProjectCount.length ] = proj; //PUSH
	
						/**----------===| INVOKE TWO COLUMNS |===----------**/
						twoColumnsImgProjects.fTwoColumnsQueries( projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight );
						aProjectRightColumnPercent[ aProjectRightColumnPercent.length ] = proj.imgRightColumnPercent; //PUSH
						aImagesOrigWidth[ aImagesOrigWidth.length ] = proj.imagesWidth; //PUSH
						aImagesOrigHeight[ aImagesOrigHeight.length ] = proj.imagesHeight; //PUSH
	
						/**----------===| CREATE PROJECT VIDEO CONTAINER |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_VideoContainer", jx, "videoContainerClass", projectContainer );
						const projContainerIds = $( "#" + proj.title + "_VideoContainer" + jx );
						aProjContainerIds [ aProjContainerIds.length ] = projContainerIds; //PUSH
						myStyle.fBasicDivStyle( projContainerIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative" );
	
						/**----------===| CREATE VIDEO-PLACEHOLDER |===----------**/
						youTubeVideo.fCreateVideoDiv( "video-placeholder", projContainerIds);
						let videoPlaceholder = $( "#video-placeholder" );
						myStyle.fBasicDivStyle( videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative" );
	
						/**----------===| PARAGRAPH COLUMNS PERCENTAGE |===----------**/
						twoColumnsParagProjects.fTwoColumnsQueries( projectContainerWidth, proj.paragraphRightColumnPercent, 0, 0 );
						aParagraphRightColumnPercent[ aParagraphRightColumnPercent.length ] = proj.paragraphRightColumnPercent;
						aParagraphLeftColumnWidth[ aParagraphLeftColumnWidth.length ] = twoColumnsParagProjects.LeftColumn;
	
						/**----------===| CREATE PARAGRAPH CONTAINER |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_Paragraph", jx, "paragraphContainerClass", projectContainer );
						let projParagDivIds = $( "#" + proj.title + "_Paragraph" + jx );
						myStyle.fBasicDivStyle( projParagDivIds, "auto", projectContainerWidth );
						aProjParagDivIds[ aProjParagDivIds.length ] = projParagDivIds; //PUSH
	
						/**----------===| CREATE PARAGRAPH LEFT COLUMNS |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_ParagLeftColmn", jx, "paragraphLeftColumnClass", projParagDivIds );
						let paragLeftColDivIds = $( "#" + proj.title + "_ParagLeftColmn" + jx );
						myStyle.fBasicDivStyle( paragLeftColDivIds, arbitraryNum, twoColumnsParagProjects.LeftColumn );
						aParagLeftColDivIds[ aParagLeftColDivIds.length ] = paragLeftColDivIds; //PUSH
	
						/**----------===| CREATE PARAGRAPH RIGHT COLUMNS |===----------**/
						createDiv.fCreateBasicElement( proj.title + "_ParagRightColmn", jx, "paragraphRightColumnClass", projParagDivIds );
						let paragRightColDivIds = $( "#" + proj.title + "_ParagRightColmn" + jx );
						myStyle.fBasicDivStyle( paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn );
						aParagRightColDivIds[ aParagRightColDivIds.length ] = paragRightColDivIds; //PUSH
	
						/**----------===| CREATE PROJECT TITLES |===----------**/
						textDiv.fCreateTextDiv( proj.title + "_ProjTitle", jx, "projTitleClass", paragRightColDivIds, proj.title );
						let paraghProjTitleIds = $( "#" + proj.title + "_ProjTitle" + jx );
						headerText.fTextQueries( projectContainer, paraghProjTitleIds, projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize );
						aParaghProjTitleIds[ aParaghProjTitleIds.length ] = paraghProjTitleIds; //PUSH
	
						/**----------===| CREATE PROJECT SUB-TITLES |===----------**/
						textDiv.fCreateTextDiv( proj.title + "_ProjSubTitle", jx, "projSubTitleClass", paragRightColDivIds, proj.subTitle );
						let paraghProjSubTitleIds = $( "#" + proj.title + "_ProjSubTitle" + jx );
						headerText.fTextQueries( projectContainer, paraghProjSubTitleIds, projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize );
						aParaghProjSubTitleIds[ aParaghProjSubTitleIds.length ] = paraghProjSubTitleIds; //PUSH
	
						/**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/
						textDiv.fCreateTextDiv( proj.title + "_ProjDescription", jx, "projDescriptionClass", paragRightColDivIds, proj.projDescription );
						let paraghProjlinkURLs = $( "#" + proj.title + "_ProjDescription" + jx );
						headerText.fTextQueries( projectContainer, paraghProjlinkURLs, projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize );
						aParaghProjlinkURLs[ aParaghProjlinkURLs.length ] = paraghProjlinkURLs; //PUSH
					}
				} )
			};
	
			fProjectQueries() {
				let projectContainer = this.ProjContainer;
				let projectContainerWidth = this.ProjContainer.width();
	
				for ( let e2 = 0; e2 < aProjectCount.length; e2++ ) {
	
					twoColumnsImgProjects.fTwoColumnsQueries( projectContainerWidth, aProjectRightColumnPercent[ e2 ], aImagesOrigWidth[ e2 ], aImagesOrigHeight[ e2 ] );
					myStyle.fBasicDivStyle( aProjContainerIds[ e2 ], twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative" );
					let videoPlaceholder = $( "#video-placeholder" );
					myStyle.fBasicDivStyle( videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative" );
	
					/**----------===| Project Paragraph Columns |===----------**/
					twoColumnsParagProjects.fTwoColumnsQueries( projectContainerWidth, aParagraphRightColumnPercent[ e2 ], 0, 0 );
					myStyle.fBasicDivStyle( aProjParagDivIds[ e2 ], "auto", projectContainerWidth );
					myStyle.fBasicDivStyle( aParagLeftColDivIds[ e2 ], arbitraryNum, twoColumnsParagProjects.LeftColumn );
					myStyle.fBasicDivStyle( aParagRightColDivIds[ e2 ], "auto", twoColumnsParagProjects.RightColumn );
	
					headerText.fTextQueries( projectContainer, aParaghProjTitleIds[ e2 ], projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize );
					headerText.fTextQueries( projectContainer, aParaghProjSubTitleIds[ e2 ], projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize );
					headerText.fTextQueries( projectContainer, aParaghProjlinkURLs[ e2 ], projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize );
				}
			}
		}
	
		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.CreateProject = CreateProject;
	
	
	}() );
	//);


/***/ },
/* 14 */
/***/ function(module, exports) {

	/***********************************************
	 * Project: GonzalesDesign 2016
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2016 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Create Timer
	 ***********************************************/
	(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
	  "use strict";
	
	  console.log("Module: CreateTimer");
	
	  /**-----------=====| TweenMax Reference Variables |=====-----------**/
	  /** Description:
	   ** Animation engine using GSAP TweenMax
	   ********************************************************************/
	  let tMx = TweenMax;
	  let easeSine = Sine.easeOut;
	  let power3 = Power3.easeOut;
	  let power4 = Power4.easeOut;
	  let back = Back.easeOut.config(1);
	  let elastic = Elastic.easeOut;
	  let circular = Circ.easeOut;
	  let expo = Expo.easeOut;
	  let sloMo = SlowMo.ease.config(0.7, 0.7, false)
	  let animTym = 1;
	  let animTymSlow = 2;
	  let animTymFast = .25;
	
	  /**-----------=====| SCROLL TIMER |=====-----------------------**/
	  /** Description: Functions for a scroller with a timer.
	   ** When scrolled, execute a function. It also fires the timer
	      for a given time and during that time the scroller is null.
	  *****************************************************************/
	  let fScrollControl = () => {
	    let scrollAmount = $(window).scrollTop();
	    console.log("scrollAmountXX: ", scrollAmount);
	  }
	
	
	  let fTimer = (funct2Execute, segundo) => {
	    var ix = 0;
	    var fAddEvntListnr = function() {
	      tMx.ticker.addEventListener("tick", fTimer);
	      //fScrollControl();
	      //funct2Execute;
	
	      function fTimer() {
	          console.log("fTimer use here.");
	        /**-----===( Load Media Queries )===-----**/
	        //fOnWindowResize();
	        //$(window).on('resize', fOnWindowResize);
	        //fScrollControl();
	        funct2Execute;
	        ix++;
	        console.log("ix: ", ix);
	        if (ix >= segundo) {
	          fRemoveEvntListnr(fTimer);
	          console.log("fRemoveEvntListnr");
	        }
	      }
	    };
	    var fRemoveEvntListnr = function(myFunct) {
	      tMx.ticker.removeEventListener("tick", myFunct);
	    };
	
	    fAddEvntListnr();
	  }
	
	  /**-----------=====| MODULE EXPORTS |=====-----------**/
	  module.exports.fTimer = fTimer;
	  /**--------------------------------------------------**/
	
	}());
	// ----**/
	//
	// }());


/***/ }
/******/ ]);
//# sourceMappingURL=../bundle.map