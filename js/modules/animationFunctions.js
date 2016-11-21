/***********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Animation Functions
 ***********************************************/
(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
  "use strict";

  console.log("Module: animationFunctions");

  /**-----------=====| TweenMax Reference Variables |=====-----------**/
  /** Description:
   ** Animation engine using GSAP TweenMax
   ********************************************************************/
  let tMx = TweenMax;
  let easeSine = Sine.easeOut;
  let power3 = Power3.easeOut;
  let power4 = Power4.easeOut;
  let back = Back.easeOut.config(1);
  let elastic = Elastic.easeOut;
  let circular = Circ.easeOut;
  let expo = Expo.easeOut;
  let sloMo = SlowMo.ease.config(0.7, 0.7, false)
  let animTym = 1;
  let animTymSlow = 3;
  let animTymFast = .25;

  /**-----------=====| SCROLL TIMER |=====-----------------------**/
  /** Description: Functions for a scroller with a timer.
   ** When scrolled, execute a function. It also fires the timer
      for a given time and during that time the scroller is null.
  *****************************************************************/
  // let fScrollControl = () => {
  //   let scrollAmount = $(window).scrollTop();
  //   console.log("scrollAmountXX: ", scrollAmount);
  // }


  let fScrollTimer = (funct2Execute) => {
    var ix = 0;
    var fAddEvntListnr = function() {
      tMx.ticker.addEventListener("tick", fTimer);
      //fScrollControl();
      //funct2Execute;

      function fTimer() {
        /**-----===( Load Media Queries )===-----**/
        //fOnWindowResize();
        //$(window).on('resize', fOnWindowResize);
        //fScrollControl();
        funct2Execute;
        ix++;
        console.log("ix: ", ix);
        if (ix >= 10) {
          fRemoveEvntListnr(fTimer);
        }
      }
    };
    var fRemoveEvntListnr = function(myFunct) {
      tMx.ticker.removeEventListener("tick", myFunct);
    };

    fAddEvntListnr();
  }

  /**-----------=====| fOpacityAnim Function |=====-----------**/
  /** Description: Animates element's opacity from 0% to 100%
   *************************************************************/
  let fOpacityAnim = function(elem) {
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
  let fXSlider = function(elem, horizPos) {
    tMx.to(elem, animTym, {
      left: horizPos,
      ease: back
    });
  };

  let fYSlider = function(elem, vertPos) {
    tMx.to(elem, animTymSlow, {
      top: vertPos,
      position: "fixed",
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
  let fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
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

  let fFontSizer = function(elem, sizeFont) {
    tMx.to(elem, animTymSlow, {
      fontSize: sizeFont,
      ease: power3
    });
  };


  /**-----------=====| MODULE EXPORTS |=====-----------**/
  module.exports.fXSlider = fXSlider;
  module.exports.fYSlider = fYSlider;
  module.exports.fAnimateHeightWidth = fAnimateHeightWidth;
  //module.exports.fImageHeightWidth = fImageHeightWidth;
  module.exports.fFontSizer = fFontSizer;
  module.exports.fScrollTimer = fScrollTimer;
  /**--------------------------------------------------**/

}());
// ----**/
//
// }());
