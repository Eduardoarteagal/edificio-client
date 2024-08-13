import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPropietarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/propietarios`);
  }

  getEdificios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/edificios`);
  }

  createEdificio(edificio: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/edificios`, edificio);
  }
}
