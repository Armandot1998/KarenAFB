import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any;
  constructor(private conexion: ConexionService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
      console.log(this.items)
    })
  }

  ngOnInit() {
  }
}
