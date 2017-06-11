import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'tetra-header',
  template: require('./header.html')
})
export class HeaderComponent {
  public isScrolledTop: boolean = true;
  public activeButton: string = '';
  private routerObservable: any;

  constructor(private localStorageService: LocalStorageService, private router: Router) {
    //let results: Array<String> = document.location.href.split('#');
    //this.setScrollAfterInit(results[1]);
  }

  ngOnInit() {
    this.routerObservable = this.router.events.subscribe((event: any) => {

      this.setScrollAfterInit(event.url);
    });
  }

  ngOnDestroy() {
    if(this.routerObservable != null) {
      this.routerObservable.unsubscribe();
    }
  }

  setScrollAfterInit(url) {
    let linkParam: string = null;
    if (url) {
      linkParam = url.split('/')[1];
    }
    let localActiveButton: string = linkParam ? linkParam : this.localStorageService.get('activeButton') ? this.localStorageService.get('activeButton').toString() : 'home';
    this.activeButton = document.location.href.indexOf(localActiveButton) !== -1 ? localActiveButton : 'home';
    this.isScrolledTop = this.activeButton === 'home' ? true : false;
  }

  scrollHandler(event: any) {
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
