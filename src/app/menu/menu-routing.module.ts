import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {path: '',
      component: MenuListComponent
    },
    {
      path: 'profile',
      component: MenuEditComponent
    },
    {
      path: 'profile/:id',
      component:MenuEditComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
