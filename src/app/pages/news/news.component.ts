import { Component, OnInit } from '@angular/core';
import { WanillaService } from 'src/app/wanilla.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  events: any;
  fetchError = false;

  constructor(public wanilla: WanillaService) { }

  ngOnInit() {
    this.fetchTimeline();
  }

  async fetchTimeline() {
    try {
      this.events = await this.wanilla.getTimeline()
    } catch (e) {
      this.fetchError = true;
      console.error(e);
    }
  }
}
