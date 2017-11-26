/*
3rd Party library imports
 */
/*
Project file imports
 */
import * as fromAction from "../action";
import { IQuestion } from "../../create-game/models/question";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    code: string;
    users: [{
        username: string,
        name: string
    }];
    time: number;
    questions: [IQuestion];
    isStarted: boolean;
}

export const initialState: State = {
    code: localStorage.getItem("code"), // abc
    users: [{
        username: null,
        name: null
    }],
    time: 0,
    questions: null,
    isStarted: false
};

export function reducer(state = initialState, { type, payload }): State {
    switch (type) {
        case fromAction.SET_STATE:
            return { ...payload };
        case fromAction.StartGameSucess:
            return { ...payload };
        case fromAction.COUNT_DOWN:
            return { ...payload, time: payload.time-1 };
        default:
            return state;
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getCode = (state: State) => state.code;

// export const getEntities = (state: State) => state.entities;
//
// export const getIds = (state: State) => state.ids;
//
// export const getSelectedId = (state: State) => state.selectedBookId;
//
// export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
//   return entities[selectedId];
// });
//
// export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
//   return ids.map(id => entities[id]);
// });


export const getGameState = createFeatureSelector<State>('rank');

export const getGameCode = createSelector(getGameState, getCode);

export const getGameIsStarted = createSelector(getGameState, (state: State) => state.isStarted);
export const getGameTime = createSelector(getGameState, (state: State) => state.time);

function randomCode(length: number = 6): string {
    const min = Math.pow(10, length);
    return "" + Math.floor(min + 9 * min * Math.random());
}