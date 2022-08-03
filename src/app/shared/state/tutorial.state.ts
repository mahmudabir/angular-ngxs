
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import AddTutorial = TutorialAction.AddTutorial;
import RemoveTutorial = TutorialAction.RemoveTutorial;
import { TutorialAction } from "../actions/tutorial.action";
import { Tutorial } from "../models/tutorial.model";


export class TutorialStateModel {
    tutorials: Tutorial[];
}


@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})
@Injectable()
export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModel) {
        return state.tutorials;
    }

    @Action(AddTutorial)
    add(ctx: StateContext<TutorialStateModel>, action: AddTutorial) {
        const state = ctx.getState();
        ctx.patchState({
            tutorials: [...state.tutorials, action.payload]
        });
    }

    @Action(RemoveTutorial)
    remove(ctx: StateContext<TutorialStateModel>, action: RemoveTutorial) {
        ctx.patchState({
            tutorials: ctx.getState().tutorials.filter(a => a.name != action.payload)
        });
    }
}
