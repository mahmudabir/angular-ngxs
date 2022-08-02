import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { TutorialState } from "../state/tutorial.state";
import { Observable, of } from "rxjs";
import { Tutorial } from "../models/tutorial.model";
import { TutorialAction } from "../actions/tutorial.action";

import CryptoJS from 'crypto-js';

import RemoveTutorial = TutorialAction.RemoveTutorial;

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  deleteTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }


  refreshTutorials() {
      this.store.reset(JSON.parse(CryptoJS.AES.decrypt(localStorage['@@STATE'],"SECRET").toString(CryptoJS.enc.Utf8)));
  }

  clearLocalStorage() {
    // this.store.reset({});
    // localStorage['@@STATE'] = CryptoJS.AES.decrypt(JSON.stringify(this.store.selectSnapshot(x=>x.state)),"SECRET");
  }
}
