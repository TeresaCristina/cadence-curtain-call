import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  endpoint: string = 'http://localhost:8080/api';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization'
  });

  constructor(private http: HttpClient, public router: Router) { }

  newTimelineEvent(newEvent: any) {
    const api = `${this.endpoint}/new-event`;
    return this.http.post<any>(api, newEvent).subscribe(
      (data) => {
        this.router.navigate(['timeline']).then(() => {
          window.location.reload();
        });
      },
      (error: any) => {
      }
    )
  }

  newSuspect(newSuspect: any) {
    const api = `${this.endpoint}/add-suspect`;
    return this.http.post<any>(api, newSuspect).subscribe(
      (data) => {
        this.router.navigate(['suspects']).then(() => {
          window.location.reload();
        });
      },
      (error: any) => {
      }
    )
  }

  editTimelineEvent(newValue: any, id: any) {
    const api = `${this.endpoint}/edit-event/${id}`;
    return this.http.put<any>(api, newValue).subscribe(
      (data) => {
        this.router.navigate(['timeline']).then(() => {
          window.location.reload();
        })
      },
      (error: any) => {
      }
    )
  }

  deleteSuspect(id: any) {
    const api = `${this.endpoint}/delete-suspect/${id}`;
    return this.http.delete<any>(api)
      .pipe(
        map(
          (data) => {
            this.router.navigate(['suspects']).then(() => {
              window.location.reload();
            });
          },
          (error: any) => {
          }
        )
      )
  }

  deleteEvent(id: any) {
    const api = `${this.endpoint}/delete-event/${id}`;
    return this.http.delete<any>(api)
      .pipe(
        map(
          (data) => {
            this.router.navigate(['timeline']).then(() => {
              window.location.reload();
            });
          },
          (error: any) => {
          }
        )
      )
  }



}
