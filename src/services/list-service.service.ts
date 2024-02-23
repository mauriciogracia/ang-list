import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {

  private apiUrl = 'http://localhost:5225/List'; 

  constructor(private http: HttpClient) { }

  addText(txt: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "?value=" + txt, null);
  }

  listTexts(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
