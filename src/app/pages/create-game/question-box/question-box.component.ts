import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion } from '../models/question';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent implements OnInit {

  @Input()
  question: IQuestion;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
