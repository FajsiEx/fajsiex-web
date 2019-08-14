import { Component, OnInit } from '@angular/core';
import { WanillaService } from 'src/app/wanilla.service';

@Component({
  selector: 'app-teabotre',
  templateUrl: './teabotre.component.html',
  styleUrls: ['./teabotre.component.scss']
})
export class TeabotreComponent implements OnInit {
  commands = [];
  qrs = [];

  constructor(private wanilla: WanillaService) { }

  ngOnInit() {
    this.fetchCommands();
  }

  async fetchCommands() {
    const data = await this.wanilla.getCommands();

    console.log(data);

    this.commands = data.data.commands;
    this.qrs = data.data.qrs;
  }

}
