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
      themeColor: '#09f'
    },
    news: {
      title: 'News & Changelog',
      themeColor: '#08c'
    },
    projects: {
      title: 'Projects',
      themeColor: '#0c8'
    },
    status: {
      title: 'Status',
      themeColor: '#c0c'
    },
    about: {
      title: 'About',
      themeColor: '#c80'
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
