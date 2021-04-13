import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenuListComponent, MenuEditComponent, MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
