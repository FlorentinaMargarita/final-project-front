import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ResoComponent } from './reso/reso.component'
import { ApiService } from './api.service';
import { FacvouriteComponent } from './facvourite/facvourite.component';
import { UserService } from './user.service';
import { UsernameService } from './username.service';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ResoComponent,
    FacvouriteComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ApiService, UserService, UsernameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
