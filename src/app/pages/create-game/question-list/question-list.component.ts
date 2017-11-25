import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
