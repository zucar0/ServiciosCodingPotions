import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  constructor(private http: HttpClient) {   }

  getUsers(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  createUser(user: any): Observable<any>{
    return this.http.post('https://reqres.in/api/users', user);
  }
  editUser(user: any): Observable<any>{
    return this.http.post('https://reqres.in/api/users/2', user);
  }

  deleteUser(): Observable<any>{
    return this.http.delete('https://reqres.in/api/users/2');
  }

}
