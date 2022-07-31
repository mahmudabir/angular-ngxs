import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { TutorialState } from "../state/tutorial.state";
import { Observable } from "rxjs";
import { Tutorial } from "../models/tutorial.model";
import { TutorialAction } from "../actions/tutorial.action";
import RemoveTutorial = TutorialAction.RemoveTutorial;

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  deleteTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }


}
