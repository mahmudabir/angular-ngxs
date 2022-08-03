import { Component, Renderer2 } from '@angular/core';
import { fromEvent } from "rxjs";
import { Store } from "@ngxs/store";
import * as lodash from "lodash"

import CryptoJS from 'crypto-js';
import { SharedService } from "./shared/service/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngxs';

  constructor(private store: Store,
              private renderer: Renderer2) {

  }


  ngAfterContentInit(): void {
    let source$ = fromEvent<StorageEvent>(window, 'storage');

    source$.subscribe(data => {
      if (data.url == location.href) { // check if the change is in the localStorage        
        if (localStorage['@@STATE']) {
          this.store.reset(SharedService.decryptAESJsonObject(localStorage['@@STATE']));
        }

      }

    });

  }

}
