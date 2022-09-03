import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  generatePassword(params: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/generatePassword`, { params });
}
}
