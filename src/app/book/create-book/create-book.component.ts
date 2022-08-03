import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { BookAction } from '../../shared/actions/book.action';
import AddBook = BookAction.AddBook;

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  addTutorial(name, author) {
    for (let i = 0; i <= 10; i++) {
      this.store.dispatch(new AddBook({ name: name + i, author: author }));
    }
  }

}
