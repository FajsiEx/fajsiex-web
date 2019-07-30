import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  displayBanner =  !(sessionStorage.getItem('displayBanner') === 'dont');

  constructor() { }

  ngOnInit() {
  }

  dismissBanner() {
    this.displayBanner = false;
    sessionStorage.setItem('displayBanner', 'dont');
  }

}
