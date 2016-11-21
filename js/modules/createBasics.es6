/*-**********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Create Basics
 **********************************************-*/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	console.log( "Module: createBasics" );

	/**------------=====| CreateBasicElement Class |=====------------**/
	/** Description: For creating basic elements
	 **--------------------------------------------------------------**/
	class CreateBasicElement {
		constructor() {
			this.titleName;
		}

		fCreateBasicElement( titleId, counter, titleClass, appendedTo ) {
			this.titleName = document.createElement( "div" );
			this.titleName.id = titleId + counter; //set id // title + "Id_" + counter;
			this.titleName.className = titleClass; //set className
			//let titleNameId     = $ ("#" + title + "Id_" + counter); //get id
			$( this.titleName ).appendTo( appendedTo );
			//fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
		}
	};

	/**----------=====| CreateElementAny Class |=====----------**/
	/** Description: Class template for creating basic "a" tag.
	 ************************************************************/
	class CreateElementAny {
		constructor() {}

		/** Generic method for creating a tag element **/
		fCreateTag( tagType, className, title, counter, appendedTo ) {
			let divName = document.createElement( tagType );
			divName.id = title + counter; //set id
			divName.className = className; //title + "Class";
			divName.href = "#modalCarousel";
			//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
			$( divName ).appendTo( appendedTo );
		}
	}

	/**----------=====| CreateElementVideo Class |=====-------------------------------**/
	/** Description:Class template for creating div specifically for YouTube video.
	 ***********************************************************************************/
	class CreateElementVideo {
		constructor() {}

		fCreateVideoDiv( videoId, appendedTo ) {
			let divName = document.createElement( "div" );
			divName.id = videoId; //set id
			let divClass = $( "." + videoId + "Class" ); //get class
			let divId = $( "#" + videoId );
			$( divName ).appendTo( appendedTo );
		}
	}
	/**----------=====| CREATE BUTTON ELEMENT CLASS |=====-------------**/
	/** Description: Class template for creating basic "BUTTON" tag.
	 ********************************************************************/
	class CreateElementButton {
		constructor() {}

		/** Generic method for creating a tag element **/
		fCreateBtn( className, idName, counter, appendedTo, label ) {
			let divName = document.createElement( "BUTTON" );
			divName.id = idName + "Id_" + counter; //set id
			divName.className = className; //title + "Class";
			//divName.href = "#modalCarousel";
			//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
			$( divName ).appendTo( appendedTo );
			let buttonLabel = document.createTextNode( label );
			$( buttonLabel ).appendTo( divName );
		}
	}
	/**----------=====| FUNCTION TO OPEN|CLOSE TOGGLE : CODING THIS SITE |=====----------**/
	let fToggleBtn = ( btn, targetElem ) => {
		btn.click( () => {
			targetElem.slideToggle( "slow" );
		} );
	}

	/**----------=====| FUNCTION FOR ROLLOVER AND ROLLOUT |=====----------**/
	function fRollEvents( elem, origColor ) {
		//	console.log( "elem: ", elem );
		elem.css( {
			"color": origColor
		} )
		elem.mouseover( () => {
			elem.css( {
				"color": "Orange",
				"cursor": "pointer",
				"text-decoration": "none"
			} )
		} )
		elem.mouseout( () => {
			elem.css( {
				"color": origColor,
				"text-decoration": "none"
			} )
		} )
	}

	let fRandomized = (elemLength) => {
		return +(Math.floor( elemLength * Math.random() ))
	}

	let RandNumero

	class CreateRandomNumber {
		constructor() {}

		fRandomNumber( elemLength ) {
			this.RandNum = Math.floor( elemLength * Math.random() );
			RandNumero = this.RandNum;
			module.exports.TestXport = "TestExports";
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.CreateBasicElement = CreateBasicElement;
	module.exports.CreateElementAny = CreateElementAny;
	module.exports.CreateElementVideo = CreateElementVideo;
	module.exports.CreateElementButton = CreateElementButton;
	module.exports.fToggleBtn = fToggleBtn;
	module.exports.fRollEvents = fRollEvents;

	module.exports.fRandomized = fRandomized;
	module.exports.CreateRandomNumber = CreateRandomNumber;
	module.exports.RandNumero = RandNumero;

}() );
