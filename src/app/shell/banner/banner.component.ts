import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/version.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  displayBanner =  !(sessionStorage.getItem('displayBanner') === 'dont');

  constructor(private version: VersionService) {
    if (version.getWebVersion() !== 'beta') {
      this.displayBanner = false;
    }
  }

  ngOnInit() {
  }

  dismissBanner() {
    this.displayBanner = false;
    sessionStorage.setItem('displayBanner', 'dont');
  }

}
