import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id:number;

  constructor(private activatedRoute : ActivatedRoute) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }

}
