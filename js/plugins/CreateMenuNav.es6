/***********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Project Menu Navigation Template
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	console.log( "Module: CreateHeader" );

	/**----------===| MODULE: CREATE BASICS |===----------**/
	const createBasics = require( './createBasics.es6' );
	const createDiv = new createBasics.CreateBasicElement();
	const imageBasicDiv = new createBasics.CreateBasicElement();
	//let createStyle = new createBasics.fBasicDivStyle();
	const tagElement = new createBasics.CreateElementAny();

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
	let twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();
	let logoText = new twoKolumns.TextQueriesClass();
	let headerText = new twoKolumns.TextQueriesClass();
	let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

	/**----------===| MODULE: LANDING PAGE |===----------**/
	const introProjX = require( './CreateLandingPage.es6' );

	/**-----------=====| DOM CACHING |=====-----------**/
	//let mainContainer = $( ".mainContainer" );

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
	const fGoTo = ( link ) => {
		location.href = "#" + link;
	}

	const fHideMenu = (leftKolumn, elem) => {
		if(leftKolumn === 0){
			elem.css({
				"display": "none"
			})
		} else {
			elem.css({
				"display": "inline-block"
			})
		}
	};

	const fScrollHideShow = (scrlAmount, elem, leftKolumn) => {
		if(scrlAmount >= inWindowHeight && leftKolumn > 0){
			elem.css({
				"display": "inline-block"
			})
		} else {
			elem.css({
				"display": "none"
			})
		}
	};


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
					let scrollAmount = $(window).scrollTop();
					console.log("scrollAmount: ", scrollAmount);

					aProjectCount[ aProjectCount.length ] = proj; //PUSH

					/**----------===| INVOKE TWO COLUMNS |===----------**/
					twoColumnsHeaderSection.fTwoColumnsQueries( projectContainerWidth, proj.rightColumnPercent, arbitraryNum, arbitraryNum );
					aProjectRightColumnPercent[ aProjectRightColumnPercent.length ] = proj.rightColumnPercent;

					// console.log("proj.rightColumnPercent: ", proj.rightColumnPercent);
					// console.log("twoColumnsHeaderSection.LeftColumn: ", twoColumnsHeaderSection.LeftColumn);

					/**----------===| CREATE MENU CONTAINER |===------------------------------------------------------------**/
					createDiv.fCreateBasicElement( proj.title + "menuNavContainer", jx, "menuNavContainerClass", projectContainer );
					//let menuNavContainerId = document.getElementById( "menuNavContainer" + "Id_" + jx );
					let menuNavContainerId = $( "#" + proj.title + "menuNavContainer" + jx );
					aMenuNav[ aMenuNav.length ] = menuNavContainerId;

					// if(twoColumnsHeaderSection.LeftColumn === 0){
					// 	menuNavContainerId.css({
					// 		"display": "none"
					// 	})
					// }

					fHideMenu(twoColumnsHeaderSection.LeftColumn, menuNavContainerId);
					fScrollHideShow(scrollAmount, menuNavContainerId, twoColumnsHeaderSection.LeftColumn);

					/**----------===| CREATE MENU LEFT COLUMN |===------------------------------------------------------------**/
					createDiv.fCreateBasicElement( proj.title + "_Left", j1, "menuNavLeftColmnClass", menuNavContainerId );
					let sectLeftIds = $( "#" + proj.title + "_Left" + j1 );
					myStyle.fBasicDivStyle( sectLeftIds, "auto", twoColumnsHeaderSection.LeftColumn, "relative" );
					aMenuNavLeftColmn[ aMenuNavLeftColmn.length ] = sectLeftIds;

					/**----------===| CREATE MENU RIGHT COLUMN |===-------------------------------------------------------------**/
					createDiv.fCreateBasicElement( proj.title + "_Right", j1, "menuNavRightColmnClass", menuNavContainerId );
					let sectRightIds = $( "#" + proj.title + "_Right" + j1 );
					myStyle.fBasicDivStyle( sectRightIds, "auto", twoColumnsHeaderSection.RightColumn, "relative" );
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
						$( menuId ).click( () => {
							fGoTo( menus.link );
						} );
					}
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
				anim.fAnimateHeightWidth( aMenuNavLeftColmn[ e1 ], "auto", twoColumnsHeaderSection.LeftColumn, animTymSlow );
				anim.fAnimateHeightWidth( aMenuNav[ e1 ], "auto", projectContainerWidth, animTymSlow );
				anim.fAnimateHeightWidth( aMenuNavRightColmn[ e1 ], "auto", "auto", animTymSlow ); //twoColumnsHeaderSection.RightColumn
				fHideMenu(twoColumnsHeaderSection.LeftColumn, aMenuNav[e1]);
			}
		 }

		 fProjectScrollTo(){
			 let scrollAmount = $(window).scrollTop();
			 //console.log("scrollAmount: ", scrollAmount);
			 let projectContainer = this.ProjContainer;
 			let projectContainerWidth = this.ProjContainer.width();
			//  let scrollto = window.scrollTo();
			//  console.log("scrollto: ", scrollto);
			for ( let e1 = 0; e1 < aProjectCount.length; e1++ ) {
				twoColumnsHeaderSection.fTwoColumnsQueries( projectContainerWidth, aProjectRightColumnPercent[ e1 ], arbitraryNum, arbitraryNum );
				fScrollHideShow(scrollAmount, aMenuNav[e1], twoColumnsHeaderSection.LeftColumn);
			}
		 }
	}

	/**-----------=====| EXPORTS |=====-----------**/
	//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
	module.exports.CreateMenuNav = CreateMenuNav;


}() );
