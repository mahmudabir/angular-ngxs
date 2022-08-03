import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable, of } from "rxjs";

import CryptoJS from 'crypto-js';

import RemoveTutorial = TutorialAction.RemoveTutorial;
import { TutorialAction } from '../../shared/actions/tutorial.action';
import { TutorialState } from '../../shared/state/tutorial.state';
import { Tutorial } from '../../shared/models/tutorial.model';

@Component({
  selector: 'app-read-tutorial',
  templateUrl: './read-tutorial.component.html',
  styleUrls: ['./read-tutorial.component.css']
})
export class ReadTutorialComponent implements OnInit {

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
