import { GoogleMap, GoogleMaps, GoogleMapOptions, Environment } from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 map:  GoogleMap; 
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA63CTy32Hg_QQu3UyYOyQnHzan_v_Lr-o',
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA63CTy32Hg_QQu3UyYOyQnHzan_v_Lr-o',
    // })
    let options: GoogleMapOptions = {
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true
      }
    };
    this.map = GoogleMaps.create('map_canvas', options);
  }

}
