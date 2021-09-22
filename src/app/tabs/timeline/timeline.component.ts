import { Component, OnInit } from '@angular/core';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  numbEvents: any;
  events:  Array<string> = [];
  
  constructor(private fetch: FetchService) {
    this.fetch.getAllEvents().subscribe(
      data => {
        this.numbEvents = data.events.length;
        this.byTimeline(data.events)
        for (let i = 0; i < this.numbEvents; i++) {
          this.events.push(data.events[i]._id)
          console.log(new Date(data.events[i].date).getMonth())
        }
      }
    )
  }

  ngOnInit(): void { }

  byTimeline(data: any){
    data.sort(function (a, b) {
      return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0) || (a.time < b.time) ? -1 : ((a.time > b.time) ? 1 : 0);
    });

  }

}
