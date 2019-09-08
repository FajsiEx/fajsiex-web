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
  fetchError = false;

  constructor(private wanilla: WanillaService) { }

  ngOnInit() {
    this.fetchCommands();
  }

  async fetchCommands() {
    let data;
    
    try {
      data = await this.wanilla.getCommands();
    } catch (e) {
      this.fetchError = true;
    }

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
