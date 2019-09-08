import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor() { }

  getWebVersion() {
    const url = window.location.href;

    if (url.indexOf('https://localhost') === 0 || url.indexOf('http://localhost') === 0) { return 'local'; }
    else if (url.indexOf('https://beta') === 0 || url.indexOf('http://beta') === 0) { return 'beta'; }
    else if (url.indexOf('https://fajsiex.ml') === 0 || url.indexOf('https://fajsiex.ml') === 0) { return 'stable'; }
    else { return null; }
  }
}
