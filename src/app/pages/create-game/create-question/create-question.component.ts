import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IQuestion } from '../models/question';

interface answer {
  content: string;

}

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})

export class CreateQuestionComponent implements OnInit {


  canAdd: boolean = false;
  question = "";
  answer: string;
  c1: string;
  c2: string;
  c3: string;
  c4: string;

  @Output()
  addQuestion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addQuestion.emit(<IQuestion>{
      question: this.question,
      answer: this.answer,
      choices: [this.c1, this.c2, this.c3, this.c4]
    });
  }

}
