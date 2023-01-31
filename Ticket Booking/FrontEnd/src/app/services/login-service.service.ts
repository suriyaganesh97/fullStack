import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/login`,  data );
  }
}
