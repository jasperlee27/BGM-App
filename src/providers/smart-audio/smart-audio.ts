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
  //use html5 when using ionic serve
  audioType: string = 'html5';
  // audioType: string = 'native';

  //sounds array keep track of sounds to use in application
  sounds: any = [];

  constructor(public nativeAudio: NativeAudio, platform: Platform) {
    //switch to native
    if (platform.is('cordova')) {
      this.audioType = 'native';
    }
  }
  //key is sound string id, asset is path
  preload(key, asset, complexity) {
    if (this.audioType === 'html5') {
      let audio = {
        key: key,
        asset: asset,
        type: 'html5'
      };
      this.sounds.push(audio);
    }

    //else type native, preload simple
    else {
      if (complexity === 'simple') {
        this.nativeAudio.preloadSimple(key, asset);
      }

      else {
        this.nativeAudio.preloadComplex(key, asset, 1, 1, 0);
      }

      let audio = {
        key: key,
        asset: asset,
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
    //else audio type native
    else {
      this.nativeAudio.play(audio.asset).then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    }
  }

  loop(key) {
    console.log("Calling generic loop...")
    let audio = this.sounds.find((sound) => {
      console.log("finding sound key");
      console.log("Found sound key " +sound.key + " " + key);
      return sound.key === key;
    }); 

    if (audio.type === 'html5') {
      let audioAsset = new Audio(audio.asset);
      console.log("Calling html 5 type...")
      audioAsset.play();
    }
    else {
      console.log("Did it come to loop?")
      console.log("What is audio key " + audio.key);
      console.log("What is audio asset " + audio.asset);
      this.nativeAudio.loop(audio.key).then(this.onSuccessPlaying, this.onError);
    }
  }

  onSuccessPlaying = data => {
    console.log("did call loop", data);
  };

  onError = data => {
    console.log("loop hit error", data);
  };

}
