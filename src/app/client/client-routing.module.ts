import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [{
  path: 'client', component: ClientComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent }],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
