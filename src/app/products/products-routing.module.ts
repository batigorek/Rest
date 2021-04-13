import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {path: '',
      component: ProductsListComponent
    },
    {
      path: 'profile',
      component: ProductsEditComponent
    },
    {
      path: 'profile/:id',
      component:ProductsEditComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
