import { Tutorial } from "../models/tutorial.model";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { TutorialAction } from "../actions/tutorial.action";
import { Injectable } from "@angular/core";
import AddTutorial = TutorialAction.AddTutorial;
import RemoveTutorial = TutorialAction.RemoveTutorial;


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
    static getTutorials( state: TutorialStateModel) {
        return state.tutorials;
    }

    @Action(AddTutorial)
    add({getState, patchState}: StateContext<TutorialStateModel>, {payload}: AddTutorial ) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload]
        });
    }

    @Action(RemoveTutorial)
    remove({getState, patchState}: StateContext<TutorialStateModel>, {payload}: RemoveTutorial ) {
        patchState({
            tutorials: getState().tutorials.filter(a=>a.name != payload)
        });
    }
}
