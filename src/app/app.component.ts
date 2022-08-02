import { Component, Renderer2 } from '@angular/core';
import { fromEvent } from "rxjs";
import { Store } from "@ngxs/store";
import * as lodash from "lodash"

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
      console.log(this.store.snapshot());
      console.log(JSON.parse(data.newValue))
      console.log(this.store.snapshot() == JSON.parse(data.newValue))
    });

  }

}
