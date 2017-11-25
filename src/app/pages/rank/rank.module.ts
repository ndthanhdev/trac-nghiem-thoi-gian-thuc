import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RankRoutingModule } from './rank-routing.module';
import { RankComponent } from './rank/rank.component';
import { RowComponent } from './row/row.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,

    RankRoutingModule
  ],
  declarations: [RankComponent, RowComponent]
})
export class RankModule { }
