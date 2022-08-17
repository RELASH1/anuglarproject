import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component.component';


const routes: Routes = [
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

