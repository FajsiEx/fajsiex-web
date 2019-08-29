import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { VersionService } from 'src/app/version.service';

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

  webVersion: string;
  label: string;

  constructor(private router: Router, private renderer: Renderer2, private version: VersionService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);

        this.currentPage = event.url.split('/')[1];
      }
    });

    this.renderer.listen('window', 'scroll', () => { this.scrollHandler(); });

    this.webVersion = this.version.getWebVersion();

    if (this.webVersion === 'beta' || this.webVersion === 'local') {
      this.label = this.webVersion;
    }
  }

  scrollHandler() {
    if (this.navHovering) { this.setNavBackOpacity(true); return; }

    const pageContentElement: HTMLElement = document.querySelector('.page-content');
    const scrollHeightOffset = (document.documentElement.scrollTop || document.body.scrollTop) - pageContentElement.offsetTop;

    if (scrollHeightOffset > 0) {
      this.headerBackOpacity = 1;
    } else {
      this.headerBackOpacity = 0;
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
