import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/user/findAll";
  private saveUrl = "http://localhost:8080/user/save";
  private updateUrl = "http://localhost:8080/user/update";
  private findById = "http://localhost:8080/user/findById";
  private findByEmail = "http://localhost:8080/user/findByEmail?email=";
  private eliminarUrl = "http://localhost:8080/user/deleteById";

  constructor(private httpClient: HttpClient) { }

  obtenerListaUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  registrarUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.saveUrl}`, user);
  }

  actualizarUser(idUser: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.updateUrl}/${idUser}`, user);
  }

  obtenerUserById(idUser: number): Observable<User>{
    return this.httpClient.get<User>(`${this.findById}/${idUser}`);
  }

  obtenerUserByEmail(email: string): Observable<User>{
    return this.httpClient.get<User>(`${this.findByEmail}${email}`);
  }

  eliminarUser(idUser: number):Observable<Object>{
    return this.httpClient.delete(`${this.eliminarUrl}/${idUser}`);
  }

}
