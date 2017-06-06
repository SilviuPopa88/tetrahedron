import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'tetra-header',
  template: require('./header.html')
})
export class HeaderComponent {
  public isScrolledTop: boolean = true;
  public activeButton: string = '';

  constructor(private localStorageService: LocalStorageService) {
    let results: Array<String> = document.location.href.split('#');
    let linkParam: string = null;
    if (results[1]) {
      linkParam = results[1].split('/')[1];
    }
    let localActiveButton: string = localStorageService.get('activeButton') ? localStorageService.get('activeButton').toString() : linkParam ? linkParam : 'home';
    this.activeButton = document.location.href.indexOf(localActiveButton) !== -1 ? localActiveButton : 'home';
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
    this.localStorageService.set('activeButton', activeButton);
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
