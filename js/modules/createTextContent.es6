/*-**********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Create Text Content
 **********************************************-*/

( function() { /*IIFE:Immediately-Invoked Function Expression*/
	"use strict";

	console.log( "Module: createTextContent" );

	/**----------=====| CreateElementDiv Class |=====----------**/
	/** Description:
	 ** Parent class template for creating basic generic divs.
	 ** To minimize the creation of multiple methods that are similar in functionalities.
	 **--------------------------------------------------------**/
	class CreateElementDiv {
		constructor() {}

		/** Generic method for creating div element **/
		fCreateDiv( title, counter, appendedTo ) {
			this.divName = document.createElement( "div" );
			this.divName.id = title + counter; //set id // title + "Id_" + counter;
			this.divName.className = title + "Class"; //set className
			$( this.divName ).appendTo( appendedTo );
		}
	}

	/**----------=====| TextContent Class |=====----------**/
	/** Description:
	 ** TextContent class template is an extension
	 ** of the CreateElementDiv class.
	 ** For creating innerHTML divs. ************/
	/**------------**/
	class CreateTextContent extends CreateElementDiv {
		constructor() {
			super();
		}

		fCreateSimpleTextDiv( name, counter, appendedTo, textString ) {
			super.fCreateDiv( name, counter, appendedTo );
			this.divName.innerHTML = textString;
		}
		fCreateTextDiv( name, counter, nameClass, appendedTo, textString, titleString ) {
			super.fCreateDiv( name, counter, appendedTo );
			//this.nameName = document.createElement("div");
			//this.nameName.id = nameId + counter; //set id // name + "Id_" + counter;
			this.divName.className = nameClass; //set className
			//let nameNameId     = $ ("#" + name + "Id_" + counter); //get id
			//$(this.nameName).appendTo(appendedTo);
			this.divName.innerHTML = textString;
			if ( titleString ) {
				this.divName.title = titleString;
			}
		}
	}

	/**-----------=====| EXPORTS |=====-----------**/
	module.exports.CreateTextContent = CreateTextContent;

}() );
