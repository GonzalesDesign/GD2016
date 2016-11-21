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

	/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
	const openWindow = require( './openWindow.es6' );
	//let textDiv = new openWindow.CreateTextContent();

	/**----------=====| anim |=====----------**/
	const anim = require( './animationFunctions' );

	/**----------===| MODULE: TWO COLUMNS |===----------**/
	const twoKolumns = require( './twoColumns' );
	let logoText = new twoKolumns.TextQueriesClass();
	let headerText = new twoKolumns.TextQueriesClass();
	let twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
	let twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

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
