import { Tutorial } from "../models/tutorial.model";

export namespace TutorialAction {

  export class AddTutorial {
    static readonly type = '[Tutorial] Add';

    constructor(public payload: Tutorial) {
    }
  }


  export class RemoveTutorial {
    static readonly type = '[Tutorial] Remove';

    constructor(public payload: string) {
    }
  }

}


