import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fajsiex-web';

  currentPageName: string;
  currentPage: any;

  currentSubPageName: string;
  currentSubPage: any;

  currentTitle = 'Page not found';
  currentThemeColor = '#223';

  pageHeaderTransition = false;

  pages = {
    home: {
      title: 'Home',
      themeGradient: 'linear-gradient(to bottom right, #215aed, #4b36ed, #692be5)',
      themeColor: '#4b36ed',
      iconKey: 'news'
    },
    '': {
      title: 'News & Changelog',
      themeColor: '#09f',
      iconKey: 'news'
    },
    news: {
      title: 'News & Changelog',
      themeColor: '#09f',
      iconKey: 'news'
    },
    projects: {
      title: 'Projects',
      themeColor: '#0c8',
      iconKey: 'projects',
      subPages: {
        'teabotre': {
          title: 'Tea-bot Re:Write',
          themeColor: '#0c8',
        }
      }
    },
    status: {
      title: 'Status',
      themeColor: '#c0c',
      iconKey: 'status'
    },
    about: {
      title: 'About',
      themeColor: '#c80',
      iconKey: 'about'
    },
  };

  constructor(private router: Router, private renderer: Renderer2, private titleService: Title, private themeService: ThemeService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
        this.currentPageName = event.url.split('/')[1];
        this.currentSubPageName = event.url.split('/')[2];

        this.currentPage = this.pages[this.currentPageName];

        document.getElementById('favicon-meta').setAttribute('href', `/assets/images/logo/${this.currentPage.iconKey}.png`);

        if (this.currentPage.subPages) {
          if (this.currentPage.subPages[this.currentSubPageName]) {
            this.currentSubPage = this.currentPage.subPages[this.currentSubPageName];
          } else {
            this.currentSubPage = false;
          }
        } else {
          this.currentSubPage = false;
        }

        if (this.currentSubPage) {
          this.titleService.setTitle('FajsiEx | ' + this.currentSubPage.title);
        } else {
          this.titleService.setTitle('FajsiEx | ' + this.currentPage.title);
          this.currentSubPage = false;
        }

        this.currentTitle = this.currentSubPage.title || this.currentPage.title || 'Page Not Found';
        this.currentThemeColor = this.currentSubPage.themeColor || this.currentPage.themeColor || '#333';
      }

      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.changeDarknessBasedOnTime(new Date());
    setInterval(() => {
      this.changeDarknessBasedOnTime(new Date());
    }, 60 * 1000);
  }

  changeDarknessBasedOnTime(date: Date) {
    /* 
      0,1,2,3,4,5 DARK
      6,7,8 TRANS
      9,10,11,12,13,14,15,16,17,18 LIGHT
      19,20,21 TRANS
      22,23 DARK
    */




    const hours = date.getHours();
    const minutes = date.getMinutes();

    const dayMinutes = hours * 60 + minutes;

    console.log(dayMinutes);

    if (dayMinutes < 6 * 60) { this.themeService.setDarkness(1); return; } // 0,1,2,3,4,5:59
    if (dayMinutes >= 22 * 60) { this.themeService.setDarkness(1); return; } // 22:00,23

    // 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 remain

    if (dayMinutes >= 9 * 60 && dayMinutes < 19 * 60) { // 9:00 - 18:59
      this.themeService.setDarkness(0);
      return;
    } else {
      if (dayMinutes < 9 * 60) {
        const darknessMp = 1 - ((dayMinutes - 6 * 60) / (3 * 60));
        this.themeService.setDarkness(darknessMp);
      } else {
        const darknessMp = (dayMinutes - 19 * 60) / (3 * 60);
        this.themeService.setDarkness(darknessMp);
      }
    }
  }
}
