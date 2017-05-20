import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'tetra-header',
  template: require('./header.html')
})
export class HeaderComponent implements OnInit {
  public isScrolledTop:boolean = true;

  constructor(@Inject(DOCUMENT) private document:Document) { }

  ngOnInit(){}

  @HostListener('window:scroll', [])
  onWindowScroll()
  {
    let number = this.document.body.scrollTop;
    if (number > 100) {
      this.isScrolledTop = false;
    } else if (!this.isScrolledTop && number < 10) {
      this.isScrolledTop = true;
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
