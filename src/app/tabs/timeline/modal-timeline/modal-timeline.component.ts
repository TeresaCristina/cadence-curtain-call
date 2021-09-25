import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">{{event}}</h5>
    </div>
    <div class="modal-body">{{details}}  </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.dismiss('Cross click')">Return to Timeline</button>
        </div>
       
    </div>
    `
})

export class NgbdModalContent {
  @Input() event: any;
  @Input() details: any;

  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'app-modal-timeline',
  templateUrl: './modal-timeline.component.html',
  styleUrls: ['./modal-timeline.component.css']
})
export class ModalTimelineComponent implements OnInit {

  @Input() myEvent: any;

  constructor(private modalService: NgbModal) {
  
  }
  ngOnInit(): void {
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.event = this.myEvent.event;
    modalRef.componentInstance.details = this.myEvent.details;
      
  }

}