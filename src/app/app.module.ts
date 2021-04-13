import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
