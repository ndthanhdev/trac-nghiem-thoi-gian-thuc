import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [
  { path: "", component: RankComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankRoutingModule { }
