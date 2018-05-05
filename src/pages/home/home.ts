import { Component } from '@angular/core';

declare var KUTE: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( ) { }

  drawAdaept ( ) {
    var tweenAdaept = KUTE.to('#a', { svgTransform: { translate: 580, rotate: 360 } }, { yoyo: true, repeat: 1, duration: 1500, easing: "easingCubicOut"});
    tweenAdaept.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SvgPage');
  }

}
