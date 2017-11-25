import { Action } from "@ngrx/store";
import { IQuestion } from "../../models/question";

const prefix = "[Create Game] ";

export const LOAD = prefix + "Load";
export const LOAD_SUCCESS = prefix + "Load Success";
export const LOAD_FAILURE = prefix + "Load Failure";

export const ADD_QUESTION = `${prefix} Add Question`;
export const REMOVE_QUESTION = `${prefix} Remove Question`;

export const NEXT = prefix + "Next";
export const NEXT_SUCCESS = prefix + "Next Success";
export const NEXT_FAILURE = prefix + "Next Failure";

export interface INextActionPayload {
    code: string;
    time: number;
    questions: IQuestion[];
}

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

export class AddQuestion implements Action {
    readonly type = ADD_QUESTION;

    constructor(public payload: { question: IQuestion }) {
    }
}

export class RemoveQuestion implements Action {
    readonly type = REMOVE_QUESTION;

    constructor(public payload: { question: IQuestion }) {
    }
}

export class Next implements Action {
    readonly type = NEXT;
    constructor(public payload: INextActionPayload) { }
}

export class NextSuccess implements Action {
    readonly type = NEXT_SUCCESS;
    constructor(public payload: INextActionPayload) { }
}

export class NextFailure implements Action {
    readonly type = NEXT_FAILURE;
}


export type Actions = Load
    | LoadSuccess
    | LoadFailure
    | AddQuestion
    | RemoveQuestion
    | Next
    | NextSuccess
    | NextFailure;