import { Injectable } from "@angular/core";
import * as fromActions from "../action";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import { HttpService } from "../../../../services/http";
import { of } from "rxjs/observable/of";

@Injectable()
export class CreateGameEffects {
    constructor(private actions$: Actions, private httpService: HttpService) { }
    
    @Effect()
    load$ = this.actions$.ofType(fromActions.LOAD)
        .concatMap(() => this.httpService.getQuestions()
            .concatMap(questions => of(new fromActions.LoadSuccess({ questions: questions })))
            .catch(() => of(new fromActions.LoadFailure())));
}