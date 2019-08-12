import { Component, OnInit } from '@angular/core';
import { WanillaService } from 'src/app/wanilla.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  projectNames = {
    website: 'Website',
    wanilla: 'Wanilla',
    teabotre: 'Tea-bot Re:Write'
  };

  projects = [
    /* {
      id: 'website',
      name: 'Website',
      buildNumbers: {
        alpha: false,
        beta: '19.7.24 beta',
        stable: 'No stable builds'
      }
    } */
  ];

  events: any;
  fetchError = false;

  filter: any = false; // Filter for the posts
  typeFilter: any = false; // Filter for the type of events (all=false, news, changes, issues, ...)

  constructor(public wanilla: WanillaService, private route: ActivatedRoute) {
    if (this.route.snapshot.params.project) {
      this.filter = this.route.snapshot.params.project;
    }
    if (this.route.snapshot.params.type) {
      this.typeFilter = this.route.snapshot.params.type;
    }
  }

  async ngOnInit() {
    await this.fetchProjects();
    this.fetchTimeline();
  }

  async fetchProjects() {
    let projectBuildNumbers;

    try {
      projectBuildNumbers = await this.wanilla.getProjectBuildNumbers('all');
    } catch (e) {
      this.fetchError = true;
      console.error(e);
    }

    for (const project of projectBuildNumbers) {
      this.projects.push({
        id: project.id,
        name: this.projectNames[project.id],
        buildNumbers: {
          alpha: project.alpha,
          beta: project.beta,
          stable: (project.stable) ? project.stable : 'No stable version',
        }
      });
    }

    console.log(projectBuildNumbers);
  }

  async switchFilter(_filter) {
    if (this.filter == _filter) { return false; }
    if (!this.events) { return false; }

    this.filter = _filter;
    this.events = false;
    await this.fetchTimeline();
  }

  async switchTypeFilter(_filter) {
    if (this.typeFilter == _filter) { return false; }
    if (!this.events) { return false; }

    this.typeFilter = _filter;
    this.events = false;
    await this.fetchTimeline();
  }

  async fetchTimeline() {
    console.log(this.filter);
    try {
      this.events = this.formatTimeline(await this.wanilla.getTimeline(this.filter, this.typeFilter));
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
