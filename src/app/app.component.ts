import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fajsiex-web';
  currentPage = '';
  pageHeaderTransition = false;

  pages = {
    home: {
      title: 'Home',
      themeGradient: 'linear-gradient(to bottom right, #215aed, #4b36ed, #692be5)',
      themeColor: '#4b36ed'
    },
    '': {
      title: 'News & Changelog',
      themeGradient: 'linear-gradient(to bottom right, #07f, #038)',
      themeColor: '#06a'
    },
    news: {
      title: 'News & Changelog',
      themeGradient: 'linear-gradient(to bottom right, #07f, #038)',
      themeColor: '#06a'
    },
    projects: {
      title: 'Projects',
      themeGradient: 'linear-gradient(to bottom right, #1a0, #060)',
      themeColor: '#0a6'
    },
    status: {
      title: 'Status',
      themeGradient: 'linear-gradient(to bottom right, #a0a, #70a)',
      themeColor: '#a0a'
    },
    about: {
      title: 'About',
      themeGradient: 'linear-gradient(to bottom right, #f80, #a60)',
      themeColor: '#a60'
    },
  };

  constructor(private router: Router, private renderer: Renderer2, private titleService: Title) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
        this.currentPage = event.url.slice(1);
        this.titleService.setTitle('FajsiEx | ' + this.pages[this.currentPage].title);
      }
    });
  }
}
