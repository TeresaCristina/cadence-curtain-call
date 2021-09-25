import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'services/data/data.service';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-edit-timeline',
  templateUrl: './edit-timeline.component.html',
  styleUrls: ['./edit-timeline.component.css']
})
export class EditTimelineComponent implements OnInit {

  newEvent: any = { "event": "", "time": "", "date": "", "details": "" }

  details: String;
  time: Time;
  date: Date;
  event: String;

  id: any = { "id": "" };
  eventDate: any = { "date": "" };

  constructor(private data: DataService, private activatedRoute: ActivatedRoute, private fetch: FetchService) { }

  ngOnInit(): void {
    this.id["id"] = this.activatedRoute.snapshot.paramMap.get('id')
    this.fetch.getEvent(this.id).subscribe(
      data => {
        this.newEvent["event"] = data.event.event;
        this.newEvent["details"] = data.event.details;
        this.newEvent["date"] = data.event.date;
        this.newEvent["time"] = data.event.time;
        this.getFullDate(this.newEvent.date)
      }
    )

  }

  getFullDate(date: Date) {
    const newDate = new Date(date);
    let day: any = newDate.getDate() + 1;
    day = (day < 10 ? "0" : "") + day;
    let month: any = newDate.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    let year: any = newDate.getFullYear();
    this.eventDate["date"] = year + "-" + month + "-" + day;
  }

  addEvent() {
    if (this.details != undefined) {
      this.newEvent["details"] = this.details
    }

    if (this.time != undefined) {
      this.newEvent["time"] = this.time
    }

    if (this.date != undefined) {
      this.newEvent["date"] = this.date
    }

    if (this.event != undefined) {
      this.newEvent["event"] = this.event
    }
    this.data.editTimelineEvent(this.newEvent, this.id.id);
  }
}
