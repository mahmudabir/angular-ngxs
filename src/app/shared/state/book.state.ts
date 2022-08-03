
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
    static getBooks(state: BookStateModel) {
        return state.books;
    }

    @Action(AddBook)
    add(ctx: StateContext<BookStateModel>, action: AddBook) {
        const state = ctx.getState();
        ctx.patchState({
            books: [...state.books, action.payload]
        });
    }

    @Action(RemoveBook)
    remove(ctx: StateContext<BookStateModel>, action: RemoveBook) {
        ctx.patchState({
            books: ctx.getState().books.filter(a => a.name != action.payload)
        });
    }
}
