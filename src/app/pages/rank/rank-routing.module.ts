import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [
  { path: "", component: RankComponent }
=======
>>>>>>> b61f8bc34267b8880c48ea41d942806a250ec07e
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankRoutingModule { }
