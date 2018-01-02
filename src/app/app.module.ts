import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LightControllerService } from './light-controller.service';

import { AppComponent } from './app.component';
import { StripControllerComponent } from './strip-controller/strip-controller.component';
import { StripListComponent } from './strip-list/strip-list.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StripControllerComponent,
    StripListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ LightControllerService ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
