import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CarouselModule} from 'ngx-bootstrap';
import {routing} from './routes';

import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {HomeComponent} from './home/home';
import {AboutComponent} from './about/about';
import {CollaborationComponent} from './collaboration/collaboration';
import {BlogComponent} from './blog/blog';
import {ContactComponent} from './contact/contact';
import {FooterComponent} from './footer/footer';

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
    HomeComponent,
    AboutComponent,
    CollaborationComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
