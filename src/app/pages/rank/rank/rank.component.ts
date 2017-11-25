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
import * as fromRoot from '../../../reducer';
import { initSocket, socketOnEventObservable } from '../../../services/socket';

@Component({
  selector: 'app-rank',
  template: `
    <p>
      rank component works!
    </p>
  `
})
export class RankComponent implements OnInit, OnDestroy {
  private waitingSocketData: any;
  private chartChangesSocketData: any;

  private socketWaitingSub;

  private socketChartChangeSub;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.socketWaitingSub = this.store.select(fromRoot.getGameCode)
      .filter(gameCode => !!gameCode)
      .flatMap(gameCode => initSocket('http://172.16.2.41:8080', { query: { gameCode } }))
      .flatMap(socket => socketOnEventObservable(socket, 'waiting'))
      .subscribe(result => {
        console.log('Message in Waiting room received: ', result);
        // result :: {users :: Array User, code :: String}
        this.waitingSocketData = result;
      });

    this.socketChartChangeSub = this.store.select(fromRoot.getGameCode)
      .filter(gameCode => !!gameCode)
      .flatMap(gameCode => initSocket('http://172.16.2.41:8080', { query: { gameCode } }))
      .flatMap(socket => socketOnEventObservable(socket, 'chartChanges'))
      .subscribe(result => {
        console.log('Message in chart changes room received: ', result);
        // result :: {users :: Array User, code :: String}
        this.chartChangesSocketData = result;
      });
  }

  ngOnDestroy(): void {
    this.socketWaitingSub.unsubscribe();
  }

}
