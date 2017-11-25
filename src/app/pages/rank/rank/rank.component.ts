<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ["./rank.component.scss"]
=======
/*
Project file imports
 */

@Component({
  selector: 'app-rank',
  template: `
    <p>
      rank component works!
    </p>
  `
>>>>>>> b61f8bc34267b8880c48ea41d942806a250ec07e
})
export class RankComponent implements OnInit {

<<<<<<< HEAD
  displayedColumns = ['position', 'name', 'correct', 'total'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() {
=======
>>>>>>> b61f8bc34267b8880c48ea41d942806a250ec07e
  }

  ngOnInit() {
  }

}

export interface Element {
  position: number;
  name: string;
  correct: number;
  total: number;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', correct: 1.0079, total: 10 },
  { position: 2, name: 'Helium', correct: 4.0026, total: 10 },
  { position: 3, name: 'Lithium', correct: 6.941, total: 10 },
  { position: 4, name: 'Beryllium', correct: 9.0122, total: 10 },
  { position: 5, name: 'Boron', correct: 10.811, total: 10 },
  { position: 6, name: 'Carbon', correct: 12.0107, total: 10 },
  { position: 7, name: 'Nitrogen', correct: 14.0067, total: 10 },
  { position: 8, name: 'Oxygen', correct: 15.9994, total: 10 },
  { position: 9, name: 'Fluorine', correct: 18.9984, total: 10 },
  { position: 10, name: 'Neon', correct: 20.1797, total: 10 },
  { position: 11, name: 'Sodium', correct: 22.9897, total: 10 },
  { position: 12, name: 'Magnesium', correct: 24.305, total: 10 },
  { position: 13, name: 'Aluminum', correct: 26.9815, total: 10 },
  { position: 14, name: 'Silicon', correct: 28.0855, total: 10 },
  { position: 15, name: 'Phosphorus', correct: 30.9738, total: 10 },
  { position: 16, name: 'Sulfur', correct: 32.065, total: 10 },
  { position: 17, name: 'Chlorine', correct: 35.453, total: 10 },
  { position: 18, name: 'Argon', correct: 39.948, total: 10 },
  { position: 19, name: 'Potassium', correct: 39.0983, total: 10 },
  { position: 20, name: 'Calcium', correct: 40.078, total: 10 },
];