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

	// const projTitleSmlFontSize = "1.6em";
	// const projTitleMidFontSize = "1.8em";
	// const projTitleLrgFontSize = "2em";
	//
	// const projSubTitleSmlFontSize = "1em";
	// const projSubTitleMidFontSize = "1em";
	// const projSubTitleLrgFontSize = "1.2em";
	//
	// const projDescSmlFontSize = "1em";
	// const projDescMidFontSize = "1em";
	// const projDescLrgFontSize = "1.2em";
	//
	// const imgDescSmlFontSize = "1em";
	// const imgDescMidFontSize = "1em";
	// const imgDescLrgFontSize = "1.2em";

	let jx = 0;
	let ji = 0;
	let i3 = 0;
	let j1 = 0;

	//let projectContainer;
	//let projectContainerWidth;
	//let projContainrLeftColDivIds;
	//let projRightColDivIds;
	//let fluidContainerIds;

	/**----------===| ARRAYS |===----------**/
	let aProjectCount = [];
	let aProjectRightColumnPercent = [];
	let aSectionHeaders = [];
	let aSectionHeadrLeftColmn = [];
	let aSectionHeadrRightColmn = [];
	let aSectionHeadrTitles = [];

	// let aImagesOrigWidth = [];
	// let aImagesOrigHeight = [];
	// let aImageDescriptIds = [];
	// let aProjContainrLeftColDivIds = [];
	// let aProjRightColDivIds = [];
	// let aProjImagesLength = [];
	//
	// let aFluidContainerIds = [];
	// let aFluidContainerWidth = [];
	// let aFluidContainerHeight = [];
	//
	// let aLeftShaderIds = [];
	// let aRightShaderIds = [];
	// let aNxtPrv = [];
	//
	// let aProjParagDivIds = [];
	// let aParagLeftColDivIds = [];
	// let aParagRightColDivIds = [];
	// let aParaghProjTitleIds = [];
	// let aParaghProjSubTitleIds = [];
	// let aParaghProjlinkURLs = [];
	// let aProjContainerIds = [];
	//
	// let aParagraphContainer = []; //aProjParagDivIds
	// let aProjParagLeftDivIds = []; //aParagLeftColDivIds
	// let aProjParagRightDivIds = []; //aParagRightColDivIds
	//
	// let aParagraphRightColumnPercent = [];
	// let aParagraphLeftColumnWidth = [];
	// let aParagraphRightColumnWidth = [];
	//
	// //let aParaghProjTitleIds = [];
	// //let aParaghProjSubTitleIds = [];
	// let aParagraphProjDescription = []; //aParaghProjlinkURLs
	//
	// let aImagesRightColumnPercent = [];
	// let aImagesCount = [];
	// let aImageIds = [];
	// let aImages = [];
	// let aImagesWidth = [];
	// let aImagesHeight = [];
	// //let aImageDescriptIds = [];

	let codingThisSiteId;
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

			let promise = $.get( "./js/json/" + this.ProjJSON );
			promise.then( function( data ) {
				for ( let introData of data.GDSiteIntro ) {
					//console.log("introData: ", introData);

					/**----------===| CREATE CODING CONTAINER DIV INSIDE projectContainer |===----------**/
					imageBasicDiv.fCreateBasicElement( introData.title + "_CodingContainer", jx, "codingContainer", projectContainer );
					let codingContainerId = $( "#" + introData.title + "_CodingContainer" + jx ); //GET ID
					//console.log("codingContainerId: ", codingContainerId);

					/**----------===| CREATE CODING TEXT DIV INSIDE CODINGCONTAINER |===----------**/
					imageBasicDiv.fCreateBasicElement( introData.title + "_CodingThisSite", jx, "codingThisSite", codingContainerId );
					codingThisSiteId = $( "#" + introData.title + "_CodingThisSite" + jx ); //GET ID
					const codingThisSite = $( ".codingThisSite" ); //GET CLASSNAME
					let codingThisSiteHeight = codingThisSiteId.height();
					myStyle.fBasicDivStyle( codingThisSiteId, "auto", projectContainerWidth, "absolute" ); //CSS
					let centerOnScreenY = ( inWindowHeight / 2 ) - ( codingThisSiteHeight / 2 );
					codingThisSiteId.css( {
							"margin-top": centerOnScreenY
						} )

					/**----------===| CREATE CODING PARAGRAPHS |===----------**/
					textDiv.fCreateTextDiv( "codingTitle", jx, "codingTitleClass", codingThisSiteId, introData.codingTitle );
					textDiv.fCreateTextDiv( "codingDescription", jx, "codingDescriptionClass", codingThisSiteId, introData.codingThisSite );

					/**----------===| CREATE LOGO CONTAINER DIV INSIDE projectContainer DIV |===----------**/
					imageBasicDiv.fCreateBasicElement( introData.title + "_LogoContainer", jx, "logoContainer", projectContainer );
					logoContainerDivId = $( "#" + introData.title + "_LogoContainer" + jx ); //GET ID
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
					logoText.fTextQueries( projectContainerWidth, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize );

					/**----------===| CREATE INTRO SUB-TITLES |===----------**/
					textDiv.fCreateTextDiv( introData.title + "_LogoSubTitle", jx, "logoSubTitleClass", logoRightColDivId, introData.introSubTitle ); //Passionate about Arts, Designs & Coding
					logoSubTitleId = $( "#" + introData.title + "_LogoSubTitle" + jx );
					logoText.fTextQueries( projectContainerWidth, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize );

					/**----------===| CREATE CALLOUT |===----------**/
					textDiv.fCreateTextDiv( introData.title + "_Callout", jx, "calloutClass", logoRightColDivId, introData.callout ); //Portfolio: Scroll Down
					introCalloutId = $( "#" + introData.title + "_Callout" + jx );
					logoText.fTextQueries( projectContainerWidth, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize );
					//console.log("introData.callout: ", introData.callout);

					/**----------===| TOGGLE "CODE THIS SITE" DESCRIPTION |===----------**/

					/**----------===| CREATE BUTTON ELEMENT |===----------**/
					createButton.fCreateBtn( "btn btn-link codingBtn", "_Btn", jx, logoRightColDivId, "coding this site" ); //introFluidContainer
					toggleBtn = $( ".codingBtn" ); //get clasname
					const closeCoding = $( ".closeCoding" ); //get clasname
					logoText.fTextQueries( projectContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize );
					let toggleBtnId = $( "#" + introData.title + "_Btn" + jx );
					logoText.fTextQueries( projectContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize );

					/**----------===| LOGO CONTAINER: BASIC CSS |===----------**/

					rightColumnHeight = logoRightColDivId.height(); // + 30;

					myStyle.fBasicDivStyle( logoContainerDivId, "auto", projectContainerWidth );
					logoContainerDivId.css( {
						//"border": "1px solid pink",
						"margin-top": inWindowHeight - ( rightColumnHeight + 40 )
					} )

					createBasics.fToggleBtn( toggleBtn, codingThisSite );
					createBasics.fToggleBtn( closeCoding, codingThisSite );
					createBasics.fRollEvents( toggleBtn, "#949494" );
					createBasics.fRollEvents( closeCoding, "#5780a2" );

					/**----------===| CREATE IMAGE DIV INSIDE INTROFLUIDCONTAINER |===----------**/
					imageBasicDiv.fCreateBasicElement( introData.title + "_IntroImg", jx, "introDivClass", introFluidContainer );
					/**----------===| NEW IMAGE CREATION |===----------**/
					myIntroImage = new Image();
					let imagesPath = "./images/" + introData.title + "/";
					/**-----====={ Load image randomly }=====-----**/
					// let randImg = createBasics.fRandomized(introData.images);
					// //var randImg = introData.images[ Math.floor( introData.images.length * Math.random() ) ];
					// console.log("randImg: ", randImg.imgName);
					// console.log("introData.images: ", introData.images);
					// console.log("introData.images.length: ", introData.images.length);
					randNum = createBasics.fRandomized(introData.images.length);
					//RandomNumerox1 = createBasics.fRandomized(introData.images.length);
					//console.log("randNumX: ", randNum);
					var randImg = introData.images[ randNum ];
					//console.log("randImg: ", randImg);

					module.exports.RandomNumero = randNum;
					// console.log("module.exports.RandomNumero: ", module.exports.RandomNumero);

					// exports.RandomNumero2 = "randNum2";
					// console.log("exports.RandomNumero2: ", exports.RandomNumero2);

					// console.log("createBasics.RandNumero: ", createBasics.RandNumero);
					// console.log("createBasics.TestXport: ", createBasics.TestXport);
					//module.exports.TestFrLandingPage = "TestFrLandingPage";

					myIntroImage.src = imagesPath + randImg.imgName; //introData.images[0].imgName; //randImg;
					//myIntroImageSrc = imagesPath + randImg.imgName; //used for the queries
					aImages[ aImages.length ] = myIntroImage.src; //PUSH
					/**----------===| IMAGE DIV: IDS |===----------**/
					introImageIds = $( "#" + introData.title + "_IntroImg" + jx );
					// console.log( "introImageIds: ", introImageIds );
					// console.log("myIntroImage: ", myIntroImage);
					// console.log("myIntroImage: ", myIntroImage);

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

			// console.log("myIntroImage: ", myIntroImage);
			// console.log("aImages[0]: ", aImages[0]);
			myStyle.fIntroImageStyle( introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src );
			// console.log( "introImageIds: ", introImageIds );
			// console.log( "myIntroImage.src: ", myIntroImage.src );


			/**----------===| CALCULATE LEFT & RIGHT COLUMN WIDTHS |===----------**/
			/** Description:
			    Invoke fTwoColumnsQueries to  calculates Left and Right columns widths based on the percentage passed to the class
			    Usage: twoKolumnsGeneric.LeftColumn, twoKolumnsGeneric.RightColumn... **/
			twoKolumnsGeneric.fTwoColumnsQueries( projectContainerWidth, logoTitleColumnPercent, arbitraryNum, arbitraryNum );

			/**----------===| LOGO CONTAINER |===----------**/
			//fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, "relative");
			anim.fAnimateHeightWidth( logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, animTymSlow );
			//fBasicDivStyle(logoRightColDivId, "auto", twoKolumnsGeneric.RightColumn - 20, "relative");
			myStyle.fBasicDivStyle( logoRightColDivId, "auto", "auto", "relative" );
			anim.fAnimateHeightWidth( logoContainerDivId, "auto", projectContainerWidth, animTymSlow );
			//fBasicIntroStyle(logoContainerDivId, rightColumnHeight + 20, projectContainerWidth);
			logoContainerDivId.css( {
					"margin-top": inWindowHeight - ( rightColumnHeight + 40 ) // - 800 //(400 + (inWindowHeight / 5)) //"100px" //-(inWindowHeight / 4)
				} )

			/**----------===| SCREEN QUERIES |===----------**/
			logoText.fTextQueries( projectContainerWidth, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize );
			logoText.fTextQueries( projectContainerWidth, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize );
			logoText.fTextQueries( projectContainerWidth, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize );
			logoText.fTextQueries( projectContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize );

			/**----------===| CODING CONTAINER |===----------**/
			myStyle.fBasicDivStyle( codingThisSiteId, "auto", projectContainerWidth, "relative" );
		 }

	}

	/**-----------=====| EXPORTS |=====-----------**/
	//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
	// console.log("randNum: ", randNum);
	//module.exports.RandomNumerox1 = RandomNumerox1;
	module.exports.CreateProjectLandingPage = CreateProjectLandingPage;


}() );
