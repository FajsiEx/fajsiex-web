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

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);

        this.currentPage = event.url.slice(1);
      }
    });

    this.renderer.listen('window', 'scroll', () => { this.scrollHandler(); });
  }

  scrollHandler() {
    if (this.navHovering) { this.setNavBackOpacity(true); return; }

    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollHeight > 150) {
      this.headerBackOpacity = 1;
    } else {
      this.headerBackOpacity = scrollHeight / 150;
    }

    console.log(this.headerBackOpacity);
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
