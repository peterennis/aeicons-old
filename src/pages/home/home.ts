import { Component } from '@angular/core';
import { Elastic } from 'gsap';
import { Expo } from 'gsap';
import { TimelineLite } from 'gsap';

//declare var KUTE: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  master = new TimelineLite;
  tl = new TimelineLite;

  constructor( ) { }

//  drawAdaeptKute ( ) {
//    var tweenAdaept = KUTE.to('#a', { svgTransform: { translate: 580, rotate: 360 } }, { yoyo: true, repeat: 1, duration: 1500, easing: "easingCubicOut"});
//    tweenAdaept.start();
//  }

  drawAdaept() {
    var tlAdaept = new TimelineLite({delay:.5});
    tlAdaept
      
    // SET
    .set(".svg-container", { perspective: 200 })
    .set("#adaept", {transformOrigin:"center"})
      
    // ADAEPT MOTION
    .staggerTo("#adaept *", 2, {scaleX:1.2, scaleY:.85, y:-18, rotationX: 15, rotationY: -15, rotationZ: 2, ease:Elastic.easeOut}, .015, 0.2)
    .staggerTo("#adaept *", 2, {scaleX:1, scaleY:1, y:0, rotationY:0, rotationX: 0, rotationZ: 0, ease:Elastic.easeOut}, .015, 0.4)
    
    // a MOVING LEFT
    .to("#a", .6, {x:-200, rotationY:-20, ease:Expo.easeOut}, "b")
    .to("#e", .6, {x:-100, rotationY:-20, ease:Expo.easeOut}, "b")
      
    // e MOVING RIGHT
    .to("#e", .6, {x:200, rotationY:20, ease:Expo.easeOut}, "c+=.1")
    .to("#e", .6, {x:100, rotationY:25, ease:Expo.easeOut}, "c+=.1")
      
    // ADAEPT BACK POSITION
    .to("#adaept *", 1.5, {x:0, y:0, rotationY:0}, "+=1")
  
    return tlAdaept;
  }

  onComplete() {
    this.tl.clear().add(this.drawAdaept());
    this.master.play(0);
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter - This function will be called every time you enter the view");
    this.drawAdaept();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
