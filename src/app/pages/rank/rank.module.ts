import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankRoutingModule } from './rank-routing.module';
import { RankComponent } from './rank/rank.component';

@NgModule({
  imports: [
    CommonModule,
    RankRoutingModule
  ],
  declarations: [RankComponent]
})
export class RankModule { }
