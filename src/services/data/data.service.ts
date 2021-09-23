import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  endpoint: string = 'http://localhost:8080/api';

  headers  = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization'
  });

  constructor(private http: HttpClient, public router: Router) { }

  newTimelineEvent(newEvent: any) {
    const api = `${this.endpoint}/new-event`;
    return this.http.post<any>(api, newEvent).subscribe(
      (data) => {
        this.router.navigate(['timeline']);
      },
      (error: any) => {
      }
    )
  }

  newSuspect(newSuspect: any) {
    const api = `${this.endpoint}/add-suspect`;
    return this.http.post<any>(api, newSuspect).subscribe(
      (data) => {
        this.router.navigate(['suspects']);
      },
      (error: any) => {
      }
    )
  }

  editTimelineEvent(newValue: any) {
    const api = `${this.endpoint}/edit-event`;
    return this.http.post<any>(api, newValue).subscribe(
      (data) => {
        this.router.navigate(['timeline']);
      },
      (error: any) => {
      }
    )
  }
}
