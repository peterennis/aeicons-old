import { Component } from '@angular/core';
import { Elastic } from 'gsap';
import { Expo } from 'gsap';
import { TimelineLite } from 'gsap';
//import { TweenLite } from 'gsap';
//import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  master = new TimelineLite;
  tl = new TimelineLite;

  constructor( ) { }

  clickAdaeptIcon() {
    console.log('clickAdaeptIcon was clicked');
    this.drawAdaept1();
    this.drawAdaept2();
    this.drawAdaept3();
  }

  drawAdaept1() {

    var tlAdaept1 = new TimelineLite({delay:.5});
    tlAdaept1
      
    // SET
    .set(".svg-container", { perspective: 200 })
    .set("#adaept", {transformOrigin:"center"})
      
    // ADAEPT MOTION
    .staggerTo("#adaept *", 2, {scaleX:1.2, scaleY:.85, y:-18, rotationX: 15, rotationY: -15, rotationZ: 2, ease:Elastic.easeOut}, .015, 0.2)
    .staggerTo("#adaept *", 2, {scaleX:1, scaleY:1, y:0, rotationY:0, rotationX: 0, rotationZ: 0, ease:Elastic.easeOut}, .015, 0.4)
    
    // ae MOVING LEFT
    .to("#a", .6, {x:-200, rotationY:-20, ease:Expo.easeOut}, "b")
    .to("#e", .6, {x:-100, rotationY:-20, ease:Expo.easeOut}, "b")
      
    // ae MOVING RIGHT
    .to("#a", .6, {x:600, rotationY:20, ease:Expo.easeOut}, "c+=.1")
    .to("#e", .6, {x:100, rotationY:20, ease:Expo.easeOut}, "c+=.1")
      
    // ADAEPT BACK POSITION
    .to("#adaept *", 1.5, {x:0, y:0, rotationY:0}, "+=1")

    console.log('drawAdaept1 before return');
    return tlAdaept1;
  }

  drawAdaept2() {
    var tlAdaept2 = new TimelineLite({delay:.5});
    tlAdaept2
      
    // SET
    .set(".svg-container", { perspective: 200 })
    .set("#adaept2", {transformOrigin:"center"})

    // ADAEPT MOTION
    .staggerTo("#adaept2 *", 2, {scaleX:1.75, scaleY:.75, y:-30, rotationX: 30, rotationY: -40, rotationZ: 3, ease:Elastic.easeOut}, .015, 0.3)
    .staggerTo("#adaept2 *", 2, {scaleX:1, scaleY:1, y:0, rotationY:0, rotationX: 0, rotationZ: 0, ease:Elastic.easeOut}, .015, 0.4)
    
    // ae MOVING LEFT
    .to("#a2", 2.5, {x:-200, rotationY:-200, ease:Expo.easeOut}, "b")
    .to("#e2", 2.5, {x:-100, rotationY:-200, ease:Expo.easeOut}, "b")
      
    // ae MOVING RIGHT
    .to("#a2", .6, {x:350, rotationY:90, ease:Expo.easeIn}, "c+=.2")
    .to("#e2", .6, {x:350, rotationY:90, ease:Expo.easeIn}, "c+=.2")
      
    // ADAEPT BACK POSITION
    .to("#adaept2 *", 1.5, {x:0, y:0, rotationY:0}, "+=1")

    console.log('drawAdaept2 before return');
    return tlAdaept2;
  }

  drawAdaept3() {
    var tlAdaept3 = new TimelineLite({delay:.5});
    tlAdaept3
      
    // SET
    .set(".svg-container", { perspective: 200 })
    .set("#adaept3", {transformOrigin:"center"})

    .to(["#a3", "#e3"], 1, {scale:0.25, opacity:0.5, repeat:2, yoyo:true})
    .to(["#a3", "#e3"], 1, {scale:1, opacity:1})

    console.log('drawAdaept3 before return');
    return tlAdaept3;
  }

	drawAdaept4() {
    // Ref: http://svglab.com/exp/generate-svg-js.html
    // Ref: https://stackblitz.com/edit/gsap-demo?file=app%2Fapp.component.css
    // Ref: https://stackoverflow.com/questions/5629684/how-to-check-if-element-exists-in-the-visible-dom/16820058#16820058

    // TODO: Test if the element exists, only create when it does not exist
    if(document.body.contains(document.getElementById("svgDotTest")))
      console.log('element exists');
    else {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttributeNS(null,"id","svgDotTest");
      svg.setAttributeNS(null,"height","120");
      svg.setAttributeNS(null,"width","100%");

      document.getElementsByTagName('body')[0].appendChild(svg);
      var svgDotTest = document.getElementById('svgDotTest');
      
      var txtElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
      txtElem.setAttributeNS(null,"x","20");
      txtElem.setAttributeNS(null,"y","40");
      
      var theText = "adaept SVG Text created with JavaScript!";
      var theMSG = document.createTextNode(theText);
      txtElem.appendChild(theMSG);
      
      svgDotTest.appendChild(txtElem);
    }

    var style = document.getElementById("svgDotTest").style.display;
    if(style === "none") {
      console.log('style === "none"');
      document.getElementById("svgDotTest").style.display = "block";
    } else {
      console.log('display = "none"');
      document.getElementById("svgDotTest").style.display = "none";
    }
    //or to hide all the svg
    //document.getElementById("mySvg").style.display = "none";


// TODO: Get particlesTimeline working using as for dot, Ref: https://greensock.com/jump-start-js#timelinelite-labels
/*
		var particlesTimeline = new TimelineLite(),
			i = 300,
			radius = 450,
			centerX= 360,
			centerY = 30;
//			dots = [],
//			rawDots = [];
    
    let dotContain = document.getElementById("dotContainer");

		while (--i > -1) {
			let dot = document.createElement("a4");
			dot.inner src .src = "img/dot.png";
			dot.id = "dot" + i;
			dotContain.appendChild;
      dot.style.cssText = "position:absolute; left:" + centerX + "px; top:" + centerY + "px; width:1px; height:1px;"

			var angle = Math.random() * Math.PI * 2,
				insertionTime = i * 0.015;
				
			particlesTimeline.from(dot, 0.05, {opacity:0, immediateRender:true}, insertionTime);
			
			particlesTimeline.to(dot, .7, {left:Math.cos(angle) * radius + centerX, 
				top:Math.sin(angle) * radius + centerY, 
				width:32, 
				height:32,
				ease:Expo.easeIn
			}, insertionTime);
			
		}
    return particlesTimeline;
*/
  }
  
  onComplete() {
    this.tl.clear().add(this.drawAdaept1());
    this.tl.clear().add(this.drawAdaept2());
    this.tl.clear().add(this.drawAdaept3());
    this.master.play(0);
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter - This function will be called every time you enter the view");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
