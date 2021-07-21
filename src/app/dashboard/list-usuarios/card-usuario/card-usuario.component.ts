import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  @Input() img:any;
  firstName : string;
  email : string;
  imgUrl : string ;
  id : number;

  constructor() { 
    this.firstName = '';
    this.email = '';
    this.imgUrl = '';
    this.id = 0;
  }

  ngOnInit(): void {
    console.log(this.user);
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.imgUrl = this.img.largeImageURL;
    this.id = this.user.id;
    
  }

  

}