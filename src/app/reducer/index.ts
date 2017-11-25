/*
3rd Party library
 */
import * as fromRouterStore from '@ngrx/router-store';
import { createSelector } from 'reselect';
/*
Project file imports
 */
import * as fromGame from './game';

export interface State {
  router: fromRouterStore.RouterReducerState;
  game: fromGame.State;
}

export const initialState = {
  router: null,
  game: null
};


export const reducer = {
  router: fromRouterStore.routerReducer,
  game: fromGame.reducer
};

const getGameState = state => state.game;

export const getGameCode = createSelector(getGameState, fromGame.getCode);

