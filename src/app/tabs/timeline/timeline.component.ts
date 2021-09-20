import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  events = [
    {
      id: 0,
      title: 'My last travel',
      content: 'There are so much countries in the world...',
      date: '2016 - 2019',
      icon: 'https://image.flaticon.com/icons/svg/214/214335.svg'
    },
    {
      id: 1,
      title: 'My Job',
      content: 'The best job I could possibly get!',
      date: '2015 - 2016',
      icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg'
    },
    {
      id: 2,
      title: 'My Education',
      content: 'This is the university I went...',
      date: '2011',
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
