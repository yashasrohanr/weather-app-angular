import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './Components/about-component/about-component.component';
import { CardsComponent } from './Components/cards/cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'about', component: AboutComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
