import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navegador : Router) {}

  redirigir(ruta : string)
  {
    this.navegador.navigate([ruta]);
  }

}
