import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import CryptoJS from 'crypto-js';


if (environment.production) {
  enableProdMode();
}

// let en = CryptoJS.AES.encrypt( "Test Data", "SECRET");
// console.log(en);
// let de = CryptoJS.AES.decrypt( en,"SECRET").toString(CryptoJS.enc.Utf8);
// console.log(de);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
