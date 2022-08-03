import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from "@ngxs/store";
import { TutorialState } from "./shared/state/tutorial.state";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsStoragePluginModule, StorageOption } from "@ngxs/storage-plugin";

import CryptoJS from 'crypto-js';
import { ReadTutorialComponent } from './tutorial/read-tutorial/read-tutorial.component';
import { ReadBookComponent } from './book/read-book/read-book.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { CreateTutorialComponent } from './tutorial/create-tutorial/create-tutorial.component';
import { BookState } from './shared/state/book.state';

@NgModule({
  declarations: [
    AppComponent,
    ReadTutorialComponent,
    CreateTutorialComponent,
    ReadBookComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([TutorialState, BookState]),
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
