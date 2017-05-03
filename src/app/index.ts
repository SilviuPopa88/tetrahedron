import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CarouselModule} from 'ngx-bootstrap';
import {routing} from './routes';

import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {AboutComponent} from './about/about';
import {HomeComponent} from './home/home';
import {FooterComponent} from './footer/footer';

import { Router } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    routing,
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
