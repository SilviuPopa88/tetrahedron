import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tetra-blog',
  template: require('./blog.html')
})
export class BlogComponent {

  constructor(private router: Router) {

  }

  gotoDetail(param : string): void {
    this.router.navigate(['/blog/' + param]);
  }
}
