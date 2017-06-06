import {Component} from '@angular/core';
import {MainComponent} from './main';
import {AboutComponent} from './about/about';
import {CollaborationComponent} from './collaboration/collaboration';
import {BlogComponent} from './blog/blog';
import {ArticleOneComponent} from './blog/article-one/articleOne';
import {ContactComponent} from './contact/contact';
import {HomeComponent} from './home/home';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';



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
    path: 'blog/invataturi-buddha-robina-courtin',
    component: ArticleOneComponent,
    data: {
      title: 'Fragmente din învățăturile lui Buddha cu Ven Robina Courtin',
      metaDescription: 'Săptămâna aceasta am avut ocazia să o ascult live pe Venerabila Calugariță Budistă - Robina Courtin, ' +
      'prezentă pentru prima dată în Romania.Au fost câteva ore energizante și revelatoare pentru mine, cu discuții concentrând aspectelepractice din filosofia budistă ' +
      'pe care să le considerăm dacă vrem să trăim o viață împlinită, fără suferință.',
      metaImage: '/assets/images/Robina.jpg'
    }
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ){
    //Boilerplate code to filter out only important router events and to pull out data object field from each route
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      //Data fields are merged so we can use them directly to take title and metaDescription for each route from them
      .mergeMap(route => route.data)
      //Real action starts there
      .subscribe((event) => {
        //Changing title
        this.titleService.setTitle(event['title']);

        //Changing meta with name="description"
        let tag = { name: 'description', content: event['metaDescription'] };
        let attributeSelector : string = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
        let tag1 = { property: 'og:title', content: event['title'] };

        attributeSelector = 'property="og:title"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag1, false);
        tag1 = { property: 'og:image', content: event['metaImage'] };
        attributeSelector = 'property="og:image"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag1, false);
        tag1 = { property: 'og:url', content: document.location.href };
        attributeSelector = 'property="og:url"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag1, false);
      });
  }

}
