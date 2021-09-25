import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private fetch: FetchService, private data: DataService, private modalService: NgbModal) { }

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

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
}


}
function NgbdModalContent(NgbdModalContent: any) {
  throw new Error('Function not implemented.');
}

