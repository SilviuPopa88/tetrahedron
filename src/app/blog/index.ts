import {NgModule} from '@angular/core';


import {ArticleOneComponent} from './article-one/articleOne';
import {BlogComponent} from './blog';

@NgModule({
  declarations: [
    ArticleOneComponent,
    BlogComponent
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule {}
