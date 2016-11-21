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
	const createBasics = require( './createBasics.es6' );
	const createDiv = new createBasics.CreateBasicElement();
	const imageBasicDiv = new createBasics.CreateBasicElement();
	//let createStyle = new createBasics.fBasicDivStyle();
	const tagElement = new createBasics.CreateElementAny();

	/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
	const createProject = require( './CreateProject.es6' );

	/**----------===| MODULE: CREATE STYLES |===----------**/
	const myStyle = require( './createStyles.es6' );

	/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
	const createTextContent = require( './CreateTextContent.es6' );
	let textDiv = new createTextContent.CreateTextContent();
	const menuNavText = new createTextContent.CreateTextContent();

	/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
	const openWindow = require( './openWindow.es6' );
	//let textDiv = new openWindow.CreateTextContent();

	/**----------=====| anim |=====----------**/
	const anim = require( './animationFunctions' );

	/**----------===| MODULE: TWO COLUMNS |===----------**/
	const twoKolumns = require( './twoColumns' );
	let twoColumnsMenuNav = new twoKolumns.TwoColumnsQueriesClass();

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const introProjX = require( './CreateLandingPage.es6' );

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
