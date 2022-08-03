import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { BookAction } from '../../shared/actions/book.action';
import { BookState } from '../../shared/state/book.state';
import { Book } from '../../shared/models/book.model';
import { SharedService } from "../../shared/service/shared.service";
import RemoveBook = BookAction.RemoveBook;

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  @Select(BookState.getBooks) books$: Observable<Book[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  deleteTutorial(name) {
    this.store.dispatch(new RemoveBook(name));
  }


  refreshTutorials() {
    this.store.reset(SharedService.decryptAESJsonObject(localStorage['@@STATE']));
  }

  clearState() {
    this.store.reset(SharedService.clearState());
  }
}
