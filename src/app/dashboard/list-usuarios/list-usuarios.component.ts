import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[] = [];
  listImagenes: any[] = [];
  aux = 0;
  loading = true;
  

  constructor(private _usuarioService : UsuarioService, private _imagenService : ImagenService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.getImagenes();
  }

  getUsuarios():void {
    this.loading = true;
    this._usuarioService.getUsuarios().subscribe(data => {
      this.loading = true;
      this.listUsuarios = data.data;
      this.getImagenes();
      this.loading = false;
    })
    
  }

  getImagenes():void {
    this._imagenService.getImagenes().subscribe(data => {
      this.listImagenes = data.hits;
    })
  }

}