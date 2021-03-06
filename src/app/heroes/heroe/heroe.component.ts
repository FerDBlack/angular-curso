import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public nombre: string = "Ironman"
  public edad: number = 45

  constructor() {
  }

  ngOnInit(): void {

  }

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return  `${this.nombre} - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 30;
  }

}
