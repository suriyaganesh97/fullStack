import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080';
const externalUrl='https://data.trade.gov/consolidated_screening_list/v1/search?name=osama'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  generatePassword(params: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/generatePassword`, { params });
}

externalURL(params: any): Observable<any> {
  // let newheaders = new Headers();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'subscription-key': '29f470b98c994e71a3e78d6fc7fa6e1f'
    })
  };
  // newheaders.append('subscription-key','29f470b98c994e71a3e78d6fc7fa6e1f');
  return this.http.get<any>(`${externalUrl}`, httpOptions);
}
}
