
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import AddBook = BookAction.AddBook;
import RemoveBook = BookAction.RemoveBook;
import { BookAction } from "../actions/book.action";
import { Book } from "../models/book.model";

export class BookStateModel {
    books: Book[];
}


@State<BookStateModel>({
    name: 'books',
    defaults: {
        books: []
    }
})
@Injectable()
export class BookState {

    @Selector()
    static getTutorials(state: BookStateModel) {
        return state.books;
    }

    @Action(AddBook)
    add({ getState, patchState }: StateContext<BookStateModel>, { payload }: AddBook) {
        const state = getState();
        patchState({
            books: [...state.books, payload]
        });
    }

    @Action(RemoveBook)
    remove({ getState, patchState }: StateContext<BookStateModel>, { payload }: RemoveBook) {
        patchState({
            books: getState().books.filter(a => a.name != payload)
        });
    }
}
