import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tetra-blog',
  template: require('./blog.html')
})
export class BlogComponent {

  constructor(private router: Router) {

  }

  gotoDetail(): void {
    this.router.navigate(['/blog/robina']);
  }
}
