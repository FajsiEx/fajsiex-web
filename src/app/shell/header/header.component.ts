import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPage: string;
  headerBackOpacity = 0;
  navHovering = false;

  showMenuMobile = false;

  displaySecondaryLinks = false;

  label = "";

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);

        this.currentPage = event.url.split('/')[1];
      }
    });

    this.renderer.listen('window', 'scroll', () => { this.scrollHandler(); });

    const url = window.location.href;

    if (url.indexOf('https://beta') === 0 || url.indexOf('http://beta') === 0) { this.label = 'beta'; }
    if (url.indexOf('https://localhost') === 0 || url.indexOf('http://localhost') === 0) { this.label = 'local'; }
  }

  scrollHandler() {
    if (this.navHovering) { this.setNavBackOpacity(true); return; }

    const scrollHeightOffset = (document.documentElement.scrollTop || document.body.scrollTop) - 380;

    if (scrollHeightOffset > 60) {
      this.headerBackOpacity = 1;
    } else {
      this.headerBackOpacity = scrollHeightOffset / 60;
    }
  }

  setNavBackOpacity(opaque) {
    if (opaque) {
      this.headerBackOpacity = 1;
      this.navHovering = true;
    } else {
      this.headerBackOpacity = 0;
      this.navHovering = false;
      this.scrollHandler();
    }
  }

  switchSecondaryLinksDisplay() {
    console.log(this.displaySecondaryLinks);
    this.displaySecondaryLinks = (this.displaySecondaryLinks) ? false : true;
    console.log(this.displaySecondaryLinks);
  }

  ngOnInit() { }
}
