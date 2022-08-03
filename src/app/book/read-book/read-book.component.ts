import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable, of } from "rxjs";

import CryptoJS from 'crypto-js';

import RemoveBook = BookAction.RemoveBook;
import { BookAction } from '../../shared/actions/book.action';
import { BookState } from '../../shared/state/book.state';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  @Select(BookState.getTutorials) books$: Observable<Book[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  deleteTutorial(name) {
    this.store.dispatch(new RemoveBook(name));
  }


  refreshTutorials() {
      this.store.reset(JSON.parse(CryptoJS.AES.decrypt(localStorage['@@STATE'],"SECRET").toString(CryptoJS.enc.Utf8)));
  }

  clearLocalStorage() {
    // this.store.reset({});
    // localStorage['@@STATE'] = CryptoJS.AES.decrypt(JSON.stringify(this.store.selectSnapshot(x=>x.state)),"SECRET");
  }
}
