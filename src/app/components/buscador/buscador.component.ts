import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  valor: string;

  constructor(private ACTIVATED_ROUTE: ActivatedRoute,
              private HEROES_SERVICE: HeroesService,
              private ROUTER: Router,
    ) {}
  ngOnInit(): void {
    this.ACTIVATED_ROUTE.params.subscribe(params => {
      // Console.log(params.parametro);
      this.heroes = this.HEROES_SERVICE.buscarHeroes(params.parametro);
      console.log('Resultado de tu busqueda', this.heroes);
      this.valor = params.parametro;
    });
  }

  verHeroe(i: number): any {
    // console.log(i);
    this.ROUTER.navigate(['/heroes/heroe/', i]);
  }

}
