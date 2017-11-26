import { Injectable } from "@angular/core";
import * as fromActions from "../action";
import * as fromRankActions from "../../../rank/action";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/from';
import { HttpService } from "../../../../services/http";
import { of } from "rxjs/observable/of";
import { forEach } from "@angular/router/src/utils/collection";
import { IQuestion } from "../../models/question";
import { Router } from "@angular/router";

@Injectable()
export class CreateGameEffects {
    constructor(private actions$: Actions, private httpService: HttpService, private router: Router) { }

    @Effect()
    load$ = this.actions$.ofType(fromActions.LOAD)
        .concatMap(() => this.httpService.getQuestions()
            .concatMap(questions => of(new fromActions.LoadSuccess({ questions })))
            .catch(() => of(new fromActions.LoadFailure())));

    @Effect()
    next$ = this.actions$.ofType(fromActions.NEXT)
        .map((action: fromActions.Next) => action.payload)
        .concatMap(payload => this.httpService.createGame(payload)
            .concatMap(nextActionPayload => {
                this.router.navigate(["/rank"]);
                return Observable.from(
                    [
                        // new fromRootActions.Go({ path: ["/rank"] }),
                        new fromActions.NextSuccess(nextActionPayload),
                        new fromRankActions.SetState({ state: <any>nextActionPayload }),
                    ]);
            })
            .catch(() => of(new fromActions.NextFailure())));
}