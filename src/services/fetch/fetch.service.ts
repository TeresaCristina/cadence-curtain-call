import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  endpoint: string = 'http://localhost:8080/api';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization'
  });

  constructor(private http: HttpClient, public router: Router) { }

  getAllEvents() {
    const api = `${this.endpoint}/all-events`;
    return this.http.get<any>(api)
      .pipe(
        map(
          data => {
            return data;
          },
          (error: any) => {
            window.alert("No timeline events.");
          }
        )
      )
  }

  getAllSuspects() {
    const api = `${this.endpoint}/all-suspects`;
    return this.http.get<any>(api)
      .pipe(
        map(
          data => {
            return data;
          },
          (error: any) => {
            window.alert("No timeline events.");
          }
        )
      )
  }

  getEvent(id: any) {
    const api = `${this.endpoint}/event`;
    return this.http.post<any>(api, id)
      .pipe(
        map(
          data => {
            return data;
          },
          (error: any) => {
            window.alert("This event does not exist.");
          }
        )
      )
  }

  getSuspect(id: any) {
    const api = `${this.endpoint}/suspect`;
    return this.http.post<any>(api, id)
      .pipe(
        map(
          data => {
            return data;
          },
          (error: any) => {
            window.alert("This event does not exist.");
          }
        )
      )
  }


}
