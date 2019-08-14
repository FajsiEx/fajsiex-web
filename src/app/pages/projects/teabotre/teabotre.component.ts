import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teabotre',
  templateUrl: './teabotre.component.html',
  styleUrls: ['./teabotre.component.scss']
})
export class TeabotreComponent implements OnInit {
  commands = [
    {
      commandCategory: "Moderation commands",
      commands: [
        ''
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
