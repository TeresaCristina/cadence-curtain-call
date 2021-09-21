import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  endpoint: string = 'http://localhost:8080/api';
  
  constructor(private http: HttpClient, public router: Router) { }

  getViolaTimeline() {
    const api = `${this.endpoint}/viola-timeline`;
    return this.http.get<any>(api)
      .pipe(
        map(
          data => {
            return data;
          },
          (error: any) => {
            window.alert("No timeline events.");
          }
        ))

  }




}