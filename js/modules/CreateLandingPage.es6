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
	const createBasics = require( './createBasics.es6' );
	//const imageBasicDiv = new createBasics.CreateBasicElement();
	const imageBasicDiv = new createBasics.CreateBasicElement();
	//let createStyle = new createBasics.myStyle.fBasicDivStyle();
	const tagElement = new createBasics.CreateElementAny();
	const createButton = new createBasics.CreateElementButton();

	const createRandNum = new createBasics.CreateRandomNumber();
	// createRandNum.fRandomNumber(5);
	// console.log("createRandNum.RandNum: ", createRandNum.RandNum);

	/**----------===| MODULE: CREATE STYLES |===----------**/
	const myStyle = require( './createStyles.es6' );

	/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
	const createTextContent = require( './CreateTextContent.es6' );
	let textDiv = new createTextContent.CreateTextContent();
	const sectionHeaderText = new createTextContent.CreateTextContent();

	/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
	const openWindow = require( './openWindow.es6' );
	//let textDiv = new openWindow.CreateTextContent();

	/**----------=====| anim |=====----------**/
	const anim = require( './animationFunctions' );

	/**----------=====| CreateColor |=====----------**/
	const convertHex = require( './CreateColor.es6' );
	let hex2RGBA = new convertHex.CreateColor();


	/**----------===| MODULE: TWO COLUMNS |===----------**/
	const twoKolumns = require( './twoColumns' );
	let twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();

	let logoText = new twoKolumns.TextQueriesClass();
	let headerText = new twoKolumns.TextQueriesClass();
	let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

	let twoKolumnsGeneric = new twoKolumns.TwoColumnsQueriesClass();

	/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
	const nextPreviousNav = require( './nextPreviousArrows' );

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
