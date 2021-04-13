import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsListComponent, ProductsEditComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
