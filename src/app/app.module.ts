// 3rd party
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// local
import { reducer } from './reducer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomRouterStateSerializer } from './reducer/router';
import { HttpService } from './services/http';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from "./effect";

// localStorage.setItem("code", "0");
localStorage.setItem("code", randomCode(3));

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducer),

    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,
    EffectsModule.forRoot([RouterEffects]),
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [
    /**
    * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
    * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
    * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
    */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function randomCode(length: number = 6): string {
  const min = Math.pow(10, length);
  return "" + Math.floor(min + 9 * min * Math.random());
}
