import { Component, OnInit } from '@angular/core';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  numbEvents: Number;
  events: Array<any> = [];
  previousDay: Number = 0;

  constructor(private fetch: FetchService) {
    this.fetch.getAllEvents().subscribe(
      data => {
        this.numbEvents = data.events.length;  // quantity of events
        this.sortDate(data.events)  // sort events by date      
        for (let i = 0; i < this.numbEvents; i++) {
          const day = (new Date(data.events[i].date).getDate()) + 1
          if (this.previousDay != day) {
            this.previousDay = day;
            const newEvent = {"id": data.events[i]._id, "showDate": true};
            this.events.push(newEvent);
          } else {
            const newEvent = {"id": data.events[i]._id, "showDate": false};
            this.events.push(newEvent);
          }
        }
      }
    )
  }

  ngOnInit(): void { }

  sortDate(data: any) {
    data.sort(function (a: { date: number; time: number; }, b: { date: number; time: number; }) {
      return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0) || (a.time < b.time) ? -1 : ((a.time > b.time) ? 1 : 0);
    });
  }


}
