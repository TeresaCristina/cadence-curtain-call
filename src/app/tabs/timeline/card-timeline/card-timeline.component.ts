import { Component, Input, OnInit } from '@angular/core';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-card-timeline',
  templateUrl: './card-timeline.component.html',
  styleUrls: ['./card-timeline.component.css']
})
export class CardTimelineComponent implements OnInit {

  @Input() id: any = 'n/a';
  event: any = 'n/a';
  eventId: any = { "id": '' };

  constructor(private fetch: FetchService) { }

  ngOnInit(): void {
    this.eventId['id'] = this.id;
    this.fetch.getEvent(this.eventId).subscribe(
      data => {
        this.event = data.event;
        
      }
    )
  }

}
