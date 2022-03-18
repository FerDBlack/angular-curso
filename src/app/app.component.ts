import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Bases';
  public numero: number = 10;
  public base: number = 5;

  acumulador(valor: number) {
    this.numero += valor;
  }
}
