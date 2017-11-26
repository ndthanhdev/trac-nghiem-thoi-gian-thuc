import { Action } from "@ngrx/store";
import { State as GameState } from "../reducer";
const prefix = "[Rank] ";

export const SET_STATE = `${prefix} Set Game State`;
export const START_GAME = `${prefix} Start Game`;
export const START_GAME_SUCCESS = `${prefix} Start Game Success`;
export const START_GAME_FAILURE = `${prefix} Start Game Failure`;
export const COUNT_DOWN = `${prefix} Count Down`;

export class SetState implements Action {
    readonly type = SET_STATE;

    constructor(public payload: { state: GameState }) {
    }
}

export class StartGame implements Action {
    readonly type = START_GAME;

    constructor(public payload: { code: string }) {
    }
}

export class StartGameSucess implements Action {
    readonly type = START_GAME_SUCCESS;

    constructor(public payload: { state: GameState }) {
    }
}

export class StartGameFailure implements Action {
    readonly type = START_GAME_FAILURE;
}

export class CountDown implements Action {
    readonly type = COUNT_DOWN;
}

export type Actions = SetState
    | StartGame
    | StartGameSucess
    | StartGameFailure;