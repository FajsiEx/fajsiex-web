import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPage: string;

  constructor(private router: Router) {
    this.router.events.subscribe(event=> {
      if (event instanceof NavigationStart) {
        console.log(event);

        this.currentPage = event.url.slice(1);
      }
    });
  }

  ngOnInit() {
  }

}
