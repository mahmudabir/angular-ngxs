import { Book } from "../models/book.model";

export namespace BookAction {

  export class AddBook {
    static readonly type = '[Book] Add';

    constructor(public payload: Book) {
    }
  }


  export class RemoveBook {
    static readonly type = '[Book] Remove';

    constructor(public payload: string) {
    }
  }

}


