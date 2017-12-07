import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // <- import the Hero class in order to bind with the herosComponent
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero; // binding for selectedHero as Hero, so angular knows what object to look for

  heroes: Hero[]; // binding heroes from the CONST HEROES from mock-heroes.ts

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void { // method for onSelect listener for heros.component.html
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
