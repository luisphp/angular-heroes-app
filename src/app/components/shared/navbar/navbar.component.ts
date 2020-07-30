import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private ROUTER: Router
              ) {
   }
  buscarHeroe(parametro: string): any{
    // Console.log(parametro);
    this.ROUTER.navigate(['buscar', parametro]);
  }
  ngOnInit(): void {
  }

}
