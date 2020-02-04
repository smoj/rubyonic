import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Content page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class Content {
  @ViewChild('slider') slider;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Content');
    // Slider Configuration
    this.slider.centeredSlides = false;
    this.slider.slidesPerView = 3;
    this.slider.spaceBetween = 10;
  }

}
