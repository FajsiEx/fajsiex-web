import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

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
      themeGradient: 'linear-gradient(to bottom right, #215aed, #4b36ed, #692be5)'
    },
    '': {
      title: 'News & Changelog',
      themeGradient: 'linear-gradient(to bottom right, #07f, #038)'
    },
    news: {
      title: 'News & Changelog',
      themeGradient: 'linear-gradient(to bottom right, #07f, #038)'
    },
    projects: {
      title: 'Projects',
      themeGradient: 'linear-gradient(to bottom right, #1a0, #060)'
    },
    about: {
      title: 'About',
      themeGradient: 'linear-gradient(to bottom right, #f80, #a60)'
    },
  };

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);

        this.pageHeaderTransition = true;
        setTimeout(()=>{this.pageHeaderTransition = false;}, 500);

        this.currentPage = event.url.slice(1);
      }
    });
  }
}
