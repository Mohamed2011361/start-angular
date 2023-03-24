import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfillioComponent } from './component/portfillio/portfillio.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StartAngularComponent } from './component/start-angular/start-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfillioComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    StartAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
