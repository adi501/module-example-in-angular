import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{AdminModule} from './admin/admin.module';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AdminModule
   ],
   exports: [],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
