/***********************************************
 * Project: GonzalesDesign 2016
 * Developer: rolandolloyd@gmail.com
 * Copyright © 2016 GonzalesDesign
 * Platform: NodeJS, ES6, Webpack, Babel & Node-Sass
 * Module: Create Timer
 ***********************************************/
(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
  "use strict";

  console.log("Module: CreateTimer");

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
  let animTymSlow = 2;
  let animTymFast = .25;

  /**-----------=====| SCROLL TIMER |=====-----------------------**/
  /** Description: Functions for a scroller with a timer.
   ** When scrolled, execute a function. It also fires the timer
      for a given time and during that time the scroller is null.
  *****************************************************************/
  let fScrollControl = () => {
    let scrollAmount = $(window).scrollTop();
    console.log("scrollAmountXX: ", scrollAmount);
  }


  let fTimer = (funct2Execute, segundo) => {
    var ix = 0;
    var fAddEvntListnr = function() {
      tMx.ticker.addEventListener("tick", fTimer);
      //fScrollControl();
      //funct2Execute;

      function fTimer() {
          console.log("fTimer use here.");
        /**-----===( Load Media Queries )===-----**/
        //fOnWindowResize();
        //$(window).on('resize', fOnWindowResize);
        //fScrollControl();
        funct2Execute;
        ix++;
        console.log("ix: ", ix);
        if (ix >= segundo) {
          fRemoveEvntListnr(fTimer);
          console.log("fRemoveEvntListnr");
        }
      }
    };
    var fRemoveEvntListnr = function(myFunct) {
      tMx.ticker.removeEventListener("tick", myFunct);
    };

    fAddEvntListnr();
  }

  /**-----------=====| MODULE EXPORTS |=====-----------**/
  module.exports.fTimer = fTimer;
  /**--------------------------------------------------**/

}());
// ----**/
//
// }());
