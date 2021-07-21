import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  url = 'https://pixabay.com/api/?key=22532046-97700a4b78972dc8597cd8380&q=portrait+people&image_type=photo';

  constructor(private http : HttpClient) { }

  getImagenes() : Observable<any> {
    return this.http.get<any>(this.url);
  }
}