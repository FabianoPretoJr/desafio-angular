import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from './fotos';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  baseUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }

  read(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.baseUrl);
  }
}
