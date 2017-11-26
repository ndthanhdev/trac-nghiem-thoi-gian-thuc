import { MatTableDataSource } from '@angular/material/table';
/*
3rd Party library
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

/*
Project file imports
 */
import * as fromReducer from '..//reducer';
import * as fromAction from "../action";
import { initSocket, socketOnEventObservable } from '../../../services/socket';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators/filter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ["./rank.component.scss"]
})
export class RankComponent implements OnInit, OnDestroy {

  private waitingSocketData: any;
  private chartChangesSocketData: any;

  displayedColumns = ['position', 'name', 'correct'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  private socketSub;
  private socketWaitingSub;

  private socketChartChangeSub;

  private routeSub: Subscription;
  code = localStorage.getItem("code");

  isStarted$ = this.store.select(fromReducer.getGameIsStarted);
  time$ = this.store.select(fromReducer.getGameTime);

  coutndown: number;

  constructor(private store: Store<fromReducer.State>, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.socketWaitingSub = this.store.select(fromReducer.getGameCode)
      .filter(gameCode => !!gameCode)
      .flatMap(gameCode => initSocket('http://172.16.2.41:8080', { query: { gameCode } }))
      .flatMap(socket => socketOnEventObservable(socket, 'waiting'))
      .subscribe(result => {
        console.log('Message in Waiting room received: ', result);
        // result :: {users :: Array User, code :: String}
        this.waitingSocketData = result;
        let data = [];
        for (let i = 0; i < (<any>result).users.length; i++) {
          data.push(<Element>{
            position: i + 1,
            name: (<any>result).users[i].name,
            correct: 0
          });
        }
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      });

    this.socketChartChangeSub = this.store.select(fromReducer.getGameCode)
      .filter(gameCode => !!gameCode)
      .flatMap(gameCode => initSocket('http://172.16.2.41:8080', { query: { gameCode } }))
      .flatMap(socket => socketOnEventObservable(socket, 'chartChanges'))
      .subscribe(result => {
        console.log('Message in chart changes room received: ', result);
        this.chartChangesSocketData = result;
        let data = [];
        for (let i = 0; i < (<any>result).length; i++) {
          data.push(<Element>{
            position: i + 1,
            name: (<any>result)[i].name,
            correct: (<any>result)[i].point
          });
        }
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      });
  }

  ngOnDestroy(): void {
    this.socketWaitingSub.unsubscribe();
  }

  startGame() {
    this.store.dispatch(new fromAction.StartGame({ code: this.code }));
    let h = 3600;
    Observable.timer(0, 1000).take(3600).map(() => this.store.dispatch(new fromAction.CountDown()));
  }

}

export interface Element {
  position: number;
  name: string;
  correct: number;
}

const ELEMENT_DATA: Element[] = [
];
