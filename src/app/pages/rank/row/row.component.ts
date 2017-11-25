import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  template: `
    <p>
      row works!
    </p>
  `,
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
