import { Injectable } from "@angular/core";
import * as fromActions from "../action";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Effect, Actions } from '@ngrx/effects';
import { HttpService } from "../../../services/http";
import { of } from "rxjs/observable/of";

@Injectable()
export class RankEffects {
    constructor(private actions$: Actions, private httpService: HttpService) { }

    @Effect()
    start$ = this.actions$.ofType(fromActions.START_GAME)
        .map((action: fromActions.StartGame) => action.payload.code)
        .concatMap(code => this.httpService.startGame({code})
            .concatMap(state => of(new fromActions.StartGameSucess({ state })))
            .catch(() => of(new fromActions.StartGameFailure())));

}