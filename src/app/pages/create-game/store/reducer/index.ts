import * as fromAction from "../action";

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IQuestion } from "../../models/question";

export interface State {
    isBusy: boolean;
    preparedQuestions: IQuestion[];
    questions: IQuestion[];
};

export const initialState: State = {
    isBusy: false,
    preparedQuestions: [],
    questions: []
};

export function reducer(state: State = initialState, action): State {
    switch (action.type) {
        case fromAction.LOAD:
            return {
                ...state,
                isBusy: true
            };
        case fromAction.LOAD_SUCCESS:
            return {
                ...state,
                preparedQuestions: action.payload.questions,
                isBusy: false
            };
        case fromAction.LOAD_FAILURE:
            return {
                ...state,
                isBusy: false
            };

        case fromAction.ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, <IQuestion>action.payload.question]
            };
        case fromAction.REMOVE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question.question !== action.payload.question.question)
            };

        case fromAction.NEXT:
            return {
                ...state,
                isBusy: true
            };
        case fromAction.NEXT_SUCCESS:
            return {
                ...state,
                isBusy: false
            };
        case fromAction.NEXT_SUCCESS:
            return {
                ...state,
                isBusy: false
            };
        default:
            return state;
    }
}

export const selectCreateGameState = createFeatureSelector<State>("create-game");

export const getPreparedQuestions = createSelector(selectCreateGameState, (state: State) => state.preparedQuestions);
export const getQuestions = createSelector(selectCreateGameState, (state: State) => state.questions);
