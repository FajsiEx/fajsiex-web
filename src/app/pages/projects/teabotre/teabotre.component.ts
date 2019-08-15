import { Component, OnInit } from '@angular/core';
import { WanillaService } from 'src/app/wanilla.service';

@Component({
  selector: 'app-teabotre',
  templateUrl: './teabotre.component.html',
  styleUrls: ['./teabotre.component.scss']
})
export class TeabotreComponent implements OnInit {
  commands: any;
  qrs = {plain: [], random: [], file: [], insertable: []};

  constructor(private wanilla: WanillaService) { }

  ngOnInit() {
    this.fetchCommands();
  }

  async fetchCommands() {
    const data = await this.wanilla.getCommands();

    console.log(data);

    this.commands = data.data.commands;

    for (const type of Object.keys(this.qrs)) {
      this.qrs[type] = data.data.qrs.filter((qr)=> {
        return qr.type === type;
      });
    }

    console.log(this.qrs);
  }

}
