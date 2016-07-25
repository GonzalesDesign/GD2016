/**----------===| Created by Odee on 5/17/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";

  /**-----------=====| IMPORT | REQUIRE |=====-----------**/
  /** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/
  let anim = require('./animationFunctions.js');


  class NextPrevNavClass {
    constructor() {}

    fNextPrevNavigation(
      rightArrow, leftArrow, imgContainer, imgContainerWidth, fluidContainerWidth) { //}, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
      this.String = "Hello from fNextPreviousTwoColumnsClass method";
      this.RightArrow = rightArrow;
      this.LeftArrow = leftArrow;
      this.ImgContainer = imgContainer;
      this.ImgContainerWidth = imgContainerWidth;
      this.fluidContainerWidth = fluidContainerWidth;

      this.Num = 0;
      let num = 0;
      let containerXPos = 0;
      this.fluidContainerLeftPosition = 0;
      let fluidContainerLeftPosition;

      /**-----------=====| Next button function |=====-----------**/
      rightArrow.click(() => {
        num++;
        this.Num = num;
        containerXPos = this.ImgContainerWidth * num;
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
        this.fluidContainerLeftPosition = (this.fluidContainerWidth - (this.ImgContainerWidth * 2))
        if (containerXPos >= this.fluidContainerLeftPosition) {
          rightArrow.hide();
        }
        /**-----| fXSlider: Slides the image container to the left |-----**/
        anim.fXSlider(imgContainer, -(containerXPos));
        //console.log(rightArrow, num, ":np---------------------------------------------------");
      });

      /**-----------=====| Previous button function |=====-----------**/
      leftArrow.click(() => {
        num--;
        this.Num = num;
        containerXPos = this.ImgContainerWidth * num;
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
        anim.fXSlider(imgContainer, -(containerXPos));
      });
    }
  }

  /**-----------=====| MODULE EXPORTS |=====-----------**/
  /**--------------------------------------------------**/
  module.exports.NextPrevNavClass = NextPrevNavClass;
  /**--------------------------------------------------**/


}());
