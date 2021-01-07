import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }
}
