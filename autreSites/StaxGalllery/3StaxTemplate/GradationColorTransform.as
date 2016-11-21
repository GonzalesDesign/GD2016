﻿package {	import flash.display.Sprite;	import flash.display.MovieClip;	import flash.events.MouseEvent;	import flash.geom.Matrix;	import flash.geom.ColorTransform;	import flash.geom.Transform;	import flash.display.GradientType;	public class GradationColorTransform extends MovieClip {		private var targetContainer:MovieClip;		private var leftGrad:uint;		private var midBase:uint;		private var rightGrad:uint;		private var rotationGrad:uint;		private var gradWidth:int;		private var gradHeight:int;		private var translateX:int;		private var translateY:int;		private var target:MovieClip;		//		//•••--------------------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||: CONSTRUCTOR		public function GradationColorTransform(targetContainer:MovieClip, leftGrad:uint, midBase:uint, rightGrad:uint, rotationGrad:uint) {			this.targetContainer = targetContainer;			this.leftGrad = leftGrad;			this.midBase = midBase;			this.rightGrad = rightGrad;			this.rotationGrad = rotationGrad;			//this.gradWidth = gradWidth			target = new MovieClip();			drawMe(target);			this.targetContainer.addChild(target);			//trace("this.targetContainerW:  " + this.targetContainer.width);		}		public function drawMe(sprite:MovieClip):void {			var matrix:Matrix = new Matrix();			var toDegrees:Number = Math.PI/180;			var myAngle = this.rotationGrad*toDegrees;			//this.gradWidth = gradWidth;// = this.targetContainer.stage.stageWidth;//this.targetContainer.width;//this.targetContainer.width;//stage.stageWidth;			gradWidth = 3000;			gradHeight = 1000;//this.targetContainer.stage.stageWidth;// this.targetContainer.height;//this.targetContainer.height;//this.targetContainer.height;//stage.stageHeight;			translateX = 0;			translateY = 0;			matrix.createGradientBox(gradWidth, gradHeight, myAngle, translateX, translateY);			var colors:Array = [this.leftGrad, this.midBase, this.midBase, this.midBase, this.rightGrad];			var alphas:Array = [1, 1, 1, 1, 1];			var ratios:Array = [0, 100, 122, 175, 255];			sprite.graphics.beginGradientFill(GradientType.LINEAR, colors, alphas, ratios, matrix);			sprite.graphics.drawRect(0, 0, gradWidth, gradHeight);						trace("gradWidth: " + gradWidth)		}		/*  public function clickHandler(event:MouseEvent):void {		var rOffset:Number = transform.colorTransform.this.leftGradOffset + 25;		var bOffset:Number = transform.colorTransform.this.leftGradOffset - 25;		this.transform.colorTransform = new ColorTransform(1, 1, 1, 1, rOffset, 0, bOffset, 0);		  }*/	}}