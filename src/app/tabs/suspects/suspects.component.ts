import { Component, OnInit } from '@angular/core';
import { FetchService } from 'services/fetch/fetch.service';

@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styleUrls: ['./suspects.component.css']
})
export class SuspectsComponent implements OnInit {

  suspects: Array<any> = [];
  numbSuspects: any;

  constructor(private fetch: FetchService) {
    this.fetch.getAllSuspects().subscribe(
      data => {
        this.numbSuspects = data.suspects.length;  // quantity of suspects
        for (let i = 0; i < this.numbSuspects; i++) {
          this.suspects.push(data.suspects[i]._id)
        }
      })
  }

  ngOnInit(): void {
  }

}
