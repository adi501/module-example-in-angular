import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import {DashboardComponent} from './dashboard/dashboard.component'
import {HomeComponent} from './home/home.component'
import {UserComponent} from './user/user.component'

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    UserComponent
 ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    HomeComponent
  ]
})
export class AdminModule { }
