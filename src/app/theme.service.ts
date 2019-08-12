import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor( @Inject(DOCUMENT) private document) {

  }

  setDarkness(amount: number) {
    console.log('Darkness changed to ' + amount.toString());
    document.documentElement.style.setProperty('--global-darkness', amount.toString());
  }
}
