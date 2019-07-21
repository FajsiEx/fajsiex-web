import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WanillaService {
  constructor() { }

  async getTimeline() {
    let response = await fetch('https://wanilla.eu-gb.mybluemix.net/api/timeline');
    //let response = await fetch('http://localhost:3211/api/timeline');
    return await response.json();
  }
}
