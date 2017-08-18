import { Component, OnInit } from '@angular/core';
import { Card, UnoDeck, Player } from '../model/Uno';

@Component({
  selector: 'app-unogame',
  templateUrl: './unoGame.component.html',
  styleUrls: ['./unoGame.component.css']
})
export class UnogameComponent implements OnInit {

  totPlayer: number;
  playerArr: Player[] = [];
  deck: UnoDeck;

  constructor() { }

  ngOnInit() {
    this.totPlayer = 2;
  }

  public addPlayer(): void {
    if (this.totPlayer < 7) {
      
      this.totPlayer++;
    }
  }

  public removePlayer(): void {

    if (this.totPlayer > 2) {

      this.totPlayer--;
    }
  }

  public Start(): void {

    this.playerArr = [];

    this.deck = new UnoDeck();

    for (let n = 0; n < this.totPlayer; n++) {

      let cards = [];

      for (let i = 0; i < 7; i++) {

        cards[i] = this.deck.take();
      }

      this.playerArr.push({

        cards: cards
      });
    }
  }

}
