import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public/v1/users';
  constructor(private http: HttpClient) { 

  }

  getUsuarios() : Observable<any> {
    return this.http.get<any>(this.url);
  }
}