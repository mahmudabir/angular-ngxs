import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { TutorialAction } from "../actions/tutorial.action";
import AddTutorial = TutorialAction.AddTutorial;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  addTutorial(name, url) {
    let count = 0;
    for (let i = 0; i <= 10; i++) {
      count = i;
      console.log(count)
      this.store.dispatch(new AddTutorial({ name: name + i, url: url }));
    }
  }

}
