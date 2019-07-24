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

  filter: any = false; // Filter for the posts

  constructor(public wanilla: WanillaService) { }

  ngOnInit() {
    this.fetchTimeline();
  }

  async switchFilter(_filter) {
    if (this.filter == _filter) { return false; }
    if (!this.events) { return false; }

    this.filter = _filter;
    this.events = false;
    await this.fetchTimeline();
  }

  async fetchTimeline() {
    console.log(this.filter);
    try {
      this.events = this.formatTimeline(await this.wanilla.getTimeline(this.filter));
    } catch (e) {
      this.fetchError = true;
      console.error(e);
    }
  }

  formatTimeline(timeline) { // Does some final formatting before timeline is displayed
    console.log("ds")
    timeline = this.formatTimestamps(timeline);
    console.log("huhuh", timeline);
    return timeline;
  }

  formatTimestamps(timeline) {
    console.log("tstst", timeline)

    for (const event of timeline) {
      if (event.type != "issue") { continue; }

      event.entries = event.entries.sort((x, y) => { return y.time - x.time });

      for (const entry of event.entries) {
        const entryDate = new Date(entry.time);

        let [hours, minutes]: any[] = [
          entryDate.getHours(),
          entryDate.getMinutes()
        ];

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;

        entry.time = entryDate.toLocaleDateString() + ` ${hours}:${minutes}`;
      }

      console.log("smth", event.entries, timeline);
    }

    return timeline;
  }
}
