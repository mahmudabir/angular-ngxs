import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { NgxsModule } from "@ngxs/store";
import { TutorialState } from "./state/tutorial.state";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsStoragePluginModule, StorageOption } from "@ngxs/storage-plugin";

import CryptoJS from 'crypto-js';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      TutorialState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.LocalStorage,
      // serialize: (state) => JSON.stringify(state), // no encryption
      // deserialize: (state) => JSON.parse(state), // no encryption
      // serialize: (state) => btoa(JSON.stringify(state)), // base 64
      // deserialize: (state) => JSON.parse(atob(state)), // base 64
      serialize: (state) => CryptoJS.AES.encrypt(JSON.stringify(state), "SECRET"), // AES
      deserialize: (state) => JSON.parse(CryptoJS.AES.decrypt(state,"SECRET").toString(CryptoJS.enc.Utf8)) // AES
      // serialize: (state) => btoa(CryptoJS.AES.encrypt(JSON.stringify(state), "SECRET")), // base 64 & AES
      // deserialize: (state) => JSON.parse(CryptoJS.AES.decrypt(atob(state), "SECRET").toString(CryptoJS.enc.Utf8))
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
