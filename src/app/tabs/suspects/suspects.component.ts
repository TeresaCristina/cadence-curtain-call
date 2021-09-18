import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styleUrls: ['./suspects.component.css']
})
export class SuspectsComponent implements OnInit {

  suspects: any[] = [{"id": "1", "name": "Evelyn Kittridge", "occupation": "actress"},
                     {"id": "2", "name": "Suspect 2", "occupation": "template"},
                     {"id": "3", "name": "Suspect 3", "occupation": "template"},
                     {"id": "4", "name": "Suspect 4", "occupation": "template"},
                     {"id": "5", "name": "Suspect 5", "occupation": "template"},
                    ]

  constructor() { }

  ngOnInit(): void {
  }

}
