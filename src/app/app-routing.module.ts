import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "create" },
  { path: "create", loadChildren: 'app/pages/create-game/create-game.module#CreateGameModule' },
  { path: "rank", loadChildren: 'app/pages/rank/rank.module#RankModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
