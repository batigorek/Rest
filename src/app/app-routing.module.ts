import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: 'admin/:id',
    component: AdminComponent
  },
  {
    path: 'menu',
    loadChildren: () =>
    import('./menu/menu.module').then((m) => m.MenuModule)
  },
  {
    path: 'products',
    loadChildren: () =>
    import('./products/products.module').then((m) => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
