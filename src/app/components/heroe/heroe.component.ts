import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private ACTIVATED_ROUTER: ActivatedRoute,
    private HEROE_SERVICE: HeroesService
  ) {this.ACTIVATED_ROUTER.params.subscribe(params => {
    // Console.log(params.id);
    this.heroe = this.HEROE_SERVICE.getHeroe(params.id);

  });
  }

  ngOnInit(): void {
  }

}
