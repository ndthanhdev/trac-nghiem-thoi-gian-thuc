import * as fromAction from "../action";

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IQuestion } from "../../models/question";

export interface State {
    questions: IQuestion[];
};

export const initialState: State = {
    questions: []
};

export function reducer(state: State = initialState, action): State {
    switch (action.type) {
        case fromAction.LOAD_SUCCESS:
            return {
                ...state,
                questions: action.payload.questions
            };
        default:
            return state;
    }
}

export const selectCreateGameState = createFeatureSelector<State>("create-game");

export const getPreparedQuestions = createSelector(selectCreateGameState, (state: State) => state.questions);