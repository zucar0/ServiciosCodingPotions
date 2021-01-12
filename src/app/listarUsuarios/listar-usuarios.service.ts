import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  constructor(private http: HttpClient) {
    this.http.get('https://reqres.in/api/users?page=2');
   }
}
