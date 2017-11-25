import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "create" },
<<<<<<< HEAD
  { path: "create", loadChildren: "app/pages/create-game/create-game.module#CreateGameModule" },
  { path: "rank", loadChildren: "app/pages/rank/rank.module#RankModule" }
>>>>>>> b61f8bc34267b8880c48ea41d942806a250ec07e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
