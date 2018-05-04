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


//import { IonicPageModule } from 'ionic-angular';
//import { SvgPage } from './svg';
//import { KUTE } from '../../assets/js/kute-svg.min';

//@NgModule({
// declarations: [
//    SvgPage,
//    //KUTE
//  ],
//  imports: [
//    IonicPageModule.forChild(SvgPage)
//  ],
//})
//export class SvgPageModule {}
