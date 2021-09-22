import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  numbEvents: any;
  events: Array<string> = [];
  month: any;
  day: any;
  previousDay: any = 0;
  showDate: boolean = false;


  constructor(private fetch: FetchService) {
    this.fetch.getAllEvents().subscribe(
      data => {
        this.numbEvents = data.events.length;
        this.byTimeline(data.events)
        for (let i = 0; i < this.numbEvents; i++) {
          this.events.push(data.events[i]._id)
          this.day = (new Date(data.events[i].date).getDate()) + 1
          if (this.previousDay != this.day) {
            console.log(this.previousDay)
            console.log(this.day)
            this.previousDay = this.day;
            this.showDate = true;
            console.log(this.showDate)
          } else {
            this.showDate = false;
          }
        }

      }
    )
  }

  ngOnInit(): void { }

  byTimeline(data: any) {
    data.sort(function (a, b) {
      return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0) || (a.time < b.time) ? -1 : ((a.time > b.time) ? 1 : 0);
    });

  }


}
