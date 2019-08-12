import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
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
      themeColor: '#09f'
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

  constructor(private router: Router, private renderer: Renderer2, private titleService: Title, private themeService: ThemeService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
        this.currentPage = event.url.slice(1);
        this.titleService.setTitle('FajsiEx | ' + this.pages[this.currentPage].title);
      }
    });

    this.changeDarknessBasedOnTime(new Date());
    setInterval(()=>{
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
      }else{
        const darknessMp = (dayMinutes - 19 * 60) / (3 * 60);
        this.themeService.setDarkness(darknessMp);
      }
    }
  }
}
