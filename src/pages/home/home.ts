import { Component, ViewChild} from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slider') slider;
  @ViewChild('rubyContent') ionContent : Content;
  public solidHeader : boolean;
  homeScreenOptions : any;
  constructor(public navCtrl: NavController) {
    this.homeScreenOptions = "newest";
  }

  ionViewDidLoad() {
    
    // Slider Configuration
    this.slider.centeredSlides = false;
    this.slider.slidesPerView = 3;
    this.slider.spaceBetween = 10;


    this.solidHeader = false;
    console.log(this.ionContent.contentHeight);
    console.log('solidHeader variable currently: ',this.solidHeader)


    this.ionContent.ionScroll.subscribe(
      (data) => {
        console.log(data.scrollTop);
        if(data.scrollTop > 100){
          this.toggleCLass();
        }
      }
    )
  }

  public toggleCLass(){
    console.log('clicked!');
    this.solidHeader = !this.solidHeader;
  }

  changeHeaderBackground($event) {
    // let dimensions = this.ionContent.getContentDimensions();
    // console.log(dimensions);
    // if(dimensions.scrollTop > 200){
    //   this.toggleCLass();
    // }
  }

}
