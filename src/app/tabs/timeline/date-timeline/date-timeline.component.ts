import { Component, Input, OnInit } from '@angular/core';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-date-timeline',
  templateUrl: './date-timeline.component.html',
  styleUrls: ['./date-timeline.component.css']
})
export class DateTimelineComponent implements OnInit {

 
  @Input() id: any = 'n/a';
  eventId: any = { "id": '' };
  monthsNames = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Agu", "Sep", "Out", "Nov", "Dec"]
  month: any;
  day: any;
  date: Date;

  constructor(private fetch: FetchService) { }

  ngOnInit(): void {
    this.eventId['id'] = this.id;
    this.fetch.getEvent(this.eventId).subscribe(
      data => {
        this.date = data.event.date;
        this.month = this.getMonthNames(this.date) 
        this.day = (new Date(this.date).getDate()) + 1
      }
    )
  }

  getMonthNames(data: Date) {
    const monthNumber = new Date(data).getMonth();
    return this.monthsNames[monthNumber]
  }

}

