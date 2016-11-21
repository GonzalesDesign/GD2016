/*-**********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Create Color
 **********************************************-*/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	console.log( "Module: CreateColor" );

    /**----------=====| FUNCTION FOR CONVERTING HEX COLOR TO RGBA |=====----------**/
    /** http://jsfiddle.net/subodhghulaxe/t568u/ **/
    //function fConvertHex(hex, opacity) {
    class CreateColor {
        constructor( ) {
        }

        fConvertHex(hex, opacity) {
            hex = hex.replace( '#', '' );
    		let r = parseInt( hex.substring( 0, 2 ), 16 );
    		let g = parseInt( hex.substring( 2, 4 ), 16 );
    		let b = parseInt( hex.substring( 4, 6 ), 16 );

    		let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    		return result;
        }
    }


/**-----------=====| EXPORTS |=====-----------**/
//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
module.exports.CreateColor = CreateColor;


}() );
