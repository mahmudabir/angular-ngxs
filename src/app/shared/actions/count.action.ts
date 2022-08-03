
export namespace CountAction {

  export class IncrementCount {
    static readonly type = '[Count] Increment';

    constructor(public payload: number = 1) {
    }
  }


  export class DecrementCount {
    static readonly type = '[Count] Decrement';

    constructor(public payload: number = 1) {
    }
  }

}


