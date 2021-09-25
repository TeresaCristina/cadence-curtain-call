import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'services/data/data.service';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-suspect-template',
  templateUrl: './suspect-template.component.html',
  styleUrls: ['./suspect-template.component.css']
})
export class SuspectTemplateComponent implements OnInit {

  @Input() id: any;

  suspectId: any = { "id": "" };

  name: String;
  title: String;
  details: String;

  constructor(private fetch: FetchService, private data: DataService) { }

  ngOnInit(): void {
    this.suspectId['id'] = this.id;
    this.fetch.getSuspect(this.suspectId).subscribe(
      data => {
        this.name = data.suspect.name;
        this.title = data.suspect.title;
        this.details = data.suspect.details;
      }
    )
  }

  deleteSuspect() {
    this.data.deleteSuspect(this.suspectId['id']).subscribe(
      data => {
      })
  }

}
