import { Component } from '@angular/core';
import { Elastic } from 'gsap';
import { Expo } from 'gsap';
import { TimelineLite } from 'gsap';
//import { TweenLite } from 'gsap';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  master = new TimelineLite;
  tl = new TimelineLite;

  constructor( ) { }

  drawAdaept() {
    var tlAdaept = new TimelineLite({delay:.5});
    tlAdaept
      
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
  
    return tlAdaept;
  }

  drawAdaept2() {
    var tlAdaept2 = new TimelineLite({delay:.5});
    tlAdaept2
      
    // SET
    .set(".svg-container", { perspective: 200 })
    .set("#adaept2", {transformOrigin:"center"})

    // ADAEPT MOTION
    .staggerTo("#adaept2 *", 2, {scaleX:1.2, scaleY:.85, y:-18, rotationX: 15, rotationY: -15, rotationZ: 2, ease:Elastic.easeOut}, .015, 0.2)
    .staggerTo("#adaept2 *", 2, {scaleX:1, scaleY:1, y:0, rotationY:0, rotationX: 0, rotationZ: 0, ease:Elastic.easeOut}, .015, 0.4)
    
    // ae MOVING LEFT
    .to("#a2", .6, {x:-200, rotationY:-200, ease:Expo.easeOut}, "b")
    .to("#e2", .6, {x:-100, rotationY:-200, ease:Expo.easeOut}, "b")
      
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

    .to(["#a3", "#e3"], 1, {scale:0.2, opacity:0.3, repeat:2, yoyo:true})
    .to(["#a3", "#e3"], 1, {scale:1, opacity:1})

    console.log('drawAdaept3 before return');
    return tlAdaept3;
  }

  onComplete() {
    this.tl.clear().add(this.drawAdaept());
    this.tl.clear().add(this.drawAdaept2());
    this.tl.clear().add(this.drawAdaept3());
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
