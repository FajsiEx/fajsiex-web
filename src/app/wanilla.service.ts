import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WanillaService {
  constructor() { }

  API_URL = 'http://localhost:3211/api/'; // localhost testing url
  //API_URL = 'https://wanilla.eu-gb.mybluemix.net/api/';

  async getTimeline(project, type) {
    if (!project) { project = 'all'; }

    const response = await fetch(this.API_URL + 'timeline/' + project);
    return await response.json();
  }

  async getProjectBuildNumbers(project) {
    if (!project) { project = 'all'; }

    const response = await fetch(this.API_URL + 'build_numbers/' + project);
    return await response.json();
  }
}
