/***********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Project OwnPhones
 ***********************************************/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	console.log( "projOwnPhones" );

	/**----------===| CLASS: CREATE ELEMENTS |===----------**/
	// const createElem = require( './CreateElementClass.es6' );
	// let createDiv = new createElem.CreateElementAny();

	/**----------===| MODULE: CREATE BASICS |===----------**/
	const createBasics = require( './plugins/createBasics.es6' );
	const createDiv = new createBasics.CreateBasicElement();
	const imageBasicDiv = new createBasics.CreateBasicElement();
	//let createStyle = new createBasics.fBasicDivStyle();
	const tagElement = new createBasics.CreateElementAny();

	/**----------===| MODULE: CREATE STYLES |===----------**/
	const myStyle = require( './plugins/createStyles.es6' );

	/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
	const createTextContent = require( './plugins/CreateTextContent.es6' );
	let textDiv = new createTextContent.CreateTextContent();

	/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
	const openWindow = require( './plugins/openWindow.es6' );
	//let textDiv = new openWindow.CreateTextContent();

	/**----------===| MODULE: TWO COLUMNS |===----------**/
	const twoKolumns = require( './twoColumns' );
	let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
	let logoText = new twoKolumns.TextQueriesClass();
	let headerText = new twoKolumns.TextQueriesClass();
	let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();

	/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
	const nextPreviousNav = require( './nextPreviousArrows' );

	const nxtPrv = new nextPreviousNav.NextPrevNavClass();

	/**-----------=====| DOM CACHING |=====-----------**/
	//let mainContainer = $( ".mainContainer" );


	class CreateProject {
		//fProjectAjax( "projectContainer" );
		//fProjectAjax( projContainer, projectJSON );
		constructor( projContainer, projectJSON ) {
			this.ProjContainer = projContainer;
			this.ProjJSON = projectJSON;
		}


		//const fProjectAjax = ( projContainer, projectJSON ) => {
		fProjectAjax() {
			let projectContainer = this.ProjContainer; // = $( "." + projContainer );
			//let projectContainer = $( ".projectContainer" );
			let projectContainerWidth = this.ProjContainer.width();

			/**-----------=====| MISC VARS |=====-----------**/
			const additionalHeight = 60;
			const arbitraryNum = 10;
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


			let promise = $.get( "./js/json/" + this.ProjJSON );
			promise.then( function( data ) {
				let jx = 0;
				let j3 = 0;
				for ( let proj of data.ProjectData ) {

					twoColumnsImgProjects.fTwoColumnsQueries( projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight );

					/**----------===| CREATE PROJECT IMAGE CONTAINER: LEFT COLUMN |===----------**/
					createDiv.fCreateBasicElement( proj.title + "_Left", jx, "projectLeftColmnClass", projectContainer );
					let projContainrLeftColDivIds = $( "#" + proj.title + "_Left" + jx );
					myStyle.fBasicDivStyle( projContainrLeftColDivIds, "50px", twoColumnsImgProjects.LeftColumn );

					/**----------===| CREATE PROJECT IMAGE CONTAINER: RIGHT COLUMN |===----------**/
					createDiv.fCreateBasicElement( proj.title + "_ProjRight", jx, "projectRightColmnClass", projectContainer );
					let projRightColDivIds = $( "#" + proj.title + "_ProjRight" + jx );
					myStyle.fBasicDivStyle( projRightColDivIds, twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn, "relative" );

					/**----------===| CREATE FLUID-CONTAINER INSIDE RIGHT COLUMN |===----------**/
					createDiv.fCreateBasicElement( proj.title + "_FluidContainer_", jx, "fluidContainerClass", projRightColDivIds );
					const fluidContainerIds = $( "#" + proj.title + "_FluidContainer_" + jx );
					console.log( "fluidContainerIds: ", fluidContainerIds.selector );
					/**----------===| FLUID-CONTAINER WIDTH |===----------**/
					const fluidContainerWidth = twoColumnsImgProjects.RightColumn * ( proj.projectImages.length + 1 );
					/**----------===| FLUID-CONTAINER HEIGHT |===----------**/
					const fluidContainerHeight = twoColumnsImgProjects.NewHeight + additionalHeight;
					/**----------===| FLUID-CONTAINER: BASIC CSS |===----------**/
					myStyle.fBasicDivStyle( fluidContainerIds, fluidContainerHeight, fluidContainerWidth, "relative" );

					/**----------===| CAROUSEL CONTROL: LEFT |===----------**/
					tagElement.fCreateTag( "a", "carousel-control left", proj.title + "leftCarousel", jx, projRightColDivIds );
					//   let carouselControl = $(".carousel-control");
					//   carouselControl.css({
					//     "height": imageDivClass.height()
					//   })

					//const leftShaderIds = $( "#leftCarousel" + jx );
					const leftShaderIds = $( "#" + proj.title + "leftCarousel" + jx ); //GET IDS

					/**----------===| CREATE GLYPHICON LEFT ARROW |===----------**/
					tagElement.fCreateTag( "i", "glyphicon glyphicon-menu-left", "leftArrow", jx, leftShaderIds ); //glyphicon glyphicon-menu-left glyphicon-chevron-left
					/**----------===| CAROUSEL CONTROL: RIGHT |===----------**/
					tagElement.fCreateTag( "a", "carousel-control right", proj.title + "rightCarousel", jx, projRightColDivIds );
					// const rightShaderIds = $( "#rightCarouselId_" + jx ); //GET IDS
					// const fluidContainerIds = $( "#" + proj.title + "_FluidContainer_" + jx );
					const rightShaderIds = $( "#" + proj.title + "rightCarousel" + jx ); //GET IDS
					/**----------===| KEEPING THE CAROUSELCONTROL HEIGHT SAME AS THE IMAGE HEIGHT |===----------**/
					myStyle.fBasicDivStyle( leftShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute" );
					myStyle.fBasicDivStyle( rightShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute" );

					/**----------===| CREATE NEW NEXT PREVIOUS CLASS INSTANCES |===----------**/
					//const nxtPrv = new nextPreviousNav.NextPrevNavClass();
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

					/**----------===| CREATE PARAGRAPH CONTAINER |===----------**/
					createDiv.fCreateBasicElement( proj.title + "_Paragraph", jx, "paragraphContainerClass", projectContainer );
					/**----------===| Project Paragraph Container: Ids |===----------**/
					let projParagDivIds = $( "#" + proj.title + "_Paragraph" + jx );
					/**----------===| Project Paragraph Container: Basic CSS |===----------**/
					myStyle.fBasicDivStyle( projParagDivIds, "auto", projectContainerWidth, "relative" );

					/**----------===| CREATE PARAGRAPH LEFT COLUMNS |===----------**/
					createDiv.fCreateBasicElement( proj.title + "_ParagLeftColmn", jx, "paragraphLeftColumnClass", projParagDivIds );
					/**----------===| Project Paragraph Left Column: Ids |===----------**/
					let paragLeftColDivIds = $( "#" + proj.title + "_ParagLeftColmn" + jx );

					/**----------===| Project Paragraph Left Column: Basic CSS |===----------**/
					myStyle.fBasicDivStyle( paragLeftColDivIds, arbitraryNum, twoColumnsParagProjects.LeftColumn, "relative" );

					/**----------===| CREATE PARAGRAPH RIGHT COLUMNS |===----------**/
					createDiv.fCreateBasicElement( proj.title + "_ParagRightColmn", jx, "paragraphRightColumnClass", projParagDivIds );
					/**----------===| Project Paragraph Right Column: Ids |===----------**/
					let paragRightColDivIds = $( "#" + proj.title + "_ParagRightColmn" + jx );
					/**----------===| Project Paragraph Right Column: Basic CSS |===----------**/
					myStyle.fBasicDivStyle( paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn, "relative" );

					/**----------===| CREATE PROJECT TITLES |===----------**/
					textDiv.fCreateTextDiv( proj.title + "_ProjTitle", jx, "projTitleClass", paragRightColDivIds, proj.title );
					let paraghProjTitleIds = $( "#" + proj.title + "_ProjTitle" + jx );
					headerText.fTextQueries( projectContainerWidth, paraghProjTitleIds, projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize );

					/**----------===| CREATE PROJECT SUB-TITLES |===----------**/
					textDiv.fCreateTextDiv( proj.title + "_ProjSubTitle", jx, "projSubTitleClass", paragRightColDivIds, proj.subTitle );
					let paraghProjSubTitleIds = $( "#" + proj.title + "_ProjSubTitle" + jx );
					headerText.fTextQueries( projectContainerWidth, paraghProjSubTitleIds, projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize );

					/**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/
					textDiv.fCreateTextDiv( proj.title + "_ProjDescription", jx, "projDescriptionClass", paragRightColDivIds, proj.projDescription );
					let paraghProjlinkURLs = $( "#" + proj.title + "_ProjDescription" + jx );
					headerText.fTextQueries( projectContainerWidth, paraghProjlinkURLs, projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize );

					//console.log("projectContainerWidth:3 ", projectContainerWidth);
					let projTitleClass = $( ".projTitleClass" );

					for ( let imgs of proj.projectImages ) {
						j3++;
						//glyphiconXpand = $( ".glyphicon-expand" );

						/**----------===| RIGHT COLUMN PERCENTAGE |===----------**/
						twoColumnsImages.fTwoColumnsQueries( projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight );
						/**----------===| CREATE IMAGE DIV INSIDE FLUID-CONTAINER |===----------**/
						imageBasicDiv.fCreateBasicElement( proj.title + "_Image", j3, "imageDivClass", fluidContainerIds );
						let imageIds = $( "#" + proj.title + "_Image" + j3 );
						/**----------===| IMAGE CREATION |===----------**/
						let myImage = new Image();
						let imagesPath = "./images/" + proj.title + "/"; //FILEPATH
						myImage.src = imagesPath + imgs.imgName; //CONCAT

						/**----------===| IMAGE DIV: CSS |===----------**/
						/*        Populating the div with image        *
						 **--------------------------------------------**/
						let columnHeight = twoColumnsImages.NewHeight;
						let columnWidth = twoColumnsImages.RightColumn;
						myStyle.fBasicImageStyle( imageIds, columnHeight, columnWidth, myImage.src ); //

						/**----------===| IMAGE DESCRIPTIONS |===----------**/
						textDiv.fCreateTextDiv( "imgDescription_", j3, "imgDescription_Class", imageIds, imgs.imgDescription, imgs.hoverTitle );

						/*** TEST: Put this outside ajax and into a class **/
						let imageDescriptIds = $( "#imgDescription_" + j3 ); //id = imgDescription_j3

						imageDescriptIds.css( {
							"margin-top": twoColumnsImgProjects.NewHeight + "px"
						} );
						headerText.fTextQueries( projectContainerWidth, imageDescriptIds, imgDescSmlFontSize, imgDescMidFontSize, imgDescLrgFontSize );

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
	}
	/**-----------=====| EXPORTS |=====-----------**/
	//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
	module.exports.CreateProject = CreateProject;


}() );
//);
;
