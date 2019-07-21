import { Component, OnInit } from '@angular/core';
import { WanillaService } from 'src/app/wanilla.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  events:any;

  constructor(public wanilla: WanillaService) { }

  ngOnInit() {
    this.wanilla.getTimeline().then((timelineData)=>{
      this.events = timelineData;
    });
  }

}
