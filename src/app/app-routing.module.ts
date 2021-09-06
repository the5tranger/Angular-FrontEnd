import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component'; 
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'user',
  component: UserComponent
},
{
    path: 'admin',
    component: AdminComponent
},
{
    path: 'auth/login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegistrationComponent
},
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
