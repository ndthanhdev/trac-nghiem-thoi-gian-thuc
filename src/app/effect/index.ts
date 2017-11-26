import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import * as fromRootAction from '../action';

@Injectable()
export class RouterEffects {
    @Effect({ dispatch: false })
    navigate$ = this.actions$.ofType(fromRootAction.GO)
        .map((action: fromRootAction.Go) => action.payload)
        .do(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }));


    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) { }
}