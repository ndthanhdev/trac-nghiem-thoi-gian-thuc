import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { IQuestion } from '../pages/create-game/models/question';
import { log } from 'util';
import { INextActionPayload } from '../pages/create-game/store/action/index';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {
    private baseUrl = "http://172.16.2.41:8000";  // URL to web api
    private loadQuestionsUrl = this.baseUrl + "/questions";
    private createGameUrl = this.baseUrl + "/games";
    private startGameUrl = `${this.baseUrl}/start`;

    constructor(private http: HttpClient) { }

    /** GET questions from the server */
    getQuestions(): Observable<IQuestion[]> {
        return this.http.get<IQuestion[]>(this.loadQuestionsUrl)
            .pipe(
            tap(questions => this.log(`fetched questions`)),
            catchError(this.handleError('getQuestions', undefined))
            );
    }

    /** POST game to the server */
    createGame(body: INextActionPayload): Observable<INextActionPayload> {
        return this.http.post<INextActionPayload>(this.createGameUrl, body)
            .pipe(
            tap(data => this.log(`created game`)),
            catchError(this.handleError('createGame', undefined))
            );
    }

    /** POST game to the server */
    startGame(body: INextActionPayload): Observable<INextActionPayload> {
        return this.http.post<INextActionPayload>(this.createGameUrl, body)
            .pipe(
            tap(data => this.log(`created game`)),
            catchError(this.handleError('createGame', undefined))
            );
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        console.log('HeroService: ' + message);
    }
}