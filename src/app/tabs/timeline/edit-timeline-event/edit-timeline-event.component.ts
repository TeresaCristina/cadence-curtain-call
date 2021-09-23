import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-edit-timeline-event',
  templateUrl: './edit-timeline-event.component.html',
  styleUrls: ['./edit-timeline-event.component.css']
})
export class EditTimelineEventComponent implements OnInit {

  id: any = { "id": "" }
  event: any = {"event": "", "date": "", "time": "", "details": ""}

  constructor(private route: ActivatedRoute, private fetch: FetchService) {
    this.route.paramMap.subscribe(params => {
      this.id["id"] = params.get('id');
      this.fetch.getEvent(this.id).subscribe(
        data => {
          this.event["event"] = data.event.event
          this.event["date"] = data.event.date
          this.event["time"] = data.event.time
          this.event["details"] = data.event.details
        })
    });
  }

  ngOnInit(): void {
  }

}
