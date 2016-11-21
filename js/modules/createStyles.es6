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
