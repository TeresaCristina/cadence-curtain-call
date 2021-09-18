import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspect-template',
  templateUrl: './suspect-template.component.html',
  styleUrls: ['./suspect-template.component.css']
})
export class SuspectTemplateComponent implements OnInit {

  @Input() suspectId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
