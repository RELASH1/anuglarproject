import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component.component';


const routes: Routes = [
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  { path: '**', component: ClientComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

