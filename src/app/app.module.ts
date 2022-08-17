import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './client/home/home.module';
import { PageNotFoundComponentComponent } from './page-not-found-component.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({

  declarations: [
    AppComponent,
    PageNotFoundComponentComponent

  ],
  imports: [
    BrowserModule,
    ClientModule,
    AdminModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  exports: [

    PageNotFoundComponentComponent

  ]
})
export class AppModule { }
