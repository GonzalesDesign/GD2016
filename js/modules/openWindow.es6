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
