import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameListComponent } from './game-list/game-list.component';
import { AppState, wishlistReducer } from './store/reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent, GameListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      wishlist: wishlistReducer,
    } as ActionReducerMap<AppState>),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
