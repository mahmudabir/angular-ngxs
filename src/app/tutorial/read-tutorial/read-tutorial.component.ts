import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { TutorialAction } from '../../shared/actions/tutorial.action';
import { TutorialState } from '../../shared/state/tutorial.state';
import { Tutorial } from '../../shared/models/tutorial.model';
import { SharedService } from "../../shared/service/shared.service";
import RemoveTutorial = TutorialAction.RemoveTutorial;

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
    this.store.reset(SharedService.decryptAESJsonObject(localStorage['@@STATE']));
  }

  clearState() {
    this.store.reset(SharedService.clearState());
  }
}
