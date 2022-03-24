import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.css']
})
export class AgregarPersonajesComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

//  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  constructor(private DbzService:DbzService) {
  }

  ngOnInit(): void {
  }

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
  //  this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
