import { Component } from '@angular/core';

@Component({
  selector: 'tetra-header',
  template: require('./header.html')
})
export class HeaderComponent {
  public isScrolledTop: boolean = true;
  public activeButton: string = '';

  constructor() {
    let result = document.location.pathname.split("/");
    this.activeButton = result[1] === '' ? 'home' : result[1];
    if (this.activeButton !== 'home') {
      this.isScrolledTop = false;
    }
  }

  scrollHandler(event) {
    let number = event.target.body.scrollTop;
    if (number > 100) {
      this.isScrolledTop = false;
    } else if (!this.isScrolledTop && number < 10 && this.activeButton === 'home') {
      this.isScrolledTop = true;
    }
  }

  setActiveHeader(activeButton: string) {
    this.activeButton = activeButton;
    if (activeButton === 'home') {
      this.isScrolledTop = true;
    } else {
      this.isScrolledTop = false;
    }
  }

  getLogoName() {
    if (this.isScrolledTop) {
      return '/assets/images/Logo_Tetra_Alb.png';
    } else {
      return '/assets/images/Logo_Tetra_Color.png';
    }
  }
}
