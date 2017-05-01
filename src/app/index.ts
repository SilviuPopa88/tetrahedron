import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TabsModule, ButtonsModule, CarouselModule} from 'ngx-bootstrap';
import {routing, RootComponent} from './routes';

import {MainComponent} from './main';
import {HeaderComponent} from './header/header';
import {CentralComponent} from './central';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    routing,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    CentralComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
