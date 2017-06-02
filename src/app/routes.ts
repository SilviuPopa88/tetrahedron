import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main';
import {AboutComponent} from './about/about';
import {CollaborationComponent} from './collaboration/collaboration';
import {BlogComponent} from './blog/blog';
import {ArticleOneComponent} from './blog/article-one/articleOne';
import {ContactComponent} from './contact/contact';
import {HomeComponent} from './home/home';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'collaboration',
    component: CollaborationComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog/robina',
    component: ArticleOneComponent
  }
];

export const routing = RouterModule.forRoot(routes);
