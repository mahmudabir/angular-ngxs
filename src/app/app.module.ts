import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from "@ngxs/store";
import { TutorialState } from "./shared/state/tutorial.state";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsStoragePluginModule, StorageOption } from "@ngxs/storage-plugin";

import { ReadTutorialComponent } from './tutorial/read-tutorial/read-tutorial.component';
import { ReadBookComponent } from './book/read-book/read-book.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { CreateTutorialComponent } from './tutorial/create-tutorial/create-tutorial.component';
import { BookState } from './shared/state/book.state';
import { SharedService } from "./shared/service/shared.service";
import { CountComponent } from './count/count.component';
import { CountState } from "./shared/state/count.state";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    ReadTutorialComponent,
    CreateTutorialComponent,
    ReadBookComponent,
    CreateBookComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([TutorialState, BookState, CountState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      collapsed: true,
      disabled: environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.LocalStorage,
      // serialize: (state) => JSON.stringify(state), // no encryption
      // deserialize: (state) => JSON.parse(state), // no encryption
      // serialize: (state) => SharedService.encryptBase64JsonObject(state), // base 64
      // deserialize: (state) => SharedService.decryptBase64JsonObject(state), // base 64
      serialize: (state) => SharedService.encryptAESJsonObject(state),//CryptoJS.AES.encrypt(JSON.stringify(state), "SECRET"), // AES
      deserialize: (state) => SharedService.decryptAESJsonObject(state)//JSON.parse(CryptoJS.AES.decrypt(state,"SECRET").toString(CryptoJS.enc.Utf8)) // AES
      // serialize: (state) => SharedService.encryptAESBase64JsonObject(state), // base 64 & AES
      // deserialize: (state) => SharedService.decryptAESBase64JsonObject(state) // base 64 & AES
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
