import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styleUrls: ['./suspects.component.css']
})
export class SuspectsComponent implements OnInit {

  suspects: any[] = [{"id": "1", "name": "Evelyn Kittridge", "occupation": "actress", "photo": "./assets/img/suspects/evelyn.JPG"},
                     {"id": "2", "name": "Hector Roland", "occupation": "actor", "photo": "./assets/img/suspects/roland.jpg"},
                     {"id": "3", "name": "Ira Adler", "occupation": "director", "photo": "./assets/img/suspects/ira.jpg"}, 
                     {"id": "4", "name": "Suspect 4", "occupation": "template"},
                     {"id": "5", "name": "Suspect 5", "occupation": "template"},
                    ]
  currentItem = 'Television';
  constructor() { }

  ngOnInit(): void {
  }

}
