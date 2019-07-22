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

  filter:any = false; // Filter for the posts

  constructor(public wanilla: WanillaService) { }

  ngOnInit() {
    this.fetchTimeline();
  }

  async switchFilter(_filter) {
    console.log(_filter);
    if (!this.events) {return false;}

    this.filter = _filter;
    this.events = false;
    await this.fetchTimeline();
  }

  async fetchTimeline() {
    console.log(this.filter);
    try {
      this.events = await this.wanilla.getTimeline(this.filter);
    } catch (e) {
      this.fetchError = true;
      console.error(e);
    }
  }
}
