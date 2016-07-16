"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******//******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.loaded=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(0);/******/})(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){/***********************************************
	 * Project: Project Name Goes Here
	 * Developer: rolandolloyd@gmail.com
	 * Copyright © 2015 GonzalesDesign
	 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
	 * Module: Index
	 ***********************************************/(function(){/*IIFE:Immediately-Invoked Function Expression*/"use strict";/**----------===| MODULE: LANDING PAGE |===----------**/var landingPage=__webpack_require__(2);landingPage.fIntroAjax();//
// /**----------===| MODULE: IMAGE CAROUSEL |===----------**/
// const imageCarousel = require( './imageCarousel.es6' );
// imageCarousel.fCarouselResize();
//
// /**----------===| MODULE: SERVICES |===----------**/
// const servicesList = require( './servicesList.es6' );
// servicesList.fServicesListAjax();
//
// /**----------===| MODULE: RESPONSES |===----------**/
// const responsesSection = require( './responses.es6' );
// responsesSection.fResponsesAjax();
//
// /**----------===| MODULE: HEALTH CARE |===----------**/
// const halthCareSection = require( './healthCare.es6' );
// halthCareSection.fHealthCareAjax();
//
// /**----------===| MODULE: ABOUT || EXPERIENCE |===----------**/
// const aboutSection = require( './about.es6' );
// aboutSection.fAboutAjax();
//
// /**----------===| FUNCTION: SCREEN RESIZE QUERIES |===----------**/
// let fOnWindowResize = function() {
//
// 	servicesList.fServicesResize();
//
// 	landingPage.fLandingPageResize();
//
// 	imageCarousel.fCarouselResize();
//
// }
//
// $( window ).on( 'resize', fOnWindowResize );
})();/***/},/* 1 *//***/function(module,exports){/**----------===| Created by Odee on 5/18/16.|===----------**/(function(){//IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
"use strict";console.log("Filename: animationFunctions.js");/**-----------=====| TweenMax Reference Variables |=====-----------**//** Description:
	   ** Animation engine using GSAP TweenMax
	   ********************************************************************///let fTweenMax = function() {
var tMx=TweenMax;var easeSine=Sine.easeOut;var power3=Power3.easeOut;var power4=Power4.easeOut;var back=Back.easeOut.config(1);var elastic=Elastic.easeOut;var circular=Circ.easeOut;var expo=Expo.easeOut;var sloMo=SlowMo.ease.config(0.7,0.7,false);var animTym=1;var animTymSlow=1;var animTymFast=.25;//};
/**-----------=====| fOpacityAnim Function |=====-----------**//** Description:
	   ** Animates element's opacity from 0% to 100%
	   *************************************************************/var fOpacityAnim=function fOpacityAnim(elem){elem.css({"opacity":0});tMx.to(elem,animTym,{opacity:1,ease:easeSine});};/**-----------=====| fXSlider Function |=====-----------**//** Description:
	   ** Animates element's horizontal positions
	   ** Use the attribute "left" instead of the matrix "x" (translateX())
	   ** as a key and the horizPos param as value.
	   ** http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
	   ****************************************************************/var fXSlider=function fXSlider(elem,horizPos){//fOpacityAnim(elem);
tMx.to(elem,animTym,{left:horizPos,ease:back});//console.log("elem, horizPos: ", elem, horizPos);
};// /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
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
/**-----------=====| fAnimateHeightWidth Function |=====-----------**//** Descriptions:
	   ** Animates element's height and width
	   **----------------------------------------------------------------**/var fAnimateHeightWidth=function fAnimateHeightWidth(elem,eHeight,eWidth,animTym){//tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: power3});
tMx.to(elem,animTym,{height:eHeight,width:eWidth,ease:power3});};// let fImageHeightWidth = function(imgsArray, ht, wt) {
//   /**----( Setting array member's heights and widths )----**/
//   for (let i = 0; i < imgsArray.length; i++) {
//     fAnimateHeightWidth(imgsArray[i], ht, wt); //rowImgRightColmnWidth);
//     console.log("imgsArray[i]: ", imgsArray[i]);
//   }
// };
var fFontSizer=function fFontSizer(elem,sizeFont){tMx.to(elem,animTymSlow,{fontSize:sizeFont,ease:power3});};/**-----------=====| EXPORTS |=====-----------**//** DESCRIPTIONS:
	   ** ANIMATION MODULES
	   ** Webpack: module.exports
	   **----------------------------------------------------------------**///module.exports.fTweenMax = fTweenMax;
module.exports.fXSlider=fXSlider;module.exports.fAnimateHeightWidth=fAnimateHeightWidth;//module.exports.fImageHeightWidth = fImageHeightWidth;
module.exports.fFontSizer=fFontSizer;//module.exports.animTym = animTym;
/**----------------------------------------------------------------**/console.log("\n\t  Filename: animationFunctions.js\n\t  module.exports.fXSlider = fXSlider\n\t  ");/**----------------------------------------------------------------**/})();/***/},/* 2 *//***/function(module,exports,__webpack_require__){/**----------===| Created by Odee on 5/17/16.|===----------**//****************************************
	 * Project: R.Lloyd Gonzles Portfolio Website
	 * URL: RLGonzales.com
	 * Contact: rolandolloyd@gmail.com
	 * Copyright © 2015 GonzalesDesign
	 * Platform: ES2015, Webpack, Babel & Sass
	 ****************************************/(function(){/*IIFE:Immediately-Invoked Function Expression*/"use strict";/**-----------=====| IMPORT | REQUIRE |=====-----------**//** DESCRIPTIONS:
		 ** FILES IMPORTED FROM OTHER JS FILES
		 ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
		 **----------------------------------------------------------------**/// let $ = require("jquery");
// require('bootstrap');
//const TweenMax = require('gsap');
//const YouTubeIframeLoader = require('youtube-iframe');
//let onYouTubeIframeAPIReady = require('./ytpScript');
//require('./smoothscroll');
/**----------=====| nextPreviousNav |=====----------**/var nextPreviousNav=__webpack_require__(3);// const nextPreviousImage = new nextPreviousNav.NextPreviousClass();
/**----------=====| anim |=====----------**/var anim=__webpack_require__(1);/**----------=====| twoKolumns |=====----------**/var twoKolumns=__webpack_require__(4);//ANIMATION TIME
var animTymSlow=1;var animTymFast=.25;//let anim = new anim.animationFunctions();
/**----------------------------------------------------------------**/console.log("\n\t    Filename: codeArchitecture_X.js);\n\t    Import || Require: nextPreviousArrows.js\n\t    Import || Require: animationFunctions.js\n\t    Import || Require: twoColumns.js\n\t    ");/**----------------------------------------------------------------**//*
		 console.log (`
		 Things to do:
		 - Activate the image navigations
		 - Include the youTube video on OwnPhones
		 - Modules: Seperate the class and function from the Ajax and animation
		 - More research on Promise, Ajax & JSON
	
		 May 16, 2016:
		 - Promise
		 - Arrow function
		 - String literals
		 - Transferred JS code to external js file
	
		 May 17, 2016:
		 - Image arrow navigations
		 - computer crashed @ 7pm. Restarted 5x.
	
		 May 18, 2016:
		 - Integrated YouTube video
		 - Image slider
	
		 May 19, 2016:
		 - Image description
	
		 May 23 - 24:
		 - Re-wrote class for generating div element
		 - Seperated the class and style from each other. Make a separate calls in ajax for... of... loops
		 - Easier to read and update
	
		May 25, Wednesday:
		- Start working on the page animations
	
		May 29, 30, 31 - June 6: NEXT PREVIOUS NAVIGATION
		- Worked on the next previous image navigation.
		- Finally got it to work by declaring class for each project
		- and push them to an array to be used in the animation events
	
		June 7: Tuesday: VIDEO
		- Started to work on the video
		June 8 - 9:
		- Video Height and Width:
		June 10: Friday AM
		- Video height and width working but code needs cleaning
		- Everything seems to be working fine.
	
		- TO DO:
		  - START CLEANING CODE SO I CAN START BUILDING THE LANDING PAGE
		    - DELETE FUNCTIONS THAT ARE NOT BEING USED
		    - CLEAN UP ALL THE COMMENTS: KEEP JUST THE IMPORTANT ONES!
		  - SCREEN QUERIES: FONT SIZE, DISPLAY PERCENTAGE
		  - CONVERT ALL BOOTSTRAP DEPENDENCIES TO LOCAL JS
		    - BEST TO NOT RELY ON BOOTSTRAP
	
		 `);
		 *//************ ANIMATION ENGINE ************/var tMx=TweenMax;var easeSine=Sine.easeOut;var easePower=Power3.easeOut;// var animTymSlow = .5;
// var zeroTym = 0;
// let fLog = function(logTHis) {
//   console.log(logTHis);
// };
// /**----------=====| fRoundToTwo Function |=====----------**/
// /** Description:
//  ** fRoundToTwo: rounds the decimals to two.
//  **------------------------------------------------------**/
// let fRoundToTwo = function(num) {
//   return +(Math.round(num + "e+2") + "e-2");
// };
//let numero = 0;
// let fNxtPrvDosKolumn = function(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth) {
//   //let numero = 0;
//   rightArrow.click(function() {
//     numero++;
//     console.log(numero);
//   });
// }
/**----------=====| DOM CACHING |=====----------**/var outWindowWidth=window.outerWidth;var inWindowWidth=window.innerWidth;var inWindowHeight=window.innerHeight;var container=$(".container");var containerWidth=container.width();//let containerId = $("#containerId");
//console.log(`containerWidth: ${containerWidth}`);
var introFluidContainer=$(".introFluidContainer");var introFluidContainerWidth=introFluidContainer.width();//console.log(`introFluidContainerWidth: ${introFluidContainerWidth}`);
var introContainer=$(".introContainer");var introContainerWidth=introContainer.width();var logoContainer=$(".logoContainer");//let logoContainerHeight = logoContainer.height();
//let heightPercentage = inWindowHeight * .05;
//console.log(`logoContainerHeight: ${logoContainerHeight}`);
//console.log(`heightPercentage: ${heightPercentage}`);
var mainContainer=$(".mainContainer");var mainContainerWidth=mainContainer.width();var mainContainerId=$("#mainContainerId");//console.log (`mainContainerWidth: `);
/**----------===| use for dynamically populated |===----------**/var gdContainer=$(".gdContainer");var gdContainerWidth=gdContainer.width();var gdContainerId=$("#gdContainerId");var glyphicon=void 0;/**----------===| FONT SIZE VARIABLES |===----------**/var logoTitleSmlFontSize="4em";var logoTitleMidFontSize="7em";var logoTitleLrgFontSize="8em";var logoSubTitleSmlFontSize="1em";var logoSubTitleMidFontSize="1.2em";var logoSubTitleLrgFontSize="1.6em";var introCalloutFontSize=".9em";var codingBtnFontSize=".9em";var headerSmlFontSize="1.4em";var headerMidFontSize="1.6em";var headerLrgFontSize="1.8em";var projTitleSmlFontSize="1.6em";var projTitleMidFontSize="1.8em";var projTitleLrgFontSize="2em";var projSubTitleSmlFontSize="1em";var projSubTitleMidFontSize="1em";var projSubTitleLrgFontSize="1.2em";var projDescSmlFontSize="1em";var projDescMidFontSize="1em";var projDescLrgFontSize="1.2em";var imgDescSmlFontSize="1em";var imgDescMidFontSize="1em";var imgDescLrgFontSize="1.2em";// const imgDescSmlFontSize = "12px";
// const imgDescMidFontSize = "12px";
// const imgDescLrgFontSize = "16px";
/**----------===| ARRAYS: USE FOR ANIMATIONS |===----------**/var aIntroImages=[];var aSectionsCount=[];var aSectionsRightColumnPercent=[];var aSectionHeaders=[];var aSectionHeadrLeftColmn=[];var aSectionHeadrRightColmn=[];var aSectionHeadrTitles=[];var aProjectsCount=[];var aProjectRightColumnPercent=[];var aProjContainerIds=[];var aProjLeftColDivIds=[];var aProjRightColDivIds=[];var aProjImagesLength=[];var aProjectDisplay=[];var aLeftShaderIds=[];var aRightShaderIds=[];var aCarouselControl=[];var aParagraphContainer=[];//let aProjParagDivIds = [];
var aProjParagLeftDivIds=[];var aProjParagRightDivIds=[];var aParagraphRightColumnPercent=[];var aParagraphLeftColumnWidth=[];var aParagraphRightColumnWidth=[];var aParaghProjTitleIds=[];var aParaghProjSubTitleIds=[];var aParagraphProjDescription=[];var aImagesCount=[];var aFluidContainerIds=[];var aImageFluidContainerIds=[];var aImagesRightColumnPercent=[];var aFluidContainerWidth=[];var aFluidContainerHeight=[];var aImagesOrigWidth=[];var aImagesOrigHeight=[];//TEST
var a2ColImgProjRightCol=[];var a2ColImgProjCount=[];//let aTempClickedCount = [1, 2, 3, 4]
var aImages=[];var aImageIds=[];var aImagesWidth=[];var aImagesHeight=[];var aImageDescriptIds=[];var aVideoColumnPercent=[];var aVideoWidth=[];var aVideoHeight=[];var aKounter=[];var aKontainer=[];var fluidContainerW=void 0;var imageW=void 0;var aNextNum=[];//class instances array:
var aNxtPrv=[];/**----------=====| JS CSS STYLE |=====----------**//** Description:
		 ** CSS within the ES6.
		 ** Usage:
		 ** Provides for a dynamic parameters referencing.
		 **----------------------------------------------**/var CSSStyle=function(){function CSSStyle(){_classCallCheck(this,CSSStyle);}_createClass(CSSStyle,[{key:"fCSSstyle",value:function fCSSstyle(elemId,elemWidth,elemHeight){elemId.css({/*"padding-left"    : "-15px",
					 "padding-right"   : "-15px",*///"background"      : "url(" + imgSrc + ") no-repeat",
//"background-size" : "cover", //cover 100%
"width":elemWidth,//"1300px", //containerWidth,
"height":elemHeight,//ImageHeight(origWt, origHt), "100%", //
"border":"0px solid red","background-color":"teal","position":"relative"//relative absolute
//"float"           : "left"
/*"overflow"        : "hidden"//hidden; visible*/});}}]);return CSSStyle;}();var mainContainerCSS=new CSSStyle();mainContainerCSS.fCSSstyle(mainContainerId,mainContainerWidth,"200px");var fDivStyle=function fDivStyle(divClassName,divHeight,divWidth){var divOverflow=arguments.length<=3||arguments[3]===undefined?"visible":arguments[3];var borderColor=arguments[4];//twoColTest.fTwoColumnsQueries (90, 544);
//console.log ("twoColTest.LeftColumn2: ", twoColTest.LeftColumn);
//console.log ("twoColTest.RightColumn2: ", twoColTest.RightColumn);
divClassName.css({"width":divWidth,"height":divHeight,"position":"relative",//relative absolute
"float":"left","overflow":divOverflow,//hidden; visible
//"border"  : "0px solid " + borderColor
//"border-bottom" : "10px solid",
"border-color":borderColor});};var fImgDivStyle=function fImgDivStyle(divNameId,imgSrc,divHeight,divWidth,divOverflow){divNameId.css({//"padding-left"    : "-15px",
//"padding-right"   : "-15px",
"background":"url("+imgSrc+") no-repeat","background-size":"cover",//cover 100%
"width":divWidth,"height":divHeight,"background-color":"teal","position":"relative",//relative absolute
"float":"left","display":"block","overflow":divOverflow,//"hidden", //hidden; visible
//"border"          : "0px solid red"
"border-color":"red"});};var fParagStyle=function fParagStyle(divClassName){divClassName.css({"width":"100%",//"height"          : "100%",
/*"font-family"     : "Open Sans",
				 "font-weight"     : "300",
				 "font-size"       : "1.2em",*/"background-color":"beige","position":"relative",//relative absolute
"float":"left"//"display"         : "block",
//"border"          : "1px solid red"
});};var fImgDescriptIdStyle=function fImgDescriptIdStyle(divNameId,imgHeight){divNameId.css({"font-size":"2em","width":"100%","padding-top":"0px","height":"50px","padding-right":"30px","letter-spacing":"1px","text-shadow":"2px 2px 2px rgba(0, 0, 0, .3)","margin-top":imgHeight+"px"});};/***************************| CLASS DECLARATIONS |***************************//**----------=====| TwoColumnsQueriesClass Class |=====----------------------------------------------------**//** Description:
		 ** Class to calculate the two columns within the container.
		 ** Provided percentage argument is pulled from json and is use for the right column converted to pixel.
		 ** The left column will have the container's width minus the right column width.
		 **--------------------------------------------------------------------------------------------------**/// class TwoColumnsQueriesClass {
//   constructor() {}
//
//   fTwoColumnsQueries(rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
//     if (gdContainerWidth <= 600) {
//       rightColumnPercentage = 95;
//       this.RightColumn = Math.round(gdContainerWidth * (rightColumnPercentage / 100));
//     // this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
//     // this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
//     // this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
//     } else {
//       rightColumnPercentage = rightColumnPercentage;
//       this.RightColumn = Math.round(gdContainerWidth * (rightColumnPercentage / 100));
//     // this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
//     // this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
//     // this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
//     }
//     this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
//     this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
//     this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
//   }
// }
/**----------===| Columns: Class Instances |===----------**/var twoColumnsIntroSection=new twoKolumns.TwoColumnsQueriesClass();var twoColumnsHeaderSection=new twoKolumns.TwoColumnsQueriesClass();var twoColumnsImgProjects=new twoKolumns.TwoColumnsQueriesClass();var twoColumnsParagProjects=new twoKolumns.TwoColumnsQueriesClass();var twoColumnsImages=new twoKolumns.TwoColumnsQueriesClass();var twoColumnsVideo=new twoKolumns.TwoColumnsQueriesClass();//let twoColumnsImgProjectsAnim = new twoKolumns.TwoColumnsQueriesClass();
var twoColumnsImagesAnim=new twoKolumns.TwoColumnsQueriesClass();//TEMP: THREE COLUMNS TEST
console.log("inWindowWidth: ",inWindowWidth);var oneThirdTest=new twoKolumns.ThreeColumnsClass();oneThirdTest.fThreeColumns(gdContainerWidth);/**----------=====| CreateElementDiv Class |=====----------**//** Description:
		 ** Parent class template for creating basic generic divs.
		 ** To minimize the creation of multiple methods that are similar in functionalities.
		 **--------------------------------------------------------**/var CreateElementDiv=function(){function CreateElementDiv(){_classCallCheck(this,CreateElementDiv);}//this.divName;
//elemNameClass, elemNameId, divName) {
//this.InstanceVarOrProperty = instanceVar;
//this.RightColumn           = rightColumn;
//this.LeftColumn            = columnDiv;
//this.ElemNameClass;// = elemNameClass;
//this.ElemNameId;//    = elemNameId;
//this.DivName;// = divName;
/**---------- To access these properties outside, use classInstance.property ----------**//** Generic method for creating div element **/_createClass(CreateElementDiv,[{key:"fCreateDiv",value:function fCreateDiv(title,counter,appendedTo){this.divName=document.createElement("div");this.divName.id=title+counter;//set id // title + "Id_" + counter;
this.divName.className=title+"Class";//set className
//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
$(this.divName).appendTo(appendedTo);//divName.innerHTML = ("<!--/*****************/-->"); //for testing
}}]);return CreateElementDiv;}();/**------------=====| CreateBasicElement Class |=====------------**//** Description:
		 ** CreateBasicElement class: For creating basic elements like divs.
		 **--------------------------------------------------------------**/var CreateBasicElement=function(){function CreateBasicElement(){_classCallCheck(this,CreateBasicElement);this.titleName;}_createClass(CreateBasicElement,[{key:"fCreateBasicElement",value:function fCreateBasicElement(titleId,counter,titleClass,appendedTo){this.titleName=document.createElement("div");this.titleName.id=titleId+counter;//set id // title + "Id_" + counter;
this.titleName.className=titleClass;//set className
//let titleNameId     = $ ("#" + title + "Id_" + counter); //get id
$(this.titleName).appendTo(appendedTo);//fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
}}]);return CreateBasicElement;}();var BasicTextContent=function(_CreateBasicElement){_inherits(BasicTextContent,_CreateBasicElement);function BasicTextContent(){_classCallCheck(this,BasicTextContent);return _possibleConstructorReturn(this,Object.getPrototypeOf(BasicTextContent).call(this));}_createClass(BasicTextContent,[{key:"fBasicTextContent",value:function fBasicTextContent(titleId,counter,titleClass,appendedTo,textString){_get(Object.getPrototypeOf(BasicTextContent.prototype),"fCreateBasicElement",this).call(this,titleId,counter,titleClass,appendedTo);this.titleName.innerHTML=textString;}}]);return BasicTextContent;}(CreateBasicElement);/**------------=====| fBasicDivStyle CSS |=====------------*, "relative"*/var fBasicDivStyle=function fBasicDivStyle(divName,divHeight,divWidth,divPosition){//console.log("divName: ", divName);
divName.css({"width":divWidth,"height":divHeight,"position":divPosition,//relative absolute
"float":"left"//"overflow": divOverflow, //hidden; visible
//"border": "0px solid red" //+ borderColor
//"border-bottom" : "10px solid",
//"border-color": borderColor
});//anim.fAnimateHeightWidth(divName, divHeight, divHeight, animTymSlow);
};/**------------=====| fBasicIntroStyle CSS |=====------------**/var fBasicIntroStyle=function fBasicIntroStyle(divName,divHeight,divWidth){//console.log("divName: ", divName);
divName.css({"width":divWidth,"height":divHeight//"position": "absolute", //relative absolute
//"float": "left",
//"z-index": "100",
//"margin-top": inWindowHeight - (divHeight + heightPercentage),
//"border": "1px solid yellow"
});//anim.fAnimateHeightWidth(divName, divHeight, divHeight, animTymSlow);
};var fLogoContainer=function fLogoContainer(borderColor){var logoContainer=$(".logoContainer");//let logoContainerHeight = logoContainer.height();
//let heightPercentage = inWindowHeight * .05;
//console.log ("winHeight: ", winHeight);
//console.log ("heightPercentage: ", heightPercentage);
//logoContainer.css ({"top": (winHeight + (logoContainerHeight - 300))});
logoContainer.css({//"margin-top": inWindowHeight - (logoContainerHeight + heightPercentage)
"border-top":"4px double"+borderColor,"border-bottom":"6px double"+borderColor});};/**-----{ fLogoContainer: Adjust the logo container's top position }-----**///fLogoContainer();
/**------------=====| fBasicImageStyle CSS |=====------------**/var fBasicImageStyle=function fBasicImageStyle(divName,divHeight,divWidth,imgSrc){divName.css({"width":divWidth,"height":divHeight,//"background": "url(" + imgSrc + ")  center center fixed",
"background":"url("+imgSrc+") no-repeat","background-size":"cover",//cover 100%
"position":"relative",//relative absolute
"float":"left"//"overflow": divOverflow, //hidden; visible
//"border"  : "0px solid " + borderColor
//"border-top": "0px solid red"
//"border-color": borderColor
});};/**------------=====| fBasicImageStyle CSS |=====------------**/var fIntroImageStyle=function fIntroImageStyle(divName,divHeight,divWidth,imgSrc){divName.css({"width":divWidth,"height":divHeight,"background":"url("+imgSrc+")  center center fixed",//"background": "url(" + imgSrc + ") no-repeat",
"background-size":"cover",//cover 100%
"position":"relative",//relative absolute
"float":"left"//"overflow": divOverflow, //hidden; visible
//"border"  : "0px solid " + borderColor
//"border-top": "0px solid red"
//"border-color": borderColor
});};var createDiv=new CreateBasicElement();var sectionHeaderText=new BasicTextContent();//const createDiv = new CreateBasicElement();
var imageBasicDiv=new CreateBasicElement();/**------------=====| End CreateBasicElement Class |=====------------**//**----------=====| ProjectDiv Class |=====----------**//** Description:
		 ** ProjectDiv class template is an extension of the CreateElementDiv class.
		 ** For creating project container divs.
		 ***********************/var ProjectDiv=function(_CreateElementDiv){_inherits(ProjectDiv,_CreateElementDiv);function ProjectDiv(){_classCallCheck(this,ProjectDiv);return _possibleConstructorReturn(this,Object.getPrototypeOf(ProjectDiv).call(this));}_createClass(ProjectDiv,[{key:"fCreateProjDiv",value:function fCreateProjDiv(title,counter,appendedTo,divHeight,divWidth,divOverflow){_get(Object.getPrototypeOf(ProjectDiv.prototype),"fCreateDiv",this).call(this,title,counter,appendedTo);var divClass=$("."+title+"Class");//get class
fDivStyle(divClass,divHeight,divWidth,divOverflow,"grey");}}]);return ProjectDiv;}(CreateElementDiv);/**----------=====| ColumnDiv Class |=====----------**//** Description:
		 ** ColumnDiv class template is an extension of the CreateElementDiv class.
		 ** For creating column divs.
		 ***********************/var ColumnDiv=function(_CreateElementDiv2){_inherits(ColumnDiv,_CreateElementDiv2);function ColumnDiv(){_classCallCheck(this,ColumnDiv);return _possibleConstructorReturn(this,Object.getPrototypeOf(ColumnDiv).call(this));}_createClass(ColumnDiv,[{key:"fCreateColumnDiv",value:function fCreateColumnDiv(title,counter,appendedTo,divHeight,divWidth,divOverflow){_get(Object.getPrototypeOf(ColumnDiv.prototype),"fCreateDiv",this).call(this,title,counter,appendedTo);var divClass=$("."+title+"Class");//get class
var divNameId=$("#"+title+counter);//get id
fDivStyle(divNameId,divHeight,divWidth,divOverflow,"black");//DELETE COLOR
//divClass.css({"height": "250px"}); //testing
}}]);return ColumnDiv;}(CreateElementDiv);/**----------=====| ImgDiv Class |=====----------**//** Description:
		 ** ImgDiv class template is an extension
		 ** of the CreateElementDiv class.
		 ** For creating image divs.
		 **----------------------------------------------**/var ImgDiv=function(_CreateElementDiv3){_inherits(ImgDiv,_CreateElementDiv3);function ImgDiv(){_classCallCheck(this,ImgDiv);return _possibleConstructorReturn(this,Object.getPrototypeOf(ImgDiv).call(this));}_createClass(ImgDiv,[{key:"fCreateImgDiv",value:function fCreateImgDiv(title,counter,appendedTo,imgSrc,divHeight,divWidth,divOverflow){_get(Object.getPrototypeOf(ImgDiv.prototype),"fCreateDiv",this).call(this,title,counter,appendedTo);//let divClass = $ ("." + title + "Class"); //get class
/** getting the div id name has to follow the same convention
				 ** as it was set on the parent class.
				 ** this.divName.id        = title + "Id_" + counter; //set id name
				 ** let divNameId = $ ("#" + title + "Id_" + counter); //get id name
				 ** additional id name customization has to be set at the instance level.
				 ** see: imgDiv.fCreateImgDiv (proj.title+"_Image", i3, fluidContainerIds...
				 ****************************************************************************/var divNameId=$("#"+title+counter);//get id //("#" + title + "Id_" + counter)
fImgDivStyle(divNameId,imgSrc,divHeight,divWidth,divOverflow);}}]);return ImgDiv;}(CreateElementDiv);/**----------=====| TextContent Class |=====----------**//** Description:
		 ** TextContent class template is an extension
		 ** of the CreateElementDiv class.
		 ** For creating innerHTML divs. ************//**------------**/var TextContent=function(_CreateElementDiv4){_inherits(TextContent,_CreateElementDiv4);function TextContent(){_classCallCheck(this,TextContent);return _possibleConstructorReturn(this,Object.getPrototypeOf(TextContent).call(this));}_createClass(TextContent,[{key:"fCreateSimpleTextDiv",value:function fCreateSimpleTextDiv(name,counter,appendedTo,textString){_get(Object.getPrototypeOf(TextContent.prototype),"fCreateDiv",this).call(this,name,counter,appendedTo);this.divName.innerHTML=textString;}},{key:"fCreateTextDiv",value:function fCreateTextDiv(name,counter,nameClass,appendedTo,textString,titleString){_get(Object.getPrototypeOf(TextContent.prototype),"fCreateDiv",this).call(this,name,counter,appendedTo);//this.nameName = document.createElement("div");
//this.nameName.id = nameId + counter; //set id // name + "Id_" + counter;
this.divName.className=nameClass;//set className
//let nameNameId     = $ ("#" + name + "Id_" + counter); //get id
//$(this.nameName).appendTo(appendedTo);
this.divName.innerHTML=textString;if(titleString){this.divName.title=titleString;}//fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
}}]);return TextContent;}(CreateElementDiv);/**----------=====| CreateElementVideo Class |=====----------**//** Description:
		 ** Class template for creating div specifically for YouTube video.
		 ***********************/var CreateElementVideo=function(){function CreateElementVideo(){_classCallCheck(this,CreateElementVideo);}_createClass(CreateElementVideo,[{key:"fCreateVideoDiv",value:function fCreateVideoDiv(videoId,appendedTo,divHeight,divWidth){var divName=document.createElement("div");divName.id=videoId;//set id
var divClass=$("."+videoId+"Class");//get class
var divId=$("#"+videoId);//get id
fDivStyle(divClass,divHeight,divWidth,"red");//DELETE COLOR
$(divName).appendTo(appendedTo);}}]);return CreateElementVideo;}();/**----------=====| CreateElementAny Class |=====----------**//** Description:
		 ** Class template for creating basic "a" tag.
		 ***********************/var CreateElementAny=function(){function CreateElementAny(){_classCallCheck(this,CreateElementAny);}/** Generic method for creating a tag element **/_createClass(CreateElementAny,[{key:"fCreateTag",value:function fCreateTag(tagType,className,title,counter,appendedTo){var divName=document.createElement(tagType);divName.id=title+"Id_"+counter;//set id
divName.className=className;//title + "Class";
divName.href="#modalCarousel";//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
$(divName).appendTo(appendedTo);}}]);return CreateElementAny;}();/**----------=====| CREATE BUTTON ELEMENT CLASS |=====----------**//** Description:
		 ** Class template for creating basic "BUTTON" tag.
		 ***********************/var CreateElementButton=function(){function CreateElementButton(){_classCallCheck(this,CreateElementButton);}/** Generic method for creating a tag element **/_createClass(CreateElementButton,[{key:"fCreateBtn",value:function fCreateBtn(className,idName,counter,appendedTo,label){var divName=document.createElement("BUTTON");divName.id=idName+"Id_"+counter;//set id
divName.className=className;//title + "Class";
//divName.href = "#modalCarousel";
//let divNameId     = $ ("#" + title + "Id_" + counter); //get id
$(divName).appendTo(appendedTo);var buttonLabel=document.createTextNode(label);$(buttonLabel).appendTo(divName);}}]);return CreateElementButton;}();var createButton=new CreateElementButton();//TEST QUERIES
// console.log("outWindowWidth: ", outWindowWidth);
// console.log("inWindowWidth: ", inWindowWidth);
// console.log("gdContainerWidth: ", gdContainerWidth);
// let fScreenQueriesX = () => {
//   //console.log("gdContainerWidth:2 ", gdContainerWidth);
//   //let projTitleClass = document.getElementsbyClassName(projTitleClass)
//   if (gdContainerWidth >= "200px") {
//     //console.log("gdContainerWidth:3 ", gdContainerWidth);
//     //className = $("." + className);
//     //let className = document.getElementsbyClassName(className)
//     let projTitleClass = $(".projTitleClass");
//     //console.log("projTitleClass: ", projTitleClass);
//     projTitleClass.css({
//       "font-size": "1em",
//       "color": "red"
//     })
//   } else {
//     //console.log("gdContainerWidth:4 ", gdContainerWidth);
//     let projTitleClass = $(".projTitleClass");
//     projTitleClass.css({
//       "font-size": "3em",
//       "color": "red"
//     })
//   }
// }
//fScreenQueries();
//projTitleClass = $(".projTitleClass");
// fScreenQueries(projTitleClass);
// projTitleClass.css({
//   "font-size": "1em",
//   "color": "red"
// })
//console.log("projTitleClass: ", projTitleClass);
/**----------===| COLUMNS PERCENTAGE |===----------**/var fIntroColumnQueriesXX=function fIntroColumnQueriesXX(screenWidth,elemWidth,columnPercentage){// console.log("screenWidth: ", screenWidth);
// console.log("elemWidth: ", elemWidth);
// console.log("columnPercentage: ", columnPercentage);
if(screenWidth<=500){elemWidth=95;}else{elemWidth=columnPercentage;}};// /**-----------=====| anim.fAnimateHeightWidth Function |=====-----------**/
// /** Descriptions:
//  ** Animates element's height and width
//  **----------------------------------------------------------------**/
// let anim.fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
//   //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
//   tMx.to(elem, animTym, {
//     height: eHeight,
//     width: eWidth,
//     ease: easePower
//   });
// };
// let fFontSizer = function(elem, sizeFont) {
//   tMx.to(elem, animTymSlow, {
//     fontSize: sizeFont,
//     ease: easePower
//   });
// // tMx.to(elem, animTymSlow, {
// //   scale: sizeFont,
// //   ease: easePower
// // });
// };
// class TextQueriesClass {
//   constructor() {
//     //   this.gdContnrWidth = gdContnrWidth;
//     //   this.elem = elem;
//     //   this.smlFntSize = smlFntSize;
//     //   this.midFntSize = midFntSize;
//     //   this.lrgFntSize = lrgFntSize;
//   }
//
//   fTextQueries(gdContnrWidth, elem, smlFntSize, midFntSize, lrgFntSize) {
//     //console.log("gdContnrWidth: ", gdContnrWidth);
//     if (gdContnrWidth <= 400) {
//       fFontSizer(elem, smlFntSize); //"4em"
//       elem.css({
//         "padding-left": "20px"
//       })
//     //fFontSizer(logoSubTitle, ".8em");
//     } else if (gdContnrWidth > 400 && gdContnrWidth <= 600) {
//       fFontSizer(elem, midFntSize); //"4em"
//       elem.css({
//         "padding-left": "20px"
//       })
//     // fFontSizer(logoTitle, "7em");
//     // fFontSizer(logoSubTitle, "1.2em");
//     } else {
//       fFontSizer(elem, lrgFntSize); //"4em"
//       elem.css({
//         "padding-left": "0px"
//       })
//     // fFontSizer(logoTitle, "8em");
//     // fFontSizer(logoSubTitle, "1.4em");
//     }
//   }
// }
var logoText=new twoKolumns.TextQueriesClass();var headerText=new twoKolumns.TextQueriesClass();// class ScreenQueriesClass {
//   constructor() {
//     //this.ColumnPercentage;
//     //console.log("constructor: this.ColumnPercentage: ", this.ColumnPercentage);
//   }
//   fScreenQueries(gdContnrWidth, divName) {
//     //console.log("fScreenQueries: this.ColumnPercentage: ", this.ColumnPercentage);
//     // if (gdContnrWidth < 400) {
//     //   fFontSizer(logoTitle, "4em");
//     //   fFontSizer(logoSubTitle, ".8em");
//     //   this.ColumnPercentage = 95;
//     // } else if (gdContnrWidth >= 400 && gdContnrWidth <= 500) {
//     //   fFontSizer(logoTitle, "7em");
//     //   fFontSizer(logoSubTitle, "1.2em");
//     //   this.ColumnPercentage = 90;
//     // } else {
//     //   fFontSizer(logoTitle, "8em");
//     //   fFontSizer(logoSubTitle, "1.4em");
//     //   this.ColumnPercentage = columnPercentage;
//     // }
//     //console.log("this.ColumnPercentage: ", this.ColumnPercentage);
//     console.log("gdContnrWidth: ", gdContnrWidth);
//     if (gdContnrWidth <= 600) {
//       console.log("<= 600");
//       this.ColumnPercentage = 95;
//     // let rightColumnDivWidth = Math.round(gdContnrWidth * (this.ColumnPercentage / 100));
//     // console.log("rightColumnDivWidth: ", rightColumnDivWidth);
//     // divNameWidth = divName
//     } else {
//       console.log("else > 600");
//       this.ColumnPercentage = logoTitleColumnPercent;
//     }
//   }
// }
// let logoColumn = new ScreenQueriesClass();
/**----------=====| OPEN TO NEW WINDOW CLASS |=====----------**//** DESCRIPTION:
		 *  To open new html blank window
		 *  Instead of using href
		 *  location.href doesn't offer opening to a seperate window
		 *  window.open does but it's a pop-up window and end users can filter it
		 *------------------------------------------------------------------------*/var OpenWindow=function(){function OpenWindow(){_classCallCheck(this,OpenWindow);}_createClass(OpenWindow,[{key:"fWindowOpen",value:function fWindowOpen(idName,pageToOpen){idName.click(function(){//console.log("clicked!")
// location.href = "http://www.google.com";
window.open(pageToOpen,'_blank');//, "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
});}}]);return OpenWindow;}();var openLink=new OpenWindow();//openLink.fWindowOpen(idName, pageToOpen)
/**----------=====| fWindowOpen2: FUNCTION FOR OPENING TEXT LINKS |=====----------**//**DESCRIPTION: To open page link from the image description link
		--------------------------------------------------------------------**/var glyphiconXpand=void 0;var fWindowOpen2=function fWindowOpen2(idName,pageToOpen,fs,scrnHt,scrnWt){//console.log("idName: ", idName);
//console.log("pageToOpen: ", pageToOpen);
if(pageToOpen==="noLink"){//link is null!
}else{idName.mouseover(function(){idName.css({"color":"Orange","cursor":"pointer","text-decoration":"none"});glyphiconXpand.css({"color":"Orange","cursor":"pointer","text-decoration":"none"});});idName.mouseout(function(){idName.css({"color":"white"});glyphiconXpand.css({"color":"white","opacity":".90"});});idName.click(function(){if(scrnHt==="screen.height"){scrnHt=window.screen.height;console.log("scrnHt: ",scrnHt);console.log(typeof scrnHt==="undefined"?"undefined":_typeof(scrnHt));}if(scrnWt==="screen.width"){scrnWt=window.screen.width;console.log("scrnWt: ",scrnWt);}//console.log("clicked!")
// location.href = "http://www.google.com";
//window.open(pageToOpen, '_blank'); //, "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
//window.open(pageToOpen, "_blank", "fs", "fullscreen=yes")
if(fs==="yes"){//window.open(pageToOpen, '_blank', 'height=' + screen.height + ', width=' + screen.width);
window.open(pageToOpen,'_blank','height='+scrnHt+', width='+scrnWt);console.log("scrnHt: ",scrnHt);console.log("scrnWt: ",scrnWt);}else{window.open(pageToOpen,'_blank');console.log("scrnHt: ",scrnHt);console.log("scrnWt: ",scrnWt);}});}};/**----------=====| FUNCTION FOR ROLLOVER AND ROLLOUT |=====----------**/function fRollEvents(elem,origColor){console.log("elem: ",elem);elem.css({"color":origColor});elem.mouseover(function(){elem.css({"color":"Orange","cursor":"pointer","text-decoration":"none"});});elem.mouseout(function(){elem.css({"color":origColor,"text-decoration":"none"});});}/**------------=====| fTempBorderStyle CSS |=====------------**/var fTempBorderStyle=function fTempBorderStyle(divName){//console.log("divName: ", divName);
divName.css({"border":"1px solid red"});};/**----------=====| END OF CLASS DECLARATIONS |=====----------**//**----------=====| CLASS INSTANCES |=====----------**///const projectContainer = new ProjectDiv();
//const columnDiv = new ColumnDiv();
//let rightColumn = new ColumnDiv ();
//let imgContainer = new ColumnDiv ();
//const imgDiv = new ImgDiv();
var textDiv=new TextContent();var tagElement=new CreateElementAny();//const rightArrowShader = new CreateElementAny();
//const leftArrow = new CreateElementAny();
//const rightArrow = new CreateElementAny();
var youTubeVideo=new CreateElementVideo();/**----------=====| FUNCTION TO OPEN|CLOSE TOGGLE : CODING THIS SITE |=====----------**/var fToggleBtn=function fToggleBtn(btn,targetElem){btn.click(function(){targetElem.slideToggle("slow");});};/**----------=====| FUNCTION FOR CONVERTING HEX COLOR TO RGBA |=====----------**//** http://jsfiddle.net/subodhghulaxe/t568u/ **///function fConvertHex(hex, opacity) {
var fConvertHex=function fConvertHex(hex,opacity){hex=hex.replace('#','');var r=parseInt(hex.substring(0,2),16);var g=parseInt(hex.substring(2,4),16);var b=parseInt(hex.substring(4,6),16);var result='rgba('+r+','+g+','+b+','+opacity/100+')';return result;};/*********************( PROMISE AJAX • START •  JSON )*********************/if(window.Promise){console.log('Promise found');}/**----------===| Miscellaneous variables: Clean up later |===----------**/var additionalHeight=60;var arbitraryNum=10;var date=new Date();console.log(date);/**----------------------------------------------------------------------------------------------**//**--------------------============| ~ PROMISE • AJAX • JSON ~  |============--------------------**//**----------------------------------------------------------------------------------------------**/// console.log(`
// /**|======================================================|**/
// /**|               PROMISE • AJAX • JSON                  |**/
// /**|        ELEMENTS CREATION & DATA ACQUISITIONS         |**/
// /**|======================================================|**/
// `);
var codingThisSiteId=void 0;var logoContainerDivId=void 0;var logoLeftColDivId=void 0;var logoRightColDivId=void 0;var logoTitleColumnPercent=void 0;var logoTitleClass=void 0;var logoSubTitleClass=void 0;var logoTitleId=void 0;var logoSubTitleId=void 0;var introCalloutId=void 0;var toggleBtn=void 0;//let codingThisSiteId;
var introImageIds=void 0;var myIntroImage=void 0;var introBackgroungImage=void 0;var rightColumnHeight=void 0;var randColorTheme=void 0;var fIntroAjax=function fIntroAjax(){var promise=$.get("./js/json/introImages.json");promise.then(function(data){var jx=0;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=data.GDSiteIntro[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var introData=_step.value;/**----------===| CREATE CODING CONTAINER DIV INSIDE INTROCONTAINER |===----------**/createDiv.fCreateBasicElement(introData.title+"_CodingContainer",jx,"codingContainer",introContainer);var codingContainerId=$("#"+introData.title+"_CodingContainer"+jx);//GET ID
/**----------===| CREATE CODING TEXT DIV INSIDE CODINGCONTAINER |===----------**/createDiv.fCreateBasicElement(introData.title+"_CodingThisSite",jx,"codingThisSite",codingContainerId);codingThisSiteId=$("#"+introData.title+"_CodingThisSite"+jx);//GET ID
var codingThisSite=$(".codingThisSite");//GET CLASSNAME
var codingThisSiteHeight=codingThisSiteId.height();fBasicDivStyle(codingThisSiteId,"auto",gdContainerWidth,"absolute");//CSS
var centerOnScreenY=inWindowHeight/2-codingThisSiteHeight/2;codingThisSiteId.css({"margin-top":centerOnScreenY});/**----------===| CREATE CODING PARAGRAPHS |===----------**/textDiv.fCreateTextDiv("codingTitle",jx,"codingTitleClass",codingThisSiteId,introData.codingTitle);textDiv.fCreateTextDiv("codingDescription",jx,"codingDescriptionClass",codingThisSiteId,introData.codingThisSite);/**----------===| CREATE LOGO CONTAINER DIV INSIDE INTROCONTAINER DIV |===----------**/createDiv.fCreateBasicElement(introData.title+"_LogoContainer",jx,"logoContainer",introContainer);logoContainerDivId=$("#"+introData.title+"_LogoContainer"+jx);//GET ID
/**----------===| LOGO TITLE CONTAINER COLUMNS PERCENTAGE |===----------**/logoTitleColumnPercent=introData.logoTitleColumnPercent;//json supplied
twoColumnsIntroSection.fTwoColumnsQueries(gdContainerWidth,logoTitleColumnPercent,0,0);/**----------===| CREATE LOGO TITLE LEFT COLUMNS |===----------**/createDiv.fCreateBasicElement(introData.title+"_IntroLeftColmn",jx,"introLeftColumnClass",logoContainerDivId);logoLeftColDivId=$("#"+introData.title+"_IntroLeftColmn"+jx);//GET ID
fBasicDivStyle(logoLeftColDivId,arbitraryNum,twoColumnsIntroSection.LeftColumn,"relative");//CSS
/**----------===| CREATE LOGO TITLE RIGHT COLUMNS |===----------**/createDiv.fCreateBasicElement(introData.title+"_IntroRightColmn",jx,"introRightColumnClass",logoContainerDivId);logoRightColDivId=$("#"+introData.title+"_IntroRightColmn"+jx);//GET ID
fBasicDivStyle(logoRightColDivId,"auto","auto","relative");//CSS
// let introRightColumnClass = $(".introRightColumnClass");
// console.log("introRightColumnClass :", introRightColumnClass);
// let introRightColumnHeight = introRightColumnClass.height();
// console.log("introRightColumnHeight :", introRightColumnHeight);
//TEMP
// logoLeftColDivId.css({
//   "border-top": "2px solid red"
// })
// logoRightColDivId.css({
//   "border-top": "2px solid yellowGreen",
//   "border-bottom": "1px solid cyan"
// })
/**----------===| CREATE LOGO TITLES |===----------**/textDiv.fCreateTextDiv(introData.title+"_LogoTitle",jx,"logoTitleClass",logoRightColDivId,introData.introTitle);//R.LLOYD GONZALES
logoTitleId=$("#"+introData.title+"_LogoTitle"+jx);logoText.fTextQueries(gdContainerWidth,logoTitleId,logoTitleSmlFontSize,logoTitleMidFontSize,logoTitleLrgFontSize);/**----------===| CREATE INTRO SUB-TITLES |===----------**/textDiv.fCreateTextDiv(introData.title+"_LogoSubTitle",jx,"logoSubTitleClass",logoRightColDivId,introData.intoSubTitle);//Passionate about Arts, Designs & Coding
logoSubTitleId=$("#"+introData.title+"_LogoSubTitle"+jx);logoText.fTextQueries(gdContainerWidth,logoSubTitleId,logoSubTitleSmlFontSize,logoSubTitleMidFontSize,logoSubTitleLrgFontSize);/**----------===| CREATE CALLOUT |===----------**/textDiv.fCreateTextDiv(introData.title+"_Callout",jx,"calloutClass",logoRightColDivId,introData.callout);//Portfolio: Scroll Down
introCalloutId=$("#"+introData.title+"_Callout"+jx);logoText.fTextQueries(gdContainerWidth,introCalloutId,introCalloutFontSize,introCalloutFontSize,introCalloutFontSize);/**----------===| TOGGLE "CODE THIS SITE" DESCRIPTION |===----------**//**----------===| CREATE BUTTON ELEMENT |===----------**/createButton.fCreateBtn("btn btn-link codingBtn","_Btn",jx,logoRightColDivId,"coding this site");//introFluidContainer
toggleBtn=$(".codingBtn");//get clasname
var closeCoding=$(".closeCoding");//get clasname
logoText.fTextQueries(gdContainerWidth,toggleBtn,codingBtnFontSize,codingBtnFontSize,codingBtnFontSize);var toggleBtnId=$("#"+introData.title+"_Btn"+jx);logoText.fTextQueries(gdContainerWidth,toggleBtn,codingBtnFontSize,codingBtnFontSize,codingBtnFontSize);/**----------===| LOGO CONTAINER: BASIC CSS |===----------**/rightColumnHeight=logoRightColDivId.height();// + 30;
fBasicIntroStyle(logoContainerDivId,"auto",gdContainerWidth);logoContainerDivId.css({//"border": "1px solid pink",
"margin-top":inWindowHeight-(rightColumnHeight+40)});fToggleBtn(toggleBtn,codingThisSite);fToggleBtn(closeCoding,codingThisSite);fRollEvents(toggleBtn,"#949494");fRollEvents(closeCoding,"#5780a2");/**----------===| CREATE IMAGE DIV INSIDE INTROFLUIDCONTAINER |===----------**/imageBasicDiv.fCreateBasicElement(introData.title+"_IntroImg",jx,"introDivClass",introFluidContainer);/**----------===| NEW IMAGE CREATION |===----------**/myIntroImage=new Image();var imagesPath="./images/"+introData.title+"/";/**-----====={ Load image randomly }=====-----**/var randImg=introData.images[Math.floor(introData.images.length*Math.random())];myIntroImage.src=imagesPath+randImg.imgName;//introData.images[0].imgName; //randImg;
/**----------===| IMAGE DIV: IDS |===----------**/introImageIds=$("#"+introData.title+"_IntroImg"+jx);console.log("introImageIds: ",introImageIds);/**----------===| COLOR THEME: INTRO SUB TITLE |===----------**/randColorTheme=randImg.colorTheme;logoSubTitleId.css({"color":randColorTheme});/**----------===| COLOR THEME: INTRO LOGO CONTAINER |===----------**/var hex2Rgb=fConvertHex(randColorTheme,50);logoContainerDivId.css({"border-top":"4px double "+hex2Rgb,"border-bottom":"6px double "+hex2Rgb});/**----------===| IMAGE DIV: CSS |===----------**//*        Populating the div with image        *
						 **--------------------------------------------**/// let inWindowHeight = window.innerHeight; // / 2;
// let inWindowWidth = window.innerWidth;
// let inWindowWidth = window.innerWidth;
// let inWindowHeight = window.innerHeight;
fIntroImageStyle(introImageIds,inWindowHeight,inWindowWidth,myIntroImage.src);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}});};/**----------===| INVOKE FUNCTION |===----------**///fIntroAjax();
//let logoContainer = $(".logoContainer");
// function toggleClass() {
//   //$("." + divClass).toggle();
//   logoContainer.toggle();
//   logoContainer.css({
//     "display": "inline"
//   });
// }
var fRunAjax=function fRunAjax(){var promise=$.get("./js/json/ajaxData2_simple.json");//let promise = $.get("./js/json/ajaxData2_2ProjectsV.json");
//let promise = $.get("./js/json/ajaxData2_EvenSimpler.json");
//let promise = $.get("./js/json/ajaxData2_1Project.json");
//let promise = $.get("./js/json/ajaxData2_2Projects.json");
promise.then(function(data){var j1=0;var j2=0;var j3=0;console.log("\n\t      /**|===============================|**/\n\t      /**|      SECTIONS JSON LOOP       |**/\n\t      /**|===============================|**/\n\t      data.GDSite: "+data.GDSite[0].projects[0].images[0].linkURL+"\n\t      ");/**----------===| LINKS TO OPEM TO ANOTHER WINDOW |===----------**///   let nycBikeFlashSampleXX = $('#nycBikeFlashSampleXX');
//   //let nycBikeFlashSampleX = $("#" + data.GDSite[0].projects[0].images[0].linkURL);
//   //   let nycBikeFlashSample = $(nycBikeFlashSampleX)
//   //   console.log("nycBikeFlashSample: ", nycBikeFlashSample);
//   //fRollEvents(nycBikeFlashSample, "white");
//   fWindowOpen2(nycBikeFlashSampleXX, "http://www.google.com");
//
//   let idTest = (data.GDSite[0].projects[0].images[0].linkURL);
//   //let idTest2 = idTest.toString();
//   let idTest2 = new String(idTest);
//   console.log("idTest: ", idTest);
//   console.log(idTest2 instanceof String);
//   //let nycBikeFlashSampleX = document.getElementById(idTest2);
//   let nycBikeFlashSampleX = $("#" + idTest2);
//   console.log("nycBikeFlashSampleX: ", nycBikeFlashSampleX);
//   let imgDescription_1 = $("#imgDescription_1")
//   imgDescription_1.css({
//     "border": "1px solid white"
//   })
//   let nycBikeFlashSample = $(data.GDSite[0].projects[0].images[0].linkURL);
//   fRollEvents(nycBikeFlashSample, "white");
//   let personalFreshLinkId = $("#personalFreshLinkId");
//   let personalFreshLink = data.GDSite[0].projects[2].images[0].linkURL;
//   console.log("personalFreshLinkId: ", personalFreshLinkId);
//   console.log("personalFreshLink: ", personalFreshLink);
//   fWindowOpen2(personalFreshLinkId, personalFreshLink);
//TEMP fScreenQueries();
var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=data.GDSite[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var sect=_step2.value;j1++;console.log("Section j1: "+j1+" "+sect.title);// /**----------===| LINKS TO OPEM TO ANOTHER WINDOW |===----------**/
// let nycBikeFlashSample = $('#nycBikeFlashSample');
// fRollEvents(nycBikeFlashSample, "white");
//
// let akonFlashSample = $('#akonFlashSample');
// fRollEvents(akonFlashSample, "white");
//openLink.fWindowOpen(nycBikeFlashSample, "http://www.google.com");
//fWindowOpen2(nycBikeFlashSample, "http://www.google.com");
// let akonFlashSample = $('#akonFlashSample');
// console.log("akonFlashSample: ", akonFlashSample);
// fRollEvents(akonFlashSample, "white");
// fWindowOpen2(akonFlashSample, "http://www.rlgonzales.com/Scroll/images/ANIMATIONS/Flash/Akon/");
aSectionsCount[aSectionsCount.length]=sect;//PUSH
/**----------===| INVOKE SECTION COLUMNS |===----------**/twoColumnsHeaderSection.fTwoColumnsQueries(gdContainerWidth,sect.headerRightColumnPercent,arbitraryNum,arbitraryNum);aSectionsRightColumnPercent[aSectionsRightColumnPercent.length]=sect.headerRightColumnPercent;/**----------===| CREATE SECTION HEADER CONTAINER |===----------------------------------------**/createDiv.fCreateBasicElement(sect.title,j1,"sectionHeaderClass",gdContainer);var sectDivIds=$("#"+sect.title+j1);fBasicDivStyle(sectDivIds,"auto",gdContainerWidth,"relative");aSectionHeaders[aSectionHeaders.length]=sectDivIds;/**----------===| CREATE SECTION HEADER DIVIDER |===----------------------------------------**/createDiv.fCreateBasicElement("sectDivider",j1,"sectionDividerClass",sectDivIds);var sectDividerIds=$("#"+"sectDivider"+j1);/**----------===| COLOR THEME: DIVIDER |===----------**/sectDividerIds.css({"background-color":randColorTheme});/**----------===| CREATE HEADER LEFT COLUMN |===------------------------------------------------------------**/createDiv.fCreateBasicElement(sect.title+"_Left",j1,"sectionHeaderLeftColmnClass",sectDivIds);var sectLeftIds=$("#"+sect.title+"_Left"+j1);fBasicDivStyle(sectLeftIds,arbitraryNum,twoColumnsHeaderSection.LeftColumn,"relative");aSectionHeadrLeftColmn[aSectionHeadrLeftColmn.length]=sectLeftIds;/**----------===| CREATE HEADER RIGHT COLUMN |===-------------------------------------------------------------**/createDiv.fCreateBasicElement(sect.title+"_Right",j1,"sectionHeaderRightColmnClass",sectDivIds);var sectRightIds=$("#"+sect.title+"_Right"+j1);fBasicDivStyle(sectRightIds,"auto",twoColumnsHeaderSection.RightColumn,"relative");aSectionHeadrRightColmn[aSectionHeadrRightColmn.length]=sectRightIds;/**----------===| Sections Header Title Text |===----------**/sectionHeaderText.fBasicTextContent(sect.title+"_Text",j1,"sectionHeaderTxtContentClass",sectRightIds,sect.sectionTitle);var sectionTitleIds=$("#"+sect.title+"_Text"+j1);fBasicDivStyle(sectionTitleIds,"auto",twoColumnsHeaderSection.RightColumn,"relative");headerText.fTextQueries(gdContainerWidth,sectionTitleIds,headerSmlFontSize,headerMidFontSize,headerLrgFontSize);aSectionHeadrTitles[aSectionHeadrTitles.length]=sectionTitleIds;var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=sect.projects[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var proj=_step3.value;j2++;console.log("\n\t              Project j2: "+j2+" "+proj.title);/**----------===| Divider tag for DOM and style inspection in the browser dev view for testing |===----------**/tagElement.fCreateTag("i","Divider:-------------------====•",proj.title,j2,gdContainer);/**----------===| PUSH TO ARRAY: PROJECT COUNT |===----------**/aProjectsCount[aProjectsCount.length]=proj;/**----------===| INVOKE PROJECT COLUMNS |===----------**/twoColumnsImgProjects.fTwoColumnsQueries(gdContainerWidth,proj.imgRightColumnPercent,proj.imagesWidth,proj.imagesHeight);/**----------===| PUSH TO ARRAY: PROJECT RIGHT COLUMNS |===----------**/aProjectRightColumnPercent[aProjectRightColumnPercent.length]=proj.imgRightColumnPercent;aImagesOrigWidth[aImagesOrigWidth.length]=proj.imagesWidth;aImagesOrigHeight[aImagesOrigHeight.length]=proj.imagesHeight;/**----------===| CREATE PROJECT IMAGE CONTAINER |===----------**/createDiv.fCreateBasicElement(proj.title+"_ProjContainer",j2,"projectContainerClass",gdContainer);/**----------===| Project Container Ids |===----------**/var projContainerIds=$("#"+proj.title+"_ProjContainer"+j2);/**p----------===| Project Container: Basic Style |===----------**/fBasicDivStyle(projContainerIds,"auto",gdContainerWidth);// ID, HEIGHT, WID, "relative"TH
/**----------===| push to array use for animation |===----------**/aProjContainerIds[aProjContainerIds.length]=projContainerIds;/**----------===| CREATE PROJECT IMAGE CONTAINER: LEFT COLUMN |===----------**/createDiv.fCreateBasicElement(proj.title+"_Left",j2,"projectLeftColmnClass",projContainerIds);/**----------===| Left Column Ids |===----------**/var projContainrLeftColDivIds=$("#"+proj.title+"_Left"+j2);/**p----------===| Left Column: Basic Style |===----------**/fBasicDivStyle(projContainrLeftColDivIds,arbitraryNum,twoColumnsImgProjects.LeftColumn);// other css properties: ".projectLeftColmnClass" in css fil, "relative"e.
/**----------===| push to array |===----------**/aProjLeftColDivIds[aProjLeftColDivIds.length]=projContainrLeftColDivIds;/**----------===| CREATE PROJECT IMAGE CONTAINER: RIGHT COLUMN |===----------**//** function parameters:(Id, Class, appendTo)
							 **--------------------------------------------------------------------**/createDiv.fCreateBasicElement(proj.title+"_ProjRight",j2,"projectRightColmnClass",projContainerIds);/**----------===| Right Column: Ids |===----------**/var projRightColDivIds=$("#"+proj.title+"_ProjRight"+j2);/**----------===| Right Column: Basic CSS |===----------------------------------**/fBasicDivStyle(projRightColDivIds,twoColumnsImgProjects.NewHeight+additionalHeight,twoColumnsImgProjects.RightColumn,"relative");aProjRightColDivIds[aProjRightColDivIds.length]=projRightColDivIds;//push
aProjectDisplay[aProjectDisplay.length]=proj.displayType;//push
aProjImagesLength[aProjImagesLength.length]=proj.images.length+1;//push
/**----------===| CREATE FLUID-CONTAINER INSIDE RIGHT COLUMN |===----------**/createDiv.fCreateBasicElement(proj.title+"_FluidContainer_",j2,"fluidContainerClass",projRightColDivIds);/**----------===| FLUID-CONTAINER: IDS |===----------**/var fluidContainerIds=$("#"+proj.title+"_FluidContainer_"+j2);/**----------===| push to array |===----------**/aFluidContainerIds[aFluidContainerIds.length]=fluidContainerIds;/**----------===| FLUID-CONTAINER WIDTH |===----------**/var fluidContainerWidth=twoColumnsImgProjects.RightColumn*(proj.images.length+1);/**----------===| FLUID-CONTAINER HEIGHT |===----------**/var fluidContainerHeight=twoColumnsImgProjects.NewHeight+additionalHeight;/**----------===| push to array |===----------**/aFluidContainerWidth[aFluidContainerWidth.length]=fluidContainerWidth;aFluidContainerHeight[aFluidContainerHeight.length]=fluidContainerHeight;/**----------===| FLUID-CONTAINER: BASIC CSS |===----------**/fBasicDivStyle(fluidContainerIds,fluidContainerHeight,fluidContainerWidth,"relative");/**----------===| CAROUSEL CONTROL: LEFT |===----------**/tagElement.fCreateTag("a","carousel-control left","leftCarousel",j2,projRightColDivIds);//   let carouselControl = $(".carousel-control");
//   carouselControl.css({
//     "height": imageDivClass.height()
//   })
var leftShaderIds=$("#leftCarouselId_"+j2);//get ids
/**----------===| push to array |===----------**/aLeftShaderIds[aLeftShaderIds.length]=leftShaderIds;//push to array
//   console.log("leftShaderIds: ", leftShaderIds, j2);
//   console.log("aLeftShaderIds: ", aLeftShaderIds);
/**----------===| CREATE GLYPHICON LEFT ARROW |===----------**/tagElement.fCreateTag("i","glyphicon glyphicon-menu-left","leftArrow",j2,leftShaderIds);//glyphicon glyphicon-menu-left glyphicon-chevron-left
/**----------===| CAROUSEL CONTROL: RIGHT |===----------**/tagElement.fCreateTag("a","carousel-control right","rightCarousel",j2,projRightColDivIds);var rightShaderIds=$("#rightCarouselId_"+j2);//GET IDS
aRightShaderIds[aRightShaderIds.length]=rightShaderIds;//PUSH
/**----------===| KEEPING THE CAROUSELCONTROL HEIGHT SAME AS THE IMAGE HEIGHT |===----------**/fBasicDivStyle(leftShaderIds,twoColumnsImgProjects.NewHeight,"null","absolute");fBasicDivStyle(rightShaderIds,twoColumnsImgProjects.NewHeight,"null","absolute");/**----------===| CREATE NEW NEXT PREVIOUS CLASS INSTANCES |===----------**/var nxtPrv=new nextPreviousNav.NextPrevNavClass();/**----------===| push to array |===----------**/aNxtPrv[aNxtPrv.length]=nxtPrv;/**----------===| INVOKE NEXT PREVIOUS CLASS INSTANCE |===----------**/nxtPrv.fNextPrevNavigation(rightShaderIds,leftShaderIds,fluidContainerIds,twoColumnsImgProjects.RightColumn,fluidContainerWidth);/**----------===| CREATE GLYPHICON RIGHT ARROW |===----------**/tagElement.fCreateTag("i","glyphicon glyphicon-menu-right","rightArrow",j2,rightShaderIds);////glyphicon glyphicon-menu-right  glyphicon-chevron-right  glyphicons-fit-image-to-frame
/**----------===| On first enter the site all left image arrows are hidden |===----------**/leftShaderIds.hide();glyphicon=$(".glyphicon");//GET CLASSNAME
/**----------===| J2: VIDEO ONLY  |===----------**/if(proj.displayType==="video"){rightShaderIds.hide();/**----------===| Right Column: CSS Height & Width |===----------------------------------**/fBasicDivStyle(projRightColDivIds,twoColumnsImgProjects.NewHeight,twoColumnsImgProjects.RightColumn,"relative");}/**----------==========| PROJECT PARAGRAPHS |==========----------**//**----------===| PARAGRAPH COLUMNS PERCENTAGE |===----------**/twoColumnsParagProjects.fTwoColumnsQueries(gdContainerWidth,proj.paragraphRightColumnPercent,0,0);/**----------===| push to aray |===----------**/aParagraphRightColumnPercent[aParagraphRightColumnPercent.length]=proj.paragraphRightColumnPercent;aParagraphLeftColumnWidth[aParagraphLeftColumnWidth.length]=twoColumnsParagProjects.LeftColumn;/**----------===| CREATE PARAGRAPH CONTAINER |===----------**/createDiv.fCreateBasicElement(proj.title+"_Paragraph",j2,"paragraphContainerClass",gdContainer);/**----------===| Project Paragraph Container: Ids |===----------**/var projParagDivIds=$("#"+proj.title+"_Paragraph"+j2);/**----------===| Project Paragraph Container: Basic CSS |===----------**/fBasicDivStyle(projParagDivIds,"auto",gdContainerWidth,"relative");/**----------===| Push to array |===----------**/aParagraphContainer[aParagraphContainer.length]=projParagDivIds;/**----------===| CREATE PARAGRAPH LEFT COLUMNS |===----------**/createDiv.fCreateBasicElement(proj.title+"_ParagLeftColmn",j2,"paragraphLeftColumnClass",projParagDivIds);/**----------===| Project Paragraph Left Column: Ids |===----------**/var paragLeftColDivIds=$("#"+proj.title+"_ParagLeftColmn"+j2);/**----------===| Project Paragraph Left Column: Basic CSS |===----------**/fBasicDivStyle(paragLeftColDivIds,arbitraryNum,twoColumnsParagProjects.LeftColumn,"relative");/**----------===| Project Paragraph Left Column:: Push to array |===----------**/aProjParagLeftDivIds[aProjParagLeftDivIds.length]=paragLeftColDivIds;/**----------===| CREATE PARAGRAPH RIGHT COLUMNS |===----------**/createDiv.fCreateBasicElement(proj.title+"_ParagRightColmn",j2,"paragraphRightColumnClass",projParagDivIds);/**----------===| Project Paragraph Right Column: Ids |===----------**/var paragRightColDivIds=$("#"+proj.title+"_ParagRightColmn"+j2);aProjParagRightDivIds[aProjParagRightDivIds.length]=paragRightColDivIds;/**----------===| Project Paragraph Right Column: Basic CSS |===----------**/fBasicDivStyle(paragRightColDivIds,"auto",twoColumnsParagProjects.RightColumn,"relative");/**----------===| Project Paragraph Right Column:: Push to array |===----------**/aParagraphRightColumnWidth[aParagraphRightColumnWidth.length]=twoColumnsParagProjects.RightColumn;//console.log("aParagraphRightColumnWidth: ", aParagraphRightColumnWidth);
/**----------===| CREATE PROJECT TITLES |===----------**/textDiv.fCreateTextDiv(proj.title+"_ProjTitle",j2,"projTitleClass",paragRightColDivIds,proj.title);// Get Id
var paraghProjTitleIds=$("#"+proj.title+"_ProjTitle"+j2);// Pust to array
aParaghProjTitleIds[aParaghProjTitleIds.length]=paraghProjTitleIds;// Apply text screen queries
headerText.fTextQueries(gdContainerWidth,paraghProjTitleIds,projTitleSmlFontSize,projTitleMidFontSize,projTitleLrgFontSize);/**----------===| CREATE PROJECT SUB-TITLES |===----------**/textDiv.fCreateTextDiv(proj.title+"_ProjSubTitle",j2,"projSubTitleClass",paragRightColDivIds,proj.subTitle);// Get Id
var paraghProjSubTitleIds=$("#"+proj.title+"_ProjSubTitle"+j2);// Pust to array
aParaghProjSubTitleIds[aParaghProjSubTitleIds.length]=paraghProjSubTitleIds;// Apply text screen queries
headerText.fTextQueries(gdContainerWidth,paraghProjSubTitleIds,projSubTitleSmlFontSize,projSubTitleMidFontSize,projSubTitleLrgFontSize);/**----------===| CREATE PROJECT DESCRIPTIONS |===----------**/textDiv.fCreateTextDiv(proj.title+"_ProjDescription",j2,"projDescriptionClass",paragRightColDivIds,proj.projDescription);// Get Id
var paraghProjlinkURLs=$("#"+proj.title+"_ProjDescription"+j2);// Pust to array
aParagraphProjDescription[aParagraphProjDescription.length]=paraghProjlinkURLs;// Apply text screen queries
headerText.fTextQueries(gdContainerWidth,paraghProjlinkURLs,projDescSmlFontSize,projDescMidFontSize,projDescLrgFontSize);//console.log("gdContainerWidth:3 ", gdContainerWidth);
var projTitleClass=$(".projTitleClass");//console.log("projTitleClass: ", projTitleClass);
//fScreenQueries();
// console.log(`
// /**|===============================|**/
// /**|       IMAGES JSON LOOP        |**/
// /**|===============================|**/
// `);
var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=proj.images[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var imgs=_step4.value;j3++;// console.log(`
//   <•----------------------------------•>
//   aImagesCount.length:j3 :  ${aImagesCount.length}
//   ${imgs.imgTitle}
//   <•----------------------------------•>
//   `);
if(proj.displayType==="image"){glyphiconXpand=$(".glyphicon-expand");/**----------===| push to array use for animation |===----------**/aImagesCount[aImagesCount.length]=imgs;/**----------===| RIGHT COLUMN PERCENTAGE |===----------**/twoColumnsImages.fTwoColumnsQueries(gdContainerWidth,proj.imgRightColumnPercent,proj.imagesWidth,proj.imagesHeight);/**----------===| push to array |===----------**/aImagesRightColumnPercent[aImagesRightColumnPercent.length]=proj.imgRightColumnPercent;aImagesWidth[aImagesWidth.length]=twoColumnsImages.RightColumn;aImagesHeight[aImagesHeight.length]=twoColumnsImages.NewHeight;/**----------===| CREATE IMAGE DIV INSIDE FLUID-CONTAINER |===----------**/imageBasicDiv.fCreateBasicElement(proj.title+"_Image",j3,"imageDivClass",fluidContainerIds);var imageIds=$("#"+proj.title+"_Image"+j3);//GET IDS
aImageIds[aImageIds.length]=imageIds;//PUSH
/**----------===| IMAGE CREATION |===----------**/var myImage=new Image();var imagesPath="./images/"+proj.title+"/";//FILEPATH
myImage.src=imagesPath+imgs.imgName;//CONCAT
aImages[aImages.length]=myImage.src;//PUSH
/**----------===| IMAGE DIV: CSS |===----------**//*        Populating the div with image        *
									 **--------------------------------------------**/var columnHeight=twoColumnsImages.NewHeight;var columnWidth=twoColumnsImages.RightColumn;fBasicImageStyle(imageIds,columnHeight,columnWidth,myImage.src);//
/**----------===| IMAGE DESCRIPTIONS |===----------**/textDiv.fCreateTextDiv("imgDescription_",j3,"imgDescription_Class",imageIds,imgs.imgDescription,imgs.hoverTitle);/*** TEST: Put this outside ajax and into a class **/var imageDescriptIds=$("#imgDescription_"+j3);//id = imgDescription_j3
aImageDescriptIds[aImageDescriptIds.length]=imageDescriptIds;//let imageDescriptClass = $(".imgDescription_Class"); // + proj.title + "_Class");
//fImgDescriptIdStyle(imageDescriptIds, twoColumnsImgProjects.NewHeight);
//.imgDescription_Class
imageDescriptIds.css({"margin-top":twoColumnsImgProjects.NewHeight+"px"});headerText.fTextQueries(gdContainerWidth,imageDescriptIds,imgDescSmlFontSize,imgDescMidFontSize,imgDescLrgFontSize);/**----------===| OPEN DESCRIPTION LINK |===----------**/var fullScreen=imgs.fullScreen;var linkToOpen=imgs.linkURL;//console.log(typeof imgs.scrnHeight)
//console.log(typeof screen.height);
//   let screenHeight = parseInt(imgs.scrnHeight);
//   let screenWidth = parseInt(imgs.scrnWidth);
//console.log(imgs.scrnWidth);
//console.log(screenWidth);
var screenHeight=imgs.scrnHeight;var screenWidth=imgs.scrnWidth;fWindowOpen2(imageDescriptIds,linkToOpen,fullScreen,screenHeight,screenWidth);}else{/**----------===| J3: VIDEO ONLY  |===----------**//**----------===| push to array |===----------**/aVideoColumnPercent[aVideoColumnPercent.length]=proj.imgRightColumnPercent;/**----------===| FLUID-CONTAINER: CSS: VIDEO |===----------**/fBasicDivStyle(fluidContainerIds,twoColumnsImgProjects.NewHeight,twoColumnsImgProjects.RightColumn,"relative");/**----------===| CREATE YOUTUBE VIDEO PLACEHOLDER  |===----------**///instanceName.fCreateVideoDiv(videoId, appendedTo, divHeight, divWidth)
youTubeVideo.fCreateVideoDiv("video-placeholder",fluidContainerIds,twoColumnsImgProjects.NewHeight,twoColumnsImgProjects.RightColumn);var videoPlaceholder=$("#video-placeholder");/**----------===| videoPlaceholder: Height & Width CSS |===----------**/fBasicDivStyle(videoPlaceholder,twoColumnsImgProjects.NewHeight,twoColumnsImgProjects.RightColumn,"relative");}//END VIDEO
}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}console.log("--------------------| AJAX • END •  JSON |--------------------");});// End Promise
/** promise failure **/// function(data) {
//   console.log("Request Failed!")
// }
};/**----------===| INVOKE fRunAjax  |===----------**/fRunAjax();// console.log(`
// /**|======================================================|**/
// /**|                      ANIMATION:                      |**/
// /**|                 ARRAY STATIC EVENTS                  |**/
// /**|======================================================|**/
// `);
/***----------=====| INTRO ANIMATION |=====----------***/var fEventIntro=function fEventIntro(){/**----------===| FULL LANDING PAGE IMAGE DIV |===----------**/var inWindowHeight=window.innerHeight;// / 2;
var inWindowWidth=window.innerWidth;fIntroImageStyle(introImageIds,inWindowHeight,inWindowWidth,myIntroImage.src);/**----------===| CALCULATE LEFT & RIGHT COLUMN WIDTHS |===----------**//** Description:
			    Invoke fTwoColumnsQueries to  calculates Left and Right columns widths based on the percentage passed to the class
			    Usage: twoColumnsIntroSection.LeftColumn, twoColumnsIntroSection.RightColumn... **/twoColumnsIntroSection.fTwoColumnsQueries(gdContainerWidth,logoTitleColumnPercent,arbitraryNum,arbitraryNum);/**----------===| LOGO CONTAINER |===----------**///fBasicDivStyle(logoLeftColDivId, arbitraryNum, twoColumnsIntroSection.LeftColumn, "relative");
anim.fAnimateHeightWidth(logoLeftColDivId,arbitraryNum,twoColumnsIntroSection.LeftColumn,animTymSlow);//fBasicDivStyle(logoRightColDivId, "auto", twoColumnsIntroSection.RightColumn - 20, "relative");
fBasicDivStyle(logoRightColDivId,"auto","auto","relative");//anim.fAnimateHeightWidth(logoRightColDivId, "auto", "auto", animTymSlow);
// rightColumnHeight = logoRightColDivId.height() + 30;
// let rightColumnWidth = logoRightColDivId.width();
//introRightColumnClass
//let rightColumnHeightFrTwoColumns = twoColumnsIntroSection.NewHeight;
// console.log("rightColumnHeight: ", rightColumnHeight);
// console.log("rightColumnWidth: ", rightColumnWidth);
//console.log("rightColumnHeightFrTwoColumns: ", rightColumnHeightFrTwoColumns);
//fBasicIntroStyle(logoContainerDivId, 400, gdContainerWidth);
//let marginTop = inWindowHeight - rightColumnHeight
//anim.fAnimateHeightWidth(logoContainerDivId, rightColumnHeight, gdContainerWidth, animTymSlow);
anim.fAnimateHeightWidth(logoContainerDivId,"auto",gdContainerWidth,animTymSlow);//fBasicIntroStyle(logoContainerDivId, rightColumnHeight + 20, gdContainerWidth);
logoContainerDivId.css({"margin-top":inWindowHeight-(rightColumnHeight+40)// - 800 //(400 + (inWindowHeight / 5)) //"100px" //-(inWindowHeight / 4)
});//anim.fAnimateHeightWidth(logoContainerDivId, rightColumnHeightFrTwoColumns, gdContainerWidth, animTymSlow);
console.log("logoTitleId.height(): ",logoTitleId.height());console.log("logoSubTitleId.height(): ",logoSubTitleId.height());console.log("introCalloutId.height(): ",introCalloutId.height());console.log("toggleBtn.height(): ",toggleBtn.height());/**----------===| SCREEN QUERIES |===----------**//** logoTitleColumnPercent = introData.logoTitleColumnPercent;
			 *  Calculates the percentage width for the Left & Right Columns based on gdContainerWidth
			    If gdContainerWidth is < 600 the Right Column should be 95% wide and 80% wide if >. **///logoColumn.fScreenQueries(gdContainerWidth);
//console.log("logoColumn.ColumnPercentage: ", logoColumn.ColumnPercentage);
//console.log("twoColumnsIntroSection.LeftColumn: ", twoColumnsIntroSection.LeftColumn);
//console.log("twoColumnsIntroSection.RightColumn: ", twoColumnsIntroSection.RightColumn);
//console.log("logoTitleColumnPercent: ", logoTitleColumnPercent);
//logoText.fTextQueries(gdContainerWidth, logoTitleClass, logoSubTitleClass);
logoText.fTextQueries(gdContainerWidth,logoTitleId,logoTitleSmlFontSize,logoTitleMidFontSize,logoTitleLrgFontSize);logoText.fTextQueries(gdContainerWidth,logoSubTitleId,logoSubTitleSmlFontSize,logoSubTitleMidFontSize,logoSubTitleLrgFontSize);logoText.fTextQueries(gdContainerWidth,introCalloutId,introCalloutFontSize,introCalloutFontSize,introCalloutFontSize);logoText.fTextQueries(gdContainerWidth,toggleBtn,codingBtnFontSize,codingBtnFontSize,codingBtnFontSize);//logoColumn.fScreenQueries(gdContainerWidth, logoColumn.ColumnPercentage, logoTitleClass, logoSubTitleClass)
// // anim.fAnimateHeightWidth(logoContainerDivId, 400, gdContainerWidth, animTymSlow);
//anim.fAnimateHeightWidth(logoRightColDivId, "auto", twoColumnsIntroSection.RightColumn - 50, animTymSlow);
//anim.fAnimateHeightWidth(logoRightColDivId, "auto", "auto", animTymSlow);
// // console.log("logoRightColDivId.height(): ", logoRightColDivId.height());
// // let rightColumnHeight = logoRightColDivId.height();
// anim.fAnimateHeightWidth(logoLeftColDivId, arbitraryNum, twoColumnsIntroSection.LeftColumn, animTymSlow);
// //TEMP
// logoLeftColDivId.css({
//   "border-top": "2px solid red"
// })
// logoRightColDivId.css({
//   "border-top": "2px solid yellowGreen"
// })
/**----------===| CODING CONTAINER |===----------**/fBasicDivStyle(codingThisSiteId,"auto",gdContainerWidth,"relative");};/***----------=====| SECTION HEADER ANIMATION |=====----------***/var fEventHeaders=function fEventHeaders(){/**----------===| IMAGE DIV: IDS |===----------**///introImageIds = $("#" + introData.title + "_IntroImg" + 1);
/**----------===| IMAGE DIV: CSS |===----------**//*        Populating the div with image        *
			 **--------------------------------------------**/// let inWindowHeight = window.innerHeight / 2;
// let inWindowWidth = window.innerWidth;
// fBasicImageStyle(introImageIds, inWindowHeight, inWindowWidth, myIntroImage.src);
// let projTitleClass = $(".projTitleClass");
// console.log("projTitleClass: ", projTitleClass);
for(var e1=0;e1<aSectionsCount.length;e1++){/**----------===| INVOKE SECTION COLUMNS |===----------**/twoColumnsHeaderSection.fTwoColumnsQueries(gdContainerWidth,aSectionsRightColumnPercent[e1],arbitraryNum,arbitraryNum);/**----------===| Basic CSS: (id, height, width) |===----------**///fBasicDivStyle(aSectionHeaders[e1], "auto", gdContainerWidth, "relative");
//logoColumn.fScreenQueries(gdContainerWidth);
/**----------===| Left Column: Basic CSS |===----------**///fBasicDivStyle(aSectionHeadrLeftColmn[e1], arbitraryNum, twoColumnsHeaderSection.LeftColumn, "relative");
anim.fAnimateHeightWidth(aSectionHeadrLeftColmn[e1],arbitraryNum,twoColumnsHeaderSection.LeftColumn,animTymSlow);/**----------===| Sections Header Right Column: Basic Style |===----------**///fBasicDivStyle(aSectionHeadrRightColmn[e1], "auto", twoColumnsHeaderSection.RightColumn, "relative");
/**----------===| Sections Header Title Text: Basic Style |===----------**///fBasicDivStyle(aSectionHeadrTitles[e1], "auto", twoColumnsHeaderSection.RightColumn, "relative");
//gdContainerWidth = (gdContainer.width());
anim.fAnimateHeightWidth(aSectionHeaders[e1],"auto",gdContainerWidth,animTymSlow);//anim.fAnimateHeightWidth(aSectionHeadrLeftColmn[e1], arbitraryNum, twoColumnsHeaderSection.LeftColumn, animTymFast);
anim.fAnimateHeightWidth(aSectionHeadrRightColmn[e1],"auto","auto",animTymSlow);//twoColumnsHeaderSection.RightColumn
anim.fAnimateHeightWidth(aSectionHeadrTitles[e1],"auto","auto",animTymSlow);headerText.fTextQueries(gdContainerWidth,aSectionHeadrTitles[e1],headerSmlFontSize,headerMidFontSize,headerLrgFontSize);//TEMP
//   aSectionHeadrLeftColmn[e1].css({
//     //"background-color": "cyan",
//     "border-top": "4px solid red"
//   })
//   aSectionHeadrRightColmn[e1].css({
//     //"background-color": "cyan",
//     "border-top": "4px solid yellowGreen"
//   })
// TEMP
// aSectionHeadrTitles[e1].css({
//   "border-bottom": "1px solid white"
// })
}// end of aSectionsCount.length
};/***----------=====| PROJECTS ANIMATION |=====----------***/var fEventProjects=function fEventProjects(){for(var e2=0;e2<aProjectsCount.length;e2++){/**----------===| PROJECT COLUMNS PERCENTAGE |===----------**/twoColumnsImgProjects.fTwoColumnsQueries(gdContainerWidth,aProjectRightColumnPercent[e2],aImagesOrigWidth[e2],aImagesOrigHeight[e2]);fBasicDivStyle(aProjContainerIds[e2],"auto",gdContainerWidth,"relative");fBasicDivStyle(aProjLeftColDivIds[e2],arbitraryNum,twoColumnsImgProjects.LeftColumn,"relative");fBasicDivStyle(aProjRightColDivIds[e2],twoColumnsImgProjects.NewHeight+additionalHeight,twoColumnsImgProjects.RightColumn,"relative");fBasicDivStyle(aFluidContainerIds[e2],twoColumnsImgProjects.NewHeight+additionalHeight,twoColumnsImgProjects.RightColumn*aProjImagesLength[e2],"relative");/**----------===| E2: VIDEO |===----------**/if(aProjectDisplay[e2]==="video"){fBasicDivStyle(aProjRightColDivIds[e2],twoColumnsImgProjects.NewHeight,twoColumnsImgProjects.RightColumn,"relative");fBasicDivStyle(aFluidContainerIds[e2],twoColumnsImgProjects.NewHeight,twoColumnsImgProjects.RightColumn,"relative");var videoPlaceholder=$("#video-placeholder");fBasicDivStyle(videoPlaceholder,twoColumnsImgProjects.NewHeight,twoColumnsImgProjects.RightColumn,"relative");}aNxtPrv[e2].ImgContainer=aFluidContainerIds[e2];aNxtPrv[e2].ImgContainerWidth=twoColumnsImgProjects.RightColumn;aNxtPrv[e2].fluidContainerWidth=twoColumnsImgProjects.RightColumn*aProjImagesLength[e2];fBasicDivStyle(aLeftShaderIds[e2],twoColumnsImgProjects.NewHeight,"null","absolute");fBasicDivStyle(aRightShaderIds[e2],twoColumnsImgProjects.NewHeight,"null","absolute");anim.fXSlider(aFluidContainerIds[e2],-(aNxtPrv[e2].ImgContainerWidth*aNxtPrv[e2].Num));/**----------===| Project Paragraph Columns |===----------**/twoColumnsParagProjects.fTwoColumnsQueries(gdContainerWidth,aParagraphRightColumnPercent[e2],0,0);fBasicDivStyle(aParagraphContainer[e2],"auto",gdContainerWidth,"relative");fBasicDivStyle(aProjParagLeftDivIds[e2],arbitraryNum,twoColumnsParagProjects.LeftColumn,"relative");fBasicDivStyle(aProjParagRightDivIds[e2],"auto",twoColumnsParagProjects.RightColumn,"relative");headerText.fTextQueries(gdContainerWidth,aParaghProjTitleIds[e2],projTitleSmlFontSize,projTitleMidFontSize,projTitleLrgFontSize);headerText.fTextQueries(gdContainerWidth,aParaghProjSubTitleIds[e2],projSubTitleSmlFontSize,projSubTitleMidFontSize,projSubTitleLrgFontSize);headerText.fTextQueries(gdContainerWidth,aParagraphProjDescription[e2],projDescSmlFontSize,projDescMidFontSize,projDescLrgFontSize);}};/***----------=====| IMAGES ANIMATION |=====----------***/var fEventVisualContent=function fEventVisualContent(){for(var i3=0;i3<aImagesCount.length;i3++){/**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/twoColumnsImagesAnim.fTwoColumnsQueries(gdContainerWidth,aImagesRightColumnPercent[i3],aImagesWidth[i3],aImagesHeight[i3]);//console.log("aImagesRightColumnPercent[i3]: ", aImagesRightColumnPercent[i3]);
/***----------=====| Images divs height and width |=====-------------------***/anim.fAnimateHeightWidth(aImageIds[i3],twoColumnsImagesAnim.NewHeight,twoColumnsImagesAnim.RightColumn,animTymSlow);//console.log("twoColumnsImagesAnim.RightColumn:i3 ", twoColumnsImagesAnim.RightColumn);
aImageDescriptIds[i3].css({"margin-top":twoColumnsImagesAnim.NewHeight+"px"});headerText.fTextQueries(gdContainerWidth,aImageDescriptIds[i3],imgDescSmlFontSize,imgDescMidFontSize,imgDescLrgFontSize);twoColumnsVideo.fTwoColumnsQueries(gdContainerWidth,aVideoColumnPercent[i3],aVideoWidth[i3],aVideoHeight[i3]);/**----------===| VIDEO ONLY  |===----------**/if(aProjectDisplay[i3]==="video"){//rightShaderIds.hide();
//console.log("video----------------------------------------", i3);
//console.dir("twoColumnsVideo: ", twoColumnsVideo);
//twoColumnsVideo.fTwoColumnsQueries(100, 1280, 720); //aImagesWidth[i3], aImagesHeight[i3]);
//twoColumnsVideo.fTwoColumnsQueries(aVideoColumnPercent[i3], aVideoWidth[i3], aVideoHeight[i3]);
//let videoPlaceholder = $("#video-placeholder");
/**----------===| videoPlaceholder: Height & Width CSS |===----------**///fBasicDivStyle(videoPlaceholder, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn, "relative");
//fBasicDivStyle(videoPlaceholder, twoColumnsVideo.NewHeight, twoColumnsVideo.RightColumn, "relative");
// videoPlaceholder.css({
//   "height": twoColumnsImgProjects.NewHeight + "px",
//   "width": twoColumnsVideo.RightColumn + "px"
// });
// console.log("aVideoColumnPercent[1]: ", aVideoColumnPercent[1]);
// console.log("aVideoWidth[i3]: ", aVideoWidth[i3]);
// console.log("twoColumnsVideo: ", twoColumnsVideo);
// console.log("videoPlaceholder: ", videoPlaceholder);
//console.log("----------------------------------------video");
}}/**----===| END IMAGES ANIMATION: |-------------------------------•**/};// console.log(`
// /**|======================================================|**/
// /**|                      ANIMATION:                      |**/
// /**|                WINDOW RESIZE FUNCTION                |**/
// /**|======================================================|**/
// `);
var fOnWindowResize=function fOnWindowResize(){gdContainerWidth=gdContainer.width();//console.log(`gdContainerWidth: ${gdContainerWidth}`);
//console.log(`window.innerWidth: ${window.innerWidth}`);
fEventIntro();fEventHeaders();fEventProjects();fEventVisualContent();};// End fOnWindowResize
/**-----------=====| fInitMediaQueries Function |=====-----------**//** Function to initialize fMediaQueries function on load
		 *  TweenMax.ticker is used to add and remove the event listener
		 *  ix: counter
		 ****************************************************************//************ ANIMATION ENGINE ************///var tMx = TweenMax;
//  var easeSine = Sine.easeOut;
//  var easePower = Power3.easeOut;
//  var animTymSlow = .5;
//  var zeroTym = 0;
// var ix = 0;
// var fInitMediaQueries = function() {
//   tMx.ticker.addEventListener("tick", fTimer);
//   function fTimer() {
//     /**-----===( Load Media Queries )===-----**/
//     //fOnWindowResize();
//     $(window).on('resize', fOnWindowResize);
//     ix++;
//     console.log("ix: ", ix);
//     if (ix >= 1) {
//       fRemoveEvntListnr(fTimer);
//     }
//   }
// };
// var fRemoveEvntListnr = function(myFunct) {
//   tMx.ticker.removeEventListener("tick", myFunct);
// };
//fInitMediaQueries();
/**-----------=====| End fInitMediaQueries |=====-----------**/$(window).on('resize',fOnWindowResize);//$(window).on('resize', fInitMediaQueries);
/**----------=====| End Window Resize Function |=====----------**//**-----------=====| EXPORTS |=====-----------**//** DESCRIPTIONS:
		 ** TWO COLUMN CALCULATION
		 ** Webpack: module.exports
		 **----------------------------------------------------------------**///module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass;
//module.exports.sampleFunction = sampleFunction;
/**-----------=====| EXPORTS |=====-----------**/module.exports.fIntroAjax=fIntroAjax;})();/***/},/* 3 *//***/function(module,exports,__webpack_require__){/**----------===| Created by Odee on 5/17/16.|===----------**/(function(){//IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
"use strict";/**-----------=====| IMPORT | REQUIRE |=====-----------**//** DESCRIPTIONS:
	   ** FILES IMPORTED FROM OTHER JS FILES
	   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
	   **----------------------------------------------------------------**/var anim=__webpack_require__(1);//let TwoColumnsClass = require('./codeArchitecture_X'); //.TwoColumnsClass;
//let twoColmn = new TwoColumnsClass();
//let sampleTest = require('./codeArchitecture_X');
//let sample = new sampleTest.sampleFunction();
//sampleTest.sampleFunction();
/**----------------------------------------------------------------**/console.log("\n\t  Filename: nextPreviousArrows.js\n\t  Import || Require: animationFunctions.js\n\t  ");/**----------------------------------------------------------------**/// class TwoColumnsClass {
//   constructor() { //rightColumn, leftColumn, newHeight, resizePercent) {
//     this.RightColumn; // = rightColumn; // = RightColumn; //right column property that's accessible outside through the Class
//   // this.LeftColumn; // = leftColumn; // = LeftColumn; //left column property
//   // this.NewHeight; // = newHeight;
//   // this.ResizePercent; // = resizePercent;
//   /**---------- To access these properties outside, use classInstance.property ----------**/
//   /**---------- But an instance of the fTwoColumns method has to be invoked first! ----------**/
//   }
//
//   fTwoColumns(rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
//     this.RightColumn = Math.round(gdContainerWidth * (rightColumnPercentage / 100));
//     this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
//     this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
//     this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
//   //this.Stringy = "Hello from TwoColumn";
//   //console.log("nextPreviousImage.Num:2c ", nextPreviousImage.Num); //test
//   //console.log("this.ResizePercent: ", this.ResizePercent);
//   //resizePercent      = fRoundToTwo (resizePercent);
//   //console.log (`Right Column: ${this.RightColumn} | Left Column: ${this.LeftColumn}`);
//   }
// }
//
// // let fTwoColumnsAnimation = function(elem, rightColumnPercentage, parentElemWidth) {
// //   let elemWidth = Math.round(parentElemWidth * (rightColumnPercentage / 100));
// //   elem.css({
// //     "width": elemWidth
// //   })
// // }
var NextPrevNavClass=function(){function NextPrevNavClass(){_classCallCheck(this,NextPrevNavClass);this.String="Hello from NextPreviousTwoColumnsClass constructor. Accessible outside when the method is not define.";// this.RightArrow = rightArrow;
// this.LeftArrow = leftArrow;
// this.ImgContainer = imgContainer;
// this.ImgContainerWidth; // = imgContainerWidth;
// this.fluidContainerWidth = fluidContainerWidth;
}_createClass(NextPrevNavClass,[{key:"fNextPrevNavigation",value:function fNextPrevNavigation(rightArrow,leftArrow,imgContainer,imgContainerWidth,fluidContainerWidth){var _this6=this;//}, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
this.String="Hello from fNextPreviousTwoColumnsClass method";this.RightArrow=rightArrow;this.LeftArrow=leftArrow;this.ImgContainer=imgContainer;this.ImgContainerWidth=imgContainerWidth;this.fluidContainerWidth=fluidContainerWidth;this.Num=0;var num=0;var containerXPos=0;this.fluidContainerLeftPosition=0;var fluidContainerLeftPosition=void 0;/**-----------=====| Next button function |=====-----------**/rightArrow.click(function(){num++;_this6.Num=num;containerXPos=_this6.ImgContainerWidth*num;leftArrow.show();// console.log(`
//     np:${imgContainer}-----------------------------------------
//     image width:                    ${this.ImgContainerWidth}
//     multiplied by numbr of clicks:  ${num}
//                                     ------------------
//     container x position:           ${containerXPos}
//     fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
//     this.Num: same as clicks        ${this.Num}
//     np:---------------------------------------------------`)
/**-----| If the current x position greater or equals to the fluid-container width |-----**/_this6.fluidContainerLeftPosition=_this6.fluidContainerWidth-_this6.ImgContainerWidth*2;if(containerXPos>=_this6.fluidContainerLeftPosition){rightArrow.hide();}/**-----| fXSlider: Slides the image container to the left |-----**/anim.fXSlider(imgContainer,-containerXPos);//console.log(rightArrow, num, ":np---------------------------------------------------");
});/**-----------=====| Previous button function |=====-----------**/leftArrow.click(function(){num--;_this6.Num=num;containerXPos=_this6.ImgContainerWidth*num;rightArrow.show();// console.log(`
//     image width:                    ${this.ImgContainerWidth}
//     multiplied by numbr of clicks:  ${num}
//                                     ------------------
//     container x position:           ${containerXPos}
//     fluid-container width:          ${this.fluidContainerWidth - (this.ImgContainerWidth * 2)}
//     this.Num: same as clicks        ${this.Num}
// `)
/**-----| when it hits the beginning of the image container |-----**/if(containerXPos<=0){leftArrow.hide();}/**-----| fXSlider: Slides the image container to the right |-----**/anim.fXSlider(imgContainer,-containerXPos);});}}]);return NextPrevNavClass;}();/**-----------=====| EXPORTS |=====-----------**//** DESCRIPTIONS:
	   ** IMAGE NAVIGATION MODULES
	   ** NEXT & PREVIOUS ARROW NAVS
	   ** Webpack: module.exports
	   **----------------------------------------------------------------**/module.exports.NextPrevNavClass=NextPrevNavClass;//module.exports.NextPreviousTwoColumnsClass = NextPreviousTwoColumnsClass;
/**----------------------------------------------------------------**/console.log("\n\t   Filename: nextPreviousArrows.js\n\t   Exports: module.exports.NextPrevNavClass = NextPrevNavClass ");/**----------------------------------------------------------------**/})();/***/},/* 4 *//***/function(module,exports,__webpack_require__){/**----------===| Created by Odee on 06/17/16.|===----------**/(function(){//IIFE:Immediately-Invoked Function Expression
"use strict";console.log("Filename: twoColumns.js");var anim=__webpack_require__(1);/**----------=====| fRoundToTwo Function |=====----------**//** Description:
	   ** fRoundToTwo: rounds the decimals to two.
	   **------------------------------------------------------**/var fRoundToTwo=function fRoundToTwo(num){return+(Math.round(num+"e+2")+"e-2");};/**----------=====| TwoColumnsQueriesClass Class |=====----------------------------------------------------**//** Description:
	   ** Class to calculate the two columns within the container, in all screen sizes.
	   ** The right column width uses the "rightColumnPercentage" argument is used when the screen width is
	   **   small but uses the percentage pulled from json at larger screen width. This is also converted to pixel.
	   ** The left column will have the container's width minus the right column width.
	   **--------------------------------------------------------------------------------------------------**/var TwoColumnsQueriesClass=function(){function TwoColumnsQueriesClass(){_classCallCheck(this,TwoColumnsQueriesClass);}_createClass(TwoColumnsQueriesClass,[{key:"fTwoColumnsQueries",value:function fTwoColumnsQueries(contnrWidth,rightColumnPercentage,imgOrigWidth,imgOrigHeight){if(contnrWidth<=400){this.ColumnPercentage=100;this.RightColumn=Math.round(contnrWidth*(this.ColumnPercentage/100));this.LeftColumn=Math.round(contnrWidth-this.RightColumn);this.ResizePercent=fRoundToTwo(this.RightColumn/imgOrigWidth);this.NewHeight=Math.round(imgOrigHeight*this.ResizePercent);}else if(contnrWidth>400&&contnrWidth<=650){this.ColumnPercentage=100;this.RightColumn=Math.round(contnrWidth*(this.ColumnPercentage/100));this.LeftColumn=Math.round(contnrWidth-this.RightColumn);this.ResizePercent=fRoundToTwo(this.RightColumn/imgOrigWidth);this.NewHeight=Math.round(imgOrigHeight*this.ResizePercent);}else{this.ColumnPercentage=rightColumnPercentage;this.RightColumn=Math.round(contnrWidth*(this.ColumnPercentage/100));this.LeftColumn=Math.round(contnrWidth-this.RightColumn);this.ResizePercent=fRoundToTwo(this.RightColumn/imgOrigWidth);this.NewHeight=Math.round(imgOrigHeight*this.ResizePercent);// this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
// this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
// this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
}//   this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
//   this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
//   this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
//console.log("this.NewHeight: ", this.NewHeight);
}}]);return TwoColumnsQueriesClass;}();/**--------------------------------------------**/var ThreeColumnsClass=function(){function ThreeColumnsClass(){_classCallCheck(this,ThreeColumnsClass);}_createClass(ThreeColumnsClass,[{key:"fThreeColumns",value:function fThreeColumns(contnrWidth){console.log("contnrWidth: ",contnrWidth);var oneThird=contnrWidth/3;console.log("oneThird: ",oneThird);}}]);return ThreeColumnsClass;}();;// let oneThirdTest = new ThreeColumnsClass();
// oneThirdTest.fThreeColumns();
/**--------------------------------------------**/var TextQueriesClass=function(){function TextQueriesClass(){//   this.contnrWidth = contnrWidth;
//   this.elem = elem;
//   this.smlFntSize = smlFntSize;
//   this.midFntSize = midFntSize;
//   this.lrgFntSize = lrgFntSize;
_classCallCheck(this,TextQueriesClass);}_createClass(TextQueriesClass,[{key:"fTextQueries",value:function fTextQueries(contnrWidth,elem,smlFntSize,midFntSize,lrgFntSize){//console.log("contnrWidth: ", contnrWidth);
//console.log("elem.height(): ", elem.height());
if(contnrWidth<=400){anim.fFontSizer(elem,smlFntSize);//"4em"
elem.css({"padding-left":"20px"});}else if(contnrWidth>400&&contnrWidth<=650){anim.fFontSizer(elem,midFntSize);//"4em"
elem.css({"padding-left":"20px"});}else{anim.fFontSizer(elem,lrgFntSize);//"4em"
elem.css({"padding-left":"0px"});}}}]);return TextQueriesClass;}();/**-----------=====| EXPORTS |=====-----------**//** DESCRIPTIONS:
	   ** TWO COLUMNS MODULE
	   ** Webpack: module.exports
	   **----------------------------------------------------------------**/module.exports.TwoColumnsQueriesClass=TwoColumnsQueriesClass;module.exports.TextQueriesClass=TextQueriesClass;module.exports.ThreeColumnsClass=ThreeColumnsClass;/**----------------------------------------------------------------**/console.log("\n\t  Filename: twoColumns.js\n\t  module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass\n\t  ");/**----------------------------------------------------------------**/})();/***/}/******/]);//# sourceMappingURL=../bundle.map