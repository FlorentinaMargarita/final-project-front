import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { FacvouriteComponent } from './facvourite/facvourite.component';
import { RegisterComponent } from './register/register.component';
import {AuthguardService as AuthGuard } from './authguard.service';

 const routes: Routes = [
  { path: 'result', component: ResultComponent,  canActivate: [AuthGuard] },
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'logIn', component: LoginComponent},
  { path: 'facvourite', component: FacvouriteComponent,  canActivate: [AuthGuard] }
];

//export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }

