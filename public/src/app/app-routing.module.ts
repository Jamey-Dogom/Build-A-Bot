import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path : '', component: LandingComponent,
  children: [
    { path: 'login',component: LoginComponent },
    { path: '', component : LoginComponent},
    { path: 'registration',component: RegistrationComponent }
  ] },
  { path : 'home/:id', component: HomeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
