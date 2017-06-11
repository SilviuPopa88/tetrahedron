import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header';

@Component({
  selector: 'tetra-home',
  template: require('./home.html')
})
export class HomeComponent {

  private header: HeaderComponent;

  constructor(private router: Router) {

  }

  gotToAbout() {
    //this.header.setActiveHeader("about");
    this.router.navigate(['/about']);
  }
}
