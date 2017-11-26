import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RankRoutingModule } from './rank-routing.module';
import { RankComponent } from './rank/rank.component';
import { RowComponent } from './row/row.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { RankEffects } from './effect/index';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,

    RankRoutingModule,
    StoreModule.forFeature('rank', reducer),
    EffectsModule.forFeature([RankEffects]),
  ],
  declarations: [RankComponent, RowComponent]
})
export class RankModule { }
