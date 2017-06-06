import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ButtonsModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './routes';
import {BlogModule} from './blog';
import { LocalStorageModule } from 'angular-2-local-storage';

import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {HomeComponent} from './home/home';
import {AboutComponent} from './about/about';
import {CollaborationComponent} from './collaboration/collaboration';
import {ContactComponent} from './contact/contact';
import {FooterComponent} from './footer/footer';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BlogModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'tetra',
      storageType: 'localStorage'
    })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CollaborationComponent,
    ContactComponent,
    FooterComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
