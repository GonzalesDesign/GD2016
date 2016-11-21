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
	const createBasics = require( './createBasics.es6' );
	const createDiv = new createBasics.CreateBasicElement();

	/**----------===| MODULE: CREATE STYLES |===----------**/
	const myStyle = require( './createStyles.es6' );

	/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
	const createTextContent = require( './CreateTextContent.es6' );
	let textDiv = new createTextContent.CreateTextContent();
	const sectionHeaderText = new createTextContent.CreateTextContent();

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
