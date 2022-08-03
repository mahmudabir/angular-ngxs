import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  //region AES
  public static encryptAESJsonObject(obj: any) {
    return CryptoJS.AES.encrypt(JSON.stringify(obj), environment.encryptionKey);
  }

  public static decryptAESJsonObject(obj: any) {
    return JSON.parse(CryptoJS.AES.decrypt(obj, environment.encryptionKey).toString(CryptoJS.enc.Utf8));
  }
  //endregion AES

  //region Base64
  public static encryptBase64JsonObject(obj: any) {
    return btoa(JSON.stringify(obj));
  }

  public static decryptBase64JsonObject(obj: any) {
    return JSON.parse(atob(obj));
  }
  //endregion Base64


  //region AES && Base64
  public static encryptAESBase64JsonObject(obj: any) {
    return btoa(CryptoJS.AES.encrypt(JSON.stringify(obj), environment.encryptionKey));
  }

  public static decryptAESBase64JsonObject(obj: any) {
    return JSON.parse(CryptoJS.AES.decrypt(atob(obj), "SECRET").toString(CryptoJS.enc.Utf8));
  }
  //endregion AES && Base64


  static clearState() {
    let state = SharedService.decryptAESJsonObject(localStorage['@@STATE']);
    Object.keys(state).map(key => {
      console.log(state[key]);
      if (state[key] && Array.isArray(state[key][key])) {
        state[key][key] = [];
      } else if (typeof state[key][key] == 'string') {
        state[key][key] = "";
      } else if (typeof state[key][key] == 'number') {
        //we can also check using: Number.isInteger(state[key][key])
        state[key][key] = 0;
      } else if(typeof state[key][key] != 'number' && typeof state[key][key] != 'string' && state[key] && !Array.isArray(state[key][key])) {
        state[key][key] = {};
      }

    });
    localStorage['@@STATE'] = SharedService.encryptAESJsonObject(state);
    return state;
  }
}
