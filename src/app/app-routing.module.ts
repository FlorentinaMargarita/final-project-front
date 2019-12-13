import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ResoComponent } from './reso/reso.component';
import { LoginComponent } from './login/login.component';
import { FacvouriteComponent } from './facvourite/facvourite.component';
import { RegisterComponent } from './register/register.component';

 const routes: Routes = [
  { path: 'reso', component: ResoComponent},
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'logIn', component: LoginComponent},
  { path: 'facvourite', component: FacvouriteComponent}
];

//export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }

