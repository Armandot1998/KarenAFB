import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';
@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {
item: any = {nombre: ''}
  constructor(private servicio: ConexionService) { }

  ngOnInit() {
  }
  addItem() {
    this.servicio.addItem(this.item);
    this.item.nombre="";
    this.item.descripcion="";
    this.item.categoria="";
    this.item.precio="";
    
  }
}
