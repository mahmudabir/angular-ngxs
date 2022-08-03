import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { CountState } from "../shared/state/count.state";
import { CountAction } from "../shared/actions/count.action";
import IncrementCount = CountAction.IncrementCount;
import DecrementCount = CountAction.DecrementCount;

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  @Select(CountState.getCount) count$ : Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(new IncrementCount());
  }

  decrement() {
    this.store.dispatch(new DecrementCount());
  }
}
