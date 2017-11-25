import * as fromRouterStore from "@ngrx/router-store";
import * as fromRouter from "./router";
import * as fromNgrxStore from "@ngrx/store";

export interface State {
    router: fromRouterStore.RouterReducerState;
};

export const initialState: State = {
    router: null
};


export const reducer: fromNgrxStore.ActionReducerMap<State> = {
    router: fromRouterStore.routerReducer,
};