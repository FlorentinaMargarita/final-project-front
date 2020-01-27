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
import { ResultComponent } from './result/result.component';
import { ApiService } from './api.service';
import { FacvouriteComponent } from './facvourite/facvourite.component';
import { UserService } from './user.service';
import { RegisterComponent } from './register/register.component';
import { MovieService } from './movie.service';
import {AuthguardService } from './authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ResultComponent,
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
  providers: [ApiService, UserService, AuthguardService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
