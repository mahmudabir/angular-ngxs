
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import AddBook = BookAction.AddBook;
import RemoveBook = BookAction.RemoveBook;
import { BookAction } from "../actions/book.action";
import { Book } from "../models/book.model";
import { CountAction } from "../actions/count.action";
import IncrementCount = CountAction.IncrementCount;
import DecrementCount = CountAction.DecrementCount;

export class CountStateModel {
    count: number;
}


@State<CountStateModel>({
    name: 'count',
    defaults: {
        count: 0
    }
})
@Injectable()
export class CountState {

    @Selector()
    static getCount(state: CountStateModel) {
        return state.count;
    }

    @Action(IncrementCount)
    increment(ctx: StateContext<CountStateModel>, action: IncrementCount) {
        const state = ctx.getState();
        ctx.patchState({
            count: Number(Number.isNaN(state.count) ? 0 : state.count) + action.payload
        });
    }

    @Action(DecrementCount)
    decrement(ctx: StateContext<CountStateModel>, action: DecrementCount) {
        const state = ctx.getState();
        ctx.patchState({
            count: Number(Number.isNaN(state.count) ? 0 : state.count) - action.payload
        });
    }
}
