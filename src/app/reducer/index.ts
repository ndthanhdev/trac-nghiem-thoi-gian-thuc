/*
3rd Party library
 */
import * as fromRouterStore from '@ngrx/router-store';
/*
Project file imports
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  router: fromRouterStore.RouterReducerState;
}

export const initialState = {
  router: null,
  game: null
};


export const reducer = {
  router: fromRouterStore.routerReducer
};

