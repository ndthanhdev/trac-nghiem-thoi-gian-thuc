import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CreateGameRoutingModule } from './create-game-routing.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { PreparedQuestionComponent } from './prepared-question/prepared-question.component';
import { reducer } from './store/reducer';
import { CreateGameEffects } from './store/effect';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    
    StoreModule.forFeature('create-game', reducer),
    EffectsModule.forFeature([CreateGameEffects]),

    CreateGameRoutingModule
  ],
  declarations: [CreateGameComponent, QuestionListComponent, QuestionBoxComponent, PreparedQuestionComponent, CreateQuestionComponent]
})
export class CreateGameModule { }
