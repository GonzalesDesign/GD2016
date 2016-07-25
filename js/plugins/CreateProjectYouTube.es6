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
	const createBasics = require( './createBasics.es6' );
	const createDiv = new createBasics.CreateBasicElement();
	const imageBasicDiv = new createBasics.CreateBasicElement();
	//let createStyle = new createBasics.fBasicDivStyle();
	const tagElement = new createBasics.CreateElementAny();

	const youTubeVideo = new createBasics.CreateElementVideo();

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
					headerText.fTextQueries( projectContainerWidth, paraghProjTitleIds, projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize );
					aParaghProjTitleIds[ aParaghProjTitleIds.length ] = paraghProjTitleIds; //PUSH

					/**----------===| CREATE PROJECT SUB-TITLES |===----------**/
					textDiv.fCreateTextDiv( proj.title + "_ProjSubTitle", jx, "projSubTitleClass", paragRightColDivIds, proj.subTitle );
					let paraghProjSubTitleIds = $( "#" + proj.title + "_ProjSubTitle" + jx );
					headerText.fTextQueries( projectContainerWidth, paraghProjSubTitleIds, projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize );
					aParaghProjSubTitleIds[ aParaghProjSubTitleIds.length ] = paraghProjSubTitleIds; //PUSH

					/**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/
					textDiv.fCreateTextDiv( proj.title + "_ProjDescription", jx, "projDescriptionClass", paragRightColDivIds, proj.projDescription );
					let paraghProjlinkURLs = $( "#" + proj.title + "_ProjDescription" + jx );
					headerText.fTextQueries( projectContainerWidth, paraghProjlinkURLs, projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize );
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

				headerText.fTextQueries( projectContainerWidth, aParaghProjTitleIds[ e2 ], projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize );
				headerText.fTextQueries( projectContainerWidth, aParaghProjSubTitleIds[ e2 ], projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize );
				headerText.fTextQueries( projectContainerWidth, aParaghProjlinkURLs[ e2 ], projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize );
			}
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.CreateProject = CreateProject;


}() );
//);
