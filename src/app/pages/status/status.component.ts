import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  servers = [
    {
      name: 'Wanilla',
      status: 'All systems running.'
    },
    {
      name: 'Tea-bot Re:Write',
      status: 'All systems running.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
