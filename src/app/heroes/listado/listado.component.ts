import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public heroes: string[] = ['Ironman', 'Hulk', 'Thor'];
  public heroeBorrado: string = '';
  public borrado: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  borrarHeroe(): void {
    this.borrado = true;
    this.heroeBorrado = this.heroes.shift() || '';
    if (this.heroes.length == 0) {
      this.borrado = false;
    }
  }
}
