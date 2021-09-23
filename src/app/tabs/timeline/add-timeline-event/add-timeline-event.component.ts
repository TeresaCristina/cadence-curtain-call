import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data/data.service';

@Component({
  selector: 'app-add-timeline-event',
  templateUrl: './add-timeline-event.component.html',
  styleUrls: ['./add-timeline-event.component.css']
})
export class AddTimelineEventComponent implements OnInit {

  newEvent: any = {"event":"","time": "", "date": "", "details":""}
  
  details: String;
  time: Time;
  date: Date;
  event: String;

  constructor(private data: DataService) { }

  ngOnInit(): void {}

  addEvent() {
    this.newEvent["details"] = this.details;
    this.newEvent["time"] = this.time;
    this.newEvent["date"] = this.date;
    this.newEvent["event"] = this.event;
    this.data.newTimelineEvent(this.newEvent);    
  }
}
