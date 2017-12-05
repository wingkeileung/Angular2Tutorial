import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // <- import the Hero class in order to bind with the herosComponent
import { HEROES } from '../mock-heroes'; // <-import the arrays of mock hero to list

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; // binding heroes from the CONST HEROES from mock-heroes.ts

  selectedHero: Hero; // binding for selectedHero as Hero, so angular knows what object to look for

  onSelect(hero: Hero): void { // method for onSelect listener for heros.component.html
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
