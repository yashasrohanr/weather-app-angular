import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualCardComponent } from './Components/individual-card/individual-card.component';
import { CardsComponent } from './Components/cards/cards.component';
import { NewCardComponent } from './Components/new-card/new-card.component';
import { HeaderComponent } from './Components/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponentComponent } from './Components/about-component/about-component.component';
@NgModule({
  declarations: [
    AppComponent,
    IndividualCardComponent,
    CardsComponent,
    NewCardComponent,
    HeaderComponent,
    AboutComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
