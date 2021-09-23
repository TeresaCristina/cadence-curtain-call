import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data/data.service';

@Component({
  selector: 'app-add-suspect',
  templateUrl: './add-suspect.component.html',
  styleUrls: ['./add-suspect.component.css']
})



export class AddSuspectComponent implements OnInit {

  newSuspect: any = { "name": "", "title": "", "picture": "", "details": "" }

  name: String;
  title: String;
  details: String;

  constructor(private data: DataService) { }

  ngOnInit(): void { }

  addEvent() {
    this.newSuspect["details"] = this.details;
    this.newSuspect["name"] = this.name;
    this.newSuspect["title"] = this.title;
    this.data.newSuspect(this.newSuspect);
  }
}
