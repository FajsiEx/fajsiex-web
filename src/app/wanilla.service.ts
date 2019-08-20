import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WanillaService {
  constructor() { }
  
  API_URL = (localStorage.getItem('useLocalWanillaApi') === 'yes') ?
    'http://localhost:3211/api/' :
    'https://wanilla.eu-gb.mybluemix.net/api/';

  TEABOT_API_URL = (localStorage.getItem('useLocalTeaBotApi') === 'yes') ?
    'http://localhost:3210/api/' :
    'https://tea-bot.eu-gb.mybluemix.net/api/';

  async getTimeline(project, type) {
    if (!project) { project = 'all'; }
    if (!type) { type = 'all'; }

    const response = await fetch(`${this.API_URL}timeline/${project}/${type}`);
    return await response.json();
  }

  async getProjectBuildNumbers(project) {
    if (!project) { project = 'all'; }

    const response = await fetch(this.API_URL + 'build_numbers/' + project);
    return await response.json();
  }

  async getCommands() {
    const response = await fetch(this.TEABOT_API_URL + 'commands/');
    return await response.json();
  }
}
