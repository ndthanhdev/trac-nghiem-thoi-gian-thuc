import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../models/question';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../services/http';
import { catchError, last } from "rxjs/operators";
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import * as fromReducer from "../store/reducer";
import * as fromAction from "../store/action";
import * as fromRankReducer from "../../rank/reducer";
import * as fromRankAction from "../../rank/action";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  isBusy: boolean = false;

  preparedQuestions$: Observable<IQuestion[]> = of([
    {
      question: "My This drink contains caffeine.",
      answer: "Coffee", choices: ["Mineral water", "Orange juice", "Coffee", "Beer"]
    },
    {
      question: "Finish the proverb:\n\nPoets are born, ________.",
      answer: "...not made.",
      choices: ["...not made.", "...but can also be made.", "...but thats not for sure.", "..., long live the poets!"]
    },
    { question: "If a TV program is rated G then this is true.", answer: "It is suitable for all audiences.", choices: ["It contains moderate violence.", "It contains mild sexual situations.", "It is suitable for all audiences.", "It is suitable for young children."] },
    { question: "The theory of relativity was introduced in physics by this man.", answer: "Albert Einstein", choices: ["Galileo Galilei", "Albert Einstein", "Archimedes", "Isaac Newton"] },
    { question: "The symbol for the chemical element iron is this.", answer: "Fe", choices: ["I", "Fe", "Zn", "Br"] }, { question: "The author of the novel A Portrait of the Artist as a Young Man is this writer.", answer: "James Joyce", choices: ["T. S. Eliot", "Samuel Beckett", "William Faulkner", "James Joyce"] }, { question: "The capital of Mongolia is this city.", answer: "Ulaanbaatar", choices: ["Davao", "Islamabad", "Quezon", "Ulaanbaatar"] }, { question: "Mitochondrias function in cells is to perform this.", answer: "To convert organic materials into energy", choices: ["To control chemical reactions within the cytoplasm", "To store information needed for cellular division", "To convert organic materials into energy", "To process proteins targeted to the plasma membrane"] }, { question: "The US bought Alaska in this year.", answer: "1867", choices: ["1942", "1882", "1854", "1867"] }, { question: "The 23rd US President was in office during this period.", answer: "1889 - 1893", choices: ["1909 - 1913", "1889 - 1893", "1837 - 1841", "1877 - 1881"] }
  ]);

  questions$: Observable<IQuestion[]> = of([]);
  questions: IQuestion[];
  time = "60";
  code = localStorage.getItem("code");

  constructor(private httpService: HttpService, private store: Store<fromReducer.State>) { }

  ngOnInit() {
    this.preparedQuestions$ = this.store.select(fromReducer.getPreparedQuestions);
    this.questions$ = this.store.select(fromReducer.getQuestions);
    this.questions$.subscribe(questions => this.questions = questions);
    this.store.dispatch(new fromAction.Load());
    // localStorage.setItem("code", this.code);
  }

  onAddQuestion(question: IQuestion) {
    this.store.dispatch(new fromAction.AddQuestion({ question }));
  }

  onRemoveQuestion(question: IQuestion) {
    this.store.dispatch(new fromAction.RemoveQuestion({ question }));
  }

  createGame() {
    this.store.dispatch(new fromAction.Next({ code: this.code, questions: this.questions, time: parseInt(this.time) }));
  }

  randomCode(length: number = 6): string {
    const min = Math.pow(10, length);
    return "" + Math.floor(min + 9 * min * Math.random());
  }

}
