/**----------===| Created by Odee on 06/17/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression

  "use strict";
  //console.log("Filename: twoColumns.js");

  let anim = require('./animationFunctions');

  /**----------=====| fRoundToTwo Function |=====----------**/
  /** Description: fRoundToTwo: rounds the decimals to two.
   **------------------------------------------------------**/
  let fRoundToTwo = function(num) {
    return +(Math.round(num + "e+2") + "e-2");
  };

  /**----------=====| TwoColumnsQueriesClass Class |=====----------------------------------------------------**/
  /** Description:
   ** Class to calculate the two columns within the container, in all screen sizes.
   ** The right column width uses the "rightColumnPercentage" argument when the screen width is small
      and uses the percentage pulled from json at larger screen width. Converted to pixel.
   ** The left column will have the container's width minus the right column width.
   **--------------------------------------------------------------------------------------------------**/
  class TwoColumnsQueriesClass {
    constructor() {}

    fTwoColumnsQueries(contnrWidth, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
      //console.log("contnrWidth: ", contnrWidth);
      if (contnrWidth <= 400) {
        this.ColumnPercentage = 100;
        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
        //console.log("this.ColumnPercentage: ", this.ColumnPercentage);

      } else if (contnrWidth > 400 && contnrWidth <= 650) {
        this.ColumnPercentage = 100;
        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
        //console.log("this.ColumnPercentage: ", this.ColumnPercentage);

      } else {
        this.ColumnPercentage = rightColumnPercentage;
        this.RightColumn = Math.round(contnrWidth * (this.ColumnPercentage / 100));
        this.LeftColumn = Math.round(contnrWidth - this.RightColumn);
        this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
        this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
        //console.log(this + ".ColumnPercentage: ", this.ColumnPercentage);
      }
    }
  }

  /**--------------------------------------------**/
  class ThreeColumnsClass {
    constructor() {}

    fThreeColumns(contnrWidth) {
      //console.log("contnrWidth: ", contnrWidth);
      let oneThird = contnrWidth / 3;
      //console.log("oneThird: ", oneThird);
    }
  };
  /**--------------------------------------------**/

  class TextQueriesClass {
    constructor() {}

    fTextQueries(contnr, elem, smlFntSize, midFntSize, lrgFntSize) {
      //fTextQueries(contnrWidth, elem, smlFntSize, midFntSize, lrgFntSize) {
      //console.log("contnrWidth: ", contnrWidth);
      //console.log("elem.height(): ", elem.height());
      let contnrWidth = contnr.width();
      let contnrHeight = contnr.height();

      if (contnrWidth <= 400 && contnrHeight <= 400) {
        anim.fFontSizer(elem, smlFntSize); //"4em"
        elem.css({
          "padding-left": "20px"
        })
      } else if ((contnrWidth > 400 && contnrWidth <= 650) || (contnrHeight > 400 && contnrHeight <= 650)) {
        anim.fFontSizer(elem, midFntSize); //"4em"
        elem.css({
          "padding-left": "20px"
        })
      } else {
        anim.fFontSizer(elem, lrgFntSize); //"4em"
        elem.css({
          "padding-left": "0px"
        })
      }
    }


  }

  /**-----------=====| MODULE EXPORTS |=====-----------**/

  module.exports.TwoColumnsQueriesClass = TwoColumnsQueriesClass;
  module.exports.TextQueriesClass = TextQueriesClass;
  module.exports.ThreeColumnsClass = ThreeColumnsClass;
  /**----------------------------------------------------------------**/

}());
