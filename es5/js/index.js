"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;
		/******/
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Index
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: index 072416");

		/**----------===| ******************************************************************************************** |===----------**/

		/**----------===||||| MODULE: MENU NAVIGATIONS |||||===----------**/
		var menuProj = __webpack_require__(11);
		var introContainer = $(".introContainer");
		var menuContainer = $(".menuContainer");
		var menuNav = new menuProj.CreateMenuNav(introContainer, "projMenuNav.json"); //gdContainer  introContainer menuContainer
		menuNav.fProjectAjax();

		/**----------===||||| MODULE: LANDING PAGE |||||===----------**/
		var introProj = __webpack_require__(7);
		//let introContainer = $( ".introContainer" );
		var landingPage = new introProj.CreateProjectLandingPage(introContainer, "projLandingPage.json");
		landingPage.fProjectAjax();
		//landingPage.fProjectQueries();

		/**----------===||||| MODULE: HEADER BANNER |||||===----------**/
		var headerProj = __webpack_require__(10);

		/**----------===| INVOKE: HEADER BANNER WEB GRAPHICS DESIGN |===----------**/
		var sectionWGDHeaderClass = $(".sectionWGDHeaderClass");
		var projHeader = new headerProj.CreateProjectHeader(sectionWGDHeaderClass, "projHeaders.json");
		projHeader.fProjectAjax();
		//projHeader.fProjectQueries();

		/**----------===||||| MODULE: CREATE PROJECT |||||===----------**/
		var proj = __webpack_require__(12);

		/**----------===| INVOKE: CREATE PROJECT OWNPHONES |===----------**/
		var ownPhonesContainer = $(".ownPhonesContainer");
		var ownProj = new proj.CreateProject(ownPhonesContainer, "projOwnPhones.json");
		ownProj.fProjectAjax();
		//ownProj.fProjectQueries();

		/**----------===| INVOKE: CREATE PROJECT PERSONALFRESH |===----------**/
		//const pfProj = require( './plugins/CreateProject.es6' );
		var personalFreshContainer = $(".personalFreshContainer");
		var PersonalFreshProj = new proj.CreateProject(personalFreshContainer, "projPersonalFresh.json");
		PersonalFreshProj.fProjectAjax();

		/**----------===| INVOKE: CREATE PROJECT HBCBS |===----------**/
		var HBCBSContainer = $(".HBCBSContainer");
		var horizonBlueProj = new proj.CreateProject(HBCBSContainer, "projHBCBS.json");
		horizonBlueProj.fProjectAjax();

		/**----------===||||| MODULE: CREATE PROJECT YOUTUBE |||||===----------**/
		var projVideo = __webpack_require__(13);

		/**----------===| INVOKE: CREATE PROJECT VIDEO OWNPHONES |===----------**/
		var ownPhonesVideoContainer = $(".ownPhonesVideoContainer");
		var ownVideoProj = new projVideo.CreateProject(ownPhonesVideoContainer, "projOwnPhonesYouTube.json");
		ownVideoProj.fProjectAjax();
		ownVideoProj.fProjectQueries();

		/**----------===| INVOKE: HEADER BANNER ILLUSTRATIONS |===----------**/
		var sectionIllustrationsHeaderClass = $(".sectionIllustrationsHeaderClass");
		var projHeaderIllus = new headerProj.CreateProjectHeader(sectionIllustrationsHeaderClass, "projHeadersIllustrations.json");
		projHeaderIllus.fProjectAjax();

		/**----------===| INVOKE: CREATE PROJECT FILIPINAS |===----------**/
		var filipinasContainer = $(".filipinasContainer");
		var filipinasProj = new proj.CreateProject(filipinasContainer, "projFilipinas.json");
		filipinasProj.fProjectAjax();

		/**----------===| INVOKE: CREATE PROJECT DIGITAL ILLUSTRATIONS |===----------**/
		var digitalIllustrationsContainer = $(".digitalIllustrationsContainer");
		var digIllusProj = new proj.CreateProject(digitalIllustrationsContainer, "projDigitalIllustrations.json");
		digIllusProj.fProjectAjax();

		/**----------===| INVOKE: HEADER BANNER INTERACTIVE |===----------**/
		var interactiveHeaderClass = $(".interactiveHeaderClass");
		var projHeaderInteractive = new headerProj.CreateProjectHeader(interactiveHeaderClass, "projHeadersInteractive.json");
		projHeaderInteractive.fProjectAjax();

		/**----------===| INVOKE: CREATE PROJECT AKON |===----------**/
		var akonContainer = $(".akonContainer");
		var akonProj = new proj.CreateProject(akonContainer, "projAkon.json");
		akonProj.fProjectAjax();

		/**----------===| INVOKE: CREATE PROJECT STAX GALLERY |===----------**/
		var staxGalleryContainer = $(".staxGalleryContainer");
		var staxProj = new proj.CreateProject(staxGalleryContainer, "projStax.json");
		staxProj.fProjectAjax();

		/**----------===| INVOKE: CREATE PROJECT PLAYPEN |===----------**/
		var playpenContainer = $(".playpenContainer");
		var playpenProj = new proj.CreateProject(playpenContainer, "projPlaypen.json");
		playpenProj.fProjectAjax();

		/**----------===| ******************************************************************************************** |===----------**/

		/**----------===| EVENT LISTENER: ON RESIZE |===----------**/
		var fOnWindowResize = function fOnWindowResize() {
			menuNav.fProjectQueries();
			landingPage.fProjectQueries();
			projHeader.fProjectQueries();
			ownProj.fProjectQueries();
			ownVideoProj.fProjectQueries();
		};
		$(window).on('resize', fOnWindowResize);

		/**----------===| EVENT LISTENER: ON SCROLL |===----------**/
		var fOnScroll = function fOnScroll() {
			menuNav.fProjectScrollTo();
		};
		$(window).on('scroll', fOnScroll);

		/**----------===| ******************************************************************************************** |===----------**/
	})();

	/***/
},
/* 1 */
/***/function (module, exports) {

	/***********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Animation Functions
  ***********************************************/
	(function () {
		//IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
		"use strict";

		console.log("Module: animationFunctions");

		/**-----------=====| TweenMax Reference Variables |=====-----------**/
		/** Description:
   ** Animation engine using GSAP TweenMax
   ********************************************************************/
		var tMx = TweenMax;
		var easeSine = Sine.easeOut;
		var power3 = Power3.easeOut;
		var power4 = Power4.easeOut;
		var back = Back.easeOut.config(1);
		var elastic = Elastic.easeOut;
		var circular = Circ.easeOut;
		var expo = Expo.easeOut;
		var sloMo = SlowMo.ease.config(0.7, 0.7, false);
		var animTym = 1;
		var animTymSlow = 2;
		var animTymFast = .25;

		/**-----------=====| fOpacityAnim Function |=====-----------**/
		/** Description: Animates element's opacity from 0% to 100%
   *************************************************************/
		var fOpacityAnim = function fOpacityAnim(elem) {
			elem.css({
				"opacity": 0
			});
			tMx.to(elem, animTym, {
				opacity: 1,
				ease: easeSine
			});
		};

		/**-----------=====| fXSlider Function |=====-----------**/
		/** Description:
   ** Animates element's horizontal positions
   ** Use the attribute "left" instead of the matrix "x" (translateX())
   ** as a key and the horizPos param as value.
   ** http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
   ****************************************************************/
		var fXSlider = function fXSlider(elem, horizPos) {
			tMx.to(elem, animTym, {
				left: horizPos,
				ease: back
			});
		};

		// /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
		// /** Descriptions:
		//  ** Animates element's height and width
		//  **----------------------------------------------------------------**/
		// let fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
		//   //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: power3});
		//   tMx.to(elem, animTym, {
		//     height: (eHeight + "px"),
		//     width: eWidth,
		//     ease: power3
		//   });
		// };

		/**-----------=====| fAnimateHeightWidth Function |=====-----------**/
		/** Descriptions: Animates element's height and width
   **----------------------------------------------------------------**/
		var fAnimateHeightWidth = function fAnimateHeightWidth(elem, eHeight, eWidth, animTym) {
			tMx.to(elem, animTym, {
				height: eHeight,
				width: eWidth,
				ease: power3
			});
		};

		// let fImageHeightWidth = function(imgsArray, ht, wt) {
		//   /**----( Setting array member's heights and widths )----**/
		//   for (let i = 0; i < imgsArray.length; i++) {
		//     fAnimateHeightWidth(imgsArray[i], ht, wt); //rowImgRightColmnWidth);
		//     console.log("imgsArray[i]: ", imgsArray[i]);
		//   }
		// };

		var fFontSizer = function fFontSizer(elem, sizeFont) {
			tMx.to(elem, animTymSlow, {
				fontSize: sizeFont,
				ease: power3
			});
		};

		/**-----------=====| MODULE EXPORTS |=====-----------**/
		module.exports.fXSlider = fXSlider;
		module.exports.fAnimateHeightWidth = fAnimateHeightWidth;
		//module.exports.fImageHeightWidth = fImageHeightWidth;
		module.exports.fFontSizer = fFontSizer;
		//module.exports.animTym = animTym;
		/**--------------------------------------------------**/
	})();

	/***/
},
/* 2 */
/***/function (module, exports) {

	/*-**********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Create Text Content
  **********************************************-*/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: createTextContent");

		/**----------=====| CreateElementDiv Class |=====----------**/
		/** Description:
   ** Parent class template for creating basic generic divs.
   ** To minimize the creation of multiple methods that are similar in functionalities.
   **--------------------------------------------------------**/

		var CreateElementDiv = function () {
			function CreateElementDiv() {
				_classCallCheck(this, CreateElementDiv);
			}

			/** Generic method for creating div element **/


			_createClass(CreateElementDiv, [{
				key: "fCreateDiv",
				value: function fCreateDiv(title, counter, appendedTo) {
					this.divName = document.createElement("div");
					this.divName.id = title + counter; //set id // title + "Id_" + counter;
					this.divName.className = title + "Class"; //set className
					$(this.divName).appendTo(appendedTo);
				}
			}]);

			return CreateElementDiv;
		}();

		/**----------=====| TextContent Class |=====----------**/
		/** Description:
   ** TextContent class template is an extension
   ** of the CreateElementDiv class.
   ** For creating innerHTML divs. ************/
		/**------------**/


		var CreateTextContent = function (_CreateElementDiv) {
			_inherits(CreateTextContent, _CreateElementDiv);

			function CreateTextContent() {
				_classCallCheck(this, CreateTextContent);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(CreateTextContent).call(this));
			}

			_createClass(CreateTextContent, [{
				key: "fCreateSimpleTextDiv",
				value: function fCreateSimpleTextDiv(name, counter, appendedTo, textString) {
					_get(Object.getPrototypeOf(CreateTextContent.prototype), "fCreateDiv", this).call(this, name, counter, appendedTo);
					this.divName.innerHTML = textString;
				}
			}, {
				key: "fCreateTextDiv",
				value: function fCreateTextDiv(name, counter, nameClass, appendedTo, textString, titleString) {
					_get(Object.getPrototypeOf(CreateTextContent.prototype), "fCreateDiv", this).call(this, name, counter, appendedTo);
					//this.nameName = document.createElement("div");
					//this.nameName.id = nameId + counter; //set id // name + "Id_" + counter;
					this.divName.className = nameClass; //set className
					//let nameNameId     = $ ("#" + name + "Id_" + counter); //get id
					//$(this.nameName).appendTo(appendedTo);
					this.divName.innerHTML = textString;
					if (titleString) {
						this.divName.title = titleString;
					}
				}
			}]);

			return CreateTextContent;
		}(CreateElementDiv);

		/**-----------=====| EXPORTS |=====-----------**/


		module.exports.CreateTextContent = CreateTextContent;
	})();

	/***/
},
/* 3 */
/***/function (module, exports) {

	/*-**********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Create Basics
  **********************************************-*/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: createBasics");

		/**------------=====| CreateBasicElement Class |=====------------**/
		/** Description: For creating basic elements
   **--------------------------------------------------------------**/

		var CreateBasicElement = function () {
			function CreateBasicElement() {
				_classCallCheck(this, CreateBasicElement);

				this.titleName;
			}

			_createClass(CreateBasicElement, [{
				key: "fCreateBasicElement",
				value: function fCreateBasicElement(titleId, counter, titleClass, appendedTo) {
					this.titleName = document.createElement("div");
					this.titleName.id = titleId + counter; //set id // title + "Id_" + counter;
					this.titleName.className = titleClass; //set className
					//let titleNameId     = $ ("#" + title + "Id_" + counter); //get id
					$(this.titleName).appendTo(appendedTo);
					//fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
				}
			}]);

			return CreateBasicElement;
		}();

		;

		/**----------=====| CreateElementAny Class |=====----------**/
		/** Description: Class template for creating basic "a" tag.
   ************************************************************/

		var CreateElementAny = function () {
			function CreateElementAny() {
				_classCallCheck(this, CreateElementAny);
			}

			/** Generic method for creating a tag element **/


			_createClass(CreateElementAny, [{
				key: "fCreateTag",
				value: function fCreateTag(tagType, className, title, counter, appendedTo) {
					var divName = document.createElement(tagType);
					//divName.id = title + "Id_" + counter; //set id
					divName.id = title + counter; //set id
					divName.className = className; //title + "Class";
					divName.href = "#modalCarousel";
					//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
					$(divName).appendTo(appendedTo);
				}
			}]);

			return CreateElementAny;
		}();

		/**----------=====| CreateElementVideo Class |=====-------------------------------**/
		/** Description:Class template for creating div specifically for YouTube video.
   ***********************************************************************************/


		var CreateElementVideo = function () {
			function CreateElementVideo() {
				_classCallCheck(this, CreateElementVideo);
			}

			_createClass(CreateElementVideo, [{
				key: "fCreateVideoDiv",
				value: function fCreateVideoDiv(videoId, appendedTo) {
					var divName = document.createElement("div");
					divName.id = videoId; //set id
					var divClass = $("." + videoId + "Class"); //get class
					var divId = $("#" + videoId); //get id
					//fDivStyle( divClass, divHeight, divWidth, "red" ); //DELETE COLOR
					$(divName).appendTo(appendedTo);
				}
			}]);

			return CreateElementVideo;
		}();
		/**----------=====| CREATE BUTTON ELEMENT CLASS |=====-------------**/
		/** Description: Class template for creating basic "BUTTON" tag.
   ********************************************************************/


		var CreateElementButton = function () {
			function CreateElementButton() {
				_classCallCheck(this, CreateElementButton);
			}

			/** Generic method for creating a tag element **/


			_createClass(CreateElementButton, [{
				key: "fCreateBtn",
				value: function fCreateBtn(className, idName, counter, appendedTo, label) {
					var divName = document.createElement("BUTTON");
					divName.id = idName + "Id_" + counter; //set id
					divName.className = className; //title + "Class";
					//divName.href = "#modalCarousel";
					//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
					$(divName).appendTo(appendedTo);
					var buttonLabel = document.createTextNode(label);
					$(buttonLabel).appendTo(divName);
				}
			}]);

			return CreateElementButton;
		}();
		/**----------=====| FUNCTION TO OPEN|CLOSE TOGGLE : CODING THIS SITE |=====----------**/


		var fToggleBtn = function fToggleBtn(btn, targetElem) {
			btn.click(function () {
				targetElem.slideToggle("slow");
			});
		};

		/**----------=====| FUNCTION FOR ROLLOVER AND ROLLOUT |=====----------**/
		function fRollEvents(elem, origColor) {
			//	console.log( "elem: ", elem );
			elem.css({
				"color": origColor
			});
			elem.mouseover(function () {
				elem.css({
					"color": "Orange",
					"cursor": "pointer",
					"text-decoration": "none"
				});
			});
			elem.mouseout(function () {
				elem.css({
					"color": origColor,
					"text-decoration": "none"
				});
			});
		}

		// let fRoundToTwo = function(num) {
		//   return +(Math.round(num + "e+2") + "e-2");
		// };

		var fRandomized = function fRandomized(elemLength) {
			//var randImg = introData.images[ Math.floor( introData.images.length * Math.random() ) ];
			//let randImg = elem[ Math.floor( elem.length * Math.random() ) ];
			//return elem[ Math.floor( elem.length * Math.random() ) ];
			// randElem = elem[ Math.floor( elemLength * Math.random() ) ];
			//console.log("elem: ", elem);
			//return +(elem[ Math.floor( elem.length * Math.random() ) ])
			return +Math.floor(elemLength * Math.random());
		};

		var RandNumero = void 0;

		var CreateRandomNumber = function () {
			function CreateRandomNumber() {
				_classCallCheck(this, CreateRandomNumber);
			}

			_createClass(CreateRandomNumber, [{
				key: "fRandomNumber",
				value: function fRandomNumber(elemLength) {
					//return +(Math.floor( elemLength * Math.random() ))
					//this.RandNum = Math.floor( elemLength * Math.random() );
					this.RandNum = Math.floor(elemLength * Math.random());
					//module.exports.RandNumero = this.RandNum;
					RandNumero = this.RandNum;
					module.exports.TestXport = "TestExports";
					//console.log("testX.TestFrLandingPage: ", testX.TestFrLandingPage);
				}
			}]);

			return CreateRandomNumber;
		}();

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
	})();

	/***/
},
/* 4 */
/***/function (module, exports) {

	/*-**********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Create Styles
  **********************************************-*/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: createStyles");

		/**------------=====| FUnctions for css with dynamic values |=====------------**/
		/** Description: For creating css styles
   **--------------------------------------------------------------**/

		/**------------=====| fBasicDivStyle CSS |=====------------*, "relative"*/
		var fBasicDivStyle = function fBasicDivStyle(divName, divHeight, divWidth, divPosition) {
			divName.css({
				"width": divWidth,
				"height": divHeight,
				"float": "left",
				"position": divPosition //relative absolute
			});
		};

		/**------------=====| fBasicImageStyle CSS |=====------------**/
		var fBasicImageStyle = function fBasicImageStyle(divName, divHeight, divWidth, imgSrc) {
			divName.css({
				"width": divWidth,
				"height": divHeight,
				//"background": "url(" + imgSrc + ")  center center fixed",
				"background": "url(" + imgSrc + ") no-repeat",
				"background-size": "cover" //cover 100%
				//"position": "relative", //relative absolute
				//"float": "left"
				//"overflow": divOverflow, //hidden; visible
				//"border"  : "0px solid " + borderColor
				//"border-top": "0px solid red"
				//"border-color": borderColor
			});
		};

		/**------------=====| TO DO: !!!! MERGE THESE TWO TOGETHER: fBasicImageStyle CSS |=====------------**/

		/**------------=====| fBasicImageStyle CSS |=====------------**/
		var fIntroImageStyle = function fIntroImageStyle(divName, divHeight, divWidth, imgSrc) {
			divName.css({
				"width": divWidth,
				"height": divHeight,
				"background": "url(" + imgSrc + ")  center center fixed",
				//"background": "url(" + imgSrc + ") no-repeat",
				"background-size": "cover", //cover 100%
				"position": "relative", //relative absolute
				"float": "left"
				//"overflow": divOverflow, //hidden; visible
				//"border"  : "0px solid " + borderColor
				//"border-top": "0px solid red"
				//"border-color": borderColor
			});
		};

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fBasicDivStyle = fBasicDivStyle;
		module.exports.fBasicImageStyle = fBasicImageStyle;
		module.exports.fIntroImageStyle = fIntroImageStyle;
	})();

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	/**----------===| Created by Odee on 06/17/16.|===----------**/

	(function () {
		//IIFE:Immediately-Invoked Function Expression

		"use strict";
		//console.log("Filename: twoColumns.js");

		var anim = __webpack_require__(1);

		/**----------=====| fRoundToTwo Function |=====----------**/
		/** Description: fRoundToTwo: rounds the decimals to two.
   **------------------------------------------------------**/
		var fRoundToTwo = function fRoundToTwo(num) {
			return +(Math.round(num + "e+2") + "e-2");
		};

		/**----------=====| TwoColumnsQueriesClass Class |=====----------------------------------------------------**/
		/** Description:
   ** Class to calculate the two columns within the container, in all screen sizes.
   ** The right column width uses the "rightColumnPercentage" argument when the screen width is small
      and uses the percentage pulled from json at larger screen width. Converted to pixel.
   ** The left column will have the container's width minus the right column width.
   **--------------------------------------------------------------------------------------------------**/

		var TwoColumnsQueriesClass = function () {
			function TwoColumnsQueriesClass() {
				_classCallCheck(this, TwoColumnsQueriesClass);
			}

			_createClass(TwoColumnsQueriesClass, [{
				key: "fTwoColumnsQueries",
				value: function fTwoColumnsQueries(contnrWidth, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
					//console.log("contnrWidth: ", contnrWidth);
					if (contnrWidth <= 400) {
						this.ColumnPercentage = 100;
						this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
						this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
						this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
						this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
					} else if (contnrWidth > 400 && contnrWidth <= 650) {
						this.ColumnPercentage = 100;
						this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
						this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
						this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
						this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
					} else {
						this.ColumnPercentage = rightColumnPercentage;
						this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
						this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
						this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
						this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
					}
				}
			}]);

			return TwoColumnsQueriesClass;
		}();

		/**--------------------------------------------**/


		var ThreeColumnsClass = function () {
			function ThreeColumnsClass() {
				_classCallCheck(this, ThreeColumnsClass);
			}

			_createClass(ThreeColumnsClass, [{
				key: "fThreeColumns",
				value: function fThreeColumns(contnrWidth) {
					//console.log("contnrWidth: ", contnrWidth);
					var oneThird = contnrWidth / 3;
					//console.log("oneThird: ", oneThird);
				}
			}]);

			return ThreeColumnsClass;
		}();

		;
		/**--------------------------------------------**/

		var TextQueriesClass = function () {
			function TextQueriesClass() {
				_classCallCheck(this, TextQueriesClass);
			}

			_createClass(TextQueriesClass, [{
				key: "fTextQueries",
				value: function fTextQueries(contnrWidth, elem, smlFntSize, midFntSize, lrgFntSize) {
					//console.log("contnrWidth: ", contnrWidth);
					//console.log("elem.height(): ", elem.height());
					if (contnrWidth <= 400) {
						anim.fFontSizer(elem, smlFntSize); //"4em"
						elem.css({
							"padding-left": "20px"
						});
					} else if (contnrWidth > 400 && contnrWidth <= 650) {
						anim.fFontSizer(elem, midFntSize); //"4em"
						elem.css({
							"padding-left": "20px"
						});
					} else {
						anim.fFontSizer(elem, lrgFntSize); //"4em"
						elem.css({
							"padding-left": "0px"
						});
					}
				}
			}]);

			return TextQueriesClass;
		}();

		/**-----------=====| MODULE EXPORTS |=====-----------**/

		module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass;
		module.exports.TextQueriesClass = TextQueriesClass;
		module.exports.ThreeColumnsClass = ThreeColumnsClass;
		/**----------------------------------------------------------------**/
	})();

	/***/
},
/* 6 */
/***/function (module, exports) {

	/*-**********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Open Window
  **********************************************-*/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: openWindow");

		/**----------=====| fWindowOpen: FUNCTION FOR OPENING TEXT LINKS |=====----------**/
		/**DESCRIPTION: To open page link from the image description link
  --------------------------------------------------------------------**/
		var glyphiconXpand2 = $(".glyphicon-expand");
		var fWindowOpen = function fWindowOpen(idName, pageToOpen, fs, scrnHt, scrnWt) {
			if (pageToOpen === "noLink") {
				//link is null!
			} else {
				idName.mouseover(function () {
					idName.css({
						"color": "Orange",
						"cursor": "pointer",
						"text-decoration": "none"
					});
					glyphiconXpand2.css({
						"color": "Orange",
						"cursor": "pointer",
						"text-decoration": "none"
					});
				});
				idName.mouseout(function () {
					idName.css({
						"color": "white"
					});
					glyphiconXpand2.css({
						"color": "white",
						"opacity": ".90"
					});
				});
				idName.click(function () {
					if (scrnHt === "screen.height") {
						scrnHt = window.screen.height;
					}
					if (scrnWt === "screen.width") {
						scrnWt = window.screen.width;
					}
					//window.open(pageToOpen, '_blank'); //, "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
					//window.open(pageToOpen, "_blank", "fs", "fullscreen=yes")
					if (fs === "yes") {
						window.open(pageToOpen, '_blank', 'height=' + scrnHt + ', width=' + scrnWt);
					} else {
						window.open(pageToOpen, '_blank');
					}
				});
			}
		};

		/**-----------=====| EXPORTS |=====-----------**/
		module.exports.fWindowOpen = fWindowOpen;
	})();

	/***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Landing Page Template
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: CreateLandingPage");

		/**----------===| CLASS: CREATE ELEMENTS |===----------**/
		// const createElem = require( './CreateElementClass.es6' );
		// let imageBasicDiv = new createElem.CreateElementAny();

		/**----------===| MODULE: CREATE BASICS |===----------**/
		var createBasics = __webpack_require__(3);
		//const imageBasicDiv = new createBasics.CreateBasicElement();
		var imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.myStyle.fBasicDivStyle();
		var tagElement = new createBasics.CreateElementAny();
		var createButton = new createBasics.CreateElementButton();

		var createRandNum = new createBasics.CreateRandomNumber();
		// createRandNum.fRandomNumber(5);
		// console.log("createRandNum.RandNum: ", createRandNum.RandNum);

		/**----------===| MODULE: CREATE STYLES |===----------**/
		var myStyle = __webpack_require__(4);

		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		var createTextContent = __webpack_require__(2);
		var textDiv = new createTextContent.CreateTextContent();
		var sectionHeaderText = new createTextContent.CreateTextContent();

		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		var openWindow = __webpack_require__(6);
		//let textDiv = new openWindow.CreateTextContent();

		/**----------=====| anim |=====----------**/
		var anim = __webpack_require__(1);

		/**----------=====| CreateColor |=====----------**/
		var convertHex = __webpack_require__(9);
		var hex2RGBA = new convertHex.CreateColor();

		/**----------===| MODULE: TWO COLUMNS |===----------**/
		var twoKolumns = __webpack_require__(5);
		var twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();

		var logoText = new twoKolumns.TextQueriesClass();
		var headerText = new twoKolumns.TextQueriesClass();
		var twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

		var twoKolumnsGeneric = new twoKolumns.TwoColumnsQueriesClass();

		/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
		var nextPreviousNav = __webpack_require__(8);

		//const nxtPrv = new nextPreviousNav.NextPrevNavClass();

		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );

		/**-----------=====| MISC VARS |=====-----------**/
		var additionalHeight = 60;
		var arbitraryNum = 10;
		//ANIMATION TIME
		var animTymSlow = 1;
		var animTymFast = .25;
		/**----------===| FONT SIZE VARIABLES |===----------**/
		var logoTitleSmlFontSize = "4em";
		var logoTitleMidFontSize = "7em";
		var logoTitleLrgFontSize = "8em";

		var logoSubTitleSmlFontSize = "1em";
		var logoSubTitleMidFontSize = "1.2em";
		var logoSubTitleLrgFontSize = "1.6em";

		var introCalloutFontSize = "14px";
		var codingBtnFontSize = ".9em";

		var headerSmlFontSize = "1.4em";
		var headerMidFontSize = "1.6em";
		var headerLrgFontSize = "1.8em";

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

		var jx = 0;
		var ji = 0;
		var i3 = 0;
		var j1 = 0;

		//let projectContainer;
		//let projectContainerWidth;
		//let projContainrLeftColDivIds;
		//let projRightColDivIds;
		//let fluidContainerIds;

		/**----------===| ARRAYS |===----------**/
		var aProjectCount = [];
		var aProjectRightColumnPercent = [];
		var aSectionHeaders = [];
		var aSectionHeadrLeftColmn = [];
		var aSectionHeadrRightColmn = [];
		var aSectionHeadrTitles = [];

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

		var codingThisSiteId = void 0;
		var logoContainerDivId = void 0;
		var logoLeftColDivId = void 0;
		var logoRightColDivId = void 0;
		var logoTitleColumnPercent = void 0;
		var logoTitleClass = void 0;
		var logoSubTitleClass = void 0;
		var logoTitleId = void 0;
		var logoSubTitleId = void 0;
		var introCalloutId = void 0;
		var toggleBtn = void 0;
		//let codingThisSiteId;

		var introImageIds = void 0;
		var myIntroImageSrc = void 0;
		var myIntroImage = void 0;
		var introBackgroungImage = void 0;
		var rightColumnHeight = void 0;

		var randNum = void 0;
		var randColorTheme = void 0;
		var aImages = [];
		//let RandomNumero;

		var CreateProjectLandingPage = function () {
			function CreateProjectLandingPage(projContainer, projectJSON) {
				_classCallCheck(this, CreateProjectLandingPage);

				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
				//console.log("CreateProjectLandingPage: constructor");
			}

			_createClass(CreateProjectLandingPage, [{
				key: "fProjectAjax",
				value: function fProjectAjax() {
					//console.log("fProjectAjax: ");
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					/**----------===| FULL LANDING PAGE IMAGE DIV |===----------**/
					var inWindowHeight = window.innerHeight; // / 2;
					var inWindowWidth = window.innerWidth;

					var introFluidContainer = $(".introFluidContainer");

					var promise = $.get("./js/json/" + this.ProjJSON);
					promise.then(function (data) {
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {
							for (var _iterator = data.GDSiteIntro[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var introData = _step.value;

								//console.log("introData: ", introData);

								/**----------===| CREATE CODING CONTAINER DIV INSIDE projectContainer |===----------**/
								imageBasicDiv.fCreateBasicElement(introData.title + "_CodingContainer", jx, "codingContainer", projectContainer);
								var codingContainerId = $("#" + introData.title + "_CodingContainer" + jx); //GET ID
								//console.log("codingContainerId: ", codingContainerId);

								/**----------===| CREATE CODING TEXT DIV INSIDE CODINGCONTAINER |===----------**/
								imageBasicDiv.fCreateBasicElement(introData.title + "_CodingThisSite", jx, "codingThisSite", codingContainerId);
								codingThisSiteId = $("#" + introData.title + "_CodingThisSite" + jx); //GET ID
								var codingThisSite = $(".codingThisSite"); //GET CLASSNAME
								var codingThisSiteHeight = codingThisSiteId.height();
								myStyle.fBasicDivStyle(codingThisSiteId, "auto", projectContainerWidth, "absolute"); //CSS
								var centerOnScreenY = inWindowHeight / 2 - codingThisSiteHeight / 2;
								codingThisSiteId.css({
									"margin-top": centerOnScreenY
								});

								/**----------===| CREATE CODING PARAGRAPHS |===----------**/
								textDiv.fCreateTextDiv("codingTitle", jx, "codingTitleClass", codingThisSiteId, introData.codingTitle);
								textDiv.fCreateTextDiv("codingDescription", jx, "codingDescriptionClass", codingThisSiteId, introData.codingThisSite);

								/**----------===| CREATE LOGO CONTAINER DIV INSIDE projectContainer DIV |===----------**/
								imageBasicDiv.fCreateBasicElement(introData.title + "_LogoContainer", jx, "logoContainer", projectContainer);
								logoContainerDivId = $("#" + introData.title + "_LogoContainer" + jx); //GET ID
								/**----------===| LOGO TITLE CONTAINER COLUMNS PERCENTAGE |===----------**/
								logoTitleColumnPercent = introData.logoTitleColumnPercent; //json supplied
								twoKolumnsGeneric.fTwoColumnsQueries(projectContainerWidth, logoTitleColumnPercent, 0, 0);

								/**----------===| CREATE LOGO TITLE LEFT COLUMNS |===----------**/
								imageBasicDiv.fCreateBasicElement(introData.title + "_IntroLeftColmn", jx, "introLeftColumnClass", logoContainerDivId);
								logoLeftColDivId = $("#" + introData.title + "_IntroLeftColmn" + jx); //GET ID
								myStyle.fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, "relative"); //CSS

								/**----------===| CREATE LOGO TITLE RIGHT COLUMNS |===----------**/
								imageBasicDiv.fCreateBasicElement(introData.title + "_IntroRightColmn", jx, "introRightColumnClass", logoContainerDivId);
								logoRightColDivId = $("#" + introData.title + "_IntroRightColmn" + jx); //GET ID
								myStyle.fBasicDivStyle(logoRightColDivId, "auto", "auto", "relative"); //CSS

								/**----------===| CREATE LOGO TITLES |===----------**/
								textDiv.fCreateTextDiv(introData.title + "_LogoTitle", jx, "logoTitleClass", logoRightColDivId, introData.introTitle); //R.LLOYD GONZALES
								logoTitleId = $("#" + introData.title + "_LogoTitle" + jx);
								logoText.fTextQueries(projectContainerWidth, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize);

								/**----------===| CREATE INTRO SUB-TITLES |===----------**/
								textDiv.fCreateTextDiv(introData.title + "_LogoSubTitle", jx, "logoSubTitleClass", logoRightColDivId, introData.introSubTitle); //Passionate about Arts, Designs & Coding
								logoSubTitleId = $("#" + introData.title + "_LogoSubTitle" + jx);
								logoText.fTextQueries(projectContainerWidth, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize);

								/**----------===| CREATE CALLOUT |===----------**/
								textDiv.fCreateTextDiv(introData.title + "_Callout", jx, "calloutClass", logoRightColDivId, introData.callout); //Portfolio: Scroll Down
								introCalloutId = $("#" + introData.title + "_Callout" + jx);
								logoText.fTextQueries(projectContainerWidth, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize);
								//console.log("introData.callout: ", introData.callout);

								/**----------===| TOGGLE "CODE THIS SITE" DESCRIPTION |===----------**/

								/**----------===| CREATE BUTTON ELEMENT |===----------**/
								createButton.fCreateBtn("btn btn-link codingBtn", "_Btn", jx, logoRightColDivId, "coding this site"); //introFluidContainer
								toggleBtn = $(".codingBtn"); //get clasname
								var closeCoding = $(".closeCoding"); //get clasname
								logoText.fTextQueries(projectContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);
								var toggleBtnId = $("#" + introData.title + "_Btn" + jx);
								logoText.fTextQueries(projectContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);

								/**----------===| LOGO CONTAINER: BASIC CSS |===----------**/

								rightColumnHeight = logoRightColDivId.height(); // + 30;

								myStyle.fBasicDivStyle(logoContainerDivId, "auto", projectContainerWidth);
								logoContainerDivId.css({
									//"border": "1px solid pink",
									"margin-top": inWindowHeight - (rightColumnHeight + 40)
								});

								createBasics.fToggleBtn(toggleBtn, codingThisSite);
								createBasics.fToggleBtn(closeCoding, codingThisSite);
								createBasics.fRollEvents(toggleBtn, "#949494");
								createBasics.fRollEvents(closeCoding, "#5780a2");

								/**----------===| CREATE IMAGE DIV INSIDE INTROFLUIDCONTAINER |===----------**/
								imageBasicDiv.fCreateBasicElement(introData.title + "_IntroImg", jx, "introDivClass", introFluidContainer);
								/**----------===| NEW IMAGE CREATION |===----------**/
								myIntroImage = new Image();
								var imagesPath = "./images/" + introData.title + "/";
								/**-----====={ Load image randomly }=====-----**/
								// let randImg = createBasics.fRandomized(introData.images);
								// //var randImg = introData.images[ Math.floor( introData.images.length * Math.random() ) ];
								// console.log("randImg: ", randImg.imgName);
								// console.log("introData.images: ", introData.images);
								// console.log("introData.images.length: ", introData.images.length);
								randNum = createBasics.fRandomized(introData.images.length);
								//RandomNumerox1 = createBasics.fRandomized(introData.images.length);
								//console.log("randNumX: ", randNum);
								var randImg = introData.images[randNum];
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
								aImages[aImages.length] = myIntroImage.src; //PUSH
								/**----------===| IMAGE DIV: IDS |===----------**/
								introImageIds = $("#" + introData.title + "_IntroImg" + jx);
								// console.log( "introImageIds: ", introImageIds );
								// console.log("myIntroImage: ", myIntroImage);
								// console.log("myIntroImage: ", myIntroImage);

								/**----------===| COLOR THEME: INTRO SUB TITLE |===----------**/
								randColorTheme = randImg.colorTheme;
								logoSubTitleId.css({
									"color": randColorTheme
								});
								/**----------===| COLOR THEME: INTRO LOGO CONTAINER |===----------**/
								var hex2Rgb = hex2RGBA.fConvertHex(randColorTheme, 50);
								logoContainerDivId.css({
									"border-top": "4px double " + hex2Rgb,
									"border-bottom": "6px double " + hex2Rgb
								});

								module.exports.RandomRGBA = hex2Rgb;

								myStyle.fIntroImageStyle(introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src);
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					});
				}
			}, {
				key: "fProjectQueries",
				value: function fProjectQueries() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();

					/**----------===| FULL LANDING PAGE IMAGE DIV |===----------**/
					var inWindowHeight = window.innerHeight; // / 2;
					var inWindowWidth = window.innerWidth;

					// console.log("myIntroImage: ", myIntroImage);
					// console.log("aImages[0]: ", aImages[0]);
					myStyle.fIntroImageStyle(introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src);
					// console.log( "introImageIds: ", introImageIds );
					// console.log( "myIntroImage.src: ", myIntroImage.src );

					/**----------===| CALCULATE LEFT & RIGHT COLUMN WIDTHS |===----------**/
					/** Description:
         Invoke fTwoColumnsQueries to  calculates Left and Right columns widths based on the percentage passed to the class
         Usage: twoKolumnsGeneric.LeftColumn, twoKolumnsGeneric.RightColumn... **/
					twoKolumnsGeneric.fTwoColumnsQueries(projectContainerWidth, logoTitleColumnPercent, arbitraryNum, arbitraryNum);

					/**----------===| LOGO CONTAINER |===----------**/
					//fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, "relative");
					anim.fAnimateHeightWidth(logoLeftColDivId, arbitraryNum, twoKolumnsGeneric.LeftColumn, animTymSlow);
					//fBasicDivStyle(logoRightColDivId, "auto", twoKolumnsGeneric.RightColumn - 20, "relative");
					myStyle.fBasicDivStyle(logoRightColDivId, "auto", "auto", "relative");
					anim.fAnimateHeightWidth(logoContainerDivId, "auto", projectContainerWidth, animTymSlow);
					//fBasicIntroStyle(logoContainerDivId, rightColumnHeight + 20, projectContainerWidth);
					logoContainerDivId.css({
						"margin-top": inWindowHeight - (rightColumnHeight + 40) // - 800 //(400 + (inWindowHeight / 5)) //"100px" //-(inWindowHeight / 4)
					});

					/**----------===| SCREEN QUERIES |===----------**/
					logoText.fTextQueries(projectContainerWidth, logoTitleId, logoTitleSmlFontSize, logoTitleMidFontSize, logoTitleLrgFontSize);
					logoText.fTextQueries(projectContainerWidth, logoSubTitleId, logoSubTitleSmlFontSize, logoSubTitleMidFontSize, logoSubTitleLrgFontSize);
					logoText.fTextQueries(projectContainerWidth, introCalloutId, introCalloutFontSize, introCalloutFontSize, introCalloutFontSize);
					logoText.fTextQueries(projectContainerWidth, toggleBtn, codingBtnFontSize, codingBtnFontSize, codingBtnFontSize);

					/**----------===| CODING CONTAINER |===----------**/
					myStyle.fBasicDivStyle(codingThisSiteId, "auto", projectContainerWidth, "relative");
				}
			}]);

			return CreateProjectLandingPage;
		}();

		/**-----------=====| EXPORTS |=====-----------**/
		//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;
		// console.log("randNum: ", randNum);
		//module.exports.RandomNumerox1 = RandomNumerox1;


		module.exports.CreateProjectLandingPage = CreateProjectLandingPage;
	})();

	/***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

	/**----------===| Created by Odee on 5/17/16.|===----------**/

	(function () {
		//IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

		"use strict";

		/**-----------=====| IMPORT | REQUIRE |=====-----------**/
		/** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/

		var anim = __webpack_require__(1);

		var NextPrevNavClass = function () {
			function NextPrevNavClass() {
				_classCallCheck(this, NextPrevNavClass);
			}

			_createClass(NextPrevNavClass, [{
				key: "fNextPrevNavigation",
				value: function fNextPrevNavigation(rightArrow, leftArrow, imgContainer, imgContainerWidth, fluidContainerWidth) {
					var _this2 = this;

					//}, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
					this.String = "Hello from fNextPreviousTwoColumnsClass method";
					this.RightArrow = rightArrow;
					this.LeftArrow = leftArrow;
					this.ImgContainer = imgContainer;
					this.ImgContainerWidth = imgContainerWidth;
					this.fluidContainerWidth = fluidContainerWidth;

					this.Num = 0;
					var num = 0;
					var containerXPos = 0;
					this.fluidContainerLeftPosition = 0;
					var fluidContainerLeftPosition = void 0;

					/**-----------=====| Next button function |=====-----------**/
					rightArrow.click(function () {
						num++;
						_this2.Num = num;
						containerXPos = _this2.ImgContainerWidth * num;
						leftArrow.show();
						// console.log(`
						// 		    np:${imgContainer}-----------------------------------------
						// 		    image width:                    ${this.ImgContainerWidth}
						// 		    multiplied by numbr of clicks:  ${num}
						// 		                                    ------------------
						// 		    container x position:           ${containerXPos}
						// 		    fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
						// 		    this.Num: same as clicks        ${this.Num}
						// 		    np:---------------------------------------------------`)
						/**-----| If the current x position greater or equals to the fluid-container width |-----**/
						_this2.fluidContainerLeftPosition = _this2.fluidContainerWidth - _this2.ImgContainerWidth * 2;
						if (containerXPos >= _this2.fluidContainerLeftPosition) {
							rightArrow.hide();
						}
						/**-----| fXSlider: Slides the image container to the left |-----**/
						anim.fXSlider(imgContainer, -containerXPos);
						//console.log(rightArrow, num, ":np---------------------------------------------------");
					});

					/**-----------=====| Previous button function |=====-----------**/
					leftArrow.click(function () {
						num--;
						_this2.Num = num;
						containerXPos = _this2.ImgContainerWidth * num;
						rightArrow.show();
						// console.log(`
						//     image width:                    ${this.ImgContainerWidth}
						//     multiplied by numbr of clicks:  ${num}
						//                                     ------------------
						//     container x position:           ${containerXPos}
						//     fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
						//     this.Num: same as clicks        ${this.Num}
						// `)
						/**-----| when it hits the beginning of the image container |-----**/
						if (containerXPos <= 0) {
							leftArrow.hide();
						}
						/**-----| fXSlider: Slides the image container to the right |-----**/
						anim.fXSlider(imgContainer, -containerXPos);
					});
				}
			}]);

			return NextPrevNavClass;
		}();

		/**-----------=====| MODULE EXPORTS |=====-----------**/
		/**--------------------------------------------------**/


		module.exports.NextPrevNavClass = NextPrevNavClass;
		/**--------------------------------------------------**/
	})();

	/***/
},
/* 9 */
/***/function (module, exports) {

	/*-**********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Create Color
  **********************************************-*/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: CreateColor");

		/**----------=====| FUNCTION FOR CONVERTING HEX COLOR TO RGBA |=====----------**/
		/** http://jsfiddle.net/subodhghulaxe/t568u/ **/
		//function fConvertHex(hex, opacity) {
		var CreateColor = function () {
			function CreateColor() {
				_classCallCheck(this, CreateColor);
			}

			_createClass(CreateColor, [{
				key: "fConvertHex",
				value: function fConvertHex(hex, opacity) {
					hex = hex.replace('#', '');
					var r = parseInt(hex.substring(0, 2), 16);
					var g = parseInt(hex.substring(2, 4), 16);
					var b = parseInt(hex.substring(4, 6), 16);

					var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
					return result;
				}
			}]);

			return CreateColor;
		}();

		/**-----------=====| EXPORTS |=====-----------**/
		//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;


		module.exports.CreateColor = CreateColor;
	})();

	/***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Project Header Template
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: CreateHeader");

		/**----------===| MODULE: CREATE BASICS |===----------**/
		var createBasics = __webpack_require__(3);
		var createDiv = new createBasics.CreateBasicElement();
		//const imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.fBasicDivStyle();
		//const tagElement = new createBasics.CreateElementAny();

		/**----------===| MODULE: CREATE STYLES |===----------**/
		var myStyle = __webpack_require__(4);

		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		var createTextContent = __webpack_require__(2);
		var textDiv = new createTextContent.CreateTextContent();
		var sectionHeaderText = new createTextContent.CreateTextContent();

		/**----------=====| anim |=====----------**/
		var anim = __webpack_require__(1);

		/**----------===| MODULE: TWO COLUMNS |===----------**/
		var twoKolumns = __webpack_require__(5);
		var twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();

		var logoText = new twoKolumns.TextQueriesClass();
		var headerText = new twoKolumns.TextQueriesClass();
		var twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

		/**----------===| MODULE: LANDING PAGE |===----------**/
		var introProjX = __webpack_require__(7);

		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );

		/**-----------=====| MISC VARS |=====-----------**/
		var additionalHeight = 60;
		var arbitraryNum = 10;
		//ANIMATION TIME
		var animTymSlow = 1;
		var animTymFast = .25;

		/**----------===| FONT SIZE VARIABLES |===----------**/
		var headerSmlFontSize = "1.4em";
		var headerMidFontSize = "1.6em";
		var headerLrgFontSize = "1.8em";

		var jx = 0;
		var ji = 0;
		var i3 = 0;
		var j1 = 0;

		/**----------===| ARRAYS |===----------**/
		var aProjectCount = [];
		var aProjectRightColumnPercent = [];
		var aSectionHeaders = [];
		var aSectionHeadrLeftColmn = [];
		var aSectionHeadrRightColmn = [];
		var aSectionHeadrTitles = [];

		var CreateProjectHeader = function () {
			function CreateProjectHeader(projContainer, projectJSON) {
				_classCallCheck(this, CreateProjectHeader);

				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}

			_createClass(CreateProjectHeader, [{
				key: "fProjectAjax",
				value: function fProjectAjax() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					//console.log("projectContainerWidth: ", projectContainerWidth);
					var promise = $.get("./js/json/" + this.ProjJSON);
					promise.then(function (data) {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = data.ProjectData[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var proj = _step2.value;


								//const randNumFrLandingPage = introProjX.RandomNumero;
								//console.log("randNumFrLandingPage: ", randNumFrLandingPage);

								var randRGBAFrLandingPage = introProjX.RandomRGBA;
								//console.log("randRGBAFrLandingPage: ", randRGBAFrLandingPage);

								aProjectCount[aProjectCount.length] = proj; //PUSH

								/**----------===| INVOKE TWO COLUMNS |===----------**/
								twoColumnsHeaderSection.fTwoColumnsQueries(projectContainerWidth, proj.headerRightColumnPercent, arbitraryNum, arbitraryNum);
								aProjectRightColumnPercent[aProjectRightColumnPercent.length] = proj.headerRightColumnPercent;

								/**----------===| CREATE SECTION HEADER CONTAINER |===----------------------------------------**/
								createDiv.fCreateBasicElement(proj.title, j1, "sectionHeaderClass", projectContainer);
								var sectDivIds = $("#" + proj.title + j1);
								myStyle.fBasicDivStyle(sectDivIds, "auto", projectContainerWidth, "relative");
								aSectionHeaders[aSectionHeaders.length] = sectDivIds;

								/**----------===| CREATE SECTION HEADER DIVIDER |===----------------------------------------**/
								createDiv.fCreateBasicElement("sectDivider", j1, "sectionDividerClass", sectDivIds);
								var sectDividerIds = $("#" + "sectDivider" + j1);
								var sectionDividerClass = $(".sectionDividerClass");
								/**----------===| COLOR THEME: DIVIDER |===----------**/
								sectionDividerClass.css({
									"background-color": randRGBAFrLandingPage //"yellowGreen" //randColorTheme
								});

								/**----------===| CREATE HEADER LEFT COLUMN |===------------------------------------------------------------**/
								createDiv.fCreateBasicElement(proj.title + "_Left", j1, "sectionHeaderLeftColmnClass", sectDivIds);
								var sectLeftIds = $("#" + proj.title + "_Left" + j1);
								myStyle.fBasicDivStyle(sectLeftIds, arbitraryNum, twoColumnsHeaderSection.LeftColumn, "relative");
								aSectionHeadrLeftColmn[aSectionHeadrLeftColmn.length] = sectLeftIds;

								/**----------===| CREATE HEADER RIGHT COLUMN |===-------------------------------------------------------------**/
								createDiv.fCreateBasicElement(proj.title + "_Right", j1, "sectionHeaderRightColmnClass", sectDivIds);
								var sectRightIds = $("#" + proj.title + "_Right" + j1);
								myStyle.fBasicDivStyle(sectRightIds, "auto", twoColumnsHeaderSection.RightColumn, "relative");
								aSectionHeadrRightColmn[aSectionHeadrRightColmn.length] = sectRightIds;

								/**----------===| Sections Header Title Text |===----------**/
								//sectionHeaderText.fBasicTextContent( proj.title + "_Text", j1, "sectionHeaderTxtContentClass", sectRightIds, proj.sectionTitle );
								sectionHeaderText.fCreateTextDiv(proj.title + "_Text", j1, "sectionHeaderTxtContentClass", sectRightIds, proj.sectionTitle);
								//fCreateTextDiv( name, counter, nameClass, appendedTo, textString, titleString );
								var sectionTitleIds = $("#" + proj.title + "_Text" + j1);
								myStyle.fBasicDivStyle(sectionTitleIds, "auto", twoColumnsHeaderSection.RightColumn, "relative");
								headerText.fTextQueries(projectContainerWidth, sectionTitleIds, headerSmlFontSize, headerMidFontSize, headerLrgFontSize);
								aSectionHeadrTitles[aSectionHeadrTitles.length] = sectionTitleIds;
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}
					});
				}
			}, {
				key: "fProjectQueries",
				value: function fProjectQueries() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					for (var e1 = 0; e1 < aProjectCount.length; e1++) {
						//console.log("e1: ", e1);
						/**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/
						twoColumnsHeaderSection.fTwoColumnsQueries(projectContainerWidth, aProjectRightColumnPercent[e1], arbitraryNum, arbitraryNum);
						anim.fAnimateHeightWidth(aSectionHeadrLeftColmn[e1], arbitraryNum, twoColumnsHeaderSection.LeftColumn, animTymSlow);
						anim.fAnimateHeightWidth(aSectionHeaders[e1], "auto", projectContainerWidth, animTymSlow);
						anim.fAnimateHeightWidth(aSectionHeadrRightColmn[e1], "auto", "auto", animTymSlow); //twoColumnsHeaderSection.RightColumn
						anim.fAnimateHeightWidth(aSectionHeadrTitles[e1], "auto", "auto", animTymSlow);
						headerText.fTextQueries(projectContainerWidth, aSectionHeadrTitles[e1], headerSmlFontSize, headerMidFontSize, headerLrgFontSize);
					}
				}
			}]);

			return CreateProjectHeader;
		}();

		/**-----------=====| EXPORTS |=====-----------**/
		//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;


		module.exports.CreateProjectHeader = CreateProjectHeader;
	})();

	/***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Project Menu Navigation Template
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: CreateHeader");

		/**----------===| MODULE: CREATE BASICS |===----------**/
		var createBasics = __webpack_require__(3);
		var createDiv = new createBasics.CreateBasicElement();
		var imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.fBasicDivStyle();
		var tagElement = new createBasics.CreateElementAny();

		/**----------===| MODULE: CREATE STYLES |===----------**/
		var myStyle = __webpack_require__(4);

		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		var createTextContent = __webpack_require__(2);
		var textDiv = new createTextContent.CreateTextContent();
		var menuNavText = new createTextContent.CreateTextContent();

		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		var openWindow = __webpack_require__(6);
		//let textDiv = new openWindow.CreateTextContent();

		/**----------=====| anim |=====----------**/
		var anim = __webpack_require__(1);

		/**----------===| MODULE: TWO COLUMNS |===----------**/
		var twoKolumns = __webpack_require__(5);
		var twoColumnsHeaderSection = new twoKolumns.TwoColumnsQueriesClass();
		var logoText = new twoKolumns.TextQueriesClass();
		var headerText = new twoKolumns.TextQueriesClass();
		var twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

		/**----------===| MODULE: LANDING PAGE |===----------**/
		var introProjX = __webpack_require__(7);

		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );

		/**-----------=====| MISC VARS |=====-----------**/
		var additionalHeight = 60;
		var arbitraryNum = 10;
		//ANIMATION TIME
		var animTymSlow = 1;
		var animTymFast = .25;

		var inWindowHeight = window.innerHeight;

		/**----------===| FONT SIZE VARIABLES |===----------**/
		var headerSmlFontSize = "1.4em";
		var headerMidFontSize = "1.6em";
		var headerLrgFontSize = "1.8em";

		var jx = 0;
		var ji = 0;
		var i3 = 0;
		var j1 = 0;

		/**----------===| ARRAYS |===----------**/
		var aProjectCount = [];
		var aProjectRightColumnPercent = [];
		var aMenuNav = [];
		var aMenuNavLeftColmn = [];
		var aMenuNavRightColmn = [];
		var aMenuNavTitles = [];

		/**----------===| FUNCTION: ANCHOR LINK |===----------**/
		var fGoTo = function fGoTo(link) {
			location.href = "#" + link;
		};

		var fHideMenu = function fHideMenu(leftKolumn, elem) {
			if (leftKolumn === 0) {
				elem.css({
					"display": "none"
				});
			} else {
				elem.css({
					"display": "inline-block"
				});
			}
		};

		var fScrollHideShow = function fScrollHideShow(scrlAmount, elem, leftKolumn) {
			if (scrlAmount >= inWindowHeight && leftKolumn > 0) {
				elem.css({
					"display": "inline-block"
				});
			} else {
				elem.css({
					"display": "none"
				});
			}
		};

		var CreateMenuNav = function () {
			function CreateMenuNav(projContainer, projectJSON) {
				_classCallCheck(this, CreateMenuNav);

				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}

			_createClass(CreateMenuNav, [{
				key: "fProjectAjax",
				value: function fProjectAjax() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					//console.log("projectContainerWidth: ", projectContainerWidth);
					var promise = $.get("./js/json/" + this.ProjJSON);
					promise.then(function (data) {
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {

							for (var _iterator3 = data.ProjectData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var proj = _step3.value;


								//let scrollAmount = $(window).scrollTop()*2.5;
								var scrollAmount = $(window).scrollTop();
								console.log("scrollAmount: ", scrollAmount);

								aProjectCount[aProjectCount.length] = proj; //PUSH

								/**----------===| INVOKE TWO COLUMNS |===----------**/
								twoColumnsHeaderSection.fTwoColumnsQueries(projectContainerWidth, proj.rightColumnPercent, arbitraryNum, arbitraryNum);
								aProjectRightColumnPercent[aProjectRightColumnPercent.length] = proj.rightColumnPercent;

								// console.log("proj.rightColumnPercent: ", proj.rightColumnPercent);
								// console.log("twoColumnsHeaderSection.LeftColumn: ", twoColumnsHeaderSection.LeftColumn);

								/**----------===| CREATE MENU CONTAINER |===------------------------------------------------------------**/
								createDiv.fCreateBasicElement(proj.title + "menuNavContainer", jx, "menuNavContainerClass", projectContainer);
								//let menuNavContainerId = document.getElementById( "menuNavContainer" + "Id_" + jx );
								var menuNavContainerId = $("#" + proj.title + "menuNavContainer" + jx);
								aMenuNav[aMenuNav.length] = menuNavContainerId;

								// if(twoColumnsHeaderSection.LeftColumn === 0){
								// 	menuNavContainerId.css({
								// 		"display": "none"
								// 	})
								// }

								fHideMenu(twoColumnsHeaderSection.LeftColumn, menuNavContainerId);
								fScrollHideShow(scrollAmount, menuNavContainerId, twoColumnsHeaderSection.LeftColumn);

								/**----------===| CREATE MENU LEFT COLUMN |===------------------------------------------------------------**/
								createDiv.fCreateBasicElement(proj.title + "_Left", j1, "menuNavLeftColmnClass", menuNavContainerId);
								var sectLeftIds = $("#" + proj.title + "_Left" + j1);
								myStyle.fBasicDivStyle(sectLeftIds, "auto", twoColumnsHeaderSection.LeftColumn, "relative");
								aMenuNavLeftColmn[aMenuNavLeftColmn.length] = sectLeftIds;

								/**----------===| CREATE MENU RIGHT COLUMN |===-------------------------------------------------------------**/
								createDiv.fCreateBasicElement(proj.title + "_Right", j1, "menuNavRightColmnClass", menuNavContainerId);
								var sectRightIds = $("#" + proj.title + "_Right" + j1);
								myStyle.fBasicDivStyle(sectRightIds, "auto", twoColumnsHeaderSection.RightColumn, "relative");
								aMenuNavRightColmn[aMenuNavRightColmn.length] = sectRightIds;

								/**----------===| CREATE MENU NAVIGATIONS |===-------------------------------------------------------------**/
								var _iteratorNormalCompletion4 = true;
								var _didIteratorError4 = false;
								var _iteratorError4 = undefined;

								try {
									var _loop = function _loop() {
										var menus = _step4.value;

										ji++;
										//createDiv.fCreateTag( "div", "menu", "menuClass", ji, menuNavContainerId );
										createDiv.fCreateBasicElement(proj.title + "menu", ji, "menuClass", sectLeftIds);
										//let menuId = document.getElementById( proj.title + "menu" + ji );
										var menuId = $("#" + proj.title + "menu" + ji);
										//let menuId = $("#menu" + "Id_" + ji);
										//let menuId = $("#menuId_" + ji);
										//let menuClass = $( ".menuClass" );
										menuId.innerHTML = menus.menu;
										// console.log("menuId: ", menuId);
										// console.log("menuId.innerHTML: ", menuId.innerHTML);
										// console.log("menus.menu: ", menus.menu);

										menuNavText.fCreateTextDiv(proj.title + "_Text", ji, "menuNavTxtContentClass", menuId, menus.menu);

										var randRGBAFrLandingPage = introProjX.RandomRGBA;
										menuId.css({
											"color": randRGBAFrLandingPage
										});
										/**-----| Menu anchor links |-----**/
										$(menuId).click(function () {
											fGoTo(menus.link);
										});
									};

									for (var _iterator4 = proj.mainMenuNavs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
										_loop();
									}
								} catch (err) {
									_didIteratorError4 = true;
									_iteratorError4 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion4 && _iterator4.return) {
											_iterator4.return();
										}
									} finally {
										if (_didIteratorError4) {
											throw _iteratorError4;
										}
									}
								}
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}
					});
				}
			}, {
				key: "fProjectQueries",
				value: function fProjectQueries() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					for (var e1 = 0; e1 < aProjectCount.length; e1++) {
						//console.log("e1: ", e1);
						/**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/
						twoColumnsHeaderSection.fTwoColumnsQueries(projectContainerWidth, aProjectRightColumnPercent[e1], arbitraryNum, arbitraryNum);
						anim.fAnimateHeightWidth(aMenuNavLeftColmn[e1], "auto", twoColumnsHeaderSection.LeftColumn, animTymSlow);
						anim.fAnimateHeightWidth(aMenuNav[e1], "auto", projectContainerWidth, animTymSlow);
						anim.fAnimateHeightWidth(aMenuNavRightColmn[e1], "auto", "auto", animTymSlow); //twoColumnsHeaderSection.RightColumn
						fHideMenu(twoColumnsHeaderSection.LeftColumn, aMenuNav[e1]);
					}
				}
			}, {
				key: "fProjectScrollTo",
				value: function fProjectScrollTo() {
					var scrollAmount = $(window).scrollTop();
					//console.log("scrollAmount: ", scrollAmount);
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					//  let scrollto = window.scrollTo();
					//  console.log("scrollto: ", scrollto);
					for (var e1 = 0; e1 < aProjectCount.length; e1++) {
						twoColumnsHeaderSection.fTwoColumnsQueries(projectContainerWidth, aProjectRightColumnPercent[e1], arbitraryNum, arbitraryNum);
						fScrollHideShow(scrollAmount, aMenuNav[e1], twoColumnsHeaderSection.LeftColumn);
					}
				}
			}]);

			return CreateMenuNav;
		}();

		/**-----------=====| EXPORTS |=====-----------**/
		//module.exports.fOwnPhonesAjax = fOwnPhonesAjax;


		module.exports.CreateMenuNav = CreateMenuNav;
	})();

	/***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Project Template
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: CreateProject");

		/**----------===| MODULE: CREATE BASICS |===----------**/
		var createBasics = __webpack_require__(3);
		var createDiv = new createBasics.CreateBasicElement();
		var imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.fBasicDivStyle();
		var tagElement = new createBasics.CreateElementAny();

		/**----------===| MODULE: CREATE STYLES |===----------**/
		var myStyle = __webpack_require__(4);

		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		var createTextContent = __webpack_require__(2);
		var textDiv = new createTextContent.CreateTextContent();

		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		var openWindow = __webpack_require__(6);
		//let textDiv = new openWindow.CreateTextContent();

		/**----------=====| anim |=====----------**/
		var anim = __webpack_require__(1);

		/**----------===| MODULE: TWO COLUMNS |===----------**/
		var twoKolumns = __webpack_require__(5);
		var logoText = new twoKolumns.TextQueriesClass();
		var headerText = new twoKolumns.TextQueriesClass();
		var twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

		/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
		var nextPreviousNav = __webpack_require__(8);

		//const nxtPrv = new nextPreviousNav.NextPrevNavClass();

		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );

		/**-----------=====| MISC VARS |=====-----------**/
		var additionalHeight = 60;
		var arbitraryNum = 10;
		//ANIMATION TIME
		var animTymSlow = 1;
		var animTymFast = .25;
		/**----------===| FONT SIZE VARIABLES |===----------**/
		var logoTitleSmlFontSize = "4em";
		var logoTitleMidFontSize = "7em";
		var logoTitleLrgFontSize = "8em";

		var logoSubTitleSmlFontSize = "1em";
		var logoSubTitleMidFontSize = "1.2em";
		var logoSubTitleLrgFontSize = "1.6em";

		var introCalloutFontSize = ".9em";
		var codingBtnFontSize = ".9em";

		var headerSmlFontSize = "1.4em";
		var headerMidFontSize = "1.6em";
		var headerLrgFontSize = "1.8em";

		var projTitleSmlFontSize = "1.6em";
		var projTitleMidFontSize = "1.8em";
		var projTitleLrgFontSize = "2em";

		var projSubTitleSmlFontSize = "1em";
		var projSubTitleMidFontSize = "1em";
		var projSubTitleLrgFontSize = "1.2em";

		var projDescSmlFontSize = "1em";
		var projDescMidFontSize = "1em";
		var projDescLrgFontSize = "1.2em";

		var imgDescSmlFontSize = "1em";
		var imgDescMidFontSize = "1em";
		var imgDescLrgFontSize = "1.2em";

		var jx = 0;
		var ji = 0;
		var i3 = 0;

		//let projectContainer;
		//let projectContainerWidth;
		var projContainrLeftColDivIds = void 0;
		var projRightColDivIds = void 0;
		var fluidContainerIds = void 0;

		/**----------===| ARRAYS |===----------**/
		var aProjectCount = [];
		var aProjectRightColumnPercent = [];
		var aImagesOrigWidth = [];
		var aImagesOrigHeight = [];
		var aImageDescriptIds = [];
		var aProjContainrLeftColDivIds = [];
		var aProjRightColDivIds = [];
		var aProjImagesLength = [];

		var aFluidContainerIds = [];
		var aFluidContainerWidth = [];
		var aFluidContainerHeight = [];

		var aLeftShaderIds = [];
		var aRightShaderIds = [];
		var aNxtPrv = [];

		var aProjParagDivIds = [];
		var aParagLeftColDivIds = [];
		var aParagRightColDivIds = [];
		var aParaghProjTitleIds = [];
		var aParaghProjSubTitleIds = [];
		var aParaghProjlinkURLs = [];
		var aProjContainerIds = [];

		var aParagraphContainer = []; //aProjParagDivIds
		var aProjParagLeftDivIds = []; //aParagLeftColDivIds
		var aProjParagRightDivIds = []; //aParagRightColDivIds

		var aParagraphRightColumnPercent = [];
		var aParagraphLeftColumnWidth = [];
		var aParagraphRightColumnWidth = [];

		//let aParaghProjTitleIds = [];
		//let aParaghProjSubTitleIds = [];
		var aParagraphProjDescription = []; //aParaghProjlinkURLs

		var aImagesRightColumnPercent = [];
		var aImagesCount = [];
		var aImageIds = [];
		var aImages = [];
		var aImagesWidth = [];
		var aImagesHeight = [];
		//let aImageDescriptIds = [];

		var CreateProject = function () {
			function CreateProject(projContainer, projectJSON) {
				_classCallCheck(this, CreateProject);

				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}

			_createClass(CreateProject, [{
				key: "fProjectAjax",
				value: function fProjectAjax() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					var promise = $.get("./js/json/" + this.ProjJSON);
					promise.then(function (data) {
						var _iteratorNormalCompletion5 = true;
						var _didIteratorError5 = false;
						var _iteratorError5 = undefined;

						try {
							for (var _iterator5 = data.ProjectData[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
								var proj = _step5.value;


								aProjectCount[aProjectCount.length] = proj; //PUSH
								//console.log("aProjectCount: ", aProjectCount);

								/**----------===| TWO COLUMNS: IMAGE PROJECTS |===----------**/

								twoColumnsImgProjects.fTwoColumnsQueries(projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
								aProjectRightColumnPercent[aProjectRightColumnPercent.length] = proj.imgRightColumnPercent; //PUSH
								aImagesOrigWidth[aImagesOrigWidth.length] = proj.imagesWidth; //PUSH
								aImagesOrigHeight[aImagesOrigHeight.length] = proj.imagesHeight; //PUSH

								/**----------===| CREATE PROJECT IMAGE CONTAINER |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_ProjContainer", jx, "projectContainerClass", projectContainer);
								var projContainerIds = $("#" + proj.title + "_ProjContainer" + jx);
								myStyle.fBasicDivStyle(projContainerIds, "auto", projectContainerWidth); // ID, HEIGHT, WID, "relative"TH
								aProjContainerIds[aProjContainerIds.length] = projContainerIds; //PUSH

								/**----------===| CREATE PROJECT IMAGE CONTAINER: LEFT COLUMN |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_Left", jx, "projectLeftColmnClass", projectContainer);
								projContainrLeftColDivIds = $("#" + proj.title + "_Left" + jx);
								myStyle.fBasicDivStyle(projContainrLeftColDivIds, "50px", twoColumnsImgProjects.LeftColumn);
								aProjContainrLeftColDivIds[aProjContainrLeftColDivIds.length] = projContainrLeftColDivIds; //PUSH

								/**----------===| CREATE PROJECT IMAGE CONTAINER: RIGHT COLUMN |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_ProjRight", jx, "projectRightColmnClass", projectContainer);
								projRightColDivIds = $("#" + proj.title + "_ProjRight" + jx);
								myStyle.fBasicDivStyle(projRightColDivIds, twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn);

								aProjRightColDivIds[aProjRightColDivIds.length] = projRightColDivIds; //PUSH
								aProjImagesLength[aProjImagesLength.length] = proj.projectImages.length + 1; //push

								/**----------===| CREATE FLUID-CONTAINER INSIDE RIGHT COLUMN |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_FluidContainer_", jx, "fluidContainerClass", projRightColDivIds);
								//createDiv.fCreateBasicElement( proj.title + "_FluidContainer_", jx, "fluidContainerClass", projectContainer );
								fluidContainerIds = $("#" + proj.title + "_FluidContainer_" + jx);
								aFluidContainerIds[aFluidContainerIds.length] = fluidContainerIds; //PUSH

								/**----------===| FLUID-CONTAINER WIDTH |===----------**/
								var fluidContainerWidth = twoColumnsImgProjects.RightColumn * (proj.projectImages.length + 1);
								aFluidContainerWidth[aFluidContainerWidth.length] = fluidContainerWidth; //PUSH

								/**----------===| FLUID-CONTAINER HEIGHT |===----------**/
								var fluidContainerHeight = twoColumnsImgProjects.NewHeight + additionalHeight;
								aFluidContainerHeight[aFluidContainerHeight.length] = fluidContainerHeight; //PUSH

								/**----------===| FLUID-CONTAINER: BASIC CSS |===----------**/
								myStyle.fBasicDivStyle(fluidContainerIds, fluidContainerHeight, fluidContainerWidth);

								/**----------===| CAROUSEL CONTROL: LEFT |===----------**/
								tagElement.fCreateTag("a", "carousel-control left", proj.title + "leftCarousel", jx, projRightColDivIds);
								var leftShaderIds = $("#" + proj.title + "leftCarousel" + jx); //GET IDS
								aLeftShaderIds[aLeftShaderIds.length] = leftShaderIds; //PUSH

								/**----------===| CREATE GLYPHICON LEFT ARROW |===----------**/
								tagElement.fCreateTag("i", "glyphicon glyphicon-menu-left", "leftArrow", jx, leftShaderIds); //glyphicon glyphicon-menu-left glyphicon-chevron-left
								/**----------===| CAROUSEL CONTROL: RIGHT |===----------**/
								tagElement.fCreateTag("a", "carousel-control right", proj.title + "rightCarousel", jx, projRightColDivIds);
								var rightShaderIds = $("#" + proj.title + "rightCarousel" + jx); //GET IDS
								aRightShaderIds[aRightShaderIds.length] = rightShaderIds; //PUSH

								/**----------===| KEEPING THE CAROUSELCONTROL HEIGHT SAME AS THE IMAGE HEIGHT |===----------**/
								myStyle.fBasicDivStyle(leftShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute");
								myStyle.fBasicDivStyle(rightShaderIds, twoColumnsImgProjects.NewHeight, "null", "absolute");

								/**----------===| CREATE NEW NEXT PREVIOUS CLASS INSTANCES |===----------**/
								var nxtPrv = new nextPreviousNav.NextPrevNavClass();
								aNxtPrv[aNxtPrv.length] = nxtPrv;
								/**----------===| INVOKE NEXT PREVIOUS CLASS INSTANCE |===----------**/
								nxtPrv.fNextPrevNavigation(rightShaderIds, leftShaderIds, fluidContainerIds, twoColumnsImgProjects.RightColumn, fluidContainerWidth);
								/**----------===| CREATE GLYPHICON RIGHT ARROW |===----------**/
								tagElement.fCreateTag("i", "glyphicon glyphicon-menu-right", "rightArrow", jx, rightShaderIds); ////glyphicon glyphicon-menu-right  glyphicon-chevron-right  glyphicons-fit-image-to-frame
								/**----------===| On first enter the site all left image arrows are hidden |===----------**/
								leftShaderIds.hide();
								var glyphicon = $(".glyphicon"); //GET CLASSNAME

								/**----------==========| PROJECT PARAGRAPHS |==========----------**/
								/**----------===| PARAGRAPH COLUMNS PERCENTAGE |===----------**/
								twoColumnsParagProjects.fTwoColumnsQueries(projectContainerWidth, proj.paragraphRightColumnPercent, 0, 0);
								aParagraphRightColumnPercent[aParagraphRightColumnPercent.length] = proj.paragraphRightColumnPercent;
								aParagraphLeftColumnWidth[aParagraphLeftColumnWidth.length] = twoColumnsParagProjects.LeftColumn;

								/**----------===| CREATE PARAGRAPH CONTAINER |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_Paragraph", jx, "paragraphContainerClass", projectContainer);
								var projParagDivIds = $("#" + proj.title + "_Paragraph" + jx);
								myStyle.fBasicDivStyle(projParagDivIds, "auto", projectContainerWidth);
								aProjParagDivIds[aProjParagDivIds.length] = projParagDivIds; //PUSH

								/**----------===| CREATE PARAGRAPH LEFT COLUMNS |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_ParagLeftColmn", jx, "paragraphLeftColumnClass", projParagDivIds);
								var paragLeftColDivIds = $("#" + proj.title + "_ParagLeftColmn" + jx);
								myStyle.fBasicDivStyle(paragLeftColDivIds, arbitraryNum, twoColumnsParagProjects.LeftColumn);
								aParagLeftColDivIds[aParagLeftColDivIds.length] = paragLeftColDivIds; //PUSH

								/**----------===| CREATE PARAGRAPH RIGHT COLUMNS |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_ParagRightColmn", jx, "paragraphRightColumnClass", projParagDivIds);
								var paragRightColDivIds = $("#" + proj.title + "_ParagRightColmn" + jx);
								myStyle.fBasicDivStyle(paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn);
								aParagRightColDivIds[aParagRightColDivIds.length] = paragRightColDivIds; //PUSH

								/**----------===| CREATE PROJECT TITLES |===----------**/
								textDiv.fCreateTextDiv(proj.title + "_ProjTitle", jx, "projTitleClass", paragRightColDivIds, proj.title);
								var paraghProjTitleIds = $("#" + proj.title + "_ProjTitle" + jx);
								headerText.fTextQueries(projectContainerWidth, paraghProjTitleIds, projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize);
								aParaghProjTitleIds[aParaghProjTitleIds.length] = paraghProjTitleIds; //PUSH

								/**----------===| CREATE PROJECT SUB-TITLES |===----------**/
								textDiv.fCreateTextDiv(proj.title + "_ProjSubTitle", jx, "projSubTitleClass", paragRightColDivIds, proj.subTitle);
								var paraghProjSubTitleIds = $("#" + proj.title + "_ProjSubTitle" + jx);
								headerText.fTextQueries(projectContainerWidth, paraghProjSubTitleIds, projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize);
								aParaghProjSubTitleIds[aParaghProjSubTitleIds.length] = paraghProjSubTitleIds; //PUSH

								/**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/
								textDiv.fCreateTextDiv(proj.title + "_ProjDescription", jx, "projDescriptionClass", paragRightColDivIds, proj.projDescription);
								var paraghProjlinkURLs = $("#" + proj.title + "_ProjDescription" + jx);
								headerText.fTextQueries(projectContainerWidth, paraghProjlinkURLs, projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize);
								aParaghProjlinkURLs[aParaghProjlinkURLs.length] = paraghProjlinkURLs; //PUSH

								var projTitleClass = $(".projTitleClass");

								var _iteratorNormalCompletion6 = true;
								var _didIteratorError6 = false;
								var _iteratorError6 = undefined;

								try {
									for (var _iterator6 = proj.projectImages[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
										var imgs = _step6.value;

										ji++;
										//glyphiconXpand = $( ".glyphicon-expand" );

										aImagesCount[aImagesCount.length] = imgs;

										/**----------===| RIGHT COLUMN PERCENTAGE |===----------**/
										twoColumnsImages.fTwoColumnsQueries(projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
										aImagesRightColumnPercent[aImagesRightColumnPercent.length] = proj.imgRightColumnPercent;
										aImagesWidth[aImagesWidth.length] = twoColumnsImages.RightColumn;
										aImagesHeight[aImagesHeight.length] = twoColumnsImages.NewHeight;

										/**----------===| CREATE IMAGE DIV INSIDE FLUID-CONTAINER |===----------**/
										imageBasicDiv.fCreateBasicElement(proj.title + "_Image", ji, "imageDivClass", fluidContainerIds);
										var imageIds = $("#" + proj.title + "_Image" + ji);
										aImageIds[aImageIds.length] = imageIds; //PUSH

										/**----------===| IMAGE CREATION |===----------**/
										var myImage = new Image();
										var imagesPath = "./images/" + proj.title + "/"; //FILEPATH
										myImage.src = imagesPath + imgs.imgName; //CONCAT
										aImages[aImages.length] = myImage.src; //PUSH

										/**----------===| IMAGE DIV: CSS |===----------**/
										/*        Populating the div with image        *
           **--------------------------------------------**/
										var columnHeight = twoColumnsImages.NewHeight;
										var columnWidth = twoColumnsImages.RightColumn;
										myStyle.fBasicImageStyle(imageIds, columnHeight, columnWidth, myImage.src); //
										/**----------===| IMAGE DESCRIPTIONS |===----------**/
										textDiv.fCreateTextDiv("imgDescription_", ji, "imgDescription_Class", imageIds, imgs.imgDescription, imgs.hoverTitle);
										/*** TEST: Put this outside ajax and into a class **/
										var imageDescriptIds = $("#imgDescription_" + ji); //id = imgDescription_ji
										imageDescriptIds.css({
											"margin-top": twoColumnsImages.NewHeight + 6 //+ "px"
											//"margin-top": columnHeight //400 + "px"
										});
										aImageDescriptIds[aImageDescriptIds.length] = imageDescriptIds; //PUSH

										headerText.fTextQueries(projectContainerWidth, imageDescriptIds, imgDescSmlFontSize, imgDescMidFontSize, imgDescLrgFontSize);
										/**----------===| OPEN DESCRIPTION LINK |===----------**/
										var fullScreen = imgs.fullScreen;
										var linkToOpen = imgs.linkURL;
										var screenHeight = imgs.scrnHeight;
										var screenWidth = imgs.scrnWidth;
										openWindow.fWindowOpen(imageDescriptIds, linkToOpen, fullScreen, screenHeight, screenWidth);
									}
								} catch (err) {
									_didIteratorError6 = true;
									_iteratorError6 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion6 && _iterator6.return) {
											_iterator6.return();
										}
									} finally {
										if (_didIteratorError6) {
											throw _iteratorError6;
										}
									}
								}
							}
						} catch (err) {
							_didIteratorError5 = true;
							_iteratorError5 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion5 && _iterator5.return) {
									_iterator5.return();
								}
							} finally {
								if (_didIteratorError5) {
									throw _iteratorError5;
								}
							}
						}
					});
				}
			}, {
				key: "fProjectQueries",
				value: function fProjectQueries() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					for (var ax = 0; ax < aProjectCount.length; ax++) {
						/**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/
						twoColumnsImgProjects.fTwoColumnsQueries(projectContainerWidth, aProjectRightColumnPercent[ax], aImagesOrigWidth[ax], aImagesOrigHeight[ax]);
						myStyle.fBasicDivStyle(aProjContainerIds[ax], "auto", projectContainerWidth);
						myStyle.fBasicDivStyle(aProjContainrLeftColDivIds[ax], arbitraryNum, twoColumnsImgProjects.LeftColumn);
						myStyle.fBasicDivStyle(aProjRightColDivIds[ax], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn);
						myStyle.fBasicDivStyle(aFluidContainerIds[ax], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn * aProjImagesLength[ax]);

						aNxtPrv[ax].ImgContainer = aFluidContainerIds[ax];
						aNxtPrv[ax].ImgContainerWidth = twoColumnsImgProjects.RightColumn;
						aNxtPrv[ax].fluidContainerWidth = twoColumnsImgProjects.RightColumn * aProjImagesLength[ax];
						myStyle.fBasicDivStyle(aLeftShaderIds[ax], twoColumnsImgProjects.NewHeight, "null", "absolute");
						myStyle.fBasicDivStyle(aRightShaderIds[ax], twoColumnsImgProjects.NewHeight, "null", "absolute");
						anim.fXSlider(aFluidContainerIds[ax], -(aNxtPrv[ax].ImgContainerWidth * aNxtPrv[ax].Num));

						/**----------===| Project Paragraph Columns |===----------**/
						twoColumnsParagProjects.fTwoColumnsQueries(projectContainerWidth, aParagraphRightColumnPercent[ax], 0, 0);
						myStyle.fBasicDivStyle(aProjParagDivIds[ax], "auto", projectContainerWidth);
						myStyle.fBasicDivStyle(aParagLeftColDivIds[ax], arbitraryNum, twoColumnsParagProjects.LeftColumn);
						myStyle.fBasicDivStyle(aParagRightColDivIds[ax], "auto", twoColumnsParagProjects.RightColumn);

						headerText.fTextQueries(projectContainerWidth, aParaghProjTitleIds[ax], projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize);
						headerText.fTextQueries(projectContainerWidth, aParaghProjSubTitleIds[ax], projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize);
						headerText.fTextQueries(projectContainerWidth, aParaghProjlinkURLs[ax], projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize);
					}

					for (var _i = 0; _i < aImagesCount.length; _i++) {
						/**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/
						twoColumnsImagesAnim.fTwoColumnsQueries(projectContainerWidth, aImagesRightColumnPercent[_i], aImagesWidth[_i], aImagesHeight[_i]);
						/***----------=====| Images divs height and width |=====-------------------***/
						anim.fAnimateHeightWidth(aImageIds[_i], twoColumnsImagesAnim.NewHeight, twoColumnsImagesAnim.RightColumn, animTymSlow);
						aImageDescriptIds[_i].css({
							"margin-top": twoColumnsImagesAnim.NewHeight + "px"
						});
						headerText.fTextQueries(projectContainerWidth, aImageDescriptIds[_i], imgDescSmlFontSize, imgDescMidFontSize, imgDescLrgFontSize);
						//twoColumnsVideo.fTwoColumnsQueries( projectContainerWidth, aVideoColumnPercent[ i3 ], aVideoWidth[ i3 ], aVideoHeight[ i3 ] );
					}
				}
			}]);

			return CreateProject;
		}();

		/**-----------=====| EXPORTS |=====-----------**/


		module.exports.CreateProject = CreateProject;
	})();

	/***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

	/***********************************************
  * Project: GonzalesDesign 2016
  * Developer: rolandolloyd@gmail.com
  * Copyright © 2016 GonzalesDesign
  * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
  * Module: Project Template
  ***********************************************/

	(function () {
		/*IIFE:Immediately-Invoked Function Expression*/
		"use strict";

		console.log("Module: CreateProjectYouTube");

		/**----------===| MODULE: CREATE BASICS |===----------**/
		var createBasics = __webpack_require__(3);
		var createDiv = new createBasics.CreateBasicElement();
		var imageBasicDiv = new createBasics.CreateBasicElement();
		//let createStyle = new createBasics.fBasicDivStyle();
		var tagElement = new createBasics.CreateElementAny();

		var youTubeVideo = new createBasics.CreateElementVideo();

		/**----------===| MODULE: CREATE STYLES |===----------**/
		var myStyle = __webpack_require__(4);

		/**----------===| MODULE: CREATE TEXT CONTENT |===----------**/
		var createTextContent = __webpack_require__(2);
		var textDiv = new createTextContent.CreateTextContent();

		/**----------===| MODULE: OPEN WINDOW FUNCTION |===----------**/
		var openWindow = __webpack_require__(6);
		//let textDiv = new openWindow.CreateTextContent();

		/**----------=====| anim |=====----------**/
		var anim = __webpack_require__(1);

		/**----------===| MODULE: TWO COLUMNS |===----------**/
		var twoKolumns = __webpack_require__(5);
		var logoText = new twoKolumns.TextQueriesClass();
		var headerText = new twoKolumns.TextQueriesClass();
		var twoColumnsImages = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImgProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsParagProjects = new twoKolumns.TwoColumnsQueriesClass();
		var twoColumnsImagesAnim = new twoKolumns.TwoColumnsQueriesClass();

		/**----------=====| MODULE: NEXT PREVIOUS ARROWS |=====----------**/
		var nextPreviousNav = __webpack_require__(8);

		//const nxtPrv = new nextPreviousNav.NextPrevNavClass();

		/**-----------=====| DOM CACHING |=====-----------**/
		//let mainContainer = $( ".mainContainer" );

		/**-----------=====| MISC VARS |=====-----------**/
		var additionalHeight = 60;
		var arbitraryNum = 10;
		//ANIMATION TIME
		var animTymSlow = 1;
		var animTymFast = .25;

		/**----------===| FONT SIZE VARIABLES |===----------**/
		var projTitleSmlFontSize = "1.6em";
		var projTitleMidFontSize = "1.8em";
		var projTitleLrgFontSize = "2em";

		var projSubTitleSmlFontSize = "1em";
		var projSubTitleMidFontSize = "1em";
		var projSubTitleLrgFontSize = "1.2em";

		var projDescSmlFontSize = "1em";
		var projDescMidFontSize = "1em";
		var projDescLrgFontSize = "1.2em";

		var imgDescSmlFontSize = "1em";
		var imgDescMidFontSize = "1em";
		var imgDescLrgFontSize = "1.2em";

		var jx = 0;
		var ji = 0;
		var i3 = 0;

		//let projectContainer;
		//let projectContainerWidth;
		// let projContainrLeftColDivIds;
		// let projRightColDivIds;
		// let fluidContainerIds;

		/**----------===| ARRAYS |===----------**/
		var aProjectCount = [];
		var aProjectRightColumnPercent = [];
		var aImagesOrigWidth = [];
		var aImagesOrigHeight = [];
		var aImageDescriptIds = [];
		var aProjContainrLeftColDivIds = [];
		var aProjRightColDivIds = [];
		var aProjImagesLength = [];

		var aFluidContainerIds = [];
		// let aFluidContainerWidth = [];
		// let aFluidContainerHeight = [];

		var aLeftShaderIds = [];
		var aRightShaderIds = [];
		var aNxtPrv = [];

		var aProjParagDivIds = [];
		var aParagLeftColDivIds = [];
		var aParagRightColDivIds = [];
		var aParaghProjTitleIds = [];
		var aParaghProjSubTitleIds = [];
		var aParaghProjlinkURLs = [];
		var aProjContainerIds = []; //aVideoContainerIds
		var aVideoContainerIds = [];

		// let aParagraphContainer = []; //aProjParagDivIds
		// let aProjParagLeftDivIds = []; //aParagLeftColDivIds
		// let aProjParagRightDivIds = []; //aParagRightColDivIds

		var aParagraphRightColumnPercent = [];
		var aParagraphLeftColumnWidth = [];
		//let aParagraphRightColumnWidth = [];

		//let aParaghProjTitleIds = [];
		//let aParaghProjSubTitleIds = [];
		//let aParagraphProjDescription = []; //aParaghProjlinkURLs

		var aImagesRightColumnPercent = [];
		var aImagesCount = [];
		var aImageIds = [];
		//let aImages = [];
		var aImagesWidth = [];
		var aImagesHeight = [];
		//let aImageDescriptIds = [];

		var aVideoColumnPercent = [];
		var aVideoWidth = [];
		var aVideoHeight = [];

		var CreateProject = function () {
			function CreateProject(projContainer, projectJSON) {
				_classCallCheck(this, CreateProject);

				this.ProjContainer = projContainer;
				this.ProjJSON = projectJSON;
			}

			_createClass(CreateProject, [{
				key: "fProjectAjax",
				value: function fProjectAjax() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();
					var promise = $.get("./js/json/" + this.ProjJSON);
					promise.then(function (data) {
						var _iteratorNormalCompletion7 = true;
						var _didIteratorError7 = false;
						var _iteratorError7 = undefined;

						try {
							for (var _iterator7 = data.ProjectData[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
								var proj = _step7.value;

								jx++;
								//rightShaderIds.hide();
								aProjectCount[aProjectCount.length] = proj; //PUSH

								/**----------===| INVOKE TWO COLUMNS |===----------**/
								twoColumnsImgProjects.fTwoColumnsQueries(projectContainerWidth, proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
								aProjectRightColumnPercent[aProjectRightColumnPercent.length] = proj.imgRightColumnPercent; //PUSH
								aImagesOrigWidth[aImagesOrigWidth.length] = proj.imagesWidth; //PUSH
								aImagesOrigHeight[aImagesOrigHeight.length] = proj.imagesHeight; //PUSH

								/**----------===| CREATE PROJECT VIDEO CONTAINER |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_VideoContainer", jx, "videoContainerClass", projectContainer);
								var projContainerIds = $("#" + proj.title + "_VideoContainer" + jx);
								aProjContainerIds[aProjContainerIds.length] = projContainerIds; //PUSH
								myStyle.fBasicDivStyle(projContainerIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");

								/**----------===| CREATE VIDEO-PLACEHOLDER |===----------**/
								youTubeVideo.fCreateVideoDiv("video-placeholder", projContainerIds);
								var videoPlaceholder = $("#video-placeholder");
								myStyle.fBasicDivStyle(videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");

								/**----------===| PARAGRAPH COLUMNS PERCENTAGE |===----------**/
								twoColumnsParagProjects.fTwoColumnsQueries(projectContainerWidth, proj.paragraphRightColumnPercent, 0, 0);
								aParagraphRightColumnPercent[aParagraphRightColumnPercent.length] = proj.paragraphRightColumnPercent;
								aParagraphLeftColumnWidth[aParagraphLeftColumnWidth.length] = twoColumnsParagProjects.LeftColumn;

								/**----------===| CREATE PARAGRAPH CONTAINER |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_Paragraph", jx, "paragraphContainerClass", projectContainer);
								var projParagDivIds = $("#" + proj.title + "_Paragraph" + jx);
								myStyle.fBasicDivStyle(projParagDivIds, "auto", projectContainerWidth);
								aProjParagDivIds[aProjParagDivIds.length] = projParagDivIds; //PUSH

								/**----------===| CREATE PARAGRAPH LEFT COLUMNS |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_ParagLeftColmn", jx, "paragraphLeftColumnClass", projParagDivIds);
								var paragLeftColDivIds = $("#" + proj.title + "_ParagLeftColmn" + jx);
								myStyle.fBasicDivStyle(paragLeftColDivIds, arbitraryNum, twoColumnsParagProjects.LeftColumn);
								aParagLeftColDivIds[aParagLeftColDivIds.length] = paragLeftColDivIds; //PUSH

								/**----------===| CREATE PARAGRAPH RIGHT COLUMNS |===----------**/
								createDiv.fCreateBasicElement(proj.title + "_ParagRightColmn", jx, "paragraphRightColumnClass", projParagDivIds);
								var paragRightColDivIds = $("#" + proj.title + "_ParagRightColmn" + jx);
								myStyle.fBasicDivStyle(paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn);
								aParagRightColDivIds[aParagRightColDivIds.length] = paragRightColDivIds; //PUSH

								/**----------===| CREATE PROJECT TITLES |===----------**/
								textDiv.fCreateTextDiv(proj.title + "_ProjTitle", jx, "projTitleClass", paragRightColDivIds, proj.title);
								var paraghProjTitleIds = $("#" + proj.title + "_ProjTitle" + jx);
								headerText.fTextQueries(projectContainerWidth, paraghProjTitleIds, projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize);
								aParaghProjTitleIds[aParaghProjTitleIds.length] = paraghProjTitleIds; //PUSH

								/**----------===| CREATE PROJECT SUB-TITLES |===----------**/
								textDiv.fCreateTextDiv(proj.title + "_ProjSubTitle", jx, "projSubTitleClass", paragRightColDivIds, proj.subTitle);
								var paraghProjSubTitleIds = $("#" + proj.title + "_ProjSubTitle" + jx);
								headerText.fTextQueries(projectContainerWidth, paraghProjSubTitleIds, projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize);
								aParaghProjSubTitleIds[aParaghProjSubTitleIds.length] = paraghProjSubTitleIds; //PUSH

								/**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/
								textDiv.fCreateTextDiv(proj.title + "_ProjDescription", jx, "projDescriptionClass", paragRightColDivIds, proj.projDescription);
								var paraghProjlinkURLs = $("#" + proj.title + "_ProjDescription" + jx);
								headerText.fTextQueries(projectContainerWidth, paraghProjlinkURLs, projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize);
								aParaghProjlinkURLs[aParaghProjlinkURLs.length] = paraghProjlinkURLs; //PUSH
							}
						} catch (err) {
							_didIteratorError7 = true;
							_iteratorError7 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion7 && _iterator7.return) {
									_iterator7.return();
								}
							} finally {
								if (_didIteratorError7) {
									throw _iteratorError7;
								}
							}
						}
					});
				}
			}, {
				key: "fProjectQueries",
				value: function fProjectQueries() {
					var projectContainer = this.ProjContainer;
					var projectContainerWidth = this.ProjContainer.width();

					for (var e2 = 0; e2 < aProjectCount.length; e2++) {

						twoColumnsImgProjects.fTwoColumnsQueries(projectContainerWidth, aProjectRightColumnPercent[e2], aImagesOrigWidth[e2], aImagesOrigHeight[e2]);
						myStyle.fBasicDivStyle(aProjContainerIds[e2], twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
						var videoPlaceholder = $("#video-placeholder");
						myStyle.fBasicDivStyle(videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");

						/**----------===| Project Paragraph Columns |===----------**/
						twoColumnsParagProjects.fTwoColumnsQueries(projectContainerWidth, aParagraphRightColumnPercent[e2], 0, 0);
						myStyle.fBasicDivStyle(aProjParagDivIds[e2], "auto", projectContainerWidth);
						myStyle.fBasicDivStyle(aParagLeftColDivIds[e2], arbitraryNum, twoColumnsParagProjects.LeftColumn);
						myStyle.fBasicDivStyle(aParagRightColDivIds[e2], "auto", twoColumnsParagProjects.RightColumn);

						headerText.fTextQueries(projectContainerWidth, aParaghProjTitleIds[e2], projTitleSmlFontSize, projTitleMidFontSize, projTitleLrgFontSize);
						headerText.fTextQueries(projectContainerWidth, aParaghProjSubTitleIds[e2], projSubTitleSmlFontSize, projSubTitleMidFontSize, projSubTitleLrgFontSize);
						headerText.fTextQueries(projectContainerWidth, aParaghProjlinkURLs[e2], projDescSmlFontSize, projDescMidFontSize, projDescLrgFontSize);
					}
				}
			}]);

			return CreateProject;
		}();

		/**-----------=====| EXPORTS |=====-----------**/


		module.exports.CreateProject = CreateProject;
	})();
	//);

	/***/
}
/******/]);
//# sourceMappingURL=../bundle.map