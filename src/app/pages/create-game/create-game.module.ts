import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CreateGameRoutingModule } from './create-game-routing.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { PreparedQuestionComponent } from './prepared-question/prepared-question.component';
import { reducer } from './store/reducer/index';
import { CreateGameEffects } from './store/effect/index';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    StoreModule.forFeature('kiosk', reducer),
    EffectsModule.forFeature([CreateGameEffects]),
    
    CreateGameRoutingModule
  ],
  declarations: [CreateGameComponent, QuestionListComponent, QuestionBoxComponent, PreparedQuestionComponent]
})
export class CreateGameModule { }
