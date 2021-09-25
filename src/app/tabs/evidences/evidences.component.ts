import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evidences',
  templateUrl: './evidences.component.html',
  styleUrls: ['./evidences.component.css']
})
export class EvidencesComponent implements OnInit {

  boxes = ["Box 1", "Box 2"]
  constructor() { }

  ngOnInit(): void {
  }

}
