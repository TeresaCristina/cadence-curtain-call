import { Component, Input, OnInit } from '@angular/core';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-date-timeline',
  templateUrl: './date-timeline.component.html',
  styleUrls: ['./date-timeline.component.css']
})
export class DateTimelineComponent implements OnInit {

 
  @Input() id: any = 'n/a';
  event: any = 'n/a';
  eventId: any = { "id": '' };
  monthsNames = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Agu", "Sep", "Out", "Nov", "Dec"]
  month: any;
  day: any;

  constructor(private fetch: FetchService) { }

  ngOnInit(): void {
    this.eventId['id'] = this.id;
    this.fetch.getEvent(this.eventId).subscribe(
      data => {
        console.log("date")
        this.event = data.event;
        this.month = this.getMonthNames(data.event.date)
        this.day = (new Date(this.event.date).getDate()) + 1
       
      }
    )
  }

  getMonthNames(data: any) {
    const monthNumber = new Date(data).getMonth();
    return this.monthsNames[monthNumber]
  }

}

