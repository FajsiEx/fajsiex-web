import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WanillaService {
  constructor() { }

  async getTimeline(project) {
    if (!project) {project = 'all';}

    //let response = await fetch('https://wanilla.eu-gb.mybluemix.net/api/timeline/all');
    let response = await fetch('http://localhost:3211/api/timeline/' + project);
    return await response.json();
  }
}
