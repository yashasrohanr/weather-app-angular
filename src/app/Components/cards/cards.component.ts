import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { weatherdata } from 'src/app/weatherData';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  initial_cards: number = 5;
  current_cards: number = 5;
  desired_cards: number = 5;
  addMore:boolean = false;
  constructor() {
    // document.getElementById('cardsDisplay')!.innerHTML =
    //   '<app-new-card></app-new-card><app-new-card></app-new-card>';
  }

  ngOnInit(): void {
    // document.getElementById('cardsDisplay')!.innerHTML =
    //   '<app-new-card></app-new-card><app-new-card></app-new-card>';
  }
  addCard(): any {
    console.log('add a card clicked');
  }
  onsomtng(){
    this.desired_cards++;
    if(this.desired_cards > this.current_cards) this.addMore = true;
  }
}
