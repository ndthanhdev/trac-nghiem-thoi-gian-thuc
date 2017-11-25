import { Action } from "@ngrx/store";
import { IQuestion } from "../../models/question";

const prefix = "[Create Game] ";

export const LOAD = prefix + "Load";
export const LOAD_SUCCESS = prefix + "Load Success";
export const LOAD_FAILURE = prefix + "Load Failure";

export const NEXT = prefix + "Next";

export class Load implements Action {
    readonly type = LOAD;

    constructor() {
    }
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: { questions: IQuestion[] }) { }
}

export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;
}

export class Next implements Action {
    readonly type = NEXT;
    constructor(public payload: { code: string, time: number, questions: IQuestion[] }) { }
}


export type Actions = Load | LoadSuccess | LoadFailure | Next;