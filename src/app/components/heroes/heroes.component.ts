import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private HEROES_SERVICE: HeroesService,
    private ROUTER: Router,
    ) { }

  ngOnInit(): void {
    this.heroes = this.HEROES_SERVICE.getHeroes();
    // Console.log(this.heroes);
  }

  verHeroe(i: number): any {
    // console.log(i);
    this.ROUTER.navigate(['/heroes/heroe/', i]);
  }

}

