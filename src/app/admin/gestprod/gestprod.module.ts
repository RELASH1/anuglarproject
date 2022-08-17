import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponentComponent } from './product-add-component/product-add-component.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestprodComponent,
    ProductAddComponentComponent
  ],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule
  ],

  
  exports: [
    GestprodComponent,
    ProductAddComponentComponent
  ]
})
export class GestprodModule {}

