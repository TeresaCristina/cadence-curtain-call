import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'services/data/data.service';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-card-timeline',
  templateUrl: './card-timeline.component.html',
  styleUrls: ['./card-timeline.component.css']
})
export class CardTimelineComponent implements OnInit {

  @Input() id: any;
  event: any = '';
  eventId: any = { "id": '' };

  constructor(private fetch: FetchService, private data: DataService) { }

  ngOnInit(): void {
    this.eventId['id'] = this.id;
    this.fetch.getEvent(this.eventId).subscribe(
      data => {
        this.event = data.event;
      }
    )
  }

  deleteEvent() {
    this.data.deleteEvent(this.eventId.id).subscribe(
      data => {
      })
  }


}
