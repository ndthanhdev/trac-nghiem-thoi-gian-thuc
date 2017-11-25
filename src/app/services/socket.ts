import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
/*
3rd Party library imports
 */
import io from 'socket.io-client';


export const initSocket = (url, options) => Observable.of(io(url, options));
// options: { query: { gameCode } }

export const socketOnEventObservable = (socket, event) =>
  Observable.fromEvent(socket, event);
