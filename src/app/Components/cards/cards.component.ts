import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  initial_cards: number = 9;
  current_cards: number = 9;

  constructor() {}

  ngOnInit(): void {
    let x = localStorage.getItem('Current_CARDS');
    let y = parseInt(x != null ? x : '9');
    // console.log('Current number of cards  : ' + y);
    this.current_cards = y;
  }
  onAddCard() {
    this.current_cards++;
    console.log('added card number : ' + this.current_cards);
    localStorage.setItem('Current_CARDS', JSON.stringify(this.current_cards));
  }
  onDeleteCard() {
    if (this.current_cards > 30) this.current_cards = 30;
    if (this.current_cards === 0) {
      console.log('no more cards to delete');
    } else {
      console.log('deleted card number : ' + this.current_cards);
      this.current_cards--;
      localStorage.setItem('Current_CARDS', JSON.stringify(this.current_cards));
    }
  }

}
