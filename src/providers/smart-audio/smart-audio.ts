import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeAudio } from '../../../node_modules/@ionic-native/native-audio';
import { Platform } from '../../../node_modules/ionic-angular/platform/platform';

/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmartAudioProvider {
  //html5 init
  audioType: string = 'html5';
  //sounds array keep track of sounds to use in application
  sounds: any = [];

  constructor(public nativeAudio: NativeAudio, platform: Platform) {
    //switch to native
    if (platform.is('cordova')) {
      this.audioType = 'native';
    }

  }
  //key is sound string id, asset is path
  preload(key, asset) {
    if (this.audioType === 'html5') {
      let audio = {
        key: key,
        asset: asset,
        type: 'html5'
      };
      this.sounds.push(audio);
    }
    //preload simple for simple sounds
    else {
      this.nativeAudio.preloadSimple(key, asset);

      let audio = {
        key: key,
        asset: key,
        type: 'native'
      };

      this.sounds.push(audio);
    }
    //todo: implement preload complex for bgm can fade
  }

  play(key) {

    let audio = this.sounds.find((sound) => {
      return sound.key === key;
    });
    if (audio.type === 'html5') {
      let audioAsset = new Audio(audio.asset);
      audioAsset.play();
    } 
    else {
      this.nativeAudio.play(audio.asset).then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    }
  }
}
