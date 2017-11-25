import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IQuestion } from '../models/question';

@Component({
  selector: 'app-prepared-question',
  templateUrl: './prepared-question.component.html',
  styleUrls: ['./prepared-question.component.scss']
})
export class PreparedQuestionComponent implements OnInit {

  @Input()
  question: IQuestion;

  @Output()
  add: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
